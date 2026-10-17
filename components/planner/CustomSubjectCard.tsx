"use client";

import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmCard, NmTrack } from "@/components/today/nm/NmUI";
import { NmChapterRow } from "./NmChapterRow";
import { SoftChapterRow } from "./SoftChapterRow";
import { customChapterKey } from "@/lib/customSubjects";
import type { Accent } from "@/lib/data";
import { useSidebar } from "@/lib/SidebarContext";
import { useTheme } from "@/lib/ThemeContext";
import { useTrackerState } from "@/lib/useTrackerState";
import type { CustomSubject } from "@/lib/types";

export const CUSTOM_ACCENTS: Accent[] = ["gold", "lime", "purple", "cyan"];

interface CustomSubjectCardProps {
  subject: CustomSubject;
  /** Kept for the light/old call sites; the dark card always uses Planner purple. */
  accent?: Accent;
}

/** Planner card for a subject the person added in Settings — same chapter controls as the built-in subjects. */
export function CustomSubjectCard({ subject }: CustomSubjectCardProps) {
  const { state, toggleDone, getPractice, isPracticeDone, togglePracticeTag, addPracticeTags, removePracticeTag, resetPractice, bumpRevision, resetRevision, cycleDifficulty, setChapterNote, getSubtopics, isSubtopicDone, toggleSubtopic, addSubtopics, deleteSubtopic } = useTrackerState();
  const { theme } = useTheme();
  const { openSettings } = useSidebar();

  const total = subject.chapters.length;
  let done = 0;
  let rev = 0;
  for (const ch of subject.chapters) {
    const st = state.planner[customChapterKey(subject.id, ch.id)];
    if (st?.done) done++;
    if ((st?.revCount ?? 0) > 0) rev++;
  }
  const donePct = total > 0 ? Math.round((done / total) * 100) : 0;
  const revPct = total > 0 ? Math.round((rev / total) * 100) : 0;

  const rows = subject.chapters.map((ch, i) => {
    const key = customChapterKey(subject.id, ch.id);
    const st = state.planner[key] ?? {};
    const handlers = {
      practice: {
        tags: getPractice(subject.id, 11, ch.id),
        isDone: (id: number) => isPracticeDone(subject.id, 11, ch.id, id),
        onToggle: (id: number) => togglePracticeTag(subject.id, 11, ch.id, id),
        onAdd: (raw: string, all: boolean) => addPracticeTags(subject.id, 11, ch.id, raw, all),
        onRemove: (id: number, all: boolean) => removePracticeTag(subject.id, 11, ch.id, id, all),
        onReset: state.practiceLists[key] ? () => resetPractice(subject.id, 11, ch.id) : undefined,
        scopeLabel: subject.name,
      },
      onToggleDone: () => toggleDone(subject.id, 11, ch.id),
      onBumpRevision: () => bumpRevision(subject.id, 11, ch.id),
      onResetRevision: () => resetRevision(subject.id, 11, ch.id),
      onCycleDifficulty: () => cycleDifficulty(subject.id, 11, ch.id),
      onSaveNote: (note: string) => setChapterNote(subject.id, 11, ch.id, note),
      subtopics: getSubtopics(subject.id, 11, ch.id),
      isSubtopicDone: (id: number) => isSubtopicDone(subject.id, 11, ch.id, id),
      onToggleSubtopic: (id: number) => toggleSubtopic(subject.id, 11, ch.id, id),
      onAddSubtopics: (raw: string) => addSubtopics(subject.id, 11, ch.id, raw),
      onDeleteSubtopic: (id: number) => deleteSubtopic(subject.id, 11, ch.id, id),
    };
    return theme === "light" ? (
      <SoftChapterRow key={ch.id} index={i} name={ch.name} state={st} {...handlers} />
    ) : (
      <NmChapterRow key={ch.id} index={i} name={ch.name} state={st} {...handlers} />
    );
  });

  const empty = (
    <div className={theme === "light" ? "sf-sub" : "text-[13px] text-white/50"} style={{ padding: "8px 0" }}>
      No chapters yet.{" "}
      <button type="button" onClick={openSettings} className={theme === "light" ? "sf-link" : "underline underline-offset-2 hover:text-white"} style={{ cursor: "pointer", font: "inherit", background: "none", border: 0, padding: 0, color: theme === "light" ? "#3f7230" : undefined, fontWeight: 600 }}>
        Add chapters in Settings → Subjects
      </button>
    </div>
  );

  if (theme === "light") {
    const R = 46;
    const C = 2 * Math.PI * R;
    return (
      <SoftCard>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="sf-cap" style={{ letterSpacing: "0.14em" }}>Chapter tracker</span>
            <h2 className="sf-h1 mt-2 break-words">{subject.name}</h2>
            <p className="sf-sub mt-1.5">Your subject · {total} {total === 1 ? "chapter" : "chapters"}</p>
          </div>
          <div className="sf-ring" role="img" aria-label={`${donePct}% of chapters done`}>
            <svg viewBox="0 0 108 108" aria-hidden>
              <defs>
                <linearGradient id="sf-ring-grad-custom" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#9cc46e" />
                  <stop offset="1" stopColor="#3f7230" />
                </linearGradient>
              </defs>
              <circle cx="54" cy="54" r={R} fill="none" stroke="url(#sf-ring-grad-custom)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${(donePct / 100) * C} ${C}`} style={{ transition: "stroke-dasharray .6s ease" }} />
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

        <div className="mt-8 space-y-3">{total === 0 ? empty : rows}</div>
      </SoftCard>
    );
  }

  const R = 46;
  const C = 2 * Math.PI * R;
  return (
    <NmCard accent="purple">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="nm-cap">Chapter tracker</span>
          <h2 className="nm-title mt-2 break-words" style={{ fontSize: 26 }}>{subject.name}</h2>
          <p className="nm-sub mt-1.5" style={{ letterSpacing: 0 }}>Your subject · {total} {total === 1 ? "chapter" : "chapters"}</p>
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

      <div className="mt-8 space-y-3">{total === 0 ? empty : rows}</div>
    </NmCard>
  );
}
