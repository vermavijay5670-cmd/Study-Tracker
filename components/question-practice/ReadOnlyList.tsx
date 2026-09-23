"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "@/lib/questionBank";

const DIFFICULTY_COLOR: Record<Question["difficulty"], string> = {
  easy: "#6FB37A",
  medium: "#FFD64D",
  hard: "#E0766B",
};

const TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  statement: "Statement",
  "assertion-reason": "Assertion & Reason",
  "how-many": "How Many",
};

const PAGE_SIZE = 20;
// Shared frosted-glass treatment so question text stays readable over the animated grid.
const GLASS = "backdrop-blur-md bg-white/[0.06] border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.3)]";

interface ReadOnlyListProps {
  questions: Question[];
  accentHex: string;
}

export function ReadOnlyList({ questions, accentHex }: ReadOnlyListProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(questions.length / PAGE_SIZE);
  const shown = questions.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="mt-6">
      <div className="space-y-3">
        {shown.map((q, i) => (
          <div key={q.id} className={`rounded-2xl border p-4 sm:p-5 ${GLASS}`}>
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-white/30">{page * PAGE_SIZE + i + 1}.</span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
                style={{ background: `${accentHex}1a`, color: accentHex }}
              >
                {TYPE_LABEL[q.type]}
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-medium capitalize"
                style={{ background: `${DIFFICULTY_COLOR[q.difficulty]}1a`, color: DIFFICULTY_COLOR[q.difficulty] }}
              >
                {q.difficulty}
              </span>
            </div>

            <p className="whitespace-pre-line text-[14px] leading-relaxed text-white/85">{q.question}</p>

            <ul className="mt-3 space-y-1.5">
              {q.options.map((opt, oi) => (
                <li
                  key={oi}
                  className="rounded-lg border px-3 py-1.5 text-[13px]"
                  style={
                    oi === q.correctIndex
                      ? { borderColor: "#6FB37A55", background: "#6FB37A12", color: "#A9D8AE" }
                      : { borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {opt}
                </li>
              ))}
            </ul>

            <div className="mt-3 rounded-lg border border-white/8 bg-black/20 p-3 text-[12px] leading-relaxed text-white/50">
              {q.explanation}
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30"
          >
            <ChevronLeft size={15} strokeWidth={1.75} /> Previous
          </button>
          <span className="text-[12px] text-white/35">
            Page {page + 1} of {pageCount}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            className="flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30"
          >
            Next <ChevronRight size={15} strokeWidth={1.75} />
          </button>
        </div>
      )}
    </div>
  );
}
