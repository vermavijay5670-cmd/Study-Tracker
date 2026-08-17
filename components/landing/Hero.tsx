"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Stethoscope, ShieldCheck, ChevronDown } from "lucide-react";
import { DoctorCoatIllustration } from "./DoctorCoatIllustration";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Different layers move at different rates as the hero scrolls out — the
  // core parallax illusion: sky drifts slowest, the coat mid-speed, the big
  // headline fastest (so it visually "detaches" and slides away first).
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const coatY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  const coatScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const fadeToWhite = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  return (
    <>
      {/* ── Parallax hero ─────────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative h-[100vh] min-h-[560px] overflow-hidden">
        {/* sky wash — slowest layer */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            y: skyY,
            background:
              "radial-gradient(circle at 20% 10%, #E0F2FE 0%, transparent 50%), radial-gradient(circle at 85% 20%, #CCFBF1 0%, transparent 45%), linear-gradient(180deg, #F8FBFF 0%, #EFF9F7 60%, #F8FAFC 100%)",
          }}
        />

        {/* nav sits inside the hero, above the parallax layers */}
        <div className="relative z-30">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-6 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0D9488]/10">
                <Stethoscope size={16} strokeWidth={1.75} className="text-[#0D9488]" />
              </span>
              <span className="text-[15px] font-medium text-slate-900">Study Tracker</span>
            </div>
            <Link
              href="/today"
              className="rounded-full border border-[#0D9488]/25 bg-white/70 px-4 py-2 text-[13px] font-medium text-[#0F766E] backdrop-blur transition-colors hover:bg-[#0D9488]/10"
            >
              Open App
            </Link>
          </div>
        </div>

        {/* doctor coat illustration — mid layer */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 top-16 z-10 flex items-end justify-center"
          style={{ y: coatY, scale: coatScale }}
        >
          <DoctorCoatIllustration className="h-[62vh] w-auto opacity-90 sm:h-[72vh]" />
        </motion.div>

        {/* giant overlapping headline — fastest layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          style={{ y: headlineY, opacity: headlineOpacity }}
        >
          <h1
            className="select-none text-center font-black uppercase leading-[0.85] tracking-tight text-slate-900"
            style={{
              fontSize: "clamp(64px, 16vw, 220px)",
              textShadow: "0 8px 40px rgba(255,255,255,0.9), 0 2px 8px rgba(255,255,255,0.6)",
            }}
          >
            NEET
          </h1>
        </motion.div>

        {/* top badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pointer-events-none absolute left-1/2 top-24 z-30 -translate-x-1/2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0D9488]/25 bg-white/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0F766E] backdrop-blur">
            <Stethoscope size={11} strokeWidth={1.75} /> Built for NEET UG
          </span>
        </motion.div>

        {/* bottom caption + scroll cue, like the reference */}
        <div className="absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={18} strokeWidth={1.75} className="text-[#0D9488]/60" />
          </motion.div>
        </div>

        {/* fade-to-page-background as the hero scrolls away, so the transition
            into the next section feels seamless rather than a hard cut */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#FAFCFF] to-transparent"
          style={{ opacity: fadeToWhite }}
        />
      </div>

      {/* ── Message + CTA, revealed as the parallax hero scrolls past ──────── */}
      <section className="mx-auto max-w-[720px] px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[30px] font-semibold leading-[1.15] text-slate-900 sm:text-[38px]">
            Your path to the white coat, <span className="text-[#0D9488]">finally organized.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-slate-500">
            Track study hours, revise every NCERT chapter on schedule, and watch your progress build —
            countdown, stopwatch, planner, and dashboard, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/today"
              className="group flex items-center gap-2 rounded-full bg-[#0D9488] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition-transform hover:scale-[1.03]"
            >
              Open Study Tracker
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="flex items-center gap-1.5 text-[13px] text-slate-400">
              <ShieldCheck size={13} strokeWidth={1.75} />
              Free, no sign-up — your data stays on your device
            </span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
