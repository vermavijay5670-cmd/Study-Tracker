"use client";

import { motion } from "framer-motion";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Fine grain + coarser flickering noise, matching the crumpled-paper backdrop's
// fiber texture — gives the card body a tactile matte surface instead of a flat fill.
const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
const NOISE_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Flat, matte card used on the Today section. No backdrop blur, no cursor
 * spotlight, no colored ambient glow and no pulse animation — just a
 * translucent dark panel with a faint edge and a layered paper-grain texture,
 * so the crumpled paper backdrop and the card surface read as one material.
 */
export function PaperCard({ children, className = "", delay = 0 }: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-black/40 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.5)] sm:p-6 ${className}`}
    >
      {/* static fine grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      {/* animated flickering noise, layered on top for a lively, filmic paper feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-full opacity-[0.05] mix-blend-soft-light"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, animation: "grainNoise 0.6s steps(6) infinite" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
