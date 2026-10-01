"use client";

import type { ReactNode } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { DeskBackdrop } from "@/components/ui/DeskBackdrop";
import { useTheme } from "@/lib/ThemeContext";

/** Light mode: the walnut study desk. Dark mode: the usual section background. */
export function DashboardBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  if (theme === "light") {
    return (
      <div className="relative min-h-screen w-full">
        <DeskBackdrop />
        {children}
      </div>
    );
  }
  return <SectionBackground>{children}</SectionBackground>;
}
