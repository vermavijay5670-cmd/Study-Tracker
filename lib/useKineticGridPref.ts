"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "st_kinetic_grid_enabled";

/**
 * Remembers whether the animated kinetic-grid background is on, per device.
 * Defaults to true (current behavior) until localStorage is read on mount,
 * so pages render the same on the server and on first paint.
 */
export function useKineticGridPref(): [boolean, (next: boolean) => void] {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored !== null) setEnabled(stored === "1");
    } catch {
      // localStorage unavailable — just keep the default.
    }
  }, []);

  const update = useCallback((next: boolean) => {
    setEnabled(next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
  }, []);

  return [enabled, update];
}
