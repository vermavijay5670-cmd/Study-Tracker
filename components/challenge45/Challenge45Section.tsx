"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Flame, Atom, FlaskConical, Dna, CalendarClock } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { ACCENT_HEX, SUBJECT_ACCENT } from "@/lib/data";
import { CHALLENGE_45_DAYS, getChallengeDateRange, getChallengeDayDate, formatChallengeDate } from "@/lib/challenge45";
import { useTrackerState } from "@/lib/useTrackerState";

const SUBJECTS = [
  { key: "phy" as const, label: "Physics", icon: Atom, field: "physics" as const },
  { key: "chem" as const, label: "Chemistry", icon: FlaskConical, field: "chemistry" as const },
  { key: "bio" as const, label: "Biology", icon: Dna, field: "biology" as const },
];

function dayNumberFor(date: Date, start: Date): number {
  const ms = date.getTime() - start.getTime();
  return Math.round(ms / 86_400_000) + 1;
}

export function Challenge45Section() {
  const { state, hydrated, } = useTrackerState();
  const { start, end } = getChallengeDateRange();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayDayNumber = dayNumberFor(today, start);
  const daysLeft = Math.max(0, Math.ceil((end.getTime() - today.getTime()) / 86_400_000));

  const weeks = useMemo(() => {
    const chunks: (typeof CHALLENGE_45_DAYS)[] = [];
    for (let i = 0; i < CHALLENGE_45_DAYS.length; i += 7) {
      chunks.push(CHALLENGE_45_DAYS.slice(i, i + 7));
    }
    return chunks;
  }, []);

  const defaultExpandedWeek = Math.min(
    weeks.length - 1,
    Math.max(0, Math.floor((Math.min(Math.max(todayDayNumber, 1), CHALLENGE_45_DAYS.length) - 1) / 7))
  );
  const [expandedWeek, setExpandedWeek] = useState(defaultExpandedWeek);

  if (!hydrated) {
    return <div className="py-24 text-center text-sm text-white/50">Loading…</div>;
  }

  const totalItems = CHALLENGE_45_DAYS.length * 3;
  const completedCount = Object.values(state.challenge45Progress).filter(Boolean).length;
  const overallPct = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="space-y-6">
      <GlowCard accent="gold" variant="tilt">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
            <Flame size={11} strokeWidth={1.75} /> 45 days challenge
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11.5px] text-white/45">
            <CalendarClock size={13} strokeWidth={1.75} />
            {formatChallengeDate(start)} – {formatChallengeDate(end)} · {daysLeft} day{daysLeft === 1 ? "" : "s"} left
          </span>
        </div>

        <h2 className="mt-4 text-[17px] font-medium text-white">Class 11 NEET revision sprint</h2>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/45">
          A curated, high-yield pass through Physics, Chemistry, and Biology — one focused topic per subject each
          day, wrapping up with consolidated revision and previous-year-question practice.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-[#FFD64D] transition-all duration-300"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <span className="flex-shrink-0 text-[11.5px] text-white/40">
            {completedCount}/{totalItems} topics
          </span>
        </div>
      </GlowCard>

      <div className="space-y-3">
        {weeks.map((week, wi) => {
          const weekItems = week.length * 3;
          const weekDone = week.reduce((acc, d) => {
            return (
              acc +
              SUBJECTS.filter((s) => state.challenge45Progress[`${d.day}-${s.key}`]).length
            );
          }, 0);
          const isExpanded = expandedWeek === wi;
          const firstDay = week[0].day;
          const lastDay = week[week.length - 1].day;

          return (
            <div key={wi} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <button
                onClick={() => setExpandedWeek(isExpanded ? -1 : wi)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
              >
                <div>
                  <span className="text-[13.5px] font-medium text-white">
                    Week {wi + 1} · Day {firstDay}–{lastDay}
                  </span>
                  <span className="ml-2 text-[11px] text-white/35">
                    {weekDone}/{weekItems} done
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  strokeWidth={1.75}
                  className={`flex-shrink-0 text-white/30 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>

              {isExpanded && (
                <div className="space-y-2 border-t border-white/8 p-3">
                  {week.map((d) => {
                    const date = getChallengeDayDate(d.day);
                    const isToday = d.day === todayDayNumber;
                    return (
                      <div
                        key={d.day}
                        className="rounded-xl border p-3"
                        style={{
                          borderColor: isToday ? "rgba(255,214,77,0.4)" : "rgba(255,255,255,0.08)",
                          background: isToday ? "rgba(255,214,77,0.05)" : "transparent",
                        }}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-[11.5px] font-medium text-white/70">Day {d.day}</span>
                          <span className="text-[10.5px] text-white/35">{formatChallengeDate(date)}</span>
                          {isToday && (
                            <span className="rounded-full bg-[#FFD64D]/15 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-[#FFD64D]">
                              today
                            </span>
                          )}
                        </div>
                        <div className="space-y-1.5">
                          {SUBJECTS.map((s) => {
                            const itemKey = `${d.day}-${s.key}`;
                            const done = !!state.challenge45Progress[itemKey];
                            const accentHex = ACCENT_HEX[SUBJECT_ACCENT[s.key]];
                            const Icon = s.icon;
                            return (
                              <button
                                key={s.key}
                                onClick={() => toggleChallenge45Item(itemKey)}
                                className="flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-white/[0.03]"
                              >
                                <span
                                  className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border"
                                  style={{
                                    borderColor: done ? accentHex : "rgba(255,255,255,0.25)",
                                    background: done ? accentHex : "transparent",
                                  }}
                                >
                                  {done && <CheckMark />}
                                </span>
                                <Icon size={13} strokeWidth={1.75} className="mt-0.5 flex-shrink-0" style={{ color: accentHex }} />
                                <span className={`flex-1 text-[12.5px] leading-snug ${done ? "text-white/35 line-through" : "text-white/80"}`}>
                                  {d[s.field]}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 12 10" className="h-2 w-2" fill="none">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
