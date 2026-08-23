"use client";

import { GoalsList } from "./GoalsList";
import { ThoughtCard } from "./ThoughtCard";
import { useTrackerState } from "@/lib/useTrackerState";
import { todayKey } from "@/lib/date-utils";

export function DailyGoalsSection() {
  const { state, hydrated, addGoal, toggleGoal, deleteGoal, addCustomThought } = useTrackerState();

  if (!hydrated) {
    return <div className="py-24 text-center text-sm text-white/50">Loading…</div>;
  }

  const todaysGoals = state.dailyGoals[todayKey()] ?? [];

  return (
    <div className="space-y-6">
      <GoalsList goals={todaysGoals} onAdd={addGoal} onToggle={toggleGoal} onDelete={deleteGoal} />
      <ThoughtCard customThoughts={state.customThoughts} onAddThought={addCustomThought} />
    </div>
  );
}
