"use client";

import type { ReactNode } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlassBackdrop } from "@/components/ui/glass/GlassUI";
import { useTheme } from "@/lib/ThemeContext";

/**
 * Dark mode: the slate-glass backdrop (the kinetic grid is an opaque canvas, so it can't sit
 * behind frosted glass panels — the sidebar toggle is hidden on this page).
 * Light mode: the usual section background.
 */
export function GlassBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <div className="gl-root relative min-h-screen w-full">
        <GlassBackdrop />
        {children}
      </div>
    );
  }
  return <SectionBackground>{children}</SectionBackground>;
}
