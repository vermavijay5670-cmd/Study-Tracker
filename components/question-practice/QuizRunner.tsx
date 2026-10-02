"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Check, X, History, ListChecks } from "lucide-react";
import { S, useSoft } from "@/lib/softClass";
import type { Question } from "@/lib/questionBank";
import type { QuizProgress } from "@/lib/types";

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

// Shared frosted-glass treatment so question text stays readable over the
// animated grid background — blurs whatever's behind the card, not the text.
const DIFF_SOFT: Record<Question["difficulty"], string> = { easy: "#3b7d45", medium: "#a8841a", hard: "#c0392b" };

const DARK_C = {
  opt: { borderColor: "rgba(255,255,255,0.12)" } as React.CSSProperties,
  correct: { borderColor: "#6FB37A66", background: "#6FB37A14", color: "#A9D8AE" } as React.CSSProperties,
  wrong: { borderColor: "#E0766B66", background: "#E0766B14", color: "#F0AFA6" } as React.CSSProperties,
};
const SOFT_C = {
  opt: { borderColor: "#cfd7da", background: "#f1f4f5" } as React.CSSProperties,
  correct: { borderColor: "#5fa86a99", background: "#e1f0e0", color: "#2f6b35" } as React.CSSProperties,
  wrong: { borderColor: "#e2685f99", background: "#fbe6e3", color: "#b0392e" } as React.CSSProperties,
};

const GLASS = "backdrop-blur-md bg-white/[0.06] border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.35)]";

interface QuizRunnerProps {
  questions: Question[];
  accentHex: string;
  progressKey: string;
  savedProgress: QuizProgress | undefined;
  onSaveProgress: (key: string, progress: QuizProgress) => void;
  onClearProgress: (key: string) => void;
}

