"use client";

import { useId, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface PaperTiltCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Dashboard card: a dark charcoal/grey-black paper texture (fold structure +
 * fiber noise, embossed with a raking light — same technique as the Question
 * Practice cards, tuned cooler and darker) with the cursor-tracked 3D tilt
 * kept, but no colored ambient glow and no cursor spotlight/sheen.
 */
export function PaperTiltCard({ children, className = "", delay = 0 }: PaperTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(35);

  const rotateX = useSpring(useTransform(my, [0, 100], [4, -4]), { stiffness: 200, damping: 20, mass: 0.4 });
  const rotateY = useSpring(useTransform(mx, [0, 100], [-4, 4]), { stiffness: 200, damping: 20, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }
  function handleMouseLeave() {
    mx.set(50);
    my.set(35);
  }

  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `dashpaper-${rawId}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      className={`relative overflow-hidden rounded-[28px] border border-white/[0.07] p-5 sm:p-6 ${className}`}
      style={{
        background: "#070708",
        boxShadow: "0 18px 40px rgba(0,0,0,0.55)",
        transformPerspective: 900,
        rotateX,
        rotateY,
      }}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          {/* big fold structure */}
          <feTurbulence type="fractalNoise" baseFrequency="0.022 0.03" numOctaves="2" seed="9" result="bigFolds" />
          {/* fine fiber / wrinkle grain */}
          <feTurbulence type="fractalNoise" baseFrequency="0.18 0.22" numOctaves="3" seed="29" result="fiber" />
          <feComposite in="bigFolds" in2="fiber" operator="arithmetic" k1="0" k2="0.8" k3="0.25" k4="0" result="surface" />
          {/* neutral grey light (cooler / darker than Question Practice's warm tone) */}
          <feDiffuseLighting in="surface" lighting-color="#98978f" surfaceScale="4.2" diffuseConstant="0.85" result="lit">
            <feDistantLight azimuth="235" elevation="50" />
          </feDiffuseLighting>
          <feColorMatrix
            in="lit"
            type="matrix"
            values="0.13 0.13 0.13 0 0
                    0.13 0.13 0.13 0 0
                    0.13 0.13 0.13 0 0
                    0    0    0    1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>

      {/* darken further so the grey-black stays low-exposure and text stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
