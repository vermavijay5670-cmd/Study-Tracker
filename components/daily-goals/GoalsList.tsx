"use client";

import { useEffect, useState } from "react";
import { Plus, X, Target, AlertTriangle, Check, CalendarPlus } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { PaperTiltCard } from "@/components/ui/PaperTiltCard";
import { parseKey, weekdayShort } from "@/lib/date-utils";
import type { Goal } from "@/lib/types";

export interface UpcomingDay {
  key: string;
  count: number;
}

interface GoalsListProps {
  /** Goals for the selected day. */
  goals: Goal[];
  selectedKey: string;
  /** Today followed by the next days that can be planned. */
  upcoming: UpcomingDay[];
  onSelect: (key: string) => void;
  onAdd: (text: string, mandatory: boolean, dates: string[]) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleMandatory: (id: string) => void;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function chipTop(key: string, index: number): string {
  return index === 0 ? "Today" : index === 1 ? "Tmrw" : weekdayShort(parseKey(key));
}
function fullLabel(key: string, index: number): string {
  const d = parseKey(key);
  const date = `${WEEKDAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`;
  return index === 0 ? "Today" : index === 1 ? `Tomorrow (${date})` : date;
}

export function GoalsList({ goals, selectedKey, upcoming, onSelect, onAdd, onToggle, onDelete, onToggleMandatory }: GoalsListProps) {
  const { theme } = useTheme();
  const [draft, setDraft] = useState("");
  const [draftMandatory, setDraftMandatory] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [extra, setExtra] = useState<string[]>([]);

  const selIndex = Math.max(0, upcoming.findIndex((d) => d.key === selectedKey));
  const isToday = selIndex === 0;
  const doneCount = goals.filter((g) => g.done).length;
  const heading = selIndex === 0 ? "Today\u2019s goals" : selIndex === 1 ? "Tomorrow\u2019s goals" : `${WEEKDAYS[parseKey(selectedKey).getDay()]}\u2019s goals`;
  const subline = isToday ? "Add what you want to get done today" : `Planned for ${fullLabel(selectedKey, selIndex)} — tick them off when the day comes`;

  // extra days never include the day that is currently selected
  useEffect(() => {
    setExtra((e) => e.filter((k) => k !== selectedKey));
  }, [selectedKey]);

  const otherDays = upcoming.filter((d) => d.key !== selectedKey);
  const toggleExtra = (key: string) => setExtra((e) => (e.includes(key) ? e.filter((k) => k !== key) : [...e, key]));
  const targetCount = 1 + extra.length;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    onAdd(draft, draftMandatory, [selectedKey, ...extra]);
    setDraft("");
    setDraftMandatory(false);
    setExtra([]);
    setShowRepeat(false);
  }

  const placeholder = isToday
    ? "Add a goal for today…"
    : selIndex === 1
    ? "Add a goal for tomorrow…"
    : `Add a goal for ${fullLabel(selectedKey, selIndex)}…`;
  const addLabel = targetCount > 1 ? `Add to ${targetCount} days` : "Add goal";

