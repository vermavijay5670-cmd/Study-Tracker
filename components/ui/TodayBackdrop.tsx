"use client";

import { CrumpledPaperBackdrop } from "./CrumpledPaperBackdrop";
import { DeskBackdrop } from "./DeskBackdrop";
import { useTheme } from "@/lib/ThemeContext";

export function TodayBackdrop() {
  const { theme } = useTheme();
  return theme === "light" ? <DeskBackdrop /> : <CrumpledPaperBackdrop />;
}
