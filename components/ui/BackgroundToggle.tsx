"use client";

import { Grid3x3 } from "lucide-react";

interface BackgroundToggleProps {
  enabled: boolean;
  onToggle: () => void;
  className?: string;
}

/** Inline row (label + switch) used in the sidebar to swap the kinetic-grid background on/off. */
export function BackgroundToggle({ enabled, onToggle, className = "" }: BackgroundToggleProps) {
  return (
    <div className={`flex items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 ${className}`}>
      <span className="flex items-center gap-2 text-[12.5px] font-medium text-white/65">
        <Grid3x3 size={14} strokeWidth={1.75} className={enabled ? "text-[#4A9EFF]" : "text-white/35"} />
        Kinetic grid
      </span>
      <button
        type="button"
        onClick={onToggle}
        role="switch"
        aria-checked={enabled}
        aria-label={enabled ? "Turn off kinetic grid background" : "Turn on kinetic grid background"}
        title={enabled ? "Switch to matte background" : "Switch to kinetic grid"}
        className="relative h-5 w-9 flex-shrink-0 rounded-full transition-colors"
        style={{ background: enabled ? "#4A9EFF" : "rgba(255,255,255,0.16)" }}
      >
        <span
          className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform"
          style={{ transform: enabled ? "translateX(18px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}
