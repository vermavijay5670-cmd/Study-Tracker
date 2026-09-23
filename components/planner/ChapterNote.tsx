"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ChapterNoteToggleProps {
  open: boolean;
  onToggle: () => void;
  hasNote: boolean;
  accentHex?: string;
  className?: string;
}

/** Small chevron button — click to expand/collapse the note panel below a chapter row. */
export function ChapterNoteToggle({ open, onToggle, hasNote, accentHex, className = "" }: ChapterNoteToggleProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      aria-label={open ? "Hide chapter note" : "Add a note for this chapter"}
      title={open ? "Hide note" : "Add note"}
      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/[0.08] ${className}`}
      style={{ color: hasNote ? accentHex ?? "#FFD64D" : "rgba(255,255,255,0.32)" }}
    >
      <ChevronDown
        size={14}
        strokeWidth={2.25}
        style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease" }}
      />
    </button>
  );
}

interface ChapterNotePanelProps {
  note?: string;
  onSave: (note: string) => void;
  accentHex?: string;
}

/** Expandable textarea rendered below a chapter row when its note toggle is open. */
export function ChapterNotePanel({ note, onSave, accentHex }: ChapterNotePanelProps) {
  const [draft, setDraft] = useState(note ?? "");

  return (
    <div className="mt-2 px-1" onClick={(e) => e.stopPropagation()}>
      <textarea
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={() => {
          if (draft !== (note ?? "")) onSave(draft);
        }}
        placeholder="Write a note for this chapter…"
        rows={2}
        className="w-full resize-none rounded-xl border bg-black/30 px-3 py-2 text-[12.5px] leading-relaxed text-white/85 outline-none transition-colors placeholder:text-white/30"
        style={{ borderColor: accentHex ? `${accentHex}40` : "rgba(255,255,255,0.14)" }}
      />
    </div>
  );
}
