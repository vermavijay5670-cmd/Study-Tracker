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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkEmail, setCheckEmail] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/today";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createSupabaseBrowserClient();

    if (mode === "signup") {
      // Email-first signup: no password yet. This sends a confirmation link;
      // clicking it logs the person in and sends them to /auth/set-password
      // where they create their password.
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent("/auth/set-password")}`,
        },
      });
      setLoading(false);
      if (otpError) {
        setError(otpError.message);
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
          <Mail size={28} strokeWidth={1.5} className="mx-auto mb-4 text-[#D8B4FE]" />
          <h1 className="text-[22px] font-semibold text-[#F6F4FF]">Check your inbox</h1>
          <p className="mt-2 text-[13.5px] text-white/50">
            We&apos;ve sent a confirmation link to <span className="text-white/80">{email}</span>. Click it to
            confirm your email — you&apos;ll be asked to create a password right after.
          </p>
          <Link href="/login" className="mt-6 inline-block text-[13px] text-[#D8B4FE] hover:underline">
            Back to log in
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <h1 className="text-[24px] font-semibold text-[#F6F4FF]">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
      <p className="mt-1.5 text-[13.5px] text-white/50">
        {mode === "signup"
          ? "Enter your email — we'll send a confirmation link, then you'll set a password."
          : "Log in to pick up where you left off."}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/40">Email</span>
          <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-4 py-3 focus-within:border-[#D8B4FE]/50">
            <Mail size={15} strokeWidth={1.75} className="text-white/30" />
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"
            />
          </div>
        </label>

        {mode === "login" && (
          <label className="block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/40">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 px-4 py-3 focus-within:border-[#D8B4FE]/50">
              <Lock size={15} strokeWidth={1.75} className="text-white/30" />
              <input
                type="password"
                required
                minLength={6}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full bg-transparent text-[15px] text-white outline-none placeholder:text-white/25"
              />
            </div>
          </label>
        )}

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
          {loading ? "Please wait…" : mode === "signup" ? "Send confirmation link" : "Log in"}
          {!loading && <ArrowRight size={16} strokeWidth={2} />}
        </button>
      </form>

      <p className="mt-6 text-center text-[13px] text-white/40">
        {mode === "signup" ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-[#D8B4FE] hover:underline">
              Log in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href="/signup" className="text-[#D8B4FE] hover:underline">
              Create an account
            </Link>
          </>
        )}
      </p>
    </AuthShell>
  );
}

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/[0.15] p-8 sm:p-10"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(30px) saturate(160%)",
          boxShadow: "0 10px 50px rgba(168,85,247,0.18), 0 0 30px rgba(192,132,252,0.2), inset 0 1px 1px rgba(255,255,255,0.3)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
