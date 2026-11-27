-- Keeps a history of each account's saved data, so a bad overwrite or a deleted account can always be rolled back.
-- Safe to run more than once.

create table if not exists public.user_state_history (
  id        bigserial primary key,
  user_id   uuid        not null,          -- deliberately NOT a foreign key: history must outlive the account
  state     jsonb       not null,
  saved_at  timestamptz not null default now()
);
create index if not exists user_state_history_user_time on public.user_state_history (user_id, saved_at desc);

-- No policies on purpose: the app can't read or change history; only you (SQL editor / dashboard) can.
alter table public.user_state_history enable row level security;

create or replace function public.snapshot_user_state()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  old_days int := 0;
  new_days int := 0;
begin
  -- Deleting a row (e.g. deleting a user cascades here): always keep the last copy.
  if tg_op = 'DELETE' then
    insert into public.user_state_history (user_id, state) values (old.user_id, old.state);
    return old;
  end if;

  if jsonb_typeof(old.state->'log') = 'object' then
    select count(*) into old_days from jsonb_object_keys(old.state->'log');
  end if;
  if jsonb_typeof(new.state->'log') = 'object' then
    select count(*) into new_days from jsonb_object_keys(new.state->'log');
  end if;

  if old.state is distinct from new.state and (
       new_days < old_days                                   -- the update loses logged days: always keep the old copy
       or not exists (                                        -- otherwise at most one snapshot per hour
            select 1 from public.user_state_history h
            where h.user_id = old.user_id and h.saved_at > now() - interval '1 hour')
     ) then
    insert into public.user_state_history (user_id, state) values (old.user_id, old.state);
    delete from public.user_state_history where user_id = old.user_id and saved_at < now() - interval '90 days';
  end if;
  return new;
end;
$$;

drop trigger if exists user_state_snapshot on public.user_state;
create trigger user_state_snapshot
  before update or delete on public.user_state
  for each row execute function public.snapshot_user_state();
