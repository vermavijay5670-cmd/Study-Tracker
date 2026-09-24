"use client";

import type { ReactNode } from "react";
import KineticGrid from "./kinetic-grid";
import { MatteGrainBackdrop } from "./MatteGrainBackdrop";
import { useKineticGrid } from "@/lib/KineticGridContext";

/**
 * Background wrapper for every section page except Today. Which background
 * renders is driven by the shared KineticGridContext, so it always matches
 * the toggle in PageShell's sidebar.
 */
export function SectionBackground({ children }: { children: ReactNode }) {
  const { enabled } = useKineticGrid();

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
