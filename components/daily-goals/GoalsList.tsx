"use client";

import { useEffect, useState } from "react";
import { Plus, X, AlertTriangle, Check, CalendarPlus } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmCard, NmPill, NmTrack } from "@/components/today/nm/NmUI";
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
  const pct = goals.length > 0 ? Math.round((doneCount / goals.length) * 100) : 0;
  return (
    <NmCard delay={0.2} accent="pink">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="nm-title" style={{ fontSize: 22 }}>{heading}</h2>
          <p className="nm-sub mt-1" style={{ letterSpacing: 0 }}>{subline}</p>
        </div>
        {goals.length > 0 && <span className="nm-trend is-up">{isToday ? `${doneCount}/${goals.length} done` : `${goals.length} planned`}</span>}
      </div>

      <div className="nm-strip" role="group" aria-label="Choose a day to plan">
        {upcoming.map((d, i) => (
          <button
            key={d.key}
            type="button"
            className="nm-daychip"
            aria-pressed={d.key === selectedKey}
            aria-label={`${fullLabel(d.key, i)}, ${d.count} ${d.count === 1 ? "goal" : "goals"}`}
            onClick={() => onSelect(d.key)}
          >
            <small>{chipTop(d.key, i)}</small>
            <b>{parseKey(d.key).getDate()}</b>
            <span className="nm-count">{d.count > 0 ? d.count : "\u00a0"}</span>
          </button>
        ))}
      </div>

      {isToday && goals.length > 0 && (
        <div className="mb-5">
          <NmTrack pct={pct} label="Goals completed today" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
        <input type="text" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={placeholder} aria-label="New goal" className="nm-input nm-input--text" />
        <NmPill type="submit" tone="cyan" disabled={!draft.trim()} className="!flex-none">
          <Plus size={15} strokeWidth={2.4} /> {addLabel}
        </NmPill>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="button" aria-pressed={draftMandatory} onClick={() => setDraftMandatory((v) => !v)} className="nm-chip is-danger">
          <AlertTriangle size={14} strokeWidth={2.2} />
          Mandatory
        </button>
        <button
          type="button"
          aria-expanded={showRepeat}
          onClick={() => setShowRepeat((v) => !v)}
          className={`nm-chip ${showRepeat || extra.length > 0 ? "is-on-plain" : ""}`}
        >
          <CalendarPlus size={14} strokeWidth={2.2} />
          Also add to other days{extra.length > 0 ? ` (${extra.length})` : ""}
        </button>
      </div>

      {showRepeat && (
        <div className="nm-repeat" role="group" aria-label="Add this goal to more days">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <span className="nm-cap">Repeat on</span>
            <span className="flex gap-3">
              <button type="button" className="nm-linkbtn" onClick={() => setExtra(otherDays.map((d) => d.key))}>
                All {otherDays.length} days
              </button>
              <button type="button" className="nm-linkbtn" style={{ color: "var(--nm-mute)" }} onClick={() => setExtra([])}>
                Clear
              </button>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {otherDays.map((d) => {
              const i = upcoming.findIndex((u) => u.key === d.key);
              return (
                <button key={d.key} type="button" aria-pressed={extra.includes(d.key)} onClick={() => toggleExtra(d.key)} className="nm-chip">
                  {chipTop(d.key, i)} {parseKey(d.key).getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5">
        {goals.length === 0 ? (
          <p className="nm-empty">{isToday ? "No goals yet — add what you want to get done today." : "Nothing planned for this day yet — add a goal above."}</p>
        ) : (
          <ul className="space-y-3">
            {goals.map((g) => (
              <li key={g.id} className="nm-goal" data-done={g.done ? "true" : "false"} data-mandatory={g.mandatory ? "true" : "false"}>
                <button
                  type="button"
                  onClick={() => onToggle(g.id)}
                  disabled={!isToday}
                  aria-pressed={g.done}
                  aria-label={isToday ? (g.done ? "Mark incomplete" : "Mark complete") : "Planned for later — tick it off on the day"}
                  title={isToday ? undefined : "You can tick this off on the day"}
                  className="nm-check nm-check--sm"
                  data-kind={g.done ? "done" : "new"}
                >
                  {g.done && <Check size={16} strokeWidth={3} />}
                </button>
                <span className="nm-goal__txt">{g.text}</span>
                <button
                  type="button"
                  onClick={() => onToggleMandatory(g.id)}
                  aria-pressed={g.mandatory}
                  aria-label={g.mandatory ? "Unmark as mandatory" : "Mark as mandatory"}
                  title={g.mandatory ? "Mandatory" : "Mark as mandatory"}
                  className={`nm-icobtn ${g.mandatory ? "is-on" : ""}`}
                >
                  <AlertTriangle size={16} strokeWidth={2} />
                </button>
                <button type="button" onClick={() => onDelete(g.id)} aria-label="Delete goal" className="nm-icobtn is-del">
                  <X size={16} strokeWidth={2} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </NmCard>
  );
}
