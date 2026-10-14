"use client";

import type { ReactNode } from "react";
import { MatteGrainBackdrop } from "./MatteGrainBackdrop";
import { LightBackdrop } from "./LightBackdrop";
import { useTheme } from "@/lib/ThemeContext";

/** Background wrapper for section pages: the light backdrop in light mode, the matte grain backdrop in dark mode. */
export function SectionBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen w-full">
      {theme === "light" ? <LightBackdrop /> : <MatteGrainBackdrop />}
      {children}
    </div>
  );
}
