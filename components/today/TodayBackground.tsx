"use client";

import type { ReactNode } from "react";
import { CrumpledPaperBackdrop } from "@/components/ui/CrumpledPaperBackdrop";
import { SoftBackdrop } from "@/components/ui/soft/SoftUI";
import { useTheme } from "@/lib/ThemeContext";

/** Light mode: the soft pale backdrop. Dark mode: the crumpled-paper backdrop (unchanged). */
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
  return (
    <>
      <CrumpledPaperBackdrop />
      {children}
    </>
  );
}
