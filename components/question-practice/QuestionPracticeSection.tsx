"use client";

import { useState, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, Atom, Dna, FlaskConical, BookOpen, ListChecks, GraduationCap } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { CHAPTERS, SUBJECT_NAME, SUBJECT_ACCENT, ACCENT_HEX } from "@/lib/data";
import { getChapterQuestions, hasChapterQuestions, type Question } from "@/lib/questionBank";
import { useTrackerState } from "@/lib/useTrackerState";
import { QuizRunner } from "./QuizRunner";
import { ReadOnlyList } from "./ReadOnlyList";
import type { Subject } from "@/lib/types";

const SUBJECTS: Subject[] = ["phy", "chem", "bio"];
const SUBJECT_ICON: Record<Subject, typeof Atom> = { phy: Atom, chem: FlaskConical, bio: Dna };
const EASE = [0.4, 0, 0.2, 1] as const;

type View =
  | { step: "grid" }
  | { step: "classes"; subject: Subject }
  | { step: "chapters"; subject: Subject; cls: 11 | 12 }
  | { step: "questions"; subject: Subject; cls: 11 | 12; chapterIndex: number };

export function QuestionPracticeSection() {
  const [view, setView] = useState<View>({ step: "grid" });
  const [lifting, setLifting] = useState<Subject | null>(null);

  function selectSubject(subject: Subject) {
    setLifting(subject);
    // Let the card's lift animation play before the flowchart view swaps in.
    setTimeout(() => {
      setView({ step: "classes", subject });
      setLifting(null);
    }, 260);
  }

  return (
    <div className="relative min-h-[420px]">
      <AnimatePresence mode="wait">
        {view.step === "grid" && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <SubjectGrid lifting={lifting} onSelect={selectSubject} />
          </motion.div>
        )}

        {view.step === "classes" && (
          <motion.div
            key="classes"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.36, ease: EASE }}
          >
            <ClassFlowchart
              subject={view.subject}
              onBack={() => setView({ step: "grid" })}
              onSelectClass={(cls) => setView({ step: "chapters", subject: view.subject, cls })}
            />
          </motion.div>
        )}

        {view.step === "chapters" && (
          <motion.div
            key="chapters"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.36, ease: EASE }}
          >
            <ChapterFlowchart
              subject={view.subject}
              cls={view.cls}
              onBack={() => setView({ step: "classes", subject: view.subject })}
              onSelectChapter={(chapterIndex) =>
                setView({ step: "questions", subject: view.subject, cls: view.cls, chapterIndex })
              }
            />
          </motion.div>
        )}

        {view.step === "questions" && (
          // Deliberately a different transition than the other steps — a zoom-in
          // "opening" feel, rather than the slide-up used to move through the flowchart.
          <motion.div
            key="questions"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <QuestionBankView
              subject={view.subject}
              cls={view.cls}
              chapterIndex={view.chapterIndex}
              onBack={() => setView({ step: "chapters", subject: view.subject, cls: view.cls })}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Step 1: subject grid ----

function SubjectGrid({ lifting, onSelect }: { lifting: Subject | null; onSelect: (s: Subject) => void }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {SUBJECTS.map((subject, i) => {
        const accent = SUBJECT_ACCENT[subject];
        const accentHex = ACCENT_HEX[accent];
        const Icon = SUBJECT_ICON[subject];
        const chapterCount = CHAPTERS[subject][11].length + CHAPTERS[subject][12].length;

        return (
          <motion.div
            key={subject}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(subject)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(subject)}
            animate={{ y: lifting === subject ? -14 : 0 }}
            transition={{ duration: 0.26, ease: EASE }}
            className="cursor-pointer"
          >
            <GlowCard accent={accent} delay={i * 0.05} variant="tilt" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: `${accentHex}1a` }}
                  >
                    <Icon size={20} strokeWidth={1.75} style={{ color: accentHex }} />
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide"
                    style={{ background: `${accentHex}1a`, color: accentHex }}
                  >
                    {chapterCount} chapters
                  </span>
                </div>

                <h2 className="mt-4 text-[17px] font-medium text-white">{SUBJECT_NAME[subject]}</h2>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[#a3a3a3]">
                  Browse Class 11 and 12 chapters, then open a chapter&apos;s question bank.
                </p>
              </div>

              <span
                className="mt-6 flex items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-medium transition-colors"
                style={{ background: `${accentHex}1f`, color: accentHex, border: `1px solid ${accentHex}55` }}
              >
                Browse chapters
              </span>
            </GlowCard>
          </motion.div>
        );
      })}
    </div>
  );
}

