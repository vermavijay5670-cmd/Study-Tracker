"use client";

import { S, useSoft } from "@/lib/softClass";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "@/lib/questionBank";
import { BookmarkButton } from "./BookmarkButton";

const DIFFICULTY_COLOR: Record<Question["difficulty"], string> = {
  easy: "#6fe3a0",
  medium: "#fbbf24",
  hard: "#ff7a7a",
};

const TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  statement: "Statement",
  "assertion-reason": "Assertion & Reason",
  "how-many": "How Many",
};

const PAGE_SIZE = 20;
// Shared frosted-glass treatment so question text stays readable over the animated grid.
const GLASS = "nm-qpanel";

interface ReadOnlyListProps {
  questions: Question[];
  accentHex: string;
  /** Ids of bookmarked questions (for this chapter), and a toggle. Omit to hide the star. */
  bookmarks?: string[];
  onToggleBookmark?: (questionId: string) => void;
}

export function ReadOnlyList({ questions, accentHex, bookmarks, onToggleBookmark }: ReadOnlyListProps) {
  const soft = useSoft();
  const glass = soft ? "sf-qcard" : GLASS;
  const DIFF = soft ? ({ easy: "#3b7d45", medium: "#a8841a", hard: "#c0392b" } as const) : DIFFICULTY_COLOR;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(questions.length / PAGE_SIZE);
  const safePage = Math.min(page, Math.max(0, pageCount - 1));
  const shown = questions.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="mt-6">
      <div className="space-y-3">
        {shown.map((q, i) => (
          <div key={q.id} className={S(`rounded-2xl border p-4 sm:p-5 ${glass}`, soft)}>
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <span className={S("text-[11px] text-white/30", soft)}>{safePage * PAGE_SIZE + i + 1}.</span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
                style={{ background: `${accentHex}1a`, color: accentHex }}
              >
                {TYPE_LABEL[q.type]}
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium capitalize"
                style={{ background: `${DIFF[q.difficulty]}1a`, color: DIFF[q.difficulty] }}
              >
                {q.difficulty}
              </span>
              {bookmarks && onToggleBookmark && <BookmarkButton active={bookmarks.includes(q.id)} onToggle={() => onToggleBookmark(q.id)} soft={soft} />}
            </div>

            <p className={S("whitespace-pre-line text-[14px] leading-relaxed text-white/85", soft)}>{q.question}</p>

            <ul className="mt-3 space-y-1.5">
              {q.options.map((opt, oi) => (
                <li
                  key={oi}
                  className={soft ? "rounded-lg border px-3 py-1.5 text-[13px]" : "nm-opt px-3.5 py-2 text-[13px]"}
                  style={
                    oi === q.correctIndex
                      ? soft
                        ? { borderColor: "#5fa86a99", background: "#e1f0e0", color: "#2f6b35" }
                        : { color: "#b4f5d0", boxShadow: "inset 3px 3px 8px rgba(3,4,7,.5), 0 0 0 1px rgba(111,227,160,.45)" }
                      : soft
                        ? { borderColor: "#c1d0df", background: "#e4edf5", color: "#5b686e" }
                        : { color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>

            <div className={S("mt-3 rounded-lg border border-white/8 bg-black/20 p-3 text-[12px] leading-relaxed text-white/50", soft) + (soft ? "" : " nm-expl")}>
              {q.explanation}
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setPage(Math.max(0, safePage - 1))}
            disabled={safePage === 0}
            className={S("flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30", soft)}
          >
            <ChevronLeft size={15} strokeWidth={1.75} /> Previous
          </button>
          <span className={S("text-[12px] text-white/35", soft)}>
            Page {safePage + 1} of {pageCount}
          </span>
          <button
            onClick={() => setPage(Math.min(pageCount - 1, safePage + 1))}
            disabled={safePage === pageCount - 1}
            className={S("flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30", soft)}
          >
            Next <ChevronRight size={15} strokeWidth={1.75} />
          </button>
        </div>
      )}
    </div>
  );
}
