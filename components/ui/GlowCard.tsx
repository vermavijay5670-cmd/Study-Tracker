"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import type { Accent } from "@/lib/data";
import { ACCENT_HEX } from "@/lib/data";

const GLOW_SHADOW: Record<Accent, string> = {
  lime: "0 35px 70px rgba(199,241,45,0.28), 0 25px 60px rgba(0,0,0,0.45)",
  purple: "0 35px 70px rgba(123,77,255,0.32), 0 25px 60px rgba(0,0,0,0.45)",
  cyan: "0 35px 70px rgba(70,255,232,0.24), 0 25px 60px rgba(0,0,0,0.45)",
  emerald: "0 35px 70px rgba(65,255,114,0.28), 0 25px 60px rgba(0,0,0,0.45)",
  gold: "0 35px 70px rgba(255,214,77,0.28), 0 25px 60px rgba(0,0,0,0.45)",
};

// Fine grain texture, tinted per-accent via mix-blend-mode — gives the
// "tilt" variant a natural material feel instead of a flat glow.
const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

interface GlowCardProps {
  accent?: Accent;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * "glow" (default) — flat card with a colored cursor-tracked ambient glow,
   * used on Planner / Question Practice.
   * "tilt" — no colored glow; a natural hover lift with cursor-tracked
   * parallax tilt and a subtle vibrant grain texture. Used on Study Log.
   */
  variant?: "glow" | "tilt";
}

export function GlowCard({ accent, children, className = "", delay = 0, variant = "glow" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const isTilt = variant === "tilt";

  const rotateX = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 200, damping: 20, mass: 0.4 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 200, damping: 20, mass: 0.4 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const shadow = accent ? GLOW_SHADOW[accent] : "0 25px 60px rgba(0,0,0,0.45)";
  const accentHex = accent ? ACCENT_HEX[accent] : "rgba(255,255,255,0.06)";
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(circle at ${x} ${y}, ${accentHex}22 0%, transparent 60%)`
  );

  const naturalShadow = "0 20px 45px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.06)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={isTilt ? { y: -4, scale: 1.012 } : { y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      style={{
        boxShadow: isTilt ? naturalShadow : shadow,
        transformPerspective: isTilt ? 900 : undefined,
        rotateX: isTilt ? rotateX : undefined,
        rotateY: isTilt ? rotateY : undefined,
        borderColor: isTilt && accent ? `${accentHex}2a` : undefined,
      }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-[#202020] p-5 sm:p-7 ${className}`}
    >
      {isTilt ? (
        <>
          {/* fixed accent tint — gives body color instead of a moving glow */}
          {accent && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: `radial-gradient(120% 100% at 15% 0%, ${accentHex}1c 0%, transparent 55%)` }}
            />
          )}
          {/* grain texture for a natural, tactile material feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
          />
          {/* soft top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, transparent 40%)" }}
          />
        </>
      ) : (
        accent && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: glowBackground }}
          />
        )
      )}
      <div className="relative z-10" style={isTilt ? { transform: "translateZ(24px)" } : undefined}>
        {children}
      </div>
    </motion.div>
  );
}
