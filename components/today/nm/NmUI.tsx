"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import "./nm.css";

/** Raised card (soft shadows, no border) — the dark-mode Today surface. */
export function NmCard({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay }}
      className={`nm-card ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function NmBadge({ children }: { children: ReactNode }) {
  return <span className="nm-badge nm-raised">{children}</span>;
}

export function NmStatus({ state, children }: { state: "idle" | "live" | "done"; children: ReactNode }) {
  return (
    <span className="nm-status nm-inset" data-state={state}>
      <i />
      {children}
    </span>
  );
}

export function NmTiles({ hh, mm, ss }: { hh: string; mm: string; ss: string }) {
  const parts = [
    { v: hh, u: "hrs" },
    { v: mm, u: "min" },
    { v: ss, u: "sec" },
  ];
  return (
    <div className="nm-tiles">
      {parts.map((p, i) => (
        <div key={p.u} className="flex items-center gap-2.5">
          <div className="nm-tile nm-raised">
            <b>{p.v}</b>
            <span>{p.u}</span>
          </div>
          {i < 2 && <i aria-hidden>:</i>}
        </div>
      ))}
    </div>
  );
}

export function NmTrack({ pct, label }: { pct: number; label: string }) {
  return (
    <div
      className="nm-track nm-inset"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      title={`${Math.round(pct)}%`}
    >
      <i style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
    </div>
  );
}

const TICKS = 60;

/** Round dial: a raised bezel with 60 ticks that light up with progress, around a pressed well holding the readout. */
export function NmDial({
  pct,
  size = 240,
  running = false,
  tone = "cyan",
  label,
  children,
}: {
  pct: number;
  size?: number;
  running?: boolean;
  tone?: "cyan" | "green";
  label: string;
  children: ReactNode;
}) {
  const lit = Math.round((Math.max(0, Math.min(100, pct)) / 100) * TICKS);
  const ticks = Array.from({ length: TICKS }, (_, i) => {
    const a = ((i * 360) / TICKS - 90) * (Math.PI / 180);
    const long = i % 5 === 0;
    const r1 = long ? 76 : 80;
    const r2 = 91;
    return { i, x1: Math.cos(a) * r1, y1: Math.sin(a) * r1, x2: Math.cos(a) * r2, y2: Math.sin(a) * r2, on: i < lit };
  });
  return (
    <div className="nm-dial" style={{ width: size, height: size }} data-run={running} data-tone={tone} role="img" aria-label={label}>
      <svg viewBox="-100 -100 200 200" aria-hidden>
        <g>
          {ticks.filter((t) => !t.on).map((t) => (
            <line key={t.i} className="nm-tick" x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth={2} />
          ))}
        </g>
        <g className="nm-lit">
          {ticks.filter((t) => t.on).map((t) => (
            <line key={t.i} className="nm-tick nm-tick--lit" x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth={2.4} />
          ))}
        </g>
      </svg>
      <div className="nm-dial__well">
        <div>{children}</div>
      </div>
    </div>
  );
}

export function NmWell({ children }: { children: ReactNode }) {
  return <div className="nm-well nm-inset">{children}</div>;
}

type PillProps = ButtonHTMLAttributes<HTMLButtonElement> & { tone?: "cyan" | "red" | "plain" };
export function NmPill({ tone = "plain", className = "", type = "button", ...rest }: PillProps) {
  return <button type={type} className={`nm-pill nm-pill--${tone} ${className}`} {...rest} />;
}

export function NmRound({ size = "md", className = "", type = "button", ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { size?: "sm" | "md" }) {
  return <button type={type} className={`nm-round nm-round--${size} ${className}`} {...rest} />;
}

export function NmChip({ active, className = "", type = "button", ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return <button type={type} aria-pressed={Boolean(active)} className={`nm-chip ${className}`} {...rest} />;
}
