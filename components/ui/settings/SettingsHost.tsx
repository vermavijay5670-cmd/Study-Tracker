"use client";

import { usePathname } from "next/navigation";
import { SettingsDialog } from "./SettingsDialog";
import { useSidebar } from "@/lib/SidebarContext";
import { useTheme } from "@/lib/ThemeContext";

/** Mounted once in the root layout so the dialog survives page/theme re-renders. */
export function SettingsHost() {
  const { settingsOpen, closeSettings } = useSidebar();
  const { theme } = useTheme();
  const pathname = usePathname();
  return <SettingsDialog open={settingsOpen} onClose={closeSettings} kineticAvailable={theme === "dark" && pathname !== "/today"} />;
}
