"use client";

import type { ComponentType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";
import "./soft.css";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap";

/** Pale soft-grey page background (also pulls in the Manrope font). */
export function SoftBackdrop() {
  return (
    <>
      {/* React 19 hoists this into <head> and dedupes it. */}
      <link rel="stylesheet" href={FONT_URL} precedence="default" />
      <div className="sf-bg" aria-hidden />
    </>
  );
}

function useEnter(delay: number) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring" as const, stiffness: 260, damping: 26, delay },
  };
}

export function SoftCard({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.section className={`sf-card ${className}`} {...useEnter(delay)}>
      {children}
    </motion.section>
  );
}

export function SoftStat({
  label,
  value,
  sub,
  icon: Icon,
  delay = 0,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  delay?: number;
}) {
  return (
    <SoftCard delay={delay} className="sf-stat">
      <div className="flex items-start justify-between gap-2">
        <span className="sf-cap pt-1">{label}</span>
        <span className="sf-badge">
          <Icon size={19} strokeWidth={1.9} />
        </span>
      </div>
      <div className="sf-stat__val">{value}</div>
      {sub && <div className="sf-sub mt-1.5">{sub}</div>}
    </SoftCard>
  );
}

/** SoftStat whose number counts up to its value. */
export function SoftCountStat({
  value,
  decimals = 0,
  suffix = "",
  ...rest
}: {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  sub?: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  delay?: number;
}) {
  const animated = useCountUp(Number.isFinite(value) ? value : 0);
  const shown = decimals > 0 ? animated.toFixed(decimals) : Math.round(animated).toString();
  return <SoftStat {...rest} value={`${shown}${suffix}`} />;
}
