"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, X, CalendarCheck, StickyNote } from "lucide-react";
import { dateKey, todayKey } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { S } from "@/lib/softClass";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmBadge, NmCard, NmRound } from "@/components/today/nm/NmUI";
import { TestsPanel } from "./TestsPanel";
import type { TestEvent } from "@/lib/types";

interface DayMarkCalendarProps {
  marks: Record<string, "tick" | "cross">;
  notes: Record<string, string>;
  onMark: (dateKey: string, mark: "tick" | "cross") => void;
  onClear: (dateKey: string) => void;
  onSaveNote: (dateKey: string, note: string) => void;
  tests: TestEvent[];
  onAddTest: (date: string, title: string) => string | null;
  onDeleteTest: (id: string) => void;
  onAddSyllabusItems: (id: string, raw: string) => string | null;
  onToggleSyllabusItem: (id: string, itemId: number) => void;
  onDeleteSyllabusItem: (id: string, itemId: number) => void;
}

export function DayMarkCalendar({ marks, notes, onMark, onClear, onSaveNote, tests, onAddTest, onDeleteTest, onAddSyllabusItems, onToggleSyllabusItem, onDeleteSyllabusItem }: DayMarkCalendarProps) {
  const { theme } = useTheme();
  const soft = theme === "light";
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay();
  const monthLabel = firstOfMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const todaysKey = todayKey();

  useEffect(() => {
    setNoteDraft(openDay ? notes[openDay] ?? "" : "");
    // Only reset the draft when a different day is opened, not on every `notes` update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDay]);

  function closeDay() {
    if (openDay && noteDraft !== (notes[openDay] ?? "")) {
      onSaveNote(openDay, noteDraft);
    }
    setOpenDay(null);
  }

  function goPrev() {
    closeDay();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }
  function goNext() {
    closeDay();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  const cells: (number | null)[] = [
    ...Array(startWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const tickCount = Object.values(marks).filter((m) => m === "tick").length;
  const crossCount = Object.values(marks).filter((m) => m === "cross").length;
  const openDate = openDay ? new Date(`${openDay}T00:00:00`) : null;
  const openMark = openDay ? marks[openDay] : undefined;

  const dayDialog = (
  <AnimatePresence>
    {openDay && openDate && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm ${soft ? "bg-[#5b686e]/35" : "bg-black/65 nm-acc-teal"}`}
        onClick={closeDay}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className={soft ? "relative max-h-[88vh] w-full max-w-[380px] overflow-y-auto rounded-2xl p-6 text-center sf-card" : "nm-dialog"}
        >
          <button
            onClick={closeDay}
            aria-label="Close"
            className={soft ? S("absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-white/30 transition-colors hover:bg-white/[0.06] hover:text-white/70", soft) : "nm-round nm-round--sm absolute right-3 top-3"}
          >
            <X size={14} strokeWidth={2} />
          </button>

          <p className={S("mb-1 text-[11px] uppercase tracking-wide text-white/40", soft)}>Mark this day</p>
          <p className={S("mb-5 text-[16px] font-medium text-white", soft)}>
            {openDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => onMark(openDay, "tick")}
              aria-label="Mark as tick"
              aria-pressed={openMark === "tick"}
              className={soft ? "flex h-16 w-16 items-center justify-center rounded-2xl text-[#6FB37A] transition-transform hover:scale-105" : "nm-markbtn nm-markbtn--tick"}
              style={soft ? { background: "#6FB37A18", boxShadow: openMark === "tick" ? "0 0 0 2px #6FB37Aaa" : "none" } : undefined}
            >
              <Check size={28} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => onMark(openDay, "cross")}
              aria-label="Mark as cross"
              aria-pressed={openMark === "cross"}
              className={soft ? "flex h-16 w-16 items-center justify-center rounded-2xl text-[#E0766B] transition-transform hover:scale-105" : "nm-markbtn nm-markbtn--cross"}
              style={soft ? { background: "#E0766B18", boxShadow: openMark === "cross" ? "0 0 0 2px #E0766Baa" : "none" } : undefined}
            >
              <X size={28} strokeWidth={2.5} />
            </button>
          </div>
          {marks[openDay] && (
            <button
              onClick={() => onClear(openDay)}
              className={S("mt-3 text-[12px] text-white/30 transition-colors hover:text-white/60", soft)}
            >
              Clear mark
            </button>
          )}

          <div className={soft ? S("mt-5 border-t border-white/10 pt-4 text-left", soft) : "nm-rule-top mt-5 pt-4 text-left"}>
            <label className={S("mb-1.5 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-white/40", soft)}>
              <StickyNote size={11} strokeWidth={1.75} /> note
            </label>
            <textarea
              autoFocus={false}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              onBlur={() => {
                if (openDay && noteDraft !== (notes[openDay] ?? "")) onSaveNote(openDay, noteDraft);
              }}
              placeholder="What happened today?"
              rows={3}
              className={soft ? S("w-full resize-none rounded-xl border border-white/12 bg-black/30 px-3 py-2 text-[12.5px] leading-relaxed text-white/85 outline-none transition-colors placeholder:text-white/30 focus:border-[#6FA8A3]/45", soft) : "nm-note resize-none"}
            />
          </div>

          <div className={soft ? "mt-5 border-t border-white/10 pt-4 text-left" : "nm-rule-top mt-5 pt-4 text-left"}>
            <TestsPanel
              px={soft ? "sf" : "nm"}
              date={openDay}
              tests={tests}
              onAddTest={onAddTest}
              onDeleteTest={onDeleteTest}
              onAddItems={onAddSyllabusItems}
              onToggleItem={onToggleSyllabusItem}
              onDeleteItem={onDeleteSyllabusItem}
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

  if (soft) {
    return (
      <>
        <SoftCard>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="sf-badge" style={{ width: 38, height: 38 }}>
                <CalendarCheck size={17} strokeWidth={1.9} />
              </span>
              <span className="sf-cap">Mark your days</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="sf-trend is-up">{tickCount} good</span>
              <span className="sf-trend is-down">{crossCount} bad</span>
            </div>
          </div>

          <div className="mb-6 mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3">
            <button onClick={goPrev} aria-label="Previous month" className="sf-round-btn">
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <h2 className="sf-title text-center" aria-live="polite">{monthLabel}</h2>
            <button onClick={goNext} aria-label="Next month" className="sf-round-btn">
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>

          <div className="sf-week" aria-hidden>
            {weekdays.map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>

          <div className="sf-days">
            {cells.map((day, i) => {
              if (day === null) return <div key={i} />;
              const key = dateKey(new Date(viewYear, viewMonth, day));
              const mark = marks[key];
              const hasNote = Boolean(notes[key]?.trim());
              const hasTest = tests.some((t) => t.date === key);
              const isToday = key === todaysKey;
              return (
                <button
                  key={i}
                  onClick={() => setOpenDay(key)}
                  aria-label={`${key}${mark ? (mark === "tick" ? ", marked good" : ", marked bad") : ""}${hasNote ? ", has a note" : ""}${hasTest ? ", has a test" : ""}`}
                  aria-current={isToday ? "date" : undefined}
                  className={`sf-day ${isToday ? "is-today" : ""} ${mark === "tick" ? "is-tick" : ""} ${mark === "cross" ? "is-cross" : ""}`}
                >
                  {mark === "tick" ? (
                    <Check size={20} strokeWidth={2.6} />
                  ) : mark === "cross" ? (
                    <X size={20} strokeWidth={2.6} />
                  ) : (
                    day
                  )}
                  {hasNote && <span aria-hidden className="sf-day__note" />}
                  {hasTest && <span aria-hidden className="sf-day__test" data-past={key < todaysKey} />}
                </button>
              );
            })}
          </div>
        </SoftCard>

        {dayDialog}
      </>
    );
  }

  // Dark: the light layout in the dark theme (Mark Your Days' sidebar colour: teal).
  return (
    <>
      <NmCard accent="teal">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <NmBadge>
              <CalendarCheck size={17} strokeWidth={1.9} />
            </NmBadge>
            <span className="nm-cap">Mark your days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="nm-trend is-up">{tickCount} good</span>
            <span className="nm-trend is-down">{crossCount} bad</span>
          </div>
        </div>

        <div className="mb-6 mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3">
          <NmRound size="md" onClick={goPrev} aria-label="Previous month">
            <ChevronLeft size={20} strokeWidth={2} />
          </NmRound>
          <h2 className="nm-title text-center" style={{ fontSize: 22 }} aria-live="polite">{monthLabel}</h2>
          <NmRound size="md" onClick={goNext} aria-label="Next month">
            <ChevronRight size={20} strokeWidth={2} />
          </NmRound>
        </div>

        <div className="nm-week" aria-hidden>
          {weekdays.map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>

        <div className="nm-days">
          {cells.map((day, i) => {
            if (day === null) return <div key={i} />;
            const key = dateKey(new Date(viewYear, viewMonth, day));
            const mark = marks[key];
            const hasNote = Boolean(notes[key]?.trim());
            const hasTest = tests.some((t) => t.date === key);
            const isToday = key === todaysKey;
            return (
              <button
                key={i}
                onClick={() => setOpenDay(key)}
                aria-label={`${key}${mark ? (mark === "tick" ? ", marked good" : ", marked bad") : ""}${hasNote ? ", has a note" : ""}${hasTest ? ", has a test" : ""}`}
                aria-current={isToday ? "date" : undefined}
                className={`nm-day ${isToday ? "is-today" : ""} ${mark === "tick" ? "is-tick" : ""} ${mark === "cross" ? "is-cross" : ""}`}
              >
                {mark === "tick" ? <Check size={20} strokeWidth={2.6} /> : mark === "cross" ? <X size={20} strokeWidth={2.6} /> : day}
                {hasNote && <span aria-hidden className="nm-day__note" />}
                {hasTest && <span aria-hidden className="nm-day__test" data-past={key < todaysKey} />}
              </button>
            );
          })}
        </div>
      </NmCard>

      {dayDialog}
    </>
  );
}
