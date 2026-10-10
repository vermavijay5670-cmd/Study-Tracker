"use client";

import { Check, ChevronDown } from "lucide-react";
import type { ChapterState, PracticeKey, PracticeSubject } from "@/lib/types";

export const PRACTICE_ITEMS: Record<PracticeSubject, { key: PracticeKey; label: string }[]> = {
  custom: [{ key: "practiceDone", label: "Question practice" }],
  phy: [{ key: "practiceDone", label: "Question practice" }],
  chem: [{ key: "practiceDone", label: "Question practice" }],
  bio: [
    { key: "neetAdvDone", label: "NEET Advance questions" },
    { key: "assignmentsDone", label: "Assignments" },
  ],
};

const RED = "#EF4444";
const GREEN = "#22C55E";

export function getPracticeProgress(subject: PracticeSubject, state: ChapterState) {
  const items = PRACTICE_ITEMS[subject];
  const done = items.filter((it) => Boolean(state[it.key])).length;
  return { done, total: items.length, complete: done === items.length };
}

interface PracticeToggleProps {
  subject: PracticeSubject;
  state: ChapterState;
  open: boolean;
  onToggle: () => void;
  className?: string;
}

/** Dark-theme dropdown button. The badge on its top corner is red until everything inside is marked completed, then green. */
export function PracticeToggle({ subject, state, open, onToggle, className = "" }: PracticeToggleProps) {
  const { done, total, complete } = getPracticeProgress(subject, state);
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-expanded={open}
      aria-label={`Question practice: ${done} of ${total} completed. ${open ? "Hide" : "Show"} practice list`}
      className={`relative flex flex-shrink-0 items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/55 transition-colors hover:bg-white/[0.06] hover:text-white/80 ${className}`}
    >
      Practice
      {total > 1 && (
        <span className="font-tabular text-white/35">
          {done}/{total}
        </span>
      )}
      <ChevronDown
        size={12}
        strokeWidth={2.25}
        style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}
      />
      <span
        aria-hidden
        className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#171717]"
        style={{ background: complete ? GREEN : RED }}
      />
    </button>
  );
}

interface PracticePanelProps {
  subject: PracticeSubject;
  state: ChapterState;
  onTogglePractice: (key: PracticeKey) => void;
}

export function PracticePanel({ subject, state, onTogglePractice }: PracticePanelProps) {
  return (
    <div className="space-y-1 p-3">
      <div className="px-2 pb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/30">
        {subject === "bio" ? "Question practice" : "Mark when finished"}
      </div>
      {PRACTICE_ITEMS[subject].map(({ key, label }) => {
        const done = Boolean(state[key]);
        return (
          <button
            key={key}
            type="button"
            onClick={() => onTogglePractice(key)}
            aria-pressed={done}
            className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left transition-colors hover:bg-white/[0.04]"
          >
            <span
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border"
              style={{
                borderColor: done ? "rgba(34,197,94,0.55)" : "rgba(239,68,68,0.5)",
                background: done ? "rgba(34,197,94,0.18)" : "rgba(239,68,68,0.1)",
              }}
            >
              {done ? (
                <Check size={11} strokeWidth={3} style={{ color: GREEN }} />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: RED }} />
              )}
            </span>
            <span className={`text-[12.5px] ${done ? "text-white/45 line-through" : "text-white/80"}`}>{label}</span>
            <span className="ml-auto text-[10px] font-medium" style={{ color: done ? GREEN : RED }}>
              {done ? "Completed" : "Not done"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ───────── light (soft UI) versions ───────── */

export function SoftPracticeToggle({ subject, state, open, onToggle }: Omit<PracticeToggleProps, "className">) {
  const { done, total, complete } = getPracticeProgress(subject, state);
  return (
    <button
      type="button"
      className="sf-chip sf-chip--badge"
      aria-expanded={open}
      aria-label={`Question practice: ${done} of ${total} completed. ${open ? "Hide" : "Show"} practice list`}
      onClick={onToggle}
    >
      Practice
      {total > 1 && <span style={{ opacity: 0.6 }}>{done}/{total}</span>}
      <ChevronDown size={13} strokeWidth={2.4} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
      <span className="sf-pbadge" data-ok={complete} aria-hidden />
    </button>
  );
}

export function SoftPracticePanel({ subject, state, onTogglePractice }: PracticePanelProps) {
  return (
    <div className="sf-panel">
      {PRACTICE_ITEMS[subject].map(({ key, label }) => {
        const done = Boolean(state[key]);
        return (
          <button
            key={key}
            type="button"
            aria-pressed={done}
            onClick={() => onTogglePractice(key)}
            className={`sf-pitem ${done ? "is-done" : ""}`}
          >
            <span className="sf-pmark">{done ? <Check size={12} strokeWidth={3.4} /> : <i />}</span>
            <span>{label}</span>
            <span className="sf-pstat">{done ? "Completed" : "Not done"}</span>
          </button>
        );
      })}
    </div>
  );
}
