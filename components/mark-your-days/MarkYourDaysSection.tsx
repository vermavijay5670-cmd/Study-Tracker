"use client";

import { DayMarkCalendar } from "./DayMarkCalendar";
import { ThoughtCard } from "./ThoughtCard";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";

export function MarkYourDaysSection() {
  const { state, hydrated, setDayMark, clearDayMark, setDayNote, addCustomThought, addTest, deleteTest, addSyllabusItems, toggleSyllabusItem, deleteSyllabusItem } = useTrackerState();

  const { theme } = useTheme();

  if (!hydrated) {
    return <div className={theme === "light" ? "sf-loading" : "nm-loading"}>Loading…</div>;
  }

  return (
    <div className="space-y-6">
      <DayMarkCalendar
        marks={state.dayMarks}
        notes={state.dayNotes}
        onMark={setDayMark}
        onClear={clearDayMark}
        onSaveNote={setDayNote}
        tests={state.tests}
        onAddTest={addTest}
        onDeleteTest={deleteTest}
        onAddSyllabusItems={addSyllabusItems}
        onToggleSyllabusItem={toggleSyllabusItem}
        onDeleteSyllabusItem={deleteSyllabusItem}
      />
      <ThoughtCard customThoughts={state.customThoughts} onAddThought={addCustomThought} />
    </div>
  );
}