  /* ------------------------------------------------------------ light (soft) */
  if (theme === "light") {
    const pct = goals.length > 0 ? Math.round((doneCount / goals.length) * 100) : 0;
    return (
      <SoftCard delay={0.2}>
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="sf-title">{heading}</h2>
            <p className="sf-sub mt-1">{subline}</p>
          </div>
          {goals.length > 0 && (
            <span className="sf-pill-field" style={{ paddingLeft: 16, paddingRight: 16 }}>
              {isToday ? `${doneCount}/${goals.length} done` : `${goals.length} planned`}
            </span>
          )}
        </div>

        <div className="sf-strip" role="group" aria-label="Choose a day to plan">
          {upcoming.map((d, i) => (
            <button
              key={d.key}
              type="button"
              className="sf-daychip"
              aria-pressed={d.key === selectedKey}
              aria-label={`${fullLabel(d.key, i)}, ${d.count} ${d.count === 1 ? "goal" : "goals"}`}
              onClick={() => onSelect(d.key)}
            >
              <small>{chipTop(d.key, i)}</small>
              <b>{parseKey(d.key).getDate()}</b>
              <span className="sf-count">{d.count > 0 ? d.count : "\u00a0"}</span>
            </button>
          ))}
        </div>

        {isToday && goals.length > 0 && (
          <div className="sf-track mb-5" role="progressbar" aria-label="Goals completed today" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
            <i style={{ width: `${pct}%` }} />
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={placeholder}
            aria-label="New goal"
            className="sf-input sf-input--text min-w-[180px]"
          />
          <button type="submit" disabled={!draft.trim()} className="sf-btn">
            <Plus size={16} strokeWidth={2.4} /> {addLabel}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-pressed={draftMandatory}
            onClick={() => setDraftMandatory((v) => !v)}
            className={`sf-chip ${draftMandatory ? "is-danger" : ""}`}
          >
            <AlertTriangle size={14} strokeWidth={2.2} />
            Mandatory
          </button>
          <button
            type="button"
            aria-expanded={showRepeat}
            onClick={() => setShowRepeat((v) => !v)}
            className={`sf-chip ${showRepeat || extra.length > 0 ? "is-on-plain" : ""}`}
          >
            <CalendarPlus size={14} strokeWidth={2.2} />
            Also add to other days{extra.length > 0 ? ` (${extra.length})` : ""}
          </button>
        </div>

        {showRepeat && (
          <div className="sf-repeat" role="group" aria-label="Add this goal to more days">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="sf-cap">Repeat on</span>
              <span className="flex gap-3">
                <button type="button" className="sf-linkbtn" onClick={() => setExtra(otherDays.map((d) => d.key))}>
                  All {otherDays.length} days
                </button>
                <button type="button" className="sf-linkbtn" onClick={() => setExtra([])}>
                  Clear
                </button>
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {otherDays.map((d) => {
                const i = upcoming.findIndex((u) => u.key === d.key);
                return (
                  <button
                    key={d.key}
                    type="button"
                    aria-pressed={extra.includes(d.key)}
                    onClick={() => toggleExtra(d.key)}
                    className={`sf-chip ${extra.includes(d.key) ? "is-on" : ""}`}
                  >
                    {chipTop(d.key, i)} {parseKey(d.key).getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-5">
          {goals.length === 0 ? (
            <p className="sf-empty sf-inset">
              {isToday ? "No goals yet — add what you want to get done today." : "Nothing planned for this day yet — add a goal above."}
            </p>
          ) : (
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g.id} className="sf-goal" data-done={g.done ? "true" : "false"} data-mandatory={g.mandatory ? "true" : "false"}>
                  <button
                    type="button"
                    onClick={() => onToggle(g.id)}
                    disabled={!isToday}
                    aria-pressed={g.done}
                    aria-label={isToday ? (g.done ? "Mark incomplete" : "Mark complete") : "Planned for later — tick it off on the day"}
                    title={isToday ? undefined : "You can tick this off on the day"}
                    className="sf-check sf-check--sm"
                    data-kind={g.done ? "done" : "new"}
                  >
                    {g.done && <Check size={17} strokeWidth={3} />}
                  </button>
                  <span className="sf-goal__txt">{g.text}</span>
                  <button
                    type="button"
                    onClick={() => onToggleMandatory(g.id)}
                    aria-pressed={g.mandatory}
                    aria-label={g.mandatory ? "Unmark as mandatory" : "Mark as mandatory"}
                    title={g.mandatory ? "Mandatory" : "Mark as mandatory"}
                    className={`sf-icobtn ${g.mandatory ? "is-on" : ""}`}
                  >
                    <AlertTriangle size={16} strokeWidth={2} />
                  </button>
                  <button type="button" onClick={() => onDelete(g.id)} aria-label="Delete goal" className="sf-icobtn is-del">
                    <X size={16} strokeWidth={2} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SoftCard>
    );
  }

  /* ------------------------------------------------------------------ dark */
  return (
    <PaperTiltCard>
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
          <Target size={11} strokeWidth={1.75} /> {heading}
        </span>
        {goals.length > 0 && (
          <span className="text-[10px] uppercase tracking-wide text-white/40">
            {isToday ? `${doneCount}/${goals.length} done` : `${goals.length} planned`}
          </span>
        )}
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Choose a day to plan">
        {upcoming.map((d, i) => {
          const on = d.key === selectedKey;
          return (
            <button
              key={d.key}
              type="button"
              aria-pressed={on}
              aria-label={`${fullLabel(d.key, i)}, ${d.count} ${d.count === 1 ? "goal" : "goals"}`}
              onClick={() => onSelect(d.key)}
              className="flex min-w-[58px] flex-shrink-0 flex-col items-center gap-0.5 rounded-xl border px-2 py-2 transition-colors"
              style={{
                borderColor: on ? "#FFD64D" : "rgba(255,255,255,0.12)",
                background: on ? "rgba(255,214,77,0.12)" : "rgba(255,255,255,0.03)",
                color: on ? "#FFD64D" : "rgba(255,255,255,0.6)",
              }}
            >
              <span className="text-[9px] font-medium uppercase tracking-wide">{chipTop(d.key, i)}</span>
              <span className="text-[16px] font-semibold leading-tight">{parseKey(d.key).getDate()}</span>
              <span className="min-h-[14px] text-[9px] font-medium" style={{ opacity: d.count > 0 ? 1 : 0 }}>
                {d.count > 0 ? d.count : "0"}
              </span>
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="mb-2 flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          aria-label="New goal"
          className="w-full rounded-xl border border-white/12 bg-black/25 px-3.5 py-2.5 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#FFD64D]/50"
        />
        <button
          type="submit"
          aria-label={addLabel}
          title={addLabel}
          className="flex h-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FFD64D] px-3 text-black transition-transform hover:scale-105"
        >
          <Plus size={16} strokeWidth={2} />
          {targetCount > 1 && <span className="ml-1 text-[11px] font-semibold">×{targetCount}</span>}
        </button>
      </form>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={draftMandatory}
          onClick={() => setDraftMandatory((v) => !v)}
          className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
          style={{
            borderColor: draftMandatory ? "#EF4444" : "rgba(255,255,255,0.15)",
            background: draftMandatory ? "rgba(239,68,68,0.12)" : "transparent",
            color: draftMandatory ? "#F87171" : "rgba(255,255,255,0.45)",
          }}
        >
          <AlertTriangle size={12} strokeWidth={2} />
          Mandatory
        </button>
        <button
          type="button"
          aria-expanded={showRepeat}
          onClick={() => setShowRepeat((v) => !v)}
          className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
          style={{
            borderColor: showRepeat || extra.length > 0 ? "#FFD64D" : "rgba(255,255,255,0.15)",
            background: showRepeat || extra.length > 0 ? "rgba(255,214,77,0.1)" : "transparent",
            color: showRepeat || extra.length > 0 ? "#FFD64D" : "rgba(255,255,255,0.45)",
          }}
        >
          <CalendarPlus size={12} strokeWidth={2} />
          Also add to other days{extra.length > 0 ? ` (${extra.length})` : ""}
        </button>
      </div>

      {showRepeat && (
        <div className="mb-4 rounded-xl border border-white/10 bg-black/20 p-3" role="group" aria-label="Add this goal to more days">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wide text-white/40">
            <span>Repeat on</span>
            <span className="flex gap-3 normal-case">
              <button type="button" className="text-[#FFD64D] hover:underline" onClick={() => setExtra(otherDays.map((d) => d.key))}>
                All {otherDays.length} days
              </button>
              <button type="button" className="text-white/50 hover:underline" onClick={() => setExtra([])}>
                Clear
              </button>
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {otherDays.map((d) => {
              const i = upcoming.findIndex((u) => u.key === d.key);
              const on = extra.includes(d.key);
              return (
                <button
                  key={d.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleExtra(d.key)}
                  className="rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
                  style={{
                    borderColor: on ? "#FFD64D" : "rgba(255,255,255,0.15)",
                    background: on ? "rgba(255,214,77,0.14)" : "transparent",
                    color: on ? "#FFD64D" : "rgba(255,255,255,0.55)",
                  }}
                >
                  {chipTop(d.key, i)} {parseKey(d.key).getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {goals.length === 0 ? (
        <p className="py-6 text-center text-[13px] text-white/35">
          {isToday ? "No goals yet — add what you want to get done today." : "Nothing planned for this day yet — add a goal above."}
        </p>
      ) : (
        <ul className="space-y-2">
          {goals.map((g) => (
            <li
              key={g.id}
              className="group flex items-center gap-3 rounded-xl border bg-white/[0.03] px-3.5 py-2.5 transition-colors"
              style={{ borderColor: g.mandatory ? "#EF4444" : "rgba(255,255,255,0.08)" }}
            >
              <button
                onClick={() => onToggle(g.id)}
                disabled={!isToday}
                aria-label={isToday ? (g.done ? "Mark incomplete" : "Mark complete") : "Planned for later — tick it off on the day"}
                title={isToday ? undefined : "You can tick this off on the day"}
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                style={{
                  borderColor: g.done ? "#FFD64D" : "rgba(255,255,255,0.25)",
                  background: g.done ? "#FFD64D" : "transparent",
                }}
              >
                {g.done && <CheckMark />}
              </button>
              <span className={`flex-1 text-[14px] ${g.done ? "text-white/35 line-through" : "text-white/85"}`}>{g.text}</span>
              <button
                onClick={() => onToggleMandatory(g.id)}
                aria-label={g.mandatory ? "Unmark as mandatory" : "Mark as mandatory"}
                title={g.mandatory ? "Mandatory" : "Mark as mandatory"}
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors"
                style={{ color: g.mandatory ? "#EF4444" : "rgba(255,255,255,0.2)" }}
              >
                <AlertTriangle size={13} strokeWidth={2} />
              </button>
              <button
                onClick={() => onDelete(g.id)}
                aria-label="Delete goal"
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white/20 opacity-0 transition-opacity hover:text-white/60 focus-visible:opacity-100 group-hover:opacity-100"
              >
                <X size={14} strokeWidth={1.75} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </PaperTiltCard>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 12 10" className="h-2.5 w-2.5" fill="none">
      <path d="M1 5L4.5 8.5L11 1.5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
