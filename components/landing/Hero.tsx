"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, ShieldCheck } from "lucide-react";
import { DoctorCoatIllustration } from "./DoctorCoatIllustration";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0F766E]">
            <Stethoscope size={11} strokeWidth={1.75} /> Built for NEET UG
          </span>
          <h1 className="text-[36px] font-semibold leading-[1.1] text-slate-900 sm:text-[48px] lg:text-[56px]">
            Your path to the white coat, <span className="text-[#0D9488]">finally organized.</span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-slate-500 sm:text-[17px]">
            Track study hours, revise every NCERT chapter on schedule, and watch your progress build —
            countdown, stopwatch, planner, and dashboard, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6"
            style={{ boxShadow: "0 24px 60px rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.05)" }}
          >
            <DoctorCoatIllustration className="mx-auto h-[300px] w-auto sm:h-[360px]" />
          </div>

          <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-[#5EEAD4]/40 blur-3xl" />
          <div className="absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full bg-[#7DD3FC]/40 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
