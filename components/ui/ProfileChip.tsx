"use client";

import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";

interface ProfileChipProps {
  studentName: string;
  targetExam: string;
  /** Leather-sidebar styling used by the light-mode Today desk. */
  desk?: boolean;
  /** Soft neumorphic styling used by the light-mode Study Log. */
  soft?: boolean;
  /** Slate-glass styling used by the light-mode Mark Your Days page. */
  glass?: boolean;
}

export function ProfileChip({ studentName, targetExam, desk = false, soft = false, glass = false }: ProfileChipProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  if (glass) {
    const name = studentName.trim();
    return (
      <Link href="/#profile-form" className="gl-profile">
        <span className="gl-avatar">{name ? name.charAt(0).toUpperCase() : "+"}</span>
        <span className="min-w-0 text-left">
          <span className="block max-w-[120px] truncate text-[15px] font-semibold">{name || "Add your name"}</span>
          {name && targetExam && (
            <span className="block max-w-[120px] truncate text-[11px] uppercase tracking-wide" style={{ color: "#9fb0bc" }}>
              {targetExam}
            </span>
          )}
        </span>
      </Link>
    );
  }

  if (soft) {
    const name = studentName.trim();
    return (
      <Link href="/#profile-form" className="sf-profile">
        <span className="sf-avatar">
          {name ? name.charAt(0).toUpperCase() : "+"}
          <i className="sf-avatar__dot" />
        </span>
        <span className="min-w-0 text-left">
          <span className="block max-w-[120px] truncate text-[14px] font-semibold">{name || "Add your name"}</span>
          {name && targetExam && (
            <span className="block max-w-[120px] truncate text-[10px] uppercase tracking-wide opacity-60">{targetExam}</span>
          )}
        </span>
      </Link>
    );
  }

  if (desk) {
    const name = studentName.trim();
    return (
      <Link href="/#profile-form" className="dk-profile">
        <span className="dk-avatar">{name ? name.charAt(0).toUpperCase() : "+"}</span>
        <span className="min-w-0 text-left">
          <span className="block max-w-[120px] truncate text-[14px] font-semibold">
            {name || "Add your name"}
          </span>
          {name && targetExam && (
            <span className="block max-w-[120px] truncate text-[10px] uppercase tracking-wide" style={{ color: "#c9b07a" }}>
              {targetExam}
            </span>
          )}
        </span>
      </Link>
    );
  }

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
