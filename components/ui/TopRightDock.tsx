"use client";

import { usePathname } from "next/navigation";
import { TestReminderHost } from "@/components/tests/TestReminderHost";
import { StopwatchToggle } from "./StopwatchToggle";
import { useTheme } from "@/lib/ThemeContext";
import { isAppRoute } from "@/lib/appRoutes";

/** Top-right corner of every page: the next-test chip (when a test is scheduled) and the stopwatch start/pause toggle. */
export function TopRightDock() {
  const pathname = usePathname();
  const { theme } = useTheme();
  if (!isAppRoute(pathname)) return null; // not on the landing / login pages
  return (
    <div className={`td-dock ${theme === "light" ? "" : "nm-vars"}`}>
      <TestReminderHost />
      <StopwatchToggle />
    </div>
  );
}
