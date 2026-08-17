"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Stethoscope, ShieldCheck, ChevronDown } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // The photo drifts and slowly zooms as the hero scrolls out — the core
  // parallax illusion — while a dark scrim grows underneath it so it blends
  // straight into the page's dark, grainy background instead of a hard cut.
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.95]);

  return (
    <>
      {/* ── Parallax hero ─────────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative h-[100vh] min-h-[560px] overflow-hidden bg-[#0C0D10]">
        {/* the photo — slowest-settling layer, pans/zooms with scroll */}
        <motion.div aria-hidden className="absolute inset-0" style={{ y: photoY, scale: photoScale }}>
          <Image
            src="/images/hero-future-doctor.webp"
            alt="A desk scene with medical textbooks, a white coat and stethoscope, and motivational notes — a future doctor's study corner at sunset"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* constant light wash so nav/badges stay legible regardless of what's
            behind them, plus a bottom scrim that deepens on scroll to merge
            into the page background below */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3"
          style={{
            opacity: scrimOpacity,
            background: "linear-gradient(180deg, transparent 0%, rgba(12,13,16,0.75) 55%, #0C0D10 100%)",
          }}
        />

        {/* nav */}
        <div className="relative z-30">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-6 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                <Stethoscope size={16} strokeWidth={1.75} className="text-[#60A5FA]" />
              </span>
              <span className="text-[15px] font-medium text-white">Study Tracker</span>
            </div>
            <Link
              href="/today"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Open App
            </Link>
          </div>
        </div>

        {/* small badge, top-left, sitting in the darker wall area of the photo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-30 mx-4 mt-4 sm:mx-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#93C5FD] backdrop-blur">
            <Stethoscope size={11} strokeWidth={1.75} /> Built for NEET UG
          </span>
        </motion.div>

        {/* bottom caption + scroll cue */}
        <div className="absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-3">
          <span className="rounded-full bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
            Scroll to explore
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={18} strokeWidth={1.75} className="text-white/60" />
          </motion.div>
        </div>
      </div>

      {/* ── Message + CTA, revealed as the parallax hero scrolls past ──────── */}
      <section className="mx-auto max-w-[720px] px-4 pb-16 pt-6 text-center sm:px-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[30px] font-semibold leading-[1.15] text-white sm:text-[38px]">
            Your path to the white coat, <span className="text-[#60A5FA]">finally organized.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-white/50">
            Track study hours, revise every NCERT chapter on schedule, and watch your progress build —
            countdown, stopwatch, planner, and dashboard, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/today"
              className="group flex items-center gap-2 rounded-full bg-[#3B82F6] px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.03]"
            >
              Open Study Tracker
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="flex items-center gap-1.5 text-[13px] text-white/40">
              <ShieldCheck size={13} strokeWidth={1.75} />
              Free, no sign-up — your data stays on your device
            </span>
          </div>
        </motion.div>
      </section>
    </>
  );
}
