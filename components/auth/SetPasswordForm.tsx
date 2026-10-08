"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, AlertCircle, CheckCircle2 } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { migrateLocalDataToAccount } from "@/lib/localMigration";
import {
  AuthShell,
  authButtonCls,
  authErrorCls,
  authFieldCls,
  authIconCls,
  authInputCls,
  authLabelCls,
} from "@/components/auth/AuthForm";

interface SetPasswordFormProps {
  /** "confirm" = just verified email on sign-up; "reset" = arrived from a forgot-password email. */
  mode?: "confirm" | "reset";
}

export function SetPasswordForm({ mode = "confirm" }: SetPasswordFormProps) {
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
        router.replace(mode === "reset" ? "/forgot-password" : "/login");
        return;
      }
      setChecking(false);
    });
  }, [router, mode]);

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
        <div className="py-6 text-center text-[13.5px] auth-muted">{mode === "reset" ? "Verifying your reset link…" : "Confirming your email…"}</div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <CheckCircle2 size={26} strokeWidth={1.5} className="mb-4 auth-accent" />
      <h1 className="text-[24px] font-semibold auth-title">{mode === "reset" ? "Choose a new password" : "Email confirmed"}</h1>
      <p className="mt-1.5 text-[13.5px] auth-muted">{mode === "reset" ? "Pick a new password for your account." : "Now create a password to finish setting up your account."}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className={authLabelCls}>Password</span>
          <div className={authFieldCls}>
            <Lock size={15} strokeWidth={1.75} className={authIconCls} />
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className={authInputCls}
            />
          </div>
        </label>

        <label className="block">
          <span className={authLabelCls}>Confirm password</span>
          <div className={authFieldCls}>
            <Lock size={15} strokeWidth={1.75} className={authIconCls} />
            <input
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className={authInputCls}
            />
          </div>
        </label>

        {error && (
          <div className={authErrorCls}>
            <AlertCircle size={14} strokeWidth={1.75} className="mt-0.5 flex-shrink-0" />
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={authButtonCls}
        >
          {loading ? "Please wait…" : mode === "reset" ? "Update password" : "Set password & continue"}
          {!loading && <ArrowRight size={16} strokeWidth={2} />}
        </button>
      </form>
    </AuthShell>
  );
}
