"use client";

import { DayMarkCalendar } from "./DayMarkCalendar";
import { ThoughtCard } from "./ThoughtCard";
import { useTrackerState } from "@/lib/useTrackerState";

export function MarkYourDaysSection() {
  const { state, hydrated, setDayMark, clearDayMark, setDayNote, addCustomThought } = useTrackerState();

  if (!hydrated) {
    return <div className="py-24 text-center text-sm text-white/50">Loading…</div>;
  }

  return (
    <div className="space-y-6">
      <DayMarkCalendar
        marks={state.dayMarks}
        notes={state.dayNotes}
        onMark={setDayMark}
        onClear={clearDayMark}
        onSaveNote={setDayNote}
      />
      <ThoughtCard customThoughts={state.customThoughts} onAddThought={addCustomThought} />
    </div>
  );
}
