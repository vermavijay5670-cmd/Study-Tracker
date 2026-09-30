"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./desk.css";

/** Black metal spiral-binding rings down the left edge of a notebook. */
export function Rings({ count = 6 }: { count?: number }) {
  return (
    <div className="dk-rings" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="dk-ring" />
      ))}
    </div>
  );
}

/** Riveted brass-rimmed leather label plate. */
export function Plate({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="dk-plate">
      {icon}
      {children}
    </span>
  );
}

export function Sticky({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`dk-sticky ${className}`}>{children}</div>;
}

export function Paperclip() {
  return (
    <svg className="dk-paperclip" viewBox="0 0 40 90" aria-hidden>
      <defs>
        <linearGradient id="dk-clip-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#f5f5f5" />
          <stop offset=".5" stopColor="#8f8f8f" />
          <stop offset="1" stopColor="#e8e8e8" />
        </linearGradient>
      </defs>
      <path
        d="M12 60V22a8 8 0 0 1 16 0v46a12 12 0 0 1-24 0V26"
        fill="none"
        stroke="url(#dk-clip-grad)"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Tone = "brass" | "stone";

/** Tactile button: raised at rest, lifts on hover, sinks when pressed, dulls when disabled. */
export const DeskButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { tone?: Tone }>(
  function DeskButton({ tone = "stone", className = "", type = "button", ...rest }, ref) {
    return <button ref={ref} type={type} className={`dk-btn dk-btn--${tone} ${className}`} {...rest} />;
  },
);

export function DeskChip({
  active,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`dk-chip ${active ? "is-on" : ""} ${className}`}
      {...rest}
    />
  );
}

/** Engraved groove with a brass fill. */
export function Track({
  pct,
  label,
  live,
  done,
  thin,
}: {
  pct: number;
  label: string;
  live?: boolean;
  done?: boolean;
  thin?: boolean;
}) {
  const v = Number.isFinite(pct) ? Math.max(0, Math.min(100, pct)) : 0;
  return (
    <div
      className={`dk-track ${thin ? "dk-track--thin" : ""}`}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(v)}
      title={`${label}: ${Math.round(v)}%`}
    >
      <div className={`dk-track__fill ${live ? "is-live" : ""} ${done ? "is-done" : ""}`} style={{ width: `${v}%` }} />
    </div>
  );
}

export function Status({ state, children }: { state: "idle" | "live" | "done"; children: ReactNode }) {
  return (
    <div className="dk-status">
      <span className={`dk-dot ${state === "live" ? "is-live" : ""}`} />
      {children}
    </div>
  );
}

const UNITS = ["HRS", "MIN", "SEC"] as const;

/** Black flip-clock in a riveted bezel (countdown). */
export function FlipClock({ hh, mm, ss }: { hh: string; mm: string; ss: string }) {
  const vals = [hh, mm, ss];
  return (
    <div className="dk-flipclock" role="timer" aria-label={`${hh} hours ${mm} minutes ${ss} seconds left`}>
      <i className="dk-screw dk-screw--tl" />
      <i className="dk-screw dk-screw--tr" />
      <i className="dk-screw dk-screw--bl" />
      <i className="dk-screw dk-screw--br" />
      {vals.map((v, i) => (
        <div key={UNITS[i]} style={{ display: "contents" }}>
          <div className="dk-flipcol">
            <div className="dk-tile">
              <span key={v} className="dk-tile__val">
                {v}
              </span>
            </div>
            <span className="dk-tile__unit">{UNITS[i]}</span>
          </div>
          {i < 2 && <span className="dk-colon">:</span>}
        </div>
      ))}
    </div>
  );
}

/** Raised paper digit tiles (stopwatch / timer). */
export function PaperClock({ hh, mm, ss, done, children }: { hh: string; mm: string; ss: string; done?: boolean; children?: ReactNode }) {
  const vals = [hh, mm, ss];
  return (
    <div className="dk-clockrow" role="timer" aria-label={`${hh} hours ${mm} minutes ${ss} seconds`}>
      {vals.map((v, i) => (
        <div key={UNITS[i]} style={{ display: "contents" }}>
          <div className="dk-clockcol">
            <div className={`dk-ptile ${done ? "is-done" : ""}`}>
              <span key={v} className="dk-ptile__val">
                {v}
              </span>
            </div>
            <span className="dk-tile__unit">{UNITS[i]}</span>
          </div>
          {i < 2 && <span className="dk-colon">:</span>}
        </div>
      ))}
      {children}
    </div>
  );
}

function useEnter(delay: number) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring" as const, stiffness: 260, damping: 26, delay },
  };
}

/** Spiral notebook on a stack of pages + leather cover (countdown). */
export function Notebook({ children, aside, delay = 0 }: { children: ReactNode; aside?: ReactNode; delay?: number }) {
  return (
    <motion.section className="dk-notebook" {...useEnter(delay)}>
      <div className="dk-paper dk-notebook__paper">{children}</div>
      <Rings count={5} />
      {aside}
    </motion.section>
  );
}

/** Leather-bound ruled journal (stopwatch / timer). */
export function Journal({ children, extras, delay = 0 }: { children: ReactNode; extras?: ReactNode; delay?: number }) {
  return (
    <motion.section className="dk-journal" {...useEnter(delay)}>
      <div className="dk-paper dk-paper--ruled dk-journal__page">{children}</div>
      <Rings count={6} />
      {extras}
    </motion.section>
  );
}
