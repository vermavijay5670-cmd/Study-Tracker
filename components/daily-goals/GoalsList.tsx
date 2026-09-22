"use client";

import { useState } from "react";
import { Plus, X, Target, AlertTriangle } from "lucide-react";
import { PaperTiltCard } from "@/components/ui/PaperTiltCard";
import type { Goal } from "@/lib/types";

interface GoalsListProps {
  goals: Goal[];
  onAdd: (text: string, mandatory: boolean) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleMandatory: (id: string) => void;
}

export function GoalsList({ goals, onAdd, onToggle, onDelete, onToggleMandatory }: GoalsListProps) {
  const [draft, setDraft] = useState("");
  const [draftMandatory, setDraftMandatory] = useState(false);
  const doneCount = goals.filter((g) => g.done).length;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    onAdd(draft, draftMandatory);
    setDraft("");
    setDraftMandatory(false);
  }

  return (
    <PaperTiltCard>
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
          <Target size={11} strokeWidth={1.75} /> today&apos;s goals
        </span>
        {goals.length > 0 && (
          <span className="text-[10px] uppercase tracking-wide text-white/40">
            {doneCount}/{goals.length} done
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mb-2 flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a goal for today…"
          className="w-full rounded-xl border border-white/12 bg-black/25 px-3.5 py-2.5 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#FFD64D]/50"
        />
        <button
          type="submit"
          aria-label="Add goal"
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#FFD64D] text-black transition-transform hover:scale-105"
        >
          <Plus size={16} strokeWidth={2} />
        </button>
      </form>

      <button
        type="button"
        onClick={() => setDraftMandatory((v) => !v)}
        className="mb-4 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
        style={{
          borderColor: draftMandatory ? "#EF4444" : "rgba(255,255,255,0.15)",
          background: draftMandatory ? "rgba(239,68,68,0.12)" : "transparent",
          color: draftMandatory ? "#F87171" : "rgba(255,255,255,0.45)",
        }}
      >
        <AlertTriangle size={12} strokeWidth={2} />
        Mandatory
      </button>

      {goals.length === 0 ? (
        <p className="py-6 text-center text-[13px] text-white/35">No goals yet — add what you want to get done today.</p>
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
                aria-label={g.done ? "Mark incomplete" : "Mark complete"}
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors"
                style={{
                  borderColor: g.done ? "#FFD64D" : "rgba(255,255,255,0.25)",
                  background: g.done ? "#FFD64D" : "transparent",
                }}
              >
                {g.done && <CheckMark />}
              </button>
              <span
                className={`flex-1 text-[14px] ${g.done ? "text-white/35 line-through" : "text-white/85"}`}
              >
                {g.text}
              </span>
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
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-white/20 opacity-0 transition-opacity hover:text-white/60 group-hover:opacity-100"
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
