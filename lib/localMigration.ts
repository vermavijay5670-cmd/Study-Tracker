import type { SupabaseClient } from "@supabase/supabase-js";

const OLD_LOCAL_KEY = "neet_tracker_v1";
const TABLE = "user_state";

/**
 * Called right after a successful sign-in or sign-up. If this user has no
 * cloud row yet, seed it from whatever's in this browser's localStorage
 * (their pre-auth data) — or an empty default if there's nothing there.
 * If they already have a cloud row, this does nothing (never overwrites
 * cloud data with local data).
 */
export async function migrateLocalDataToAccount(supabase: SupabaseClient) {
  try {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) return;

    const { data: existing } = await supabase.from(TABLE).select("user_id").eq("user_id", user.id).maybeSingle();
    if (existing) return; // already has cloud data — don't touch it

    let seed: unknown = null;
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(OLD_LOCAL_KEY) : null;
      if (raw) seed = JSON.parse(raw);
    } catch {
      seed = null;
    }

    await supabase.from(TABLE).insert({ user_id: user.id, state: seed ?? {} });
  } catch {
    // best-effort — if this fails, useTrackerState's own load will just create
    // an empty row on first read instead
  }
}
