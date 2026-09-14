"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, X, CalendarCheck } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { dateKey, todayKey } from "@/lib/date-utils";

interface DayMarkCalendarProps {
  marks: Record<string, "tick" | "cross">;
  onMark: (dateKey: string, mark: "tick" | "cross") => void;
  onClear: (dateKey: string) => void;
}

export function DayMarkCalendar({ marks, onMark, onClear }: DayMarkCalendarProps) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [openDay, setOpenDay] = useState<string | null>(null);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay();
  const monthLabel = firstOfMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const todaysKey = todayKey();

  function goPrev() {
    setOpenDay(null);
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }
  function goNext() {
    setOpenDay(null);
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

  return (
    <>
      <GlowCard accent="cyan" variant="tilt">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#46FFE8]/30 bg-[#46FFE8]/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#46FFE8]">
            <CalendarCheck size={11} strokeWidth={1.75} /> mark your days
          </span>
          <span className="text-[10px] text-white/40">
            <span className="text-[#41FF72]">{tickCount} good</span> · <span className="text-[#FF6B6B]">{crossCount} bad</span>
          </span>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={goPrev}
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:text-white"
          >
            <ChevronLeft size={15} strokeWidth={1.75} />
          </button>
          <span className="text-[14px] font-medium text-white">{monthLabel}</span>
          <button
            onClick={goNext}
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:text-white"
          >
            <ChevronRight size={15} strokeWidth={1.75} />
          </button>
        </div>

        <div className="mb-1.5 grid grid-cols-7 gap-1.5 text-center text-[10px] text-white/35">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {cells.map((day, i) => {
            if (day === null) return <div key={i} />;
            const key = dateKey(new Date(viewYear, viewMonth, day));
            const mark = marks[key];
            const isToday = key === todaysKey;
            return (
              <button
                key={i}
                onClick={() => setOpenDay(key)}
                className="flex h-9 w-full items-center justify-center rounded-lg border text-[12.5px] font-medium transition-transform hover:scale-105"
                style={{
                  borderColor:
                    mark === "tick" ? "#41FF7266" : mark === "cross" ? "#FF6B6B66" : isToday ? "#46FFE855" : "rgba(255,255,255,0.08)",
                  background:
                    mark === "tick" ? "#41FF7218" : mark === "cross" ? "#FF6B6B18" : isToday ? "#46FFE812" : "rgba(255,255,255,0.02)",
                  color: mark === "tick" ? "#8CFFA8" : mark === "cross" ? "#FF9E9E" : "rgba(255,255,255,0.75)",
                }}
              >
                {mark === "tick" ? (
                  <Check size={14} strokeWidth={2.5} />
                ) : mark === "cross" ? (
                  <X size={14} strokeWidth={2.5} />
                ) : (
                  day
                )}
              </button>
            );
          })}
        </div>
      </GlowCard>

      {/* Rendered as a sibling, not nested inside GlowCard — its tilt transform would
          otherwise turn this fixed overlay into a clipped, mis-positioned element. */}
      <AnimatePresence>
        {openDay && openDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpenDay(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[280px] rounded-2xl border border-white/12 bg-[#161618] p-6 text-center shadow-2xl"
            >
              <p className="mb-1 text-[11px] uppercase tracking-wide text-white/40">Mark this day</p>
              <p className="mb-5 text-[16px] font-medium text-white">
                {openDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              </p>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    onMark(openDay, "tick");
                    setOpenDay(null);
                  }}
                  aria-label="Mark as tick"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#41FF7218] text-[#41FF72] transition-transform hover:scale-105"
                >
                  <Check size={28} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => {
                    onMark(openDay, "cross");
                    setOpenDay(null);
                  }}
                  aria-label="Mark as cross"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF6B6B18] text-[#FF6B6B] transition-transform hover:scale-105"
                >
                  <X size={28} strokeWidth={2.5} />
                </button>
              </div>
              {marks[openDay] && (
                <button
                  onClick={() => {
                    onClear(openDay);
                    setOpenDay(null);
                  }}
                  className="mt-4 text-[12px] text-white/30 transition-colors hover:text-white/60"
                >
                  Clear mark
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
