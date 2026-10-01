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
      <div className="sf-bg" aria-hidden>
        <svg className="sf-leaves sf-leaves--tr" viewBox="0 0 260 260">
          <g fill="#6f9a47">
            <path d="M200 20c40 30 50 90 10 140-40-20-60-80-10-140z" transform="rotate(18 200 90)" />
            <path d="M120 10c36 24 44 80 8 124-36-18-52-74-8-124z" transform="rotate(-12 120 70)" />
            <path d="M240 120c-6 40-40 70-90 60 6-40 40-70 90-60z" />
          </g>
        </svg>
        <svg className="sf-leaves sf-leaves--bl" viewBox="0 0 260 260">
          <g fill="#7ea24f">
            <path d="M40 240c-30-40-24-100 24-130 28 36 20 100-24 130z" transform="rotate(-8 60 180)" />
            <path d="M110 250c-20-36-10-90 36-112 22 34 8 90-36 112z" transform="rotate(14 120 190)" />
          </g>
        </svg>
      </div>
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
