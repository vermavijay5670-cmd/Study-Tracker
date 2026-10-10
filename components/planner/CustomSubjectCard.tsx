"use client";

import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";
import { FlatCard } from "@/components/ui/FlatCard";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { ChapterRowMinimal } from "./ChapterRowMinimal";
import { SoftChapterRow } from "./SoftChapterRow";
import { customChapterKey } from "@/lib/customSubjects";
import { ACCENT_HEX, type Accent } from "@/lib/data";
import { useSidebar } from "@/lib/SidebarContext";
import { useTheme } from "@/lib/ThemeContext";
import { useTrackerState } from "@/lib/useTrackerState";
import type { CustomSubject } from "@/lib/types";

export const CUSTOM_ACCENTS: Accent[] = ["gold", "lime", "purple", "cyan"];

interface CustomSubjectCardProps {
  subject: CustomSubject;
  accent: Accent;
}

/** Planner card for a subject the person added in Settings — same chapter controls as the built-in subjects. */
export function CustomSubjectCard({ subject, accent }: CustomSubjectCardProps) {
  const { state, toggleDone, togglePractice, bumpRevision, resetRevision, cycleDifficulty, setChapterNote } = useTrackerState();
  const { theme } = useTheme();
  const { openSettings } = useSidebar();
  const accentHex = ACCENT_HEX[accent];

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
      subject: "custom" as const,
      onTogglePractice: (k: Parameters<typeof togglePractice>[3]) => togglePractice(subject.id, 11, ch.id, k),
      onToggleDone: () => toggleDone(subject.id, 11, ch.id),
      onBumpRevision: () => bumpRevision(subject.id, 11, ch.id),
      onResetRevision: () => resetRevision(subject.id, 11, ch.id),
      onCycleDifficulty: () => cycleDifficulty(subject.id, 11, ch.id),
      onSaveNote: (note: string) => setChapterNote(subject.id, 11, ch.id, note),
    };
    return theme === "light" ? (
      <SoftChapterRow key={ch.id} index={i} name={ch.name} state={st} {...handlers} />
    ) : (
      <ChapterRowMinimal key={ch.id} index={i} name={ch.name} state={st} accentHex={accentHex} {...handlers} />
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

  return (
    <FlatCard accent={accent}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: accentHex }}>
            chapter tracker
          </span>
          <h2 className="mt-1 break-words text-[18px] font-medium text-white">{subject.name}</h2>
          <p className="text-[11px] text-[#a3a3a3]">Your subject · {total} {total === 1 ? "chapter" : "chapters"}</p>
        </div>

        <div className="relative h-[92px] w-[92px]">
          <RadialBarChart width={92} height={92} innerRadius={34} outerRadius={44} data={[{ name: "done", value: donePct, fill: accentHex }]} startAngle={90} endAngle={-270}>
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar background={{ fill: "rgba(255,255,255,0.06)" }} dataKey="value" cornerRadius={8} angleAxisId={0} />
          </RadialBarChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-tabular text-[16px] font-semibold text-white">{donePct}%</span>
            <span className="text-[8px] uppercase tracking-wide text-[#a3a3a3]">done</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-[#a3a3a3]">
        <span>{done}/{total} chapters done</span>
        <span className="text-white/20">·</span>
        <span>{rev}/{total} revised ({revPct}%)</span>
      </div>
      <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full" style={{ width: `${revPct}%`, background: accentHex, opacity: 0.55 }} />
      </div>

      <div className="mt-6 space-y-3">{total === 0 ? empty : rows}</div>
    </FlatCard>
  );
}
