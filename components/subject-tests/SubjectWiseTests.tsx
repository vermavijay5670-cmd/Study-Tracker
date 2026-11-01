"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Atom, Beaker, FlaskConical, Flower2, PawPrint, TestTube2 } from "lucide-react";
import { TEST_SUBJECTS, testCount, type TestSubject, type TestSubjectId } from "@/lib/subject-tests";
import { saveAttempt } from "@/lib/subject-tests/history";
import { scoreAttempt } from "@/lib/subject-tests/scoring";
import type { AttemptResult, TestPaper } from "@/lib/subject-tests/types";
import { NmBadge } from "@/components/today/nm/NmUI";
import { S, useSoft } from "@/lib/softClass";
import { PaperList, paperKey } from "./PaperList";
import { TestSetup } from "./TestSetup";
import { TestRunner } from "./TestRunner";
import { TestResult } from "./TestResult";
import "@/components/today/nm/nm.css";

const ICONS: Record<TestSubjectId, typeof Atom> = {
  physics: Atom,
  "physical-chemistry": Beaker,
  "inorganic-chemistry": FlaskConical,
  "organic-chemistry": TestTube2,
  botany: Flower2,
  zoology: PawPrint,
};

const EASE = [0.4, 0, 0.2, 1] as const;

type View =
  | { step: "grid" }
  | { step: "papers"; subject: TestSubject }
  | { step: "setup"; subject: TestSubject; paper: TestPaper; initialMinutes?: number | null }
  | { step: "attempt"; subject: TestSubject; paper: TestPaper; minutes: number | null; run: number }
  | { step: "result"; subject: TestSubject; paper: TestPaper; attempt: AttemptResult };

export function SubjectWiseTests() {
  const soft = useSoft();
  const [view, setView] = useState<View>({ step: "grid" });

  const subject = view.step === "grid" ? null : view.subject;
  const accent = subject ? (soft ? subject.accentLight : subject.accentDark) : undefined;

  const handleSubmit = useCallback(
    (subj: TestSubject, paper: TestPaper) => (attempt: AttemptResult) => {
      const sc = scoreAttempt(paper, attempt.answers);
      saveAttempt(paperKey(subj.id, paper.id), { score: sc.score, max: sc.max, at: Date.now() });
      setView({ step: "result", subject: subj, paper, attempt });
    },
    [],
  );

  return (
    <div className={`relative min-h-[420px] ${soft ? "" : "nm-q"}`} style={accent ? ({ ["--nm-a" as string]: accent } as React.CSSProperties) : undefined}>
      <AnimatePresence mode="wait">
        <motion.div
          key={view.step === "attempt" ? `attempt-${view.run}` : view.step}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: EASE }}
        >
          {view.step === "grid" && <SubjectGrid onSelect={(s) => setView({ step: "papers", subject: s })} />}

          {view.step === "papers" && (
            <PaperList subject={view.subject} onBack={() => setView({ step: "grid" })} onOpen={(paper) => setView({ step: "setup", subject: view.subject, paper })} />
          )}

          {view.step === "setup" && (
            <TestSetup
              subject={view.subject}
              paper={view.paper}
              initialMinutes={view.initialMinutes}
              onBack={() => setView({ step: "papers", subject: view.subject })}
              onStart={(minutes) => setView({ step: "attempt", subject: view.subject, paper: view.paper, minutes, run: Date.now() })}
            />
          )}

          {view.step === "attempt" && (
            <TestRunner
              subject={view.subject}
              paper={view.paper}
              minutes={view.minutes}
              onSubmit={handleSubmit(view.subject, view.paper)}
              onExit={() => setView({ step: "papers", subject: view.subject })}
            />
          )}

          {view.step === "result" && (
            <TestResult
              subject={view.subject}
              paper={view.paper}
              attempt={view.attempt}
              onReattempt={() => setView({ step: "setup", subject: view.subject, paper: view.paper, initialMinutes: view.attempt.minutes })}
              onBackToList={() => setView({ step: "papers", subject: view.subject })}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SubjectGrid({ onSelect }: { onSelect: (s: TestSubject) => void }) {
  const soft = useSoft();
  return (
    <div>
      <header className="mb-6">
        <h1 className={S("text-[24px] font-semibold text-white", soft)}>Subject wise test</h1>
        <p className={S("mt-1 text-[13px] text-white/60", soft)}>Pick a subject to open its tests.</p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {TEST_SUBJECTS.map((subject, i) => {
          const Icon = ICONS[subject.id];
          const accent = soft ? subject.accentLight : subject.accentDark;
          const count = testCount(subject.id);
          return (
            <motion.div key={subject.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, delay: i * 0.05, ease: EASE }}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`${subject.name} tests`}
                onClick={() => onSelect(subject)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect(subject)}
                className={`${soft ? "sf-card sf-pickcard" : "nm-pickcard"} flex min-h-[168px] cursor-pointer flex-col justify-between gap-5 outline-none`}
                style={{ ["--nm-a" as string]: accent }}
              >
                <div className="flex items-start gap-4">
                  {soft ? (
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl" style={{ background: `${accent}1a` }}>
                      <Icon size={22} strokeWidth={1.75} style={{ color: accent }} />
                    </span>
                  ) : (
                    <NmBadge>
                      <Icon size={19} strokeWidth={1.8} />
                    </NmBadge>
                  )}
                  <div className="min-w-0">
                    <h2 className={S("text-[17px] font-medium text-white", soft)}>{subject.name}</h2>
                    <p className={S("mt-1 text-[12.5px] leading-relaxed text-white/65", soft)}>{subject.blurb}</p>
                  </div>
                </div>
                <span className="self-start rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide" style={{ background: `${accent}1f`, color: accent, border: `1px solid ${accent}55` }}>
                  {count === 0 ? "No tests yet" : `${count} ${count === 1 ? "test" : "tests"}`}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
