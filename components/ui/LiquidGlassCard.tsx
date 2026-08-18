"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export type LiquidGlow = "purple" | "green" | "red" | "yellow" | "cyan" | "orange";

interface GlowTokens {
  a1: string; // outer glow, resting
  a2: string; // outer glow #2, resting
  b1: string; // outer glow, pulsed
  b2: string; // outer glow #2, pulsed
  spot: string; // cursor spotlight
  edge: string; // bottom edge line
}

const GLOW_MAP: Record<LiquidGlow, GlowTokens> = {
  purple: {
    a1: "rgba(168,85,247,0.18)",
    a2: "rgba(192,132,252,0.20)",
    b1: "rgba(168,85,247,0.28)",
    b2: "rgba(192,132,252,0.30)",
    spot: "rgba(192,132,252,0.22)",
    edge: "rgba(232,121,249,0.35)",
  },
  green: {
    a1: "rgba(34,197,94,0.18)",
    a2: "rgba(74,222,128,0.20)",
    b1: "rgba(34,197,94,0.30)",
    b2: "rgba(74,222,128,0.32)",
    spot: "rgba(74,222,128,0.22)",
    edge: "rgba(74,222,128,0.35)",
  },
  red: {
    a1: "rgba(239,68,68,0.16)",
    a2: "rgba(248,113,113,0.18)",
    b1: "rgba(239,68,68,0.26)",
    b2: "rgba(248,113,113,0.28)",
    spot: "rgba(248,113,113,0.2)",
    edge: "rgba(248,113,113,0.32)",
  },
  yellow: {
    a1: "rgba(234,179,8,0.18)",
    a2: "rgba(250,204,21,0.2)",
    b1: "rgba(234,179,8,0.28)",
    b2: "rgba(250,204,21,0.3)",
    spot: "rgba(250,204,21,0.22)",
    edge: "rgba(250,204,21,0.35)",
  },
  cyan: {
    a1: "rgba(6,182,212,0.18)",
    a2: "rgba(103,232,249,0.2)",
    b1: "rgba(6,182,212,0.28)",
    b2: "rgba(103,232,249,0.3)",
    spot: "rgba(103,232,249,0.22)",
    edge: "rgba(103,232,249,0.35)",
  },
  orange: {
    a1: "rgba(249,115,22,0.18)",
    a2: "rgba(253,186,116,0.2)",
    b1: "rgba(249,115,22,0.28)",
    b2: "rgba(253,186,116,0.3)",
    spot: "rgba(253,186,116,0.22)",
    edge: "rgba(253,186,116,0.35)",
  },
};

// Fine grain texture (static) — tinted per-card via mix-blend-mode.
const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
// Coarser, higher-contrast noise pattern that's animated to flicker like film grain.
const NOISE_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glow?: LiquidGlow;
  /**
   * "glow" (default) — colored pulsing glow + cursor spotlight, used on Dashboard.
   * "tilt" — no colored glow; a subtle natural hover lift with cursor-tracked
   * parallax tilt instead. Used on the Today cards.
   */
  variant?: "glow" | "tilt";
  /**
   * Only applies with variant="tilt". Adds a fixed accent tint plus a
   * layered grain + animated noise texture for a vibrant, tactile material
   * feel instead of a glow. Used on Dashboard.
   */
  texture?: boolean;
}

export function LiquidGlassCard({
  children,
  className = "",
  delay = 0,
  glow = "purple",
  variant = "glow",
  texture = false,
}: LiquidGlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const tokens = GLOW_MAP[glow];

  // Smoothed rotation for the tilt variant — springs back to flat on leave.
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
    my.set(50);
  }

  const glowBackground = useTransform([mx, my], ([x, y]) =>
    `radial-gradient(circle at ${x}% ${y}%, ${tokens.spot} 0%, transparent 55%)`
  );
  const sheenBackground = useTransform([mx, my], ([x, y]) =>
    `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.10) 0%, transparent 60%)`
  );

  const isTilt = variant === "tilt";
  const hasTexture = isTilt && texture;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={isTilt ? { scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24, delay }}
      className={`liquid-card relative overflow-hidden rounded-[28px] border border-white/[0.15] p-5 sm:p-6 ${className}`}
      style={
        {
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(30px) saturate(160%)",
          WebkitBackdropFilter: "blur(30px) saturate(160%)",
          boxShadow: isTilt
            ? "0 18px 40px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.30)"
            : `0 10px 50px ${tokens.a1}, 0 0 30px ${tokens.a2}, inset 0 1px 1px rgba(255,255,255,0.30)`,
          animation: isTilt ? undefined : "liquidCardPulse 7s ease-in-out infinite",
          transformPerspective: isTilt ? 900 : undefined,
          rotateX: isTilt ? rotateX : undefined,
          rotateY: isTilt ? rotateY : undefined,
          "--glow-a1": tokens.a1,
          "--glow-a2": tokens.a2,
          "--glow-b1": tokens.b1,
          "--glow-b2": tokens.b2,
        } as React.CSSProperties
      }
    >
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: "linear-gradient(165deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.03) 30%, transparent 55%)" }}
      />
      {!isTilt && (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[6%] right-[6%] h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${tokens.edge}, transparent)` }}
        />
      )}
      {hasTexture && (
        <>
          {/* fixed accent tint — gives the card body color instead of a moving glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(130% 100% at 12% 0%, ${tokens.a2} 0%, transparent 58%)` }}
          />
          {/* static fine grain */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-overlay"
            style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
          />
          {/* animated flickering noise, layered on top for a lively, filmic texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-full opacity-[0.07] mix-blend-soft-light"
            style={{ backgroundImage: `url("${NOISE_SVG}")`, animation: "grainNoise 0.6s steps(6) infinite" }}
          />
        </>
      )}
      {/* cursor spotlight: colored glow for "glow" variant, plain white sheen for "tilt" */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: isTilt ? sheenBackground : glowBackground }}
      />
      <div className="relative z-10" style={isTilt ? { transform: "translateZ(30px)" } : undefined}>
        {children}
      </div>
    </motion.div>
  );
}
