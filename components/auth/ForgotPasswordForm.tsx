"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, Mail } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  AuthShell,
  authButtonCls,
  authErrorCls,
  authFieldCls,
  authIconCls,
  authInputCls,
  authLabelCls,
  authLinkCls,
} from "@/components/auth/AuthForm";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createSupabaseBrowserClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent("/auth/reset-password")}`,
    });
    setLoading(false);
    if (resetError) {
      setError(resetError.message);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <AuthShell>
        <div className="text-center">
          <Mail size={28} strokeWidth={1.5} className="mx-auto mb-4 auth-accent" />
          <h1 className="text-[22px] font-semibold auth-title">Check your inbox</h1>
          <p className="mt-2 text-[13.5px] auth-muted">
            If an account exists for <span className="auth-strong">{email}</span>, we&apos;ve sent a link to reset your
            password. Open it in this same browser.
          </p>
          <Link href="/login" className={`mt-6 inline-block text-[13px] ${authLinkCls}`}>
            Back to log in
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <h1 className="text-[24px] font-semibold auth-title">Forgot your password?</h1>
      <p className="mt-1.5 text-[13.5px] auth-muted">
        Enter the email you signed up with and we&apos;ll send you a link to choose a new password.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className={authLabelCls}>Email</span>
          <div className={authFieldCls}>
            <Mail size={15} strokeWidth={1.75} className={authIconCls} />
            <input
              type="email"
              required
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
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

        <button type="submit" disabled={loading} className={authButtonCls}>
          {loading ? "Please wait…" : "Send reset link"}
          {!loading && <ArrowRight size={16} strokeWidth={2} />}
        </button>
      </form>

      <p className="mt-6 text-center text-[13px] auth-muted">
        Remembered it?{" "}
        <Link href="/login" className={authLinkCls}>
          Log in
        </Link>
      </p>
    </AuthShell>
  );
}
