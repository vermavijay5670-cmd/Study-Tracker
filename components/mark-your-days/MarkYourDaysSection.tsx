"use client";

import { DayMarkCalendar } from "./DayMarkCalendar";
import { ThoughtCard } from "./ThoughtCard";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";

export function MarkYourDaysSection() {
  const { state, hydrated, setDayMark, clearDayMark, setDayNote, addCustomThought } = useTrackerState();

  const { theme } = useTheme();

  if (!hydrated) {
    return <div className={theme === "light" ? "sf-loading" : "py-24 text-center text-sm text-white/50"}>Loading…</div>;
  }

  return (
    <div className={theme === "light" ? "space-y-6" : "space-y-6"}>
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
