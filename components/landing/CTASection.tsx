"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.12] p-10 text-center sm:p-16"
        style={{
          background: "rgba(255,255,255,0.045)",
          backdropFilter: "blur(20px) saturate(140%)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.06)",
        }}
      >
        <h2 className="text-[26px] font-semibold text-white sm:text-[32px]">
          Ready to actually stick with a study plan?
        </h2>
        <p className="mx-auto mt-3 max-w-[420px] text-[14.5px] text-white/45">
          It&apos;s free, it works offline, and there&apos;s nothing to sign up for.
        </p>
        <Link
          href="/today"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#3B82F6] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(59,130,246,0.3)] transition-transform hover:scale-[1.03]"
        >
          Open Study Tracker
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </motion.div>
    </section>
  );
}
