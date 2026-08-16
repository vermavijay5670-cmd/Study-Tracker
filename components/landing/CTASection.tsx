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
        className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-10 text-center sm:p-16"
        style={{ boxShadow: "0 24px 60px rgba(15,23,42,0.08), 0 4px 16px rgba(15,23,42,0.05)" }}
      >
        <h2 className="text-[26px] font-semibold text-slate-900 sm:text-[32px]">
          Ready to actually stick with a study plan?
        </h2>
        <p className="mx-auto mt-3 max-w-[420px] text-[14.5px] text-slate-500">
          It&apos;s free, it works offline, and there&apos;s nothing to sign up for.
        </p>
        <Link
          href="/today"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0D9488] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_12px_30px_rgba(13,148,136,0.28)] transition-transform hover:scale-[1.03]"
        >
          Open Study Tracker
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </motion.div>
    </section>
  );
}
