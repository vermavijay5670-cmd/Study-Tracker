"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${className}`}
      style={{
        borderColor: isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.1)",
        background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
        color: isLight ? "#525252" : "rgba(255,255,255,0.65)",
      }}
    >
      {isLight ? <Sun size={14} strokeWidth={1.75} /> : <Moon size={14} strokeWidth={1.75} />}
    </button>
  );
}
