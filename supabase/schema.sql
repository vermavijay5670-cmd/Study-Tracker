-- Run this once in your Supabase project's SQL Editor (Dashboard → SQL Editor → New query).

-- One row per user, holding their entire app state as JSON.
create table if not exists public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Keep updated_at current on every write.
create or replace function public.touch_user_state_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_user_state_updated_at on public.user_state;
create trigger set_user_state_updated_at
  before update on public.user_state
  for each row execute function public.touch_user_state_updated_at();

-- Row Level Security: every user can only ever see or modify their OWN row.
alter table public.user_state enable row level security;

drop policy if exists "select own state" on public.user_state;
create policy "select own state"
  on public.user_state for select
  using (auth.uid() = user_id);

drop policy if exists "insert own state" on public.user_state;
create policy "insert own state"
  on public.user_state for insert
  with check (auth.uid() = user_id);

drop policy if exists "update own state" on public.user_state;
create policy "update own state"
  on public.user_state for update
  using (auth.uid() = user_id);
