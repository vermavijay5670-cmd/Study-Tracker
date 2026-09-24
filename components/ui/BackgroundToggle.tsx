"use client";

import { Grid3x3 } from "lucide-react";

interface BackgroundToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export function BackgroundToggle({ enabled, onToggle }: BackgroundToggleProps) {
  return (
    <div className="fixed bottom-4 left-4 z-[90] flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-md md:left-[264px]">
      <Grid3x3 size={13} strokeWidth={1.75} className={enabled ? "text-[#4A9EFF]" : "text-white/35"} />
      <span className="hidden text-[11px] text-white/55 sm:inline">Kinetic grid</span>
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
