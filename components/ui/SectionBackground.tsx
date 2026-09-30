"use client";

import type { ReactNode } from "react";
import KineticGrid from "./kinetic-grid";
import { MatteGrainBackdrop } from "./MatteGrainBackdrop";
import { LightBackdrop } from "./LightBackdrop";
import { useKineticGrid } from "@/lib/KineticGridContext";
import { useTheme } from "@/lib/ThemeContext";

/**
 * Background wrapper for every section page except Today. In light mode it
 * always shows the light paper backdrop (the kinetic grid is a dark-only
 * visual for now). In dark mode, which background renders is driven by the
 * shared KineticGridContext, so it always matches the toggle in PageShell's
 * sidebar.
 */
export function SectionBackground({ children }: { children: ReactNode }) {
  const { enabled } = useKineticGrid();
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <div className="relative min-h-screen w-full">
        <LightBackdrop />
        {children}
      </div>
    );
  }

  if (enabled) {
    return <KineticGrid>{children}</KineticGrid>;
  }

  return (
    <div className="relative min-h-screen w-full">
      <MatteGrainBackdrop />
      {children}
    </div>
  );
}
