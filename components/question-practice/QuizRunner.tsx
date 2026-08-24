"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, Check, X, History } from "lucide-react";
import type { Question } from "@/lib/questionBank";
import type { QuizProgress } from "@/lib/types";

const DIFFICULTY_COLOR: Record<Question["difficulty"], string> = {
  easy: "#41FF72",
  medium: "#FFD64D",
  hard: "#FF6B6B",
};

const TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  statement: "Statement",
  "assertion-reason": "Assertion & Reason",
  "how-many": "How Many",
};

// Shared frosted-glass treatment so question text stays readable over the
// animated grid background — blurs whatever's behind the card, not the text.
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

  function persist(nextIndex: number, nextSelections: Record<string, number>) {
    onSaveProgress(progressKey, { index: nextIndex, selections: nextSelections });
  }

  if (!resolved) {
    const resumeIndex = Math.min(savedProgress!.index, questions.length - 1);
    return (
      <div className={`mt-8 flex flex-col items-center rounded-3xl border px-6 py-14 text-center ${GLASS}`}>
        <History size={26} strokeWidth={1.5} style={{ color: accentHex }} />
        <h3 className="mt-4 text-[16px] font-medium text-white">Pick up where you left off?</h3>
        <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-white/45">
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
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
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
    onClearProgress(progressKey);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className={`mt-8 flex flex-col items-center rounded-3xl px-6 py-14 text-center ${GLASS}`}>
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full text-[24px] font-bold"
          style={{ background: `${accentHex}1f`, color: accentHex }}
        >
          {pct}%
        </span>
        <h3 className="mt-5 text-[19px] font-medium text-white">
          {score} / {questions.length} correct
        </h3>
        <p className="mt-1.5 text-[13px] text-white/45">
          {pct >= 80 ? "Strong result — keep this up." : pct >= 50 ? "Decent — revisit the ones you missed." : "Worth another pass through this chapter."}
        </p>
        <button
          onClick={restart}
          className="mt-7 flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
          style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
        >
          <RotateCcw size={14} strokeWidth={1.75} /> Retry quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* progress */}
      <div className="mb-5 flex items-center justify-between text-[11.5px] text-white/40">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <span>
          Score so far: <span style={{ color: accentHex }}>{score}</span>/{answeredCount}
        </span>
      </div>
      <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${((index + 1) / questions.length) * 100}%`, background: accentHex }}
        />
      </div>

      <div className={`rounded-2xl border p-5 sm:p-6 ${GLASS}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
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

        <p className="whitespace-pre-line text-[15px] leading-relaxed text-white/90">{q.question}</p>

        <div className="mt-4 space-y-2">
          {q.options.map((opt, oi) => {
            const isCorrect = oi === q.correctIndex;
            const isChosen = oi === selected;
            let style: React.CSSProperties = { borderColor: "rgba(255,255,255,0.12)" };
            if (revealed) {
              if (isCorrect) style = { borderColor: "#41FF7266", background: "#41FF7214", color: "#8CFFA8" };
              else if (isChosen) style = { borderColor: "#FF6B6B66", background: "#FF6B6B14", color: "#FF9E9E" };
            }
            return (
              <button
                key={oi}
                onClick={() => choose(oi)}
                disabled={revealed}
                className="flex w-full items-center justify-between gap-3 rounded-xl border bg-black/15 px-4 py-2.5 text-left text-[13.5px] text-white/75 transition-colors disabled:cursor-default"
                style={style}
              >
                {opt}
                {revealed && isCorrect && <Check size={15} strokeWidth={2} className="flex-shrink-0 text-[#41FF72]" />}
                {revealed && isChosen && !isCorrect && <X size={15} strokeWidth={2} className="flex-shrink-0 text-[#FF6B6B]" />}
              </button>
            );
          })}
        </div>

        {revealed && (
          <div className="mt-4 rounded-xl border border-white/8 bg-black/25 p-3.5 text-[12.5px] leading-relaxed text-white/55">
            {q.explanation}
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="flex items-center gap-1 rounded-full border border-white/10 px-4 py-2 text-[13px] text-white/50 transition-colors hover:text-white disabled:opacity-30"
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
