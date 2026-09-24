"use client";

import type { ReactNode } from "react";
import KineticGrid from "./kinetic-grid";
import { MatteGrainBackdrop } from "./MatteGrainBackdrop";
import { BackgroundToggle } from "./BackgroundToggle";
import { useKineticGridPref } from "@/lib/useKineticGridPref";

export function SectionBackground({ children }: { children: ReactNode }) {
  const [kineticOn, setKineticOn] = useKineticGridPref();

  return (
    <>
      {kineticOn ? (
        <KineticGrid>{children}</KineticGrid>
      ) : (
        <div className="relative min-h-screen w-full">
          <MatteGrainBackdrop />
          {children}
        </div>
      )}
      <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} />
    </>
  );
}
