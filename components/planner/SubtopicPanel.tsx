"use client";

import { useState } from "react";
import { Check, Plus, RotateCcw, X } from "lucide-react";
import type { ChapterSubtopic } from "@/lib/types";

interface SubtopicPanelProps {
  /** Class prefix: "sf" for the light theme, "nm" for the dark one. */
  px: "sf" | "nm";
  subtopics: ChapterSubtopic[];
  isDone: (id: number) => boolean;
  onToggle: (id: number) => void;
  /** Returns an error message to show, or null when the subtopics were added. */
  onAdd: (raw: string) => string | null | void;
  onDelete: (id: number) => void;
  /** Present only when the list differs from the built-in one and there is a built-in one to go back to. */
  onReset?: () => void;
}

/** The subtopic dropdown of a chapter: tick subtopics off, add your own (one at a time or a pasted list), delete any. */
export function SubtopicPanel({ px, subtopics, isDone, onToggle, onAdd, onDelete, onReset }: SubtopicPanelProps) {
  const [draft, setDraft] = useState("");
  const [err, setErr] = useState<string | null>(null);

  function submit(raw: string) {
    if (!raw.trim()) return;
    const e = onAdd(raw);
    if (e) setErr(e);
    else {
      setErr(null);
      setDraft("");
    }
  }

  return (
    <div className={`${px}-panel`}>
      {subtopics.length === 0 ? (
        <p className={`${px}-subempty`}>No subtopics yet — add your own below.</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-2">
          {subtopics.map((t) => {
            const done = isDone(t.id);
            return (
              <div key={t.id} className={`${px}-subrow`}>
                <button type="button" aria-pressed={done} onClick={() => onToggle(t.id)} className={`${px}-sub-item ${done ? "is-done" : ""}`}>
                  <span className={`${px}-sub-box`}>{done && <Check size={11} strokeWidth={3.2} />}</span>
                  <span className={`${px}-sub-txt truncate`}>{t.name}</span>
                </button>
                <button type="button" className={`${px}-xbtn`} aria-label={`Delete subtopic ${t.name}`} title="Delete subtopic" onClick={() => onDelete(t.id)}>
                  <X size={13} strokeWidth={2.4} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className={`${px}-subadd`}>
        <input
          type="text"
          value={draft}
          placeholder="Add a subtopic — or paste a list, one per line"
          aria-label="New subtopic"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit(draft);
            }
          }}
          onPaste={(e) => {
            const text = e.clipboardData.getData("text");
            if (/\r?\n/.test(text.trim())) {
              e.preventDefault();
              submit(text);
            }
          }}
        />
        <button type="button" onClick={() => submit(draft)} disabled={!draft.trim()}>
          <Plus size={14} strokeWidth={2.4} /> Add
        </button>
      </div>
      {err && (
        <p role="alert" className={`${px}-suberr`}>
          {err}
        </p>
      )}

      {onReset && (
        <button type="button" className={`${px}-subreset`} onClick={onReset}>
          <RotateCcw size={12} strokeWidth={2.2} /> Reset to the default list
        </button>
      )}
    </div>
  );
}
