"use client";

import type { ReactNode } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { SoftBackdrop } from "@/components/ui/soft/SoftUI";
import { useTheme } from "@/lib/ThemeContext";

/** Light mode: the soft neumorphic backdrop. Dark mode: the usual section background. */
export function StudyLogBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  if (theme === "light") {
    return (
      <div className="sf-root relative min-h-screen w-full">
        <SoftBackdrop />
        {children}
      </div>
    );
  }
  return <SectionBackground>{children}</SectionBackground>;
}
