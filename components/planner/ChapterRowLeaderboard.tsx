"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, FlaskConical } from "lucide-react";
import type { ChapterState, Difficulty, PracticeKey, Subject } from "@/lib/types";
import { CHAPTER_STATUS_STYLE, getChapterStatus, getChapterStatusLabel } from "./chapterStatus";
import { ChapterNoteToggle, ChapterNotePanel } from "./ChapterNote";
import { PracticePanel, PracticeToggle } from "./ChapterPractice";

interface ChapterRowLeaderboardProps {
  index: number;
  name: string;
  subject: Subject;
  state: ChapterState;
  isNext: boolean;
  accentHex?: string;
  onTogglePractice: (key: PracticeKey) => void;
  onToggleDone: () => void;
  onBumpRevision: () => void;
  onResetRevision: () => void;
  onCycleDifficulty: () => void;
  onSaveNote: (note: string) => void;
}

// decorative avatar chip — cycles through a fixed palette, purely visual variety like the reference rows
const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#7B4DFF,#38BDF8)",
  "linear-gradient(135deg,#F87171,#7C3AED)",
  "linear-gradient(135deg,#38BDF8,#22C55E)",
  "linear-gradient(135deg,#EC4899,#6366F1)",
  "linear-gradient(135deg,#FB923C,#EC4899)",
  "linear-gradient(135deg,#64748B,#334155)",
];

const DIFF_DOT: Record<Exclude<Difficulty, null>, string> = {
  easy: "#6FB37A",
  medium: "#FACC15",
  hard: "#F87171",
};

export function ChapterRowLeaderboard({
  index,
  name,
  subject,
  state,
  isNext,
  accentHex,
  onTogglePractice,
  onToggleDone,
  onBumpRevision,
  onResetRevision,
  onCycleDifficulty,
  onSaveNote,
}: ChapterRowLeaderboardProps) {
  const revCount = state.revCount ?? 0;
  const diff = state.diff ?? null;
  const avatar = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  const [noteOpen, setNoteOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const status = getChapterStatus(state);
  const s = CHAPTER_STATUS_STYLE[status];
  const statusLabel = getChapterStatusLabel(state);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 20) * 0.025, type: "spring", stiffness: 280, damping: 26 }}
    >
      <motion.div
        whileHover={{ y: -2 }}
        className="relative flex items-center gap-3 overflow-hidden rounded-full py-2 pl-2 pr-4"
        style={{
          background: isNext
            ? "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)"
            : state.done
              ? "rgba(255,255,255,0.025)"
              : "#15151d",
          boxShadow: isNext
            ? "0 0 44px rgba(37,99,235,0.45), 0 12px 26px rgba(0,0,0,0.5)"
            : "0 6px 14px rgba(0,0,0,0.35)",
        }}
      >
        {/* status-tinted wash, mirrors the Biology row's revision-state coloring */}
        {!isNext && <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: s.wash }} />}

        {/* avatar chip */}
        <div
          className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
          style={{ background: avatar, opacity: state.done && !isNext ? 0.55 : 1 }}
        >
          <FlaskConical size={18} strokeWidth={1.75} className="text-white/85" />
        </div>

        {/* name + subtitle */}
        <button onClick={onToggleDone} className="relative z-10 min-w-0 flex-1 text-left">
          <div
            className={`truncate text-[15px] font-semibold ${
              state.done && !isNext ? "text-white/40 line-through" : "text-white"
            }`}
          >
            {name}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[12px]" style={{ color: isNext ? "rgba(219,234,254,0.8)" : "rgba(255,255,255,0.4)" }}>
            Chapter {index + 1}
            <span className="flex items-center gap-1" style={{ color: isNext ? undefined : s.text }}>
              · <span className="h-1.5 w-1.5 rounded-full" style={{ background: isNext ? "currentColor" : s.dot }} /> {statusLabel}
            </span>
            {diff && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onCycleDifficulty();
                }}
                className="flex items-center gap-1 capitalize"
              >
                · <span className="h-1.5 w-1.5 rounded-full" style={{ background: DIFF_DOT[diff] }} /> {diff}
              </span>
            )}
          </div>
        </button>

        {!diff && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCycleDifficulty();
            }}
            className="relative z-10 hidden flex-shrink-0 text-[11px] text-white/30 hover:text-white/60 sm:block"
          >
            + difficulty
          </button>
        )}

        {/* revision count, styled like the reference's +$ amount */}
        <button
          onClick={onBumpRevision}
          onDoubleClick={onResetRevision}
          title="Click to log a revision · double-click to reset"
          className="relative z-10 flex-shrink-0 font-tabular text-[16px] font-bold"
          style={{ color: revCount > 0 ? "#6FB37A" : isNext ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)" }}
        >
          +{revCount}
        </button>

        <PracticeToggle
          subject={subject}
          state={state}
          open={practiceOpen}
          onToggle={() => setPracticeOpen((v) => !v)}
          className="relative z-10"
        />

        <ChapterNoteToggle
          open={noteOpen}
          onToggle={() => setNoteOpen((v) => !v)}
          hasNote={!!state.note}
          accentHex={isNext ? "#FFFFFF" : accentHex}
          className="relative z-10"
        />

        {/* done toggle */}
        <button
          onClick={onToggleDone}
          aria-label={state.done ? "Mark chapter not done" : "Mark chapter done"}
          className="relative z-10 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border transition-colors"
          style={{
            borderColor: state.done ? "rgba(111,179,122,0.5)" : "rgba(255,255,255,0.15)",
            background: state.done ? "rgba(111,179,122,0.18)" : "transparent",
          }}
        >
          {state.done && <Check size={12} strokeWidth={2.5} className="text-[#6FB37A]" />}
        </button>
      </motion.div>

      {practiceOpen && (
        <div className="mx-4 mt-1 rounded-2xl border border-white/[0.06] bg-[#15151d]">
          <PracticePanel subject={subject} state={state} onTogglePractice={onTogglePractice} />
        </div>
      )}

      {noteOpen && <ChapterNotePanel note={state.note} onSave={onSaveNote} accentHex={accentHex} />}
    </motion.div>
  );
}
