"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const KEY = "st_kinetic_grid_enabled";

interface KineticGridContextValue {
  enabled: boolean;
  setEnabled: (next: boolean) => void;
}

const KineticGridContext = createContext<KineticGridContextValue>({
  enabled: true,
  setEnabled: () => {},
});

/**
 * Remembers whether the animated kinetic-grid background is on, per device,
 * shared between the sidebar's toggle switch and every section page's
 * background so they can never fall out of sync. Defaults to true (current
 * behavior) until localStorage is read on mount, so pages render the same on
 * the server and on first paint.
 */
export function KineticGridProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored !== null) setEnabledState(stored === "1");
    } catch {
      // localStorage unavailable — just keep the default.
    }
  }, []);

  const setEnabled = useCallback((next: boolean) => {
    setEnabledState(next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
  }, []);

  return <KineticGridContext.Provider value={{ enabled, setEnabled }}>{children}</KineticGridContext.Provider>;
}

export function useKineticGrid() {
  return useContext(KineticGridContext);
}
