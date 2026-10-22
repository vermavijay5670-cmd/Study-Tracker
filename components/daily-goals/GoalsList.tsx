"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, X, AlertTriangle, Check, CalendarPlus } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmCard, NmPill, NmTrack } from "@/components/today/nm/NmUI";
import { parseKey, weekdayShort } from "@/lib/date-utils";
import type { Goal } from "@/lib/types";

export interface UpcomingDay {
  key: string;
  count: number;
  /** How many of this day's goals are done. */
  done: number;
  /** Days from today: -2 / -1 are the two days just gone, 0 is today, 1+ are coming up. */
  offset: number;
}

interface GoalsListProps {
  /** Goals for the selected day. */
  goals: Goal[];
  selectedKey: string;
  /** The two days before today, today, and the next days that can be planned. */
  upcoming: UpcomingDay[];
  onSelect: (key: string) => void;
  onAdd: (text: string, mandatory: boolean, dates: string[]) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleMandatory: (id: string) => void;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function chipTop(key: string, offset: number): string {
  return offset === 0 ? "Today" : offset === 1 ? "Tmrw" : offset === -1 ? "Yest" : weekdayShort(parseKey(key));
}
function fullLabel(key: string, offset: number): string {
  const d = parseKey(key);
  const date = `${WEEKDAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`;
  return offset === 0 ? "Today" : offset === 1 ? `Tomorrow (${date})` : offset === -1 ? `Yesterday (${date})` : date;
}

export function GoalsList({ goals, selectedKey, upcoming, onSelect, onAdd, onToggle, onDelete, onToggleMandatory }: GoalsListProps) {
  const { theme } = useTheme();
  const [draft, setDraft] = useState("");
  const [draftMandatory, setDraftMandatory] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  const [extra, setExtra] = useState<string[]>([]);

  const selOffset = upcoming.find((d) => d.key === selectedKey)?.offset ?? 0;
  const isToday = selOffset === 0;
  const isPast = selOffset < 0;
  const isFuture = selOffset > 0;
  const doneCount = goals.filter((g) => g.done).length;
  const heading =
    selOffset === 0
      ? "Today\u2019s goals"
      : selOffset === 1
      ? "Tomorrow\u2019s goals"
      : selOffset === -1
      ? "Yesterday\u2019s goals"
      : `${WEEKDAYS[parseKey(selectedKey).getDay()]}\u2019s goals`;
  const subline = isToday
    ? "Add what you want to get done today"
    : isPast
    ? `Forgot to tick something off ${selOffset === -1 ? "yesterday" : `on ${fullLabel(selectedKey, selOffset)}`}? You can still mark it done now`
    : `Planned for ${fullLabel(selectedKey, selOffset)} — tick them off when the day comes`;

  // keep today's chip in view when the strip scrolls sideways (narrow screens)
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (strip && chip) strip.scrollLeft = chip.offsetLeft - strip.clientWidth / 2 + chip.clientWidth / 2;
  }, []);

  // extra days never include the day that is currently selected
  useEffect(() => {
    setExtra((e) => e.filter((k) => k !== selectedKey));
  }, [selectedKey]);

  // repeating a goal only makes sense for today and the days ahead, not days that are already over
  const otherDays = upcoming.filter((d) => d.key !== selectedKey && d.offset >= 0);
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
    : selOffset === 1
    ? "Add a goal for tomorrow…"
    : selOffset === -1
    ? "Add a goal for yesterday…"
    : `Add a goal for ${fullLabel(selectedKey, selOffset)}…`;
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
              {!isFuture ? `${doneCount}/${goals.length} done` : `${goals.length} planned`}
            </span>
          )}
        </div>

        <div ref={stripRef} className="sf-strip" role="group" aria-label="Choose a day to plan">
          {upcoming.map((d) => (
            <button
              key={d.key}
              type="button"
              className={`sf-daychip ${d.offset < 0 ? "is-past" : ""}`}
              aria-pressed={d.key === selectedKey}
              aria-label={`${fullLabel(d.key, d.offset)}, ${d.count} ${d.count === 1 ? "goal" : "goals"}`}
              onClick={() => onSelect(d.key)}
            >
              <small>{chipTop(d.key, d.offset)}</small>
              <b>{parseKey(d.key).getDate()}</b>
              <span className="sf-count">{d.count > 0 ? (d.offset <= 0 ? `${d.done}/${d.count}` : d.count) : "\u00a0"}</span>
            </button>
          ))}
        </div>

        {!isFuture && goals.length > 0 && (
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
                return (
                  <button
                    key={d.key}
                    type="button"
                    aria-pressed={extra.includes(d.key)}
                    onClick={() => toggleExtra(d.key)}
                    className={`sf-chip ${extra.includes(d.key) ? "is-on" : ""}`}
                  >
                    {chipTop(d.key, d.offset)} {parseKey(d.key).getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-5">
          {goals.length === 0 ? (
            <p className="sf-empty sf-inset">
              {isToday ? "No goals yet — add what you want to get done today." : isPast ? "Nothing was planned for this day. Add a goal above if you want to log something you did." : "Nothing planned for this day yet — add a goal above."}
            </p>
          ) : (
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g.id} className="sf-goal" data-done={g.done ? "true" : "false"} data-mandatory={g.mandatory ? "true" : "false"}>
                  <button
                    type="button"
                    onClick={() => onToggle(g.id)}
                    disabled={isFuture}
                    aria-pressed={g.done}
                    aria-label={!isFuture ? (g.done ? "Mark incomplete" : "Mark complete") : "Planned for later — tick it off on the day"}
                    title={!isFuture ? undefined : "You can tick this off on the day"}
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
        {goals.length > 0 && <span className="nm-trend is-up">{!isFuture ? `${doneCount}/${goals.length} done` : `${goals.length} planned`}</span>}
      </div>

      <div ref={stripRef} className="nm-strip" role="group" aria-label="Choose a day to plan">
        {upcoming.map((d) => (
          <button
            key={d.key}
            type="button"
            className={`nm-daychip ${d.offset < 0 ? "is-past" : ""}`}
            aria-pressed={d.key === selectedKey}
            aria-label={`${fullLabel(d.key, d.offset)}, ${d.count} ${d.count === 1 ? "goal" : "goals"}`}
            onClick={() => onSelect(d.key)}
          >
            <small>{chipTop(d.key, d.offset)}</small>
            <b>{parseKey(d.key).getDate()}</b>
            <span className="nm-count">{d.count > 0 ? (d.offset <= 0 ? `${d.done}/${d.count}` : d.count) : "\u00a0"}</span>
          </button>
        ))}
      </div>

      {!isFuture && goals.length > 0 && (
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
              return (
                <button key={d.key} type="button" aria-pressed={extra.includes(d.key)} onClick={() => toggleExtra(d.key)} className="nm-chip">
                  {chipTop(d.key, d.offset)} {parseKey(d.key).getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5">
        {goals.length === 0 ? (
          <p className="nm-empty">{isToday ? "No goals yet — add what you want to get done today." : isPast ? "Nothing was planned for this day. Add a goal above if you want to log something you did." : "Nothing planned for this day yet — add a goal above."}</p>
        ) : (
          <ul className="space-y-3">
            {goals.map((g) => (
              <li key={g.id} className="nm-goal" data-done={g.done ? "true" : "false"} data-mandatory={g.mandatory ? "true" : "false"}>
                <button
                  type="button"
                  onClick={() => onToggle(g.id)}
                  disabled={isFuture}
                  aria-pressed={g.done}
                  aria-label={!isFuture ? (g.done ? "Mark incomplete" : "Mark complete") : "Planned for later — tick it off on the day"}
                  title={!isFuture ? undefined : "You can tick this off on the day"}
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
