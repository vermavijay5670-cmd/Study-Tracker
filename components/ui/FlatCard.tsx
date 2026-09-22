"use client";

import { motion } from "framer-motion";
import type { Accent } from "@/lib/data";
import { ACCENT_HEX } from "@/lib/data";

interface FlatCardProps {
  accent?: Accent;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Static card used on Planner. Unlike GlowCard, this has no cursor-tracked
 * spotlight glow and no mouse-driven tilt — position and lighting stay fixed
 * regardless of where the cursor is. Only a plain shadow and a faint
 * accent-tinted border remain for depth and subject identity.
 */
export function FlatCard({ accent, children, className = "", delay = 0 }: FlatCardProps) {
  const accentHex = accent ? ACCENT_HEX[accent] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      style={{
        boxShadow: "0 20px 45px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)",
        borderColor: accentHex ? `${accentHex}2a` : undefined,
      }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#1c1c1c] p-5 sm:p-7 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
