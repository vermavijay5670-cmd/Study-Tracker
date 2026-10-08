"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, AlertCircle } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { migrateLocalDataToAccount } from "@/lib/localMigration";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkEmail, setCheckEmail] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/today";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const supabase = createSupabaseBrowserClient();

    if (mode === "signup") {
      // Email + password signup: Supabase emails a confirmation link; clicking
      // it verifies the address and logs the person straight in with the
      // password they already chose here.
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent("/today")}`,
        },
      });
      setLoading(false);
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      setCheckEmail(true);
      return;
    } else {
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (signInError) {
        setError(signInError.message);
        return;
      }
      await migrateLocalDataToAccount(supabase);
      router.push(next);
      router.refresh();
    }
  }

  if (checkEmail) {
    return (
      <AuthShell>
        <div className="text-center">
          <Mail size={28} strokeWidth={1.5} className="mx-auto mb-4 text-violet-600" />
          <h1 className="text-[22px] font-semibold text-slate-900">Check your inbox</h1>
          <p className="mt-2 text-[13.5px] text-slate-500">
            We&apos;ve sent a confirmation link to <span className="text-slate-800">{email}</span>. Click it to
            confirm your email and you&apos;ll be logged straight in.
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
      <h1 className="text-[24px] font-semibold text-slate-900">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
      <p className="mt-1.5 text-[13.5px] text-slate-500">
        {mode === "signup"
          ? "Enter your email and choose a password — we'll send a confirmation link to verify it's you."
          : "Log in to pick up where you left off."}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={authInputCls}
            />
          </div>
        </label>

        <label className="block">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">Password</span>
            {mode === "login" && (
              <Link href="/forgot-password" className="text-[12px] text-violet-600 hover:underline">
                Forgot password?
              </Link>
            )}
          </div>
          <div className={authFieldCls}>
            <Lock size={15} strokeWidth={1.75} className={authIconCls} />
            <input
              type="password"
              required
              minLength={6}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className={authInputCls}
            />
          </div>
        </label>

        {mode === "signup" && (
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
        )}

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
          {loading ? "Please wait…" : mode === "signup" ? "Send confirmation link" : "Log in"}
          {!loading && <ArrowRight size={16} strokeWidth={2} />}
        </button>
      </form>

      <p className="mt-6 text-center text-[13px] text-slate-500">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className={authLinkCls}>
              Log in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/signup" className={authLinkCls}>
              Create an account
            </Link>
          </>
        )}
      </p>
    </AuthShell>
  );
}

// Shared light-theme styles for every auth screen (login, signup, forgot / reset password).
export const authLabelCls = "mb-1.5 block text-[11px] font-medium uppercase tracking-wide text-slate-500";
export const authFieldCls =
  "flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 transition-colors focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/15";
export const authInputCls = "w-full bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400";
export const authIconCls = "text-slate-400";
export const authButtonCls =
  "flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100";
export const authErrorCls =
  "flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-[12.5px] text-red-700";
export const authLinkCls = "text-violet-600 hover:underline";

/**
 * Auth screens are always light, whatever theme the person picked inside the app
 * (there's no theme toggle before logging in, so we don't depend on one).
 */
export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 py-16"
      style={{
        background:
          "radial-gradient(900px 500px at 15% 10%, rgba(196,181,253,0.45), transparent 60%), radial-gradient(800px 500px at 90% 90%, rgba(251,207,232,0.4), transparent 60%), #F7F6FB",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10"
        style={{ boxShadow: "0 10px 40px rgba(76,29,149,0.08), 0 2px 8px rgba(15,23,42,0.05)" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
