"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Lock, Mail, Moon, Sun } from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { migrateLocalDataToAccount } from "@/lib/localMigration";
import { useTheme } from "@/lib/ThemeContext";
import "./auth.css";

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
          <Mail size={28} strokeWidth={1.5} className="mx-auto mb-4 auth-accent" />
          <h1 className="text-[22px] font-semibold auth-title">Check your inbox</h1>
          <p className="mt-2 text-[13.5px] auth-muted">
            We&apos;ve sent a confirmation link to <span className="auth-strong">{email}</span>. Click it to
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
      <h1 className="text-[24px] font-semibold auth-title">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
      <p className="mt-1.5 text-[13.5px] auth-muted">
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
            <span className="auth-label !mb-0">Password</span>
            {mode === "login" && (
              <Link href="/forgot-password" className="auth-link text-[12px]">
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

      <p className="mt-6 text-center text-[13px] auth-muted">
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

// Shared class names for every auth screen (styles live in ./auth.css).
export const authLabelCls = "auth-label";
export const authFieldCls = "auth-field";
export const authInputCls = "auth-input";
export const authIconCls = "auth-icon";
export const authButtonCls = "auth-btn";
export const authErrorCls = "auth-error";
export const authLinkCls = "auth-link";

/**
 * Auth screens: neumorphic in light mode, glassmorphic in dark mode. They start in light mode
 * unless this device already has a saved dark preference; the corner button switches (and saves)
 * the choice the same way the in-app theme setting does.
 */
export function AuthShell({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("st_theme") === "dark") setMode("dark");
    } catch {
      // localStorage unavailable — stay light.
    }
    setReady(true);
  }, []);

  function toggle() {
    const next = mode === "light" ? "dark" : "light";
    setMode(next);
    setTheme(next);
  }

  return (
    <div className="auth-root" data-theme={mode}>
      <span className="auth-blob auth-blob-1" aria-hidden />
      <span className="auth-blob auth-blob-2" aria-hidden />
      <span className="auth-blob auth-blob-3" aria-hidden />

      <button
        type="button"
        onClick={toggle}
        className="auth-toggle"
        aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {mode === "light" ? <Moon size={17} strokeWidth={1.75} /> : <Sun size={17} strokeWidth={1.75} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5 }}
        className="auth-card"
      >
        {children}
      </motion.div>
    </div>
  );
}
