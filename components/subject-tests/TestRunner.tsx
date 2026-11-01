"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, SkipForward, Star, Timer, X } from "lucide-react";
import type { TestSubject } from "@/lib/subject-tests";
import type { AttemptResult, TestPaper } from "@/lib/subject-tests/types";
import { S, useSoft } from "@/lib/softClass";
import { Btn, Panel, formatClock, optionClass, optionStyle } from "./ui";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function TestRunner({
  subject,
  paper,
  minutes,
  onSubmit,
  onExit,
}: {
  subject: TestSubject;
  paper: TestPaper;
  minutes: number | null;
  onSubmit: (r: AttemptResult) => void;
  onExit: () => void;
}) {
  const soft = useSoft();
  const accent = soft ? subject.accentLight : subject.accentDark;
  const qs = paper.questions;

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [visited, setVisited] = useState<string[]>([qs[0].id]);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const startedAt = useRef(Date.now());
  const doneRef = useRef(false);
  const latest = useRef({ answers, bookmarked });
  useEffect(() => {
    latest.current = { answers, bookmarked };
  }, [answers, bookmarked]);

  const submit = useCallback(
    (auto: boolean) => {
      if (doneRef.current) return;
      doneRef.current = true;
      const spent = Math.round((Date.now() - startedAt.current) / 1000);
      onSubmit({
        answers: latest.current.answers,
        bookmarked: latest.current.bookmarked,
        timeTakenSec: minutes ? Math.min(spent, minutes * 60) : spent,
        autoSubmitted: auto,
        minutes,
      });
    },
    [minutes, onSubmit],
  );

  // Clock: based on real timestamps, so a throttled background tab can't stretch the time.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, []);
  const elapsedMs = now - startedAt.current;
  const remainingSec = minutes ? Math.ceil((minutes * 60000 - elapsedMs) / 1000) : null;

  useEffect(() => {
    if (remainingSec !== null && remainingSec <= 0) submit(true);
  }, [remainingSec, submit]);

  // Warn before a refresh / tab close wipes the attempt.
  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (!doneRef.current) e.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);

  const q = qs[index];
  const chosen = answers[q.id];
  const answered = chosen !== undefined;
  const isMarked = bookmarked.includes(q.id);
  const isLast = index === qs.length - 1;
  const answeredCount = Object.keys(answers).length;

  function goTo(i: number) {
    const next = Math.min(Math.max(i, 0), qs.length - 1);
    setIndex(next);
    setVisited((v) => (v.includes(qs[next].id) ? v : [...v, qs[next].id]));
  }
  function choose(oi: number) {
    setAnswers((a) => ({ ...a, [q.id]: oi }));
  }
  function clearAnswer() {
    setAnswers((a) => {
      const { [q.id]: _removed, ...rest } = a;
      return rest;
    });
  }
  function toggleBookmark() {
    setBookmarked((b) => (b.includes(q.id) ? b.filter((x) => x !== q.id) : [...b, q.id]));
  }

  const low = remainingSec !== null && remainingSec <= 300;
  const clockText = remainingSec !== null ? formatClock(remainingSec) : formatClock(elapsedMs / 1000);

  function paletteStyle(id: string, i: number) {
    const isCur = i === index;
    const isAns = answers[id] !== undefined;
    const isSkipped = !isAns && visited.includes(id) && !isCur;
    const base = soft ? { bg: "#e4edf5", fg: "#4b5a60" } : { bg: "#22242a", fg: "rgba(231,233,239,0.6)" };
    let bg = base.bg;
    let fg = base.fg;
    if (isAns) {
      bg = soft ? "#cfe6d0" : "rgba(111,227,160,.18)";
      fg = soft ? "#2f6b35" : "#6fe3a0";
    } else if (isSkipped) {
      bg = soft ? "#f5dedb" : "rgba(255,122,122,.14)";
      fg = soft ? "#b0392e" : "#ff9a9a";
    }
    return { background: bg, color: fg, boxShadow: isCur ? `0 0 0 2px ${accent}` : undefined };
  }

  return (
    <div>
      {/* Top bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className={S("truncate text-[16px] font-medium text-white", soft)}>{paper.title}</h2>
          <p className="text-[12px]" style={{ color: accent }}>
            {subject.name} · {answeredCount}/{qs.length} answered
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold tabular-nums ${soft ? "sf-pill-field" : "nm-pillfield"}`}
            style={{ color: low ? "#ff7a7a" : undefined }}
            aria-live="off"
            title={minutes ? "Time left" : "Time elapsed"}
          >
            <Timer size={15} /> {clockText}
          </div>
          <Btn soft={soft} kind="plain" onClick={() => setConfirmExit(true)}>
            Exit
          </Btn>
          <Btn soft={soft} kind="primary" onClick={() => setConfirmSubmit(true)}>
            Submit test
          </Btn>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        {/* Question */}
        <div>
          <Panel soft={soft}>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full px-2.5 py-0.5 text-[11px] font-medium" style={{ background: `${accent}1f`, color: accent }}>
                Question {index + 1} of {qs.length}
              </span>
              <button
                type="button"
                onClick={toggleBookmark}
                aria-pressed={isMarked}
                aria-label={isMarked ? "Remove bookmark" : "Bookmark this question"}
                title={isMarked ? "Bookmarked" : "Bookmark this question"}
                className={`ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110 ${soft ? "sf-round-btn" : "nm-round"}`}
                style={{ width: 32, height: 32, color: isMarked ? (soft ? "#d9a21b" : "#fbbf24") : soft ? "#8fa0b2" : "rgba(231,233,239,0.4)" }}
              >
                <Star size={16} strokeWidth={1.9} fill={isMarked ? "currentColor" : "none"} />
              </button>
            </div>

            <p className={S("whitespace-pre-line text-[15px] leading-relaxed text-white/90", soft)}>{q.question}</p>

            <div className="mt-4 space-y-2" role="radiogroup" aria-label="Options">
              {q.options.map((opt, oi) => (
                <button
                  key={oi}
                  type="button"
                  role="radio"
                  aria-checked={chosen === oi}
                  onClick={() => choose(oi)}
                  className={optionClass(soft)}
                  style={optionStyle(soft, chosen === oi ? "selected" : "idle", accent)}
                >
                  <span className="mt-px flex-none font-semibold opacity-70">{LETTERS[oi]}.</span>
                  <span className="whitespace-pre-line">{opt}</span>
                </button>
              ))}
            </div>

            {answered && (
              <button type="button" onClick={clearAnswer} className={S("mt-3 inline-flex items-center gap-1 text-[12px] text-white/50 hover:text-white", soft)}>
                <X size={12} /> Clear answer
              </button>
            )}
          </Panel>

          <div className="mt-4 flex items-center justify-between gap-3">
            <Btn soft={soft} kind="plain" disabled={index === 0} onClick={() => goTo(index - 1)}>
              <ChevronLeft size={15} /> Previous
            </Btn>

            {/* One button: "Skip" while nothing is marked, "Next" once an option is chosen. */}
            <button
              type="button"
              disabled={isLast}
              onClick={() => goTo(index + 1)}
              className="flex items-center gap-1.5 rounded-full px-5 py-2 text-[13px] font-medium transition-transform enabled:hover:scale-105 disabled:opacity-35"
              style={
                answered
                  ? { background: `${accent}`, color: soft ? "#fff" : "#06080c" }
                  : { background: `${accent}18`, color: accent, border: `1px solid ${accent}55` }
              }
            >
              {answered ? (
                <>
                  Next <ChevronRight size={15} />
                </>
              ) : (
                <>
                  Skip <SkipForward size={14} />
                </>
              )}
            </button>
          </div>
          {isLast && <p className={S("mt-2 text-right text-[12px] text-white/45", soft)}>This is the last question. Use Submit test to finish.</p>}
        </div>

        {/* Palette */}
        <aside>
          <Panel soft={soft} className="!p-4">
            <h3 className={S("mb-3 text-[13px] font-medium text-white/80", soft)}>Questions</h3>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
              {qs.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to question ${i + 1}`}
                  className="relative flex h-9 items-center justify-center rounded-lg text-[12px] font-medium transition-transform hover:scale-105"
                  style={paletteStyle(item.id, i)}
                >
                  {i + 1}
                  {bookmarked.includes(item.id) && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full" style={{ background: soft ? "#d9a21b" : "#fbbf24" }} />}
                </button>
              ))}
            </div>
            <div className={S("mt-4 space-y-1 text-[11px] text-white/55", soft)}>
              <Legend color={soft ? "#cfe6d0" : "rgba(111,227,160,.3)"} label="Answered" />
              <Legend color={soft ? "#f5dedb" : "rgba(255,122,122,.28)"} label="Skipped" />
              <Legend color={soft ? "#e4edf5" : "#2b2e36"} label="Not visited" />
              <Legend color={soft ? "#d9a21b" : "#fbbf24"} label="Bookmarked" dot />
            </div>
          </Panel>
        </aside>
      </div>

      {/* Submit confirmation */}
      {confirmSubmit && (
        <Dialog soft={soft} title="Submit test?" onClose={() => setConfirmSubmit(false)}>
          <p className={S("text-[13px] leading-relaxed text-white/70", soft)}>
            Answered {answeredCount} of {qs.length}. {qs.length - answeredCount} not attempted
            {bookmarked.length > 0 ? `, ${bookmarked.length} bookmarked` : ""}. You can&apos;t change answers after submitting.
          </p>
          <div className="mt-5 flex justify-end gap-2">
            <Btn soft={soft} kind="plain" onClick={() => setConfirmSubmit(false)}>
              Keep going
            </Btn>
            <Btn soft={soft} onClick={() => submit(false)}>
              Submit
            </Btn>
          </div>
        </Dialog>
      )}

      {confirmExit && (
        <Dialog soft={soft} title="Leave this test?" onClose={() => setConfirmExit(false)}>
          <p className={S("text-[13px] leading-relaxed text-white/70", soft)}>Your answers for this attempt will be lost and no score is saved.</p>
          <div className="mt-5 flex justify-end gap-2">
            <Btn soft={soft} kind="plain" onClick={() => setConfirmExit(false)}>
              Stay
            </Btn>
            <Btn soft={soft} kind="danger" onClick={onExit}>
              Leave
            </Btn>
          </div>
        </Dialog>
      )}
    </div>
  );
}

function Legend({ color, label, dot }: { color: string; label: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={dot ? "h-2 w-2 rounded-full" : "h-3 w-3 rounded"} style={{ background: color }} />
      {label}
    </div>
  );
}

function Dialog({ soft, title, onClose, children }: { soft: boolean; title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={onClose} role="presentation">
      <div role="dialog" aria-modal="true" aria-label={title} className="w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <Panel soft={soft}>
          <h3 className={S("mb-2 text-[16px] font-medium text-white", soft)}>{title}</h3>
          {children}
        </Panel>
      </div>
    </div>
  );
}
