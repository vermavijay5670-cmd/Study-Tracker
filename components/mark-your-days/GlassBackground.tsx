"use client";

import type { ReactNode } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { GlassBackdrop } from "@/components/ui/glass/GlassUI";
import { useTheme } from "@/lib/ThemeContext";

/**
 * Light mode: the slate-glass backdrop (frosted panels need a smooth background, so the
 * kinetic grid isn't used here).
 * Dark mode: the original section background (kinetic grid / matte), unchanged.
 */
export function GlassBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <div className="gl-root relative min-h-screen w-full">
        <GlassBackdrop />
        {children}
      </div>
    );
  }
  return <SectionBackground>{children}</SectionBackground>;
}
