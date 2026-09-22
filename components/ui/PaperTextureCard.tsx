"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface PaperTextureCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Card used on Question Practice's subject picker. No cursor glow, no tilt —
 * just a static black card whose own body is rendered as a crumpled-paper
 * surface (fold structure + fiber noise, embossed with a raking light),
 * matching the app's paper backdrop but scoped to the card itself.
 */
export function PaperTextureCard({ children, className = "", delay = 0 }: PaperTextureCardProps) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `papercard-${rawId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0908] p-5 shadow-[0_20px_45px_rgba(0,0,0,0.5)] sm:p-7 ${className}`}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* big fold structure, scaled for a card-sized surface */}
          <feTurbulence type="fractalNoise" baseFrequency="0.022 0.03" numOctaves="2" seed="5" result="bigFolds" />
          {/* fine fiber / wrinkle grain */}
          <feTurbulence type="fractalNoise" baseFrequency="0.18 0.22" numOctaves="3" seed="17" result="fiber" />
          <feComposite in="bigFolds" in2="fiber" operator="arithmetic" k1="0" k2="0.8" k3="0.25" k4="0" result="surface" />
          <feDiffuseLighting in="surface" lighting-color="#d6d0c0" surfaceScale="4.5" diffuseConstant="1" result="lit">
            <feDistantLight azimuth="235" elevation="50" />
          </feDiffuseLighting>
          <feColorMatrix
            in="lit"
            type="matrix"
            values="0.19 0.19 0.19 0 0
                    0.19 0.19 0.19 0 0
                    0.19 0.19 0.19 0 0
                    0    0    0    1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>

      {/* keep it dark enough for the text on top to stay highly readable */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
