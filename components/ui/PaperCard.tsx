"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Flat, matte card used on the Today section. No backdrop blur, no cursor
 * spotlight, no colored ambient glow, no tilt — just a static card whose own
 * body is rendered as a crumpled-paper surface (fold structure + fiber noise,
 * embossed with a raking light), matching the section's paper backdrop.
 */
export function PaperCard({ children, className = "", delay = 0 }: PaperCardProps) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `todaypaper-${rawId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0a0908] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.5)] sm:p-6 ${className}`}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* big fold structure, scaled for a card-sized surface */}
          <feTurbulence type="fractalNoise" baseFrequency="0.022 0.03" numOctaves="2" seed="13" result="bigFolds" />
          {/* fine fiber / wrinkle grain */}
          <feTurbulence type="fractalNoise" baseFrequency="0.18 0.22" numOctaves="3" seed="31" result="fiber" />
          <feComposite in="bigFolds" in2="fiber" operator="arithmetic" k1="0" k2="0.8" k3="0.25" k4="0" result="surface" />
          {/* warm off-white light, matching the Today backdrop's tone */}
          <feDiffuseLighting in="surface" lighting-color="#d6d0bf" surfaceScale="4.2" diffuseConstant="0.95" result="lit">
            <feDistantLight azimuth="235" elevation="50" />
          </feDiffuseLighting>
          <feColorMatrix
            in="lit"
            type="matrix"
            values="0.18 0.18 0.18 0 0
                    0.18 0.18 0.18 0 0
                    0.18 0.18 0.18 0 0
                    0    0    0    1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>

      {/* keep it dark enough for the text on top to stay highly readable */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
