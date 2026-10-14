"use client";

import { Flame } from "lucide-react";
import { SUBJECT_ACCENT, ACCENT_HEX } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftLink } from "@/components/ui/soft/SoftUI";
import { NmBadge, NmCard, NmLink } from "@/components/today/nm/NmUI";

interface StreakPromoCardProps {
  currentStreak: number;
  bestStreak: number;
  totalDone: number;
}

const SUBJECTS: Subject[] = ["phy", "chem", "bio"];
const INITIAL: Record<Subject, string> = { phy: "P", chem: "C", bio: "B" };

export function StreakPromoCard({ currentStreak, bestStreak, totalDone }: StreakPromoCardProps) {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <SoftCard delay={0.05} className="h-full">
        <div className="flex h-full flex-col justify-between">
          <div>
            <span className="sf-badge mb-4">
              <Flame size={19} strokeWidth={1.9} />
            </span>
            <h2 className="sf-title" style={{ fontSize: 22 }}>
              {currentStreak > 0 ? `${currentStreak}-day streak` : "Start a streak"}
            </h2>
            <p className="sf-sub mt-2" style={{ lineHeight: 1.5 }}>
              {currentStreak > 0
                ? `Keep it going — your best run so far is ${bestStreak} days.`
                : "Log some study time today to kick one off."}
            </p>
          </div>

          <div>
            <div className="sf-seals">
              {SUBJECTS.map((s) => (
                <span key={s} className="sf-seal" style={{ "--sf-accent": ACCENT_HEX[SUBJECT_ACCENT[s]] } as React.CSSProperties}>
                  {INITIAL[s]}
                </span>
              ))}
              <span className="sf-seal" style={{ "--sf-accent": "#d8e3ee", color: "#6b7f93" } as React.CSSProperties}>
                +{totalDone}
              </span>
            </div>
            <SoftLink href="/planner" tone="green" className="w-full">
              Open planner
            </SoftLink>
          </div>
        </div>
      </SoftCard>
    );
  }

  return (
    <NmCard delay={0.05} accent="teal" className="h-full">
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-4">
            <NmBadge>
              <Flame size={19} strokeWidth={1.9} />
            </NmBadge>
          </div>
          <h2 className="nm-title" style={{ fontSize: 22 }}>
            {currentStreak > 0 ? `${currentStreak}-day streak` : "Start a streak"}
          </h2>
          <p className="nm-sub mt-2" style={{ lineHeight: 1.5, letterSpacing: 0 }}>
            {currentStreak > 0
              ? `Keep it going — your best run so far is ${bestStreak} days.`
              : "Log some study time today to kick one off."}
          </p>
        </div>

        <div>
          <div className="nm-seals">
            {SUBJECTS.map((s) => (
              <span key={s} className="nm-seal" style={{ "--seal": ACCENT_HEX[SUBJECT_ACCENT[s]] } as React.CSSProperties}>
                {INITIAL[s]}
              </span>
            ))}
            <span className="nm-seal" style={{ "--seal": "rgba(231,233,239,0.5)" } as React.CSSProperties}>
              +{totalDone}
            </span>
          </div>
          <NmLink href="/planner" tone="cyan" className="w-full">
            Open planner
          </NmLink>
        </div>
      </div>
    </NmCard>
  );
}
