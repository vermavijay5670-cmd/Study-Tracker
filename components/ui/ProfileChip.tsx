"use client";

import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";

interface ProfileChipProps {
  studentName: string;
  targetExam: string;
}

export function ProfileChip({ studentName, targetExam }: ProfileChipProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  if (!studentName) {
    return (
      <Link
        href="/#profile-form"
        className="flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[12px] transition-colors"
        style={{
          borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
          background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
          color: isLight ? "#737373" : "rgba(255,255,255,0.4)",
        }}
      >
        + Add your name
      </Link>
    );
  }

  const initial = studentName.trim().charAt(0).toUpperCase() || "?";

  return (
    <Link
      href="/#profile-form"
      className="flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-3.5 transition-colors"
      style={{
        borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
        background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
      }}
    >
      <span
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-black"
        style={{ background: "linear-gradient(135deg,#A855F7,#38BDF8)" }}
      >
        {initial}
      </span>
      <span className="min-w-0 text-left">
        <span
          className="block max-w-[120px] truncate text-[13px] font-medium"
          style={{ color: isLight ? "#171717" : "#ffffff" }}
        >
          {studentName}
        </span>
        {targetExam && (
          <span
            className="block max-w-[120px] truncate text-[10px]"
            style={{ color: isLight ? "#737373" : "rgba(255,255,255,0.4)" }}
          >
            {targetExam}
          </span>
        )}
      </span>
    </Link>
  );
}