export function QuizRunner({
  questions,
  accentHex,
  progressKey,
  savedProgress,
  onSaveProgress,
  onClearProgress,
}: QuizRunnerProps) {
  // savedProgress is guaranteed to reflect real persisted data by the time this
  // component mounts — the parent only renders it after its own hydration completes —
  // so it's safe to read directly into these initializers with no race condition.
  const hasSavedProgress =
    !!savedProgress && (savedProgress.index > 0 || Object.keys(savedProgress.selections).length > 0);

  const [resolved, setResolved] = useState(!hasSavedProgress);
  const [index, setIndex] = useState(savedProgress?.index ?? 0);
  const [selections, setSelections] = useState<Record<string, number>>(savedProgress?.selections ?? {});
  const [finished, setFinished] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const soft = useSoft();
  const glass = soft ? "sf-qcard" : GLASS;
  const C = soft ? SOFT_C : DARK_C;
  const DIFF = soft ? DIFF_SOFT : DIFFICULTY_COLOR;

  function persist(nextIndex: number, nextSelections: Record<string, number>) {
    onSaveProgress(progressKey, { index: nextIndex, selections: nextSelections });
  }

  if (!resolved) {
    const resumeIndex = Math.min(savedProgress!.index, questions.length - 1);
    return (
      <div className={S(`mt-8 flex flex-col items-center rounded-3xl border px-6 py-14 text-center ${glass}`, soft)}>
        <History size={26} strokeWidth={1.5} style={{ color: accentHex }} />
        <h3 className={S("mt-4 text-[16px] font-medium text-white", soft)}>Pick up where you left off?</h3>
        <p className={S("mt-1.5 max-w-sm text-[13px] leading-relaxed text-white/45", soft)}>
          You were on Question {resumeIndex + 1} of {questions.length}, with{" "}
          {Object.keys(savedProgress!.selections).length} answered so far.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              setIndex(resumeIndex);
              setSelections(savedProgress!.selections);
              setResolved(true);
            }}
            className="rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
          >
            Continue
          </button>
          <button
            onClick={() => {
              onClearProgress(progressKey);
              setIndex(0);
              setSelections({});
              setResolved(true);
            }}
            className={S("rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/60 transition-colors hover:text-white", soft)}
          >
            Start from beginning
          </button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const selected = selections[q.id];
  const revealed = selected !== undefined;
  const isLast = index === questions.length - 1;
  const answeredCount = Object.keys(selections).length;
  const score = questions.filter((qq) => selections[qq.id] === qq.correctIndex).length;

  function choose(optionIndex: number) {
    if (revealed) return;
    const next = { ...selections, [q.id]: optionIndex };
    setSelections(next);
    persist(index, next);
  }

  function goNext() {
    if (isLast) {
      setFinished(true);
      onClearProgress(progressKey);
    } else {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      persist(nextIndex, selections);
    }
  }

  function goPrev() {
    const prevIndex = Math.max(0, index - 1);
    setIndex(prevIndex);
    persist(prevIndex, selections);
  }

  function restart() {
    setSelections({});
    setIndex(0);
    setFinished(false);
    setReviewing(false);
    setReviewIndex(0);
    onClearProgress(progressKey);
  }

  if (finished && reviewing) {
    const rq = questions[reviewIndex];
    const rSelected = selections[rq.id];
    const rIsLast = reviewIndex === questions.length - 1;
    const rIsFirst = reviewIndex === 0;
    const markedCount = Object.keys(selections).length;

    return (
      <div className="mt-6">
        <div className={S("mb-5 flex items-center justify-between text-[11.5px] text-white/40", soft)}>
          <span className="flex items-center gap-1.5">
            <ListChecks size={13} strokeWidth={1.75} style={{ color: accentHex }} />
            Reviewing {reviewIndex + 1} of {questions.length}
          </span>
          <button
            onClick={() => setReviewing(false)}
            className={S("flex items-center gap-1 text-white/45 transition-colors hover:text-white", soft)}
          >
            <X size={13} strokeWidth={2} /> Back to results
          </button>
        </div>
        <div className={S("mb-6 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]", soft)}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${((reviewIndex + 1) / questions.length) * 100}%`, background: accentHex }}
          />
        </div>

        <div className={S(`rounded-2xl border p-5 sm:p-6 ${glass}`, soft)}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide"
              style={{ background: `${accentHex}1a`, color: accentHex }}
            >
              {TYPE_LABEL[rq.type]}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium capitalize"
              style={{ background: `${DIFF[rq.difficulty]}1a`, color: DIFF[rq.difficulty] }}
            >
              {rq.difficulty}
            </span>
            {rSelected === undefined ? (
              <span className={S("rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/45", soft)}>
                Not answered
              </span>
            ) : rSelected === rq.correctIndex ? (
              <span className={S("rounded-full bg-[#6FB37A14] px-2 py-0.5 text-[10px] font-medium text-[#A9D8AE]", soft)}>
                You got this right
              </span>
            ) : (
              <span className={S("rounded-full bg-[#E0766B14] px-2 py-0.5 text-[10px] font-medium text-[#F0AFA6]", soft)}>
                You marked this wrong
              </span>
            )}
          </div>

          <p className={S("whitespace-pre-line text-[15px] leading-relaxed text-white/90", soft)}>{rq.question}</p>

          <div className="mt-4 space-y-2">
            {rq.options.map((opt, oi) => {
              const isCorrect = oi === rq.correctIndex;
              const isChosen = oi === rSelected;
              let style: React.CSSProperties = C.opt;
              if (isCorrect) style = C.correct;
              else if (isChosen) style = C.wrong;
              return (
                <div
                  key={oi}
                  className={S("flex w-full items-center justify-between gap-3 rounded-xl border bg-black/15 px-4 py-2.5 text-left text-[13.5px] text-white/75", soft)}
                  style={style}
                >
                  {opt}
                  {isCorrect && <Check size={15} strokeWidth={2} className="flex-shrink-0 text-[#6FB37A]" />}
                  {isChosen && !isCorrect && <X size={15} strokeWidth={2} className="flex-shrink-0 text-[#E0766B]" />}
                </div>
              );
            })}
          </div>

          <div className={S("mt-4 rounded-xl border border-white/8 bg-black/25 p-3.5 text-[12.5px] leading-relaxed text-white/55", soft)}>
            {rq.explanation}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setReviewIndex((i) => Math.max(0, i - 1))}
            disabled={rIsFirst}
            className={S("flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30", soft)}
          >
            <ChevronLeft size={15} strokeWidth={1.75} /> Previous
          </button>
          <span className={S("text-[11px] text-white/35", soft)}>{markedCount}/{questions.length} answered</span>
          {rIsLast ? (
            <button
              onClick={() => setReviewing(false)}
              className="flex items-center gap-1 rounded-full px-5 py-2 text-[13px] font-medium transition-transform hover:scale-105"
              style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
            >
              Done
            </button>
          ) : (
            <button
              onClick={() => setReviewIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="flex items-center gap-1 rounded-full px-5 py-2 text-[13px] font-medium transition-transform hover:scale-105"
              style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
            >
              Next <ChevronRight size={15} strokeWidth={1.75} />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className={S(`mt-8 flex flex-col items-center rounded-3xl px-6 py-14 text-center ${glass}`, soft)}>
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full text-[24px] font-bold"
          style={{ background: `${accentHex}1f`, color: accentHex }}
        >
          {pct}%
        </span>
        <h3 className={S("mt-5 text-[19px] font-medium text-white", soft)}>
          {score} / {questions.length} correct
        </h3>
        <p className={S("mt-1.5 text-[13px] text-white/45", soft)}>
          {pct >= 80 ? "Strong result — keep this up." : pct >= 50 ? "Decent — revisit the ones you missed." : "Worth another pass through this chapter."}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              setReviewIndex(0);
              setReviewing(true);
            }}
            className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
          >
            <ListChecks size={14} strokeWidth={1.75} /> Review answers
          </button>
          <button
            onClick={restart}
            className={S("flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/60 transition-colors hover:text-white", soft)}
          >
            <RotateCcw size={14} strokeWidth={1.75} /> Retry quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* progress */}
      <div className={S("mb-5 flex items-center justify-between text-[11.5px] text-white/40", soft)}>
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>
          Score so far: <span style={{ color: accentHex }}>{score}</span>/{answeredCount}
        </span>
      </div>
      <div className={S("mb-6 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]", soft)}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${((index + 1) / questions.length) * 100}%`, background: accentHex }}
        />
      </div>

      <div className={S(`rounded-2xl border p-5 sm:p-6 ${glass}`, soft)}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
        </div>

        <p className={S("whitespace-pre-line text-[15px] leading-relaxed text-white/90", soft)}>{q.question}</p>

        <div className="mt-4 space-y-2">
          {q.options.map((opt, oi) => {
            const isCorrect = oi === q.correctIndex;
            const isChosen = oi === selected;
            let style: React.CSSProperties = C.opt;
            if (revealed) {
              if (isCorrect) style = C.correct;
              else if (isChosen) style = C.wrong;
            }
            return (
              <button
                key={oi}
                onClick={() => choose(oi)}
                disabled={revealed}
                className={S("flex w-full items-center justify-between gap-3 rounded-xl border bg-black/15 px-4 py-2.5 text-left text-[13.5px] text-white/75 transition-colors disabled:cursor-default", soft) + (soft ? " sf-option" : "")}
                style={style}
              >
                {opt}
                {revealed && isCorrect && <Check size={15} strokeWidth={2} className="flex-shrink-0 text-[#6FB37A]" />}
                {revealed && isChosen && !isCorrect && <X size={15} strokeWidth={2} className="flex-shrink-0 text-[#E0766B]" />}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className={S("mt-4 rounded-xl border border-white/8 bg-black/25 p-3.5 text-[12.5px] leading-relaxed text-white/55", soft)}>
            {q.explanation}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className={S("flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30", soft)}
        >
          <ChevronLeft size={15} strokeWidth={1.75} /> Previous
        </button>
        <button
          onClick={goNext}
          disabled={!revealed}
          className="flex items-center gap-1 rounded-full px-5 py-2 text-[13px] font-medium transition-transform enabled:hover:scale-105 disabled:opacity-30"
          style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
        >
          {isLast ? "Finish" : "Next"} <ChevronRight size={15} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
