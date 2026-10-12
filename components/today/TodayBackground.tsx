"use client";

import type { ReactNode } from "react";
import { SoftBackdrop } from "@/components/ui/soft/SoftUI";
import { useTheme } from "@/lib/ThemeContext";
import "./nm/nm.css";

/** Light mode: the soft pale backdrop. Dark mode: flat charcoal with the dark-neumorphism (cyan) look. */
export function TodayBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  if (theme === "light") {
    return (
      <div className="sf-root relative min-h-screen w-full">
        <SoftBackdrop />
        {children}
      </div>
    );
  }
  return <div className="nm-scope">{children}</div>;
}
