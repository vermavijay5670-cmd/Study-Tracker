"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { migrateLocalDataToAccount } from "@/lib/localMigration";
import { AuthShell } from "@/components/auth/AuthForm";

export function SetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  // This page only makes sense right after the confirmation-link redirect,
  // which already leaves the person signed in. If someone lands here without
  // a session (e.g. opened the link twice, or the session expired), send
  // them back to log in instead of showing a dead-end form.
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
        return;
      }
      setChecking(false);
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setLoading(false);
      setError(updateError.message);
      return;
    }

    await migrateLocalDataToAccount(supabase);
    router.push("/today");
    router.refresh();
  }

  if (checking) {
    return (
      <AuthShell>
        <div className="py-6 text-center text-[13.5px] text-white/40">Confirming your email…</div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <CheckCircle2 size={26} strokeWidth={1.5} className="mb-4 text-[#D8B4FE]" />
      <h1 className="text-[24px] font-semibold text-[#F6F4FF]">Email confirmed</h1>
      <p className="mt-1.5 text-[13.5px] text-white/50">Now create a password to finish setting up your account.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/40">Password</span>
          <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-4 py-3 focus-within:border-[#D8B4FE]/50">
            <Lock size={15} strokeWidth={1.75} className="text-white/30" />
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/40">Confirm password</span>
          <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-4 py-3 focus-within:border-[#D8B4FE]/50">
            <Lock size={15} strokeWidth={1.75} className="text-white/30" />
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"
            />
          </div>
        </label>

        {error && (
          <div className="flex items-start gap-2 rounded-xl border border-red-400/25 bg-red-500/10 px-3.5 py-2.5 text-[12.5px] text-red-300">
            <AlertCircle size={14} strokeWidth={1.75} className="mt-0.5 flex-shrink-0" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F6F4FF] px-6 py-3.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? "Please wait…" : "Set password & continue"}
          {!loading && <ArrowRight size={16} strokeWidth={2} />}
        </button>
      </form>
    </AuthShell>
  );
}
