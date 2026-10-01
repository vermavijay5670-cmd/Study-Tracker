"use client";

import { BalanceChart } from "./BalanceChart";
import { SubjectCardsPanel } from "./SubjectCardsPanel";
import { StreakPromoCard } from "./StreakPromoCard";
import { RevisionBarChart } from "./RevisionBarChart";
import { RecentActivityList } from "./RecentActivityList";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";
import type { Subject } from "@/lib/types";

const SUBJECTS: Subject[] = ["phy", "chem", "bio"];

export function DashboardSection() {
  const { state, hydrated, streaks, totalDays, totalHoursLogged, getSubjectStats, getChapterState, getRecentActivity } =
    useTrackerState();

  const { theme } = useTheme();
  const isLight = theme === "light";

  if (!hydrated) {
    return isLight ? (
      <div className="dk-loading">Loading…</div>
    ) : (
      <div className="py-24 text-center text-sm text-white/50">Loading…</div>
    );
  }

  const perSubject = SUBJECTS.map((s) => ({ subject: s, ...getSubjectStats(s) }));
  const totalDone = perSubject.reduce((a, s) => a + s.done, 0);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] ${isLight ? "gap-9" : "gap-5"}`}>
      {/* ---- left column ---- */}
      <div className={isLight ? "space-y-9" : "space-y-5"}>
        <BalanceChart log={state.log} startDate={state.startDate} totalHoursLogged={totalHoursLogged} totalDays={totalDays} />

        <div className={`grid grid-cols-1 sm:grid-cols-[260px_minmax(0,1fr)] ${isLight ? "gap-9" : "gap-5"}`}>
          <StreakPromoCard currentStreak={streaks.current} bestStreak={streaks.best} totalDone={totalDone} />
          <RevisionBarChart getChapterState={getChapterState} />
        </div>
      </div>

      {/* ---- right column ---- */}
      <div className={isLight ? "space-y-9" : "space-y-5"}>
        <SubjectCardsPanel perSubject={perSubject} />
        <RecentActivityList activity={getRecentActivity(6)} />
      </div>
    </div>
  );
}
