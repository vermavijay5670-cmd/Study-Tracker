"use client";

import { useState } from "react";
import { GoalsList } from "./GoalsList";
import { AchievementsCard } from "./AchievementsCard";
import { useTrackerState } from "@/lib/useTrackerState";
import { addDays, dateKey, todayKey } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCountStat } from "@/components/ui/soft/SoftUI";
import { CheckCircle2, Flame, Trophy, Target } from "lucide-react";

export function DailyGoalsSection() {
  const { state, hydrated, addGoal, toggleGoal, deleteGoal, toggleGoalMandatory, goalStats } = useTrackerState();

  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  if (!hydrated) {
    return theme === "light" ? (
      <div className="sf-loading">Loading…</div>
    ) : (
      <div className="py-24 text-center text-sm text-white/50">Loading…</div>
    );
  }

  const today = todayKey();

  // Today plus the next 7 days can be planned; a stale selection (e.g. past midnight) falls back to today.
  const upcoming = Array.from({ length: 8 }, (_, i) => {
    const key = dateKey(addDays(new Date(), i));
    return { key, count: state.dailyGoals[key]?.length ?? 0 };
  });
  const selectedKey = selectedDay && upcoming.some((d) => d.key === selectedDay) ? selectedDay : today;
  const selectedGoals = state.dailyGoals[selectedKey] ?? [];

  const goalsListProps = {
    goals: selectedGoals,
    selectedKey,
    upcoming,
    onSelect: setSelectedDay,
    onAdd: addGoal,
    onToggle: (id: string) => toggleGoal(id, selectedKey),
    onDelete: (id: string) => deleteGoal(id, selectedKey),
    onToggleMandatory: (id: string) => toggleGoalMandatory(id, selectedKey),
  };

  if (theme === "light") {
    const todayPct = goalStats.todayTotal > 0 ? Math.round((goalStats.todayDone / goalStats.todayTotal) * 100) : 0;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 min-[1480px]:grid-cols-4">
          <SoftCountStat
            label="Today"
            value={goalStats.todayDone}
            suffix={`/${goalStats.todayTotal}`}
            sub={`${todayPct}% complete`}
            icon={CheckCircle2}
            delay={0}
          />
          <SoftCountStat label="Perfect streak" value={goalStats.currentStreak} suffix="d" sub={`best: ${goalStats.bestStreak}d`} icon={Flame} delay={0.05} />
          <SoftCountStat label="Perfect days" value={goalStats.perfectDayCount} sub="all goals done" icon={Trophy} delay={0.1} />
          <SoftCountStat
            label="All-time"
            value={goalStats.totalCompleted}
            suffix={`/${goalStats.totalGoals}`}
            sub={goalStats.mandatoryTotal > 0 ? `mandatory: ${goalStats.mandatoryDone}/${goalStats.mandatoryTotal}` : "goals completed"}
            icon={Target}
            delay={0.15}
          />
        </div>

        <GoalsList {...goalsListProps} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <GoalsList {...goalsListProps} />

      <AchievementsCard
        currentStreak={goalStats.currentStreak}
        bestStreak={goalStats.bestStreak}
        perfectDayCount={goalStats.perfectDayCount}
        todayDone={goalStats.todayDone}
        todayTotal={goalStats.todayTotal}
        totalCompleted={goalStats.totalCompleted}
        totalGoals={goalStats.totalGoals}
        mandatoryDone={goalStats.mandatoryDone}
        mandatoryTotal={goalStats.mandatoryTotal}
      />
    </div>
  );
}
