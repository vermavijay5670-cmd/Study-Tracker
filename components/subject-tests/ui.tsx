"use client";

import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { S } from "@/lib/softClass";

/** Option row colours (selected / correct / wrong) for both skins. */
export function optionStyle(soft: boolean, state: "idle" | "selected" | "correct" | "wrong", accent: string): CSSProperties {
  if (soft) {
    if (state === "selected") return { borderColor: `${accent}aa`, background: `${accent}1c`, color: accent };
    if (state === "correct") return { borderColor: "#5fa86a99", background: "#e1f0e0", color: "#2f6b35" };
    if (state === "wrong") return { borderColor: "#e2685f99", background: "#fbe6e3", color: "#b0392e" };
    return { borderColor: "#c1d0df", background: "#e4edf5" };
  }
  if (state === "selected") return { color: "#fff", boxShadow: `inset 4px 4px 9px rgba(3,4,7,.5), 0 0 0 1px ${accent}` };
  if (state === "correct") return { color: "#b4f5d0", boxShadow: "inset 4px 4px 9px rgba(3,4,7,.5), 0 0 0 1px rgba(111,227,160,.5)" };
  if (state === "wrong") return { color: "#ffb4b4", boxShadow: "inset 4px 4px 9px rgba(3,4,7,.5), 0 0 0 1px rgba(255,122,122,.5)" };
  return {};
}

export function optionClass(soft: boolean): string {
  return S("flex w-full items-start gap-3 rounded-xl border bg-black/15 px-4 py-2.5 text-left text-[13.5px] leading-snug text-white/75 transition-colors disabled:cursor-default", soft) + (soft ? " sf-option" : " nm-opt");
}

export function Panel({ soft, className = "", children }: { soft: boolean; className?: string; children: React.ReactNode }) {
  return <div className={`${soft ? "sf-card" : "nm-qpanel"} p-5 sm:p-6 ${className}`}>{children}</div>;
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { soft: boolean; kind?: "primary" | "plain" | "danger" };

export function Btn({ soft, kind = "primary", className = "", children, ...rest }: BtnProps) {
  let cls: string;
  if (kind === "primary") cls = soft ? "sf-btn" : "nm-pill nm-pill--cyan !flex-none";
  else if (kind === "danger") cls = soft ? "sf-btn" : "nm-pill nm-pill--red !flex-none";
  else cls = S("inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/60 transition-colors enabled:hover:text-white disabled:opacity-30", soft);
  const style = soft && kind === "danger" ? { background: "linear-gradient(145deg, #e67a70, #c9473c)" } : undefined;
  return (
    <button type="button" className={`${cls} ${className}`} style={style} {...rest}>
      {children}
    </button>
  );
}

export function BackBar({ soft, label, sub, accent, onBack }: { soft: boolean; label: string; sub?: string; accent: string; onBack: () => void }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <button type="button" onClick={onBack} aria-label="Back" className={soft ? "sf-round-btn" : "nm-round nm-round--sm"}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <div>
        <h2 className={S("text-[18px] font-medium text-white", soft)}>{label}</h2>
        {sub && (
          <p className="text-[12px]" style={{ color: accent }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

export function formatClock(totalSec: number): string {
  const s = Math.max(0, Math.round(totalSec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(sec).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
