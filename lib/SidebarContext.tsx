"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const KEY = "st_sidebar_expanded";

interface SidebarContextValue {
  expanded: boolean;
  setExpanded: (next: boolean) => void;
  toggle: () => void;
  /** Settings dialog (lives here so it stays open when a theme switch remounts the page). */
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  expanded: false,
  setExpanded: () => {},
  toggle: () => {},
  settingsOpen: false,
  openSettings: () => {},
  closeSettings: () => {},
});

/**
 * Remembers whether the desktop sidebar is expanded or collapsed to the slim rail.
 * Lives in the root layout so the choice survives navigating between sections.
 * Starts collapsed (same on server and first paint), then restores the saved choice.
 */
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpandedState] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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

  const openSettings = useCallback(() => setSettingsOpen(true), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded, toggle, settingsOpen, openSettings, closeSettings }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
