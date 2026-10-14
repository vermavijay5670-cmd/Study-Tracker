"use client";

import { NmCard, NmTrack } from "@/components/today/nm/NmUI";
import { NmChapterRow } from "./NmChapterRow";
import { CHAPTERS, SUBJECT_NAME } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { SoftChapterRow } from "./SoftChapterRow";
import { useTrackerState } from "@/lib/useTrackerState";

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const { getChapterState, toggleDone, togglePractice, bumpRevision, resetRevision, cycleDifficulty, setChapterNote, getSubjectStats, getSubtopics, isSubtopicDone, toggleSubtopic, addSubtopics, deleteSubtopic, resetSubtopics, state } =
    useTrackerState();

  const { theme } = useTheme();
  const { done, rev, total } = getSubjectStats(subject);
  const donePct = total > 0 ? Math.round((done / total) * 100) : 0;
  const revPct = total > 0 ? Math.round((rev / total) * 100) : 0;

  let nextKey: string | null = null;
  if (subject === "chem") {
    for (const cls of [11, 12] as const) {
      for (let i = 0; i < CHAPTERS[subject][cls].length; i++) {
        if (!getChapterState(subject, cls, i).done) {
          nextKey = `${cls}_${i}`;
          break;
        }
      }
      if (nextKey) break;
    }
  }

  if (theme === "light") {
    const R = 46;
    const C = 2 * Math.PI * R;
    return (
      <SoftCard>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="sf-cap" style={{ letterSpacing: "0.14em" }}>Chapter tracker</span>
            <h2 className="sf-h1 mt-2">{SUBJECT_NAME[subject]}</h2>
            <p className="sf-sub mt-1.5">Class 11 &amp; 12 · NCERT order</p>
          </div>
          <div className="sf-ring" role="img" aria-label={`${donePct}% of chapters done`}>
            <svg viewBox="0 0 108 108" aria-hidden>
              <defs>
                <linearGradient id="sf-ring-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#9cc46e" />
                  <stop offset="1" stopColor="#3f7230" />
                </linearGradient>
              </defs>
              <circle
                cx="54"
                cy="54"
                r={R}
                fill="none"
                stroke="url(#sf-ring-grad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${(donePct / 100) * C} ${C}`}
                style={{ transition: "stroke-dasharray .6s ease" }}
              />
            </svg>
            <div className="sf-ring__txt">
              <b>{donePct}%</b>
              <span>Done</span>
            </div>
          </div>
        </div>

        <div className="sf-sub mt-5 flex flex-wrap items-center gap-2">
          <span>{done}/{total} chapters done</span>
          <span aria-hidden>·</span>
          <span>{rev}/{total} revised ({revPct}%)</span>
        </div>
        <div className="sf-track mt-2.5">
          <i style={{ width: `${revPct}%` }} />
        </div>

        <div className="mt-8 space-y-6">
          {([11, 12] as const).map((cls) => (
            <div key={cls}>
              <div className="sf-cap mb-3">Class {cls}</div>
              <div className="space-y-3">
                {CHAPTERS[subject][cls].map((name, i) => {
                  const chState = getChapterState(subject, cls, i);
                    return (
                    <SoftChapterRow
                      key={i}
                      index={i}
                      name={name}
                      subject={subject}
                      state={chState}
                      onTogglePractice={(key) => togglePractice(subject, cls, i, key)}
                      isNext={subject === "chem" && nextKey === `${cls}_${i}`}
                      subtopics={getSubtopics(subject, cls, i)}
                      isSubtopicDone={(id) => isSubtopicDone(subject, cls, i, id)}
                      onToggleSubtopic={(id) => toggleSubtopic(subject, cls, i, id)}
                      onAddSubtopics={(raw) => addSubtopics(subject, cls, i, raw)}
                      onDeleteSubtopic={(id) => deleteSubtopic(subject, cls, i, id)}
                      onResetSubtopics={state.subtopicLists[`${subject}_${cls}_${i}`] && subject === "bio" ? () => resetSubtopics(subject, cls, i) : undefined}
                      onToggleDone={() => toggleDone(subject, cls, i)}
                      onBumpRevision={() => bumpRevision(subject, cls, i)}
                      onResetRevision={() => resetRevision(subject, cls, i)}
                      onCycleDifficulty={() => cycleDifficulty(subject, cls, i)}
                      onSaveNote={(note) => setChapterNote(subject, cls, i, note)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </SoftCard>
    );
  }

  // Dark: the light layout, in the neumorphic theme (Planner's sidebar colour: purple).
  const R = 46;
  const C = 2 * Math.PI * R;
  return (
    <NmCard accent="purple">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="nm-cap">Chapter tracker</span>
          <h2 className="nm-title mt-2" style={{ fontSize: 26 }}>{SUBJECT_NAME[subject]}</h2>
          <p className="nm-sub mt-1.5" style={{ letterSpacing: 0 }}>Class 11 &amp; 12 · NCERT order</p>
        </div>
        <div className="nm-ring" role="img" aria-label={`${donePct}% of chapters done`}>
          <svg viewBox="0 0 108 108" aria-hidden>
            <circle
              cx="54"
              cy="54"
              r={R}
              fill="none"
              stroke="var(--nm-a)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(donePct / 100) * C} ${C}`}
              style={{ transition: "stroke-dasharray .6s ease", filter: "drop-shadow(0 0 4px color-mix(in srgb, var(--nm-a) 60%, transparent))" }}
            />
          </svg>
          <div className="nm-ring__txt">
            <b>{donePct}%</b>
            <span>Done</span>
          </div>
        </div>
      </div>

      <div className="nm-sub mt-5 flex flex-wrap items-center gap-2" style={{ letterSpacing: 0 }}>
        <span>{done}/{total} chapters done</span>
        <span aria-hidden>·</span>
        <span>{rev}/{total} revised ({revPct}%)</span>
      </div>
      <div className="mt-3">
        <NmTrack pct={revPct} label="Chapters revised" />
      </div>

      <div className="mt-8 space-y-6">
        {([11, 12] as const).map((cls) => (
          <div key={cls}>
            <div className="nm-cap nm-cls">Class {cls}</div>
            <div className="space-y-3">
              {CHAPTERS[subject][cls].map((name, i) => {
                const chState = getChapterState(subject, cls, i);
                return (
                  <NmChapterRow
                    key={i}
                    index={i}
                    name={name}
                    subject={subject}
                    state={chState}
                    onTogglePractice={(key) => togglePractice(subject, cls, i, key)}
                    isNext={subject === "chem" && nextKey === `${cls}_${i}`}
                    subtopics={getSubtopics(subject, cls, i)}
                    isSubtopicDone={(id) => isSubtopicDone(subject, cls, i, id)}
                    onToggleSubtopic={(id) => toggleSubtopic(subject, cls, i, id)}
                    onAddSubtopics={(raw) => addSubtopics(subject, cls, i, raw)}
                    onDeleteSubtopic={(id) => deleteSubtopic(subject, cls, i, id)}
                    onResetSubtopics={state.subtopicLists[`${subject}_${cls}_${i}`] && subject === "bio" ? () => resetSubtopics(subject, cls, i) : undefined}
                    onToggleDone={() => toggleDone(subject, cls, i)}
                    onBumpRevision={() => bumpRevision(subject, cls, i)}
                    onResetRevision={() => resetRevision(subject, cls, i)}
                    onCycleDifficulty={() => cycleDifficulty(subject, cls, i)}
                    onSaveNote={(note) => setChapterNote(subject, cls, i, note)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </NmCard>
  );
}
