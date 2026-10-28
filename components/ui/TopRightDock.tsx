"use client";

import { usePathname } from "next/navigation";
import { TestReminderHost } from "@/components/tests/TestReminderHost";
import { StopwatchToggle } from "./StopwatchToggle";
import { useTheme } from "@/lib/ThemeContext";

const HIDDEN_ON = ["/login", "/signup", "/forgot-password", "/auth/set-password", "/auth/reset-password", "/auth/callback"];

/** Top-right corner of every page: the next-test chip (when a test is scheduled) and the stopwatch start/pause toggle. */
export function TopRightDock() {
  const pathname = usePathname();
  const { theme } = useTheme();
  if (HIDDEN_ON.includes(pathname)) return null;
  return (
    <div className={`td-dock ${theme === "light" ? "" : "nm-vars"}`}>
      <TestReminderHost />
      <StopwatchToggle />
    </div>
  );
}
