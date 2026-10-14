"use client";

import { SettingsDialog } from "./SettingsDialog";
import { useSidebar } from "@/lib/SidebarContext";

/** Mounted once in the root layout so the dialog survives page/theme re-renders. */
export function SettingsHost() {
  const { settingsOpen, closeSettings } = useSidebar();
  return <SettingsDialog open={settingsOpen} onClose={closeSettings} />;
}
