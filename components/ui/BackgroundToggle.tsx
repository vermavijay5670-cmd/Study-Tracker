"use client";

import { Grid3x3 } from "lucide-react";

interface BackgroundToggleProps {
  enabled: boolean;
  onToggle: () => void;
  className?: string;
}

/** Click-to-toggle text label used in the sidebar to swap the kinetic-grid background on/off. */
export function BackgroundToggle({ enabled, onToggle, className = "" }: BackgroundToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      title={enabled ? "Switch to matte background" : "Switch to kinetic grid"}
      className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[13px] font-medium transition-colors ${className}`}
      style={{
        borderColor: enabled ? "rgba(74,158,255,0.4)" : "rgba(255,255,255,0.08)",
        background: enabled ? "rgba(74,158,255,0.12)" : "transparent",
        color: enabled ? "#7EB6FF" : "rgba(255,255,255,0.5)",
      }}
    >
      <Grid3x3 size={14} strokeWidth={1.75} />
      Kinetic Grid
    </button>
  );
}
