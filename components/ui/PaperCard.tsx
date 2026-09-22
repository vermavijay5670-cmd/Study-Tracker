"use client";

import { motion } from "framer-motion";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Flat, matte card used on the Today section. Unlike LiquidGlassCard, this has
 * no backdrop blur, no cursor spotlight, no colored ambient glow and no pulse
 * animation — just a translucent dark panel with a faint edge, so the crumpled
 * paper backdrop stays visible and legible behind it.
 */
export function PaperCard({ children, className = "", delay = 0 }: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-black/40 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.5)] sm:p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
