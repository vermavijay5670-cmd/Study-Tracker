"use client";

import type { ReactNode } from "react";
import { SoftBackground } from "@/components/ui/soft/SoftBackground";
import { useTheme } from "@/lib/ThemeContext";
import "@/components/today/nm/nm.css";

/** Light mode: the soft pale backdrop. Dark mode: flat charcoal with the dark-neumorphism look (same as the Today page). */
export function DashboardBackground({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  if (theme === "light") return <SoftBackground>{children}</SoftBackground>;
  return <div className="nm-scope">{children}</div>;
}
