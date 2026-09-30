"use client";

import { CrumpledPaperBackdrop } from "./CrumpledPaperBackdrop";
import { LightBackdrop } from "./LightBackdrop";
import { useTheme } from "@/lib/ThemeContext";

export function TodayBackdrop() {
  const { theme } = useTheme();
  return theme === "light" ? <LightBackdrop /> : <CrumpledPaperBackdrop />;
}
