"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Play } from "lucide-react";
import type { ChapterState, ChapterSubtopic, Difficulty } from "@/lib/types";
import { getChapterStatus, getChapterStatusLabel } from "./chapterStatus";
import { SubtopicPanel } from "./SubtopicPanel";
import { PracticePanel, PracticeToggle, type PracticeApi } from "./PracticeEditor";

const DIFF_DOT: Record<Exclude<Difficulty, null>, string> = {
  easy: "#6fe3a0",
  medium: "#fbbf24",
  hard: "#ff7a7a",
};

interface NmChapterRowProps {
  index: number;
  name: string;
  state: ChapterState;
  practice: PracticeApi;
  isNext?: boolean;
  subtopics: ChapterSubtopic[];
  isSubtopicDone: (id: number) => boolean;
  onToggleSubtopic: (id: number) => void;
  onAddSubtopics: (raw: string) => string | null | void;
  onDeleteSubtopic: (id: number) => void;
  /** Set only when the chapter's list was customised and a built-in list exists to go back to. */
  onResetSubtopics?: () => void;
  onToggleDone: () => void;
  onBumpRevision: () => void;
  onResetRevision: () => void;
  onCycleDifficulty: () => void;
  onSaveNote: (note: string) => void;
}

function NmNote({ note, onSave }: { note?: string; onSave: (note: string) => void }) {
  const [draft, setDraft] = useState(note ?? "");
  return (
    <textarea
      autoFocus
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        if (draft !== (note ?? "")) onSave(draft);
      }}
      aria-label="Chapter note"
      placeholder="Write a note for this chapter…"
      rows={2}
      className="nm-note"
    />
  );
}

/** Dark-mode chapter row (same layout as the light one) in the neumorphic theme, with the full set of controls. */
export function NmChapterRow({
  index,
  name,
  state,
  practice,
  isNext = false,
  subtopics,
  isSubtopicDone,
  onToggleSubtopic,
  onAddSubtopics,
  onDeleteSubtopic,
  onResetSubtopics,
  onToggleDone,
  onBumpRevision,
  onResetRevision,
  onCycleDifficulty,
  onSaveNote,
}: NmChapterRowProps) {
  const [noteOpen, setNoteOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const revCount = state.revCount ?? 0;
  const diff = state.diff ?? null;
  const status = getChapterStatus(state);
  const statusLabel = getChapterStatusLabel(state);
  const kind = status === "new" ? "new" : status === "readyToRevise" ? "ready" : "done";

  const subDone = subtopics.filter((t) => isSubtopicDone(t.id)).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 20) * 0.025, type: "spring", stiffness: 280, damping: 26 }}
      className={`nm-prow ${isNext ? "is-next" : ""}`}
      data-status={status}
    >
      <div className="nm-prow__main">
        <div className="nm-prow__who">
          <button
            type="button"
            className="nm-check"
            data-kind={kind}
            aria-pressed={!!state.done}
            aria-label={state.done ? `Mark chapter ${index + 1} not done` : `Mark chapter ${index + 1} done`}
            onClick={onToggleDone}
          >
            {kind === "done" && <Check size={20} strokeWidth={3} />}
            {kind === "ready" && <Play size={15} strokeWidth={0} fill="currentColor" style={{ marginLeft: 2 }} />}
          </button>
          <div className="min-w-0">
            <div className="nm-prow__meta">
              <span>Chapter {index + 1}</span>
              <i />
              <em>{statusLabel}</em>
              {isNext && (
                <>
                  <i />
                  <em style={{ color: "var(--nm-a)", fontWeight: 700 }}>Up next</em>
                </>
              )}
            </div>
            <div className="nm-prow__name" onClick={onToggleDone}>
              {name}
            </div>
          </div>
        </div>

        <div className="nm-prow__ctl">
          {revCount > 0 && (
            <button
              type="button"
              className="nm-chip nm-chip--count"
              title="Revisions logged · double-click (or press Delete) to reset"
              aria-label={`${revCount} revisions logged. Double-click or press Delete to reset.`}
              onDoubleClick={onResetRevision}
              onKeyDown={(e) => {
                if (e.key === "Delete" || e.key === "Backspace") onResetRevision();
              }}
            >
              ×{revCount}
            </button>
          )}
          <button type="button" className="nm-chip" onClick={onBumpRevision} aria-label="Log a revision">
            Revise
          </button>
          <button type="button" className="nm-chip" onClick={onCycleDifficulty} aria-label="Cycle difficulty">
            {diff && <span className="nm-dotc" style={{ background: DIFF_DOT[diff] }} />}
            <span className="capitalize">{diff ?? "Difficulty"}</span>
          </button>
          {(
            <button
              type="button"
              className="nm-chip"
              aria-expanded={subOpen}
              aria-label={subOpen ? "Hide subtopics" : "Show subtopics"}
              onClick={() => setSubOpen((v) => !v)}
            >
              {subtopics.length > 0 ? `${subDone}/${subtopics.length}` : "+ Topics"}
              <ChevronDown size={13} strokeWidth={2.4} style={{ transform: subOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
            </button>
          )}
          <PracticeToggle px="nm" api={practice} open={practiceOpen} onToggle={() => setPracticeOpen((v) => !v)} />
          <button
            type="button"
            className={`nm-chev ${state.note ? "has-note" : ""}`}
            aria-expanded={noteOpen}
            aria-label={noteOpen ? "Hide chapter note" : "Add a note for this chapter"}
            title={noteOpen ? "Hide note" : "Add note"}
            onClick={() => setNoteOpen((v) => !v)}
          >
            <ChevronDown size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {subOpen && (
          <motion.div
            key="subs"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <SubtopicPanel
              px="nm"
              subtopics={subtopics}
              isDone={isSubtopicDone}
              onToggle={onToggleSubtopic}
              onAdd={onAddSubtopics}
              onDelete={onDeleteSubtopic}
              onReset={onResetSubtopics}
            />
          </motion.div>
        )}
        {practiceOpen && (
          <motion.div
            key="practice"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <PracticePanel px="nm" api={practice} />
          </motion.div>
        )}
        {noteOpen && (
          <motion.div
            key="note"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="nm-panel">
              <NmNote note={state.note} onSave={onSaveNote} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
