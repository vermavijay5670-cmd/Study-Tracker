"use client";

import { useMemo, useState } from "react";
import { Check, ClipboardList, RotateCcw, Star, X } from "lucide-react";
import type { TestSubject } from "@/lib/subject-tests";
import type { AttemptResult, TestPaper } from "@/lib/subject-tests/types";
import { MARKS_CORRECT, MARKS_WRONG, scoreAttempt } from "@/lib/subject-tests/scoring";
import { S, useSoft } from "@/lib/softClass";
import { Btn, Panel, formatClock, optionClass, optionStyle } from "./ui";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

type Filter = "all" | "wrong" | "correct" | "unattempted" | "bookmarked";

export function TestResult({
  subject,
  paper,
  attempt,
  onReattempt,
  onBackToList,
}: {
  subject: TestSubject;
  paper: TestPaper;
  attempt: AttemptResult;
  onReattempt: () => void;
  onBackToList: () => void;
}) {
  const soft = useSoft();
  const accent = soft ? subject.accentLight : subject.accentDark;
  const [reviewing, setReviewing] = useState(false);
  const s = useMemo(() => scoreAttempt(paper, attempt.answers), [paper, attempt.answers]);
  const pct = s.max > 0 ? Math.round((Math.max(s.score, 0) / s.max) * 100) : 0;
  const attempted = s.correct + s.wrong;
  const accuracy = attempted > 0 ? Math.round((s.correct / attempted) * 100) : 0;

  if (reviewing) {
    return <Review soft={soft} accent={accent} paper={paper} attempt={attempt} onClose={() => setReviewing(false)} onReattempt={onReattempt} />;
  }

  const stat = (label: string, value: string, color?: string) => (
    <div className="text-center">
      <div className="text-[22px] font-semibold" style={{ color }}>
        {value}
      </div>
      <div className={S("text-[11px] uppercase tracking-wide text-white/50", soft)}>{label}</div>
    </div>
  );

  return (
    <div className="mx-auto max-w-xl">
      <Panel soft={soft} className="text-center">
        <p className={S("text-[13px] text-white/60", soft)}>
          {subject.name} · {paper.title}
        </p>
        {attempt.autoSubmitted && <p className="mt-1 text-[12px] text-[#ff9a6a]">Time was up, so the test was submitted automatically.</p>}

        <div className="mt-5 text-[56px] font-semibold leading-none" style={{ color: accent }}>
          {s.score}
          <span className={S("text-[22px] font-normal text-white/45", soft)}> / {s.max}</span>
        </div>
        <p className={S("mt-2 text-[13px] text-white/60", soft)}>{pct}% of total marks</p>

        <div className="mt-7 grid grid-cols-3 gap-4">
          {stat("Correct", String(s.correct), soft ? "#2f6b35" : "#6fe3a0")}
          {stat("Wrong", String(s.wrong), soft ? "#b0392e" : "#ff7a7a")}
          {stat("Not attempted", String(s.unattempted))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {stat("Accuracy", `${accuracy}%`)}
          {stat("Time taken", formatClock(attempt.timeTakenSec))}
          {stat("Marking", `+${MARKS_CORRECT} / ${MARKS_WRONG}`)}
        </div>
        <p className={S("mt-5 text-[12px] text-white/45", soft)}>
          {s.correct} × {MARKS_CORRECT} − {s.wrong} × {Math.abs(MARKS_WRONG)} = {s.score}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <Btn soft={soft} onClick={() => setReviewing(true)}>
            <ClipboardList size={15} /> Review paper
          </Btn>
          <Btn soft={soft} kind="plain" onClick={onReattempt}>
            <RotateCcw size={14} /> Reattempt
          </Btn>
          <Btn soft={soft} kind="plain" onClick={onBackToList}>
            All tests
          </Btn>
        </div>
      </Panel>
    </div>
  );
}

function Review({
  soft,
  accent,
  paper,
  attempt,
  onClose,
  onReattempt,
}: {
  soft: boolean;
  accent: string;
  paper: TestPaper;
  attempt: AttemptResult;
  onClose: () => void;
  onReattempt: () => void;
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const rows = paper.questions.map((q, i) => {
    const a = attempt.answers[q.id];
    const status: "correct" | "wrong" | "unattempted" = a === undefined ? "unattempted" : a === q.correctIndex ? "correct" : "wrong";
    return { q, i, a, status, marked: attempt.bookmarked.includes(q.id) };
  });
  const counts: Record<Filter, number> = {
    all: rows.length,
    wrong: rows.filter((r) => r.status === "wrong").length,
    correct: rows.filter((r) => r.status === "correct").length,
    unattempted: rows.filter((r) => r.status === "unattempted").length,
    bookmarked: rows.filter((r) => r.marked).length,
  };
  const shown = rows.filter((r) => (filter === "all" ? true : filter === "bookmarked" ? r.marked : r.status === filter));
  const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "wrong", label: "Wrong" },
    { id: "correct", label: "Correct" },
    { id: "unattempted", label: "Not attempted" },
    { id: "bookmarked", label: "Bookmarked" },
  ];
  const statusColor = { correct: soft ? "#2f6b35" : "#6fe3a0", wrong: soft ? "#b0392e" : "#ff7a7a", unattempted: soft ? "#66747a" : "rgba(231,233,239,.55)" };
  const statusLabel = { correct: "+4 Correct", wrong: "−1 Wrong", unattempted: "0 Not attempted" };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className={S("text-[18px] font-medium text-white", soft)}>Review · {paper.title}</h2>
        <div className="flex gap-2">
          <Btn soft={soft} kind="plain" onClick={onClose}>
            Back to score
          </Btn>
          <Btn soft={soft} kind="plain" onClick={onReattempt}>
            <RotateCcw size={14} /> Reattempt
          </Btn>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={S("rounded-full border px-3.5 py-1 text-[12.5px] transition-colors", soft) + (active ? "" : " border-white/10 text-white/60 hover:text-white")}
              style={active ? { background: `${accent}22`, color: accent, borderColor: `${accent}77` } : undefined}
            >
              {f.label} ({counts[f.id]})
            </button>
          );
        })}
      </div>

      {shown.length === 0 && <p className={S("text-[13px] text-white/50", soft)}>Nothing here.</p>}

      <div className="space-y-4">
        {shown.map(({ q, i, a, status, marked }) => (
          <Panel key={q.id} soft={soft}>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full px-2.5 py-0.5 text-[11px] font-medium" style={{ background: `${accent}1f`, color: accent }}>
                Q{i + 1}
              </span>
              <span className="text-[12px] font-medium" style={{ color: statusColor[status] }}>
                {statusLabel[status]}
              </span>
              {marked && <Star size={14} className="ml-auto" fill={soft ? "#d9a21b" : "#fbbf24"} color={soft ? "#d9a21b" : "#fbbf24"} aria-label="Bookmarked" />}
            </div>
            <p className={S("whitespace-pre-line text-[15px] leading-relaxed text-white/90", soft)}>{q.question}</p>

            <div className="mt-4 space-y-2">
              {q.options.map((opt, oi) => {
                const isCorrect = oi === q.correctIndex;
                const isChosen = oi === a;
                const state = isCorrect ? "correct" : isChosen ? "wrong" : "idle";
                return (
                  <div key={oi} className={optionClass(soft)} style={optionStyle(soft, state, accent)}>
                    <span className="mt-px flex-none font-semibold opacity-70">{LETTERS[oi]}.</span>
                    <span className="flex-1 whitespace-pre-line">{opt}</span>
                    {isChosen && <span className="flex-none text-[11px] opacity-80">Your answer</span>}
                    {isCorrect && <Check size={15} strokeWidth={2} className="mt-0.5 flex-none" />}
                    {isChosen && !isCorrect && <X size={15} strokeWidth={2} className="mt-0.5 flex-none" />}
                  </div>
                );
              })}
            </div>

            {q.explanation && (
              <div className={S("mt-4 whitespace-pre-line rounded-xl border border-white/8 bg-black/25 p-3.5 text-[12.5px] leading-relaxed text-white/60", soft) + (soft ? "" : " nm-expl")}>{q.explanation}</div>
            )}
          </Panel>
        ))}
      </div>
    </div>
  );
}
