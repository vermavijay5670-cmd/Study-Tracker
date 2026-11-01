"use client";

import { useState } from "react";
import { Clock, Play } from "lucide-react";
import type { TestSubject } from "@/lib/subject-tests";
import type { TestPaper } from "@/lib/subject-tests/types";
import { MARKS_CORRECT, MARKS_WRONG } from "@/lib/subject-tests/scoring";
import { S, useSoft } from "@/lib/softClass";
import { BackBar, Btn, Panel } from "./ui";

const PRESETS = [30, 60, 90, 120, 180];

export function TestSetup({
  subject,
  paper,
  initialMinutes,
  onBack,
  onStart,
}: {
  subject: TestSubject;
  paper: TestPaper;
  /** Previous attempt's setting on a reattempt: a number, or null for "no timer". */
  initialMinutes?: number | null;
  onBack: () => void;
  onStart: (minutes: number | null) => void;
}) {
  const soft = useSoft();
  const accent = soft ? subject.accentLight : subject.accentDark;
  const start = initialMinutes !== undefined ? initialMinutes : paper.durationMinutes ?? paper.questions.length;
  const [timed, setTimed] = useState(start !== null);
  const [minutes, setMinutes] = useState(String(start ?? paper.durationMinutes ?? paper.questions.length));

  const value = Math.floor(Number(minutes));
  const valid = !timed || (Number.isFinite(value) && value >= 1 && value <= 600);

  const chip = (active: boolean) =>
    S("rounded-full border px-4 py-1.5 text-[13px] transition-colors", soft) +
    (active ? "" : " border-white/10 text-white/60 hover:text-white");
  const chipStyle = (active: boolean) => (active ? { background: `${accent}22`, color: accent, borderColor: `${accent}77` } : undefined);

  return (
    <div className="mx-auto max-w-xl">
      <BackBar soft={soft} label={paper.title} sub={subject.name} accent={accent} onBack={onBack} />

      <Panel soft={soft}>
        <div className={S("grid grid-cols-3 gap-3 text-center text-white", soft)}>
          <div>
            <div className="text-[22px] font-semibold">{paper.questions.length}</div>
            <div className={S("text-[11px] uppercase tracking-wide text-white/50", soft)}>Questions</div>
          </div>
          <div>
            <div className="text-[22px] font-semibold">{paper.questions.length * MARKS_CORRECT}</div>
            <div className={S("text-[11px] uppercase tracking-wide text-white/50", soft)}>Max marks</div>
          </div>
          <div>
            <div className="text-[22px] font-semibold">
              +{MARKS_CORRECT} / {MARKS_WRONG}
            </div>
            <div className={S("text-[11px] uppercase tracking-wide text-white/50", soft)}>Right / wrong</div>
          </div>
        </div>

        <div className="mt-7">
          <div className={S("mb-3 flex items-center gap-2 text-[13px] font-medium text-white/80", soft)}>
            <Clock size={15} /> Set timer
          </div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((m) => {
              const active = timed && value === m;
              return (
                <button
                  key={m}
                  type="button"
                  className={chip(active)}
                  style={chipStyle(active)}
                  onClick={() => {
                    setTimed(true);
                    setMinutes(String(m));
                  }}
                >
                  {m} min
                </button>
              );
            })}
            <button type="button" className={chip(!timed)} style={chipStyle(!timed)} onClick={() => setTimed(false)}>
              No timer
            </button>
          </div>

          {timed && (
            <label className={S("mt-4 flex items-center gap-3 text-[13px] text-white/70", soft)}>
              Custom minutes
              <input
                type="number"
                min={1}
                max={600}
                inputMode="numeric"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className={`${soft ? "sf-input" : "nm-input"} w-24 text-center`}
              />
            </label>
          )}
          {!valid && <p className="mt-2 text-[12px] text-[#ff7a7a]">Enter a time between 1 and 600 minutes.</p>}
          <p className={S("mt-3 text-[12px] text-white/50", soft)}>
            {timed ? "The test is submitted automatically when the time runs out." : "No time limit. Submit whenever you are done."}
          </p>
        </div>

        <div className="mt-7 flex justify-end">
          <Btn soft={soft} disabled={!valid} onClick={() => onStart(timed ? value : null)}>
            <Play size={15} /> Start test
          </Btn>
        </div>
      </Panel>
    </div>
  );
}
