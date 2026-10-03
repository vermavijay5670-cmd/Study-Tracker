"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const KEY = "st_sidebar_expanded";

interface SidebarContextValue {
  expanded: boolean;
  setExpanded: (next: boolean) => void;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  expanded: false,
  setExpanded: () => {},
  toggle: () => {},
});

/**
 * Remembers whether the desktop sidebar is expanded or collapsed to the slim rail.
 * Lives in the root layout so the choice survives navigating between sections.
 * Starts collapsed (same on server and first paint), then restores the saved choice.
 */
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpandedState] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === "1") setExpandedState(true);
    } catch {
      // localStorage unavailable — keep the default.
    }
  }, []);

  const setExpanded = useCallback((next: boolean) => {
    setExpandedState(next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setExpandedState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(KEY, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return <SidebarContext.Provider value={{ expanded, setExpanded, toggle }}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  return useContext(SidebarContext);
}
