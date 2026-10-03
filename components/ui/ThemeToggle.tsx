"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  /** "desk" = brass push-button used on the leather sidebar. */
  variant?: "default" | "desk" | "soft" | "glass" | "bk";
}

export function ThemeToggle({ className = "", variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={
        variant === "desk"
          ? `dk-round-btn ${className}`
          : variant === "soft"
          ? `sf-round-btn sf-round-btn--dark ${className}`
          : variant === "glass"
          ? `gl-round-btn ${className}`
          : variant === "bk"
          ? `bk-round-btn ${className}`
          : `flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${className}`
      }
      style={
        variant === "desk" || variant === "soft" || variant === "glass" || variant === "bk"
          ? undefined
          : {
              borderColor: isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.1)",
              background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
              color: isLight ? "#525252" : "rgba(255,255,255,0.65)",
            }
      }
    >
      {isLight ? <Sun size={14} strokeWidth={1.75} /> : <Moon size={14} strokeWidth={1.75} />}
    </button>
  );
}
