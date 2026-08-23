"use client";

import { GoalsList } from "./GoalsList";
import { ThoughtCard } from "./ThoughtCard";
import { AchievementsCard } from "./AchievementsCard";
import { useTrackerState } from "@/lib/useTrackerState";
import { todayKey } from "@/lib/date-utils";

export function DailyGoalsSection() {
  const {
    state,
    hydrated,
    addGoal,
    toggleGoal,
    deleteGoal,
    toggleGoalMandatory,
    addCustomThought,
    goalStats,
  } = useTrackerState();

  if (!hydrated) {
    return <div className="py-24 text-center text-sm text-white/50">Loading…</div>;
  }

  const todaysGoals = state.dailyGoals[todayKey()] ?? [];

  return (
    <div className="space-y-6">
      <GoalsList
        goals={todaysGoals}
        onAdd={addGoal}
        onToggle={toggleGoal}
        onDelete={deleteGoal}
        onToggleMandatory={toggleGoalMandatory}
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <div className="lg:flex-1">
          <ThoughtCard customThoughts={state.customThoughts} onAddThought={addCustomThought} />
        </div>
        <div className="lg:flex-1">
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
      </div>
    </div>
  );
}
