"use client";

import { useTheme } from "@/lib/ThemeContext";

/**
 * Dark-theme Tailwind colour classes -> their soft light-theme equivalents.
 * Lets screens keep one set of class strings and swap colours per theme at render time.
 * (The soft values are written as literals here so Tailwind still generates them.)
 */
const SOFT_MAP: Record<string, string> = {
  "text-white": "text-[#27363c]",
  "text-white/90": "text-[#27363c]",
  "text-white/85": "text-[#2d3c42]",
  "text-white/80": "text-[#33434a]",
  "text-white/75": "text-[#3d4b51]",
  "text-white/65": "text-[#4b5a60]",
  "text-white/60": "text-[#5b686e]",
  "text-white/55": "text-[#5b686e]",
  "text-white/50": "text-[#66747a]",
  "text-white/45": "text-[#78868c]",
  "text-white/40": "text-[#78868c]",
  "text-white/35": "text-[#8a979c]",
  "text-white/30": "text-[#8a979c]",
  "text-white/25": "text-[#9aa6ab]",
  "text-white/20": "text-[#9aa6ab]",
  "hover:text-white": "hover:text-[#27363c]",
  "text-[#A9D8AE]": "text-[#2f6b35]",
  "text-[#F0AFA6]": "text-[#b0392e]",
  "border-white/8": "border-[#d3dadd]",
  "border-white/10": "border-[#cfd7da]",
  "border-white/12": "border-[#cfd7da]",
  "border-white/15": "border-[#c4cdd1]",
  "border-white/20": "border-[#b9c3c8]",
  "hover:border-white/20": "hover:border-[#9fb78a]",
  "bg-white/[0.02]": "bg-white/40",
  "bg-white/[0.03]": "bg-white/55",
  "bg-white/[0.06]": "bg-[#dde3e5]",
  "hover:bg-white/[0.06]": "hover:bg-white/80",
  "bg-black/15": "bg-[#e3e8ea]",
  "bg-black/20": "bg-[#e3e8ea]",
  "bg-black/25": "bg-[#e0e6e8]",
  "bg-black/30": "bg-[#e0e6e8]",
};

/** Swap dark-theme colour classes for soft ones when `soft` is true. */
export function S(classes: string, soft: boolean): string {
  if (!soft) return classes;
  return classes
    .split(/\s+/)
    .map((c) => SOFT_MAP[c] ?? c)
    .join(" ");
}

/** True in light mode, where the soft skin is used. */
export function useSoft(): boolean {
  return useTheme().theme === "light";
}
