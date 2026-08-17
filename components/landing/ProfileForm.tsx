"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, UserRound } from "lucide-react";
import { useTrackerState } from "@/lib/useTrackerState";

export function ProfileForm() {
  const { state, hydrated, setProfile } = useTrackerState();
  const router = useRouter();
  const [name, setName] = useState("");
  const [exam, setExam] = useState("");

  // pre-fill with whatever's already saved, once hydrated (lets people come back and edit)
  useEffect(() => {
    if (!hydrated) return;
    if (state.studentName) setName(state.studentName);
    if (state.targetExam) setExam(state.targetExam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setProfile(name, exam || "NEET UG");
    router.push("/today");
  }

  return (
    <section id="profile-form" className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 sm:py-24">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-[520px] overflow-hidden rounded-[28px] border border-white/[0.12] p-8 sm:p-10"
        style={{
          background: "rgba(255,255,255,0.045)",
          backdropFilter: "blur(20px) saturate(140%)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.06)",
        }}
      >
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#60A5FA]/25 bg-[#3B82F6]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#93C5FD]">
          <UserRound size={11} strokeWidth={1.75} /> Set up your profile
        </span>
        <h2 className="text-[24px] font-semibold text-white sm:text-[28px]">Tell us who&apos;s studying</h2>
        <p className="mt-2 text-[13.5px] text-white/45">
          Just so the app can greet you properly — nothing here is sent anywhere, it stays on your device.
        </p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/35">Your name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Vijay"
              className="w-full rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/25 focus:border-[#60A5FA]/50"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-wide text-white/35">Target exam</span>
            <input
              type="text"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              placeholder="e.g. NEET UG 2027"
              className="w-full rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/25 focus:border-[#60A5FA]/50"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.02]"
        >
          Start Studying
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </motion.form>
    </section>
  );
}