// ---- Shared header with back button ----

function BackBar({
  label,
  sub,
  accentHex,
  onBack,
}: {
  label: string;
  sub?: string;
  accentHex: string;
  onBack: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onBack}
        aria-label="Back"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-colors hover:border-white/20 hover:text-white"
      >
        <ArrowLeft size={16} strokeWidth={1.75} />
      </button>
      <div>
        <h2 className="text-[16px] font-medium text-white">{label}</h2>
        {sub && (
          <p className="text-[11.5px]" style={{ color: accentHex }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

// A rough, hand-drawn stroke — SVG turbulence + displacement jitters the path
// edges, echoing the marker/pen look of the reference sketch instead of a
// clean vector line.
function RoughFilter({ id }: { id: string }) {
  return (
    <filter id={id} x="-30%" y="-30%" width="160%" height="160%">
      <feTurbulence type="fractalNoise" baseFrequency="0.015 0.09" numOctaves="2" seed="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  );
}

// ---- Step 2: class flowchart (subject -> one forking branch -> Class 11 / Class 12) ----

function ClassFlowchart({
  subject,
  onBack,
  onSelectClass,
}: {
  subject: Subject;
  onBack: () => void;
  onSelectClass: (cls: 11 | 12) => void;
}) {
  const accent = SUBJECT_ACCENT[subject];
  const accentHex = ACCENT_HEX[accent];
  const Icon = SUBJECT_ICON[subject];
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `rough-${rawId}`;
  const arrowId = `arrow-${rawId}`;

  return (
    <div>
      <BackBar label={SUBJECT_NAME[subject]} sub="Choose a class" accentHex={accentHex} onBack={onBack} />

      <div className="relative mx-auto mt-10 flex max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex items-center gap-2 rounded-full border px-4 py-2"
          style={{ borderColor: `${accentHex}55`, background: `${accentHex}1a` }}
        >
          <Icon size={16} strokeWidth={1.75} style={{ color: accentHex }} />
          <span className="text-[13px] font-medium text-white">{SUBJECT_NAME[subject]}</span>
        </motion.div>

        {/* forking branch connector, hand-drawn style */}
        <motion.svg
          width="260" height="64" viewBox="0 0 260 64" fill="none" className="mt-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.15 }}
        >
          <defs>
            <RoughFilter id={filterId} />
            <marker id={arrowId} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 Z" fill={accentHex} />
            </marker>
          </defs>
          <g stroke={accentHex} strokeWidth="2" strokeLinecap="round" fill="none" filter={`url(#${filterId})`}>
            <path d="M130,0 L130,18" />
            <path d="M130,18 C130,36 55,30 34,50" markerEnd={`url(#${arrowId})`} />
            <path d="M130,18 C130,36 205,30 226,50" markerEnd={`url(#${arrowId})`} />
          </g>
        </motion.svg>

        <div className="grid w-full grid-cols-2 gap-5">
          {([11, 12] as const).map((cls, i) => (
            <motion.button
              key={cls}
              onClick={() => onSelectClass(cls)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: EASE, delay: 0.35 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center gap-1.5 rounded-2xl border bg-white/[0.03] px-4 py-6 text-center transition-colors hover:bg-white/[0.06]"
              style={{ borderColor: `${accentHex}40` }}
            >
              <span className="text-[22px] font-semibold text-white">Class {cls}</span>
              <span className="text-[11.5px] text-white/40">{CHAPTERS[subject][cls].length} chapters</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Step 3: chapter flowchart — vertical spine with a rightward branch arrow into each chapter ----

function ChapterFlowchart({
  subject,
  cls,
  onBack,
  onSelectChapter,
}: {
  subject: Subject;
  cls: 11 | 12;
  onBack: () => void;
  onSelectChapter: (chapterIndex: number) => void;
}) {
  const accent = SUBJECT_ACCENT[subject];
  const accentHex = ACCENT_HEX[accent];
  const chapters = CHAPTERS[subject][cls];
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const spineFilterId = `spine-${rawId}`;
  const branchFilterId = `branch-${rawId}`;

  return (
    <div>
      <BackBar label={`${SUBJECT_NAME[subject]} — Class ${cls}`} sub={`${chapters.length} chapters`} accentHex={accentHex} onBack={onBack} />

      <div className="relative mx-auto mt-8 max-w-xl">
        {/* hand-drawn vertical spine */}
        <svg
          className="pointer-events-none absolute left-0 top-1 h-[calc(100%-8px)] w-6"
          viewBox="0 0 24 100"
          preserveAspectRatio="none"
        >
          <defs>
            <RoughFilter id={spineFilterId} />
          </defs>
          <path
            d="M12,0 L12,100"
            stroke={`${accentHex}80`}
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${spineFilterId})`}
          />
        </svg>

        <div className="space-y-2.5 pl-9">
          {chapters.map((title, idx) => (
            <motion.button
              key={title}
              onClick={() => onSelectChapter(idx)}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, ease: EASE, delay: idx * 0.025 }}
              className="relative flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition-colors hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* branch arrow reaching from the spine into this row */}
              <svg
                aria-hidden
                className="pointer-events-none absolute -left-9 top-1/2 -translate-y-1/2"
                width="34"
                height="16"
                viewBox="0 0 34 16"
              >
                <defs>
                  <RoughFilter id={`${branchFilterId}-${idx}`} />
                  <marker
                    id={`${branchFilterId}-arrow-${idx}`}
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M0,0 L10,5 L0,10 Z" fill={`${accentHex}cc`} />
                  </marker>
                </defs>
                <path
                  d="M3,8 L28,8"
                  stroke={`${accentHex}80`}
                  strokeWidth="1.75"
                  fill="none"
                  filter={`url(#${branchFilterId}-${idx})`}
                  markerEnd={`url(#${branchFilterId}-arrow-${idx})`}
                />
              </svg>

              <span className="flex-1 text-[14px] text-white/85">{title}</span>
              {hasChapterQuestions(subject, cls, idx) && (
                <span
                  className="rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide"
                  style={{ background: `${accentHex}1a`, color: accentHex }}
                >
                  ready
                </span>
              )}
              <ChevronRight size={16} strokeWidth={1.75} className="flex-shrink-0 text-white/25" />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Step 4: question bank ----

function QuestionBankView({
  subject,
  cls,
  chapterIndex,
  onBack,
}: {
  subject: Subject;
  cls: 11 | 12;
  chapterIndex: number;
  onBack: () => void;
}) {
  const accent = SUBJECT_ACCENT[subject];
  const accentHex = ACCENT_HEX[accent];
  const title = CHAPTERS[subject][cls][chapterIndex];

  const { hydrated } = useTrackerState();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [mode, setMode] = useState<"quiz" | "read">("quiz");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getChapterQuestions(subject, cls, chapterIndex).then((qs) => {
      if (!cancelled) {
        setQuestions(qs);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [subject, cls, chapterIndex]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BackBar label={title} sub={`${SUBJECT_NAME[subject]} — Class ${cls}`} accentHex={accentHex} onBack={onBack} />

        {!loading && questions.length > 0 && (
          <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1">
            <ModeButton active={mode === "quiz"} onClick={() => setMode("quiz")} icon={GraduationCap} label="Quiz" accentHex={accentHex} />
            <ModeButton active={mode === "read"} onClick={() => setMode("read")} icon={ListChecks} label="Read-only" accentHex={accentHex} />
          </div>
        )}
      </div>

      {loading || !hydrated ? (
        <div className="mt-10 flex items-center justify-center py-16 text-[13px] text-white/35">Loading questions…</div>
      ) : questions.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-white/12 bg-white/[0.02] px-6 py-16 text-center">
          <BookOpen size={26} strokeWidth={1.5} className="text-white/20" />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/45">
            The question bank for <span className="text-white/75">{title}</span> hasn&apos;t been added yet.
          </p>
        </div>
      ) : mode === "quiz" ? (
        <QuizRunner
          key={`${subject}-${cls}-${chapterIndex}`}
          questions={questions}
          accentHex={accentHex}
          progressKey={`${subject}_${cls}_${chapterIndex}`}
        />
      ) : (
        <ReadOnlyList questions={questions} accentHex={accentHex} />
      )}
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  icon: Icon,
  label,
  accentHex,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof GraduationCap;
  label: string;
  accentHex: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors"
      style={active ? { background: `${accentHex}1f`, color: accentHex } : { color: "rgba(255,255,255,0.4)" }}
    >
      <Icon size={13} strokeWidth={1.75} />
      {label}
    </button>
  );
}
