"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Gauge, BookOpen } from "lucide-react";
import { PaperCard } from "@/components/ui/PaperCard";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
import { fmtHrs, pad } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftTiles, SoftStatus } from "@/components/ui/soft/SoftUI";

interface StopwatchProps {
  todayHours: number;
  dailyGoalHours: number;
  stopwatchRunningSince: number | null;
  stopwatchLastFlushAt: number | null;
  stopwatchSessions: number;
  stopwatchSessionMs: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onCheckpoint: () => void;
  onFlushOnUnmount: () => void;
  onSetGoal: (hours: number) => void;
}

export function Stopwatch({
  todayHours,
  dailyGoalHours,
  stopwatchRunningSince,
  stopwatchLastFlushAt,
  stopwatchSessions,
  stopwatchSessionMs,
  onStart,
  onPause,
  onReset,
  onCheckpoint,
  onFlushOnUnmount,
  onSetGoal,
}: StopwatchProps) {
  const running = stopwatchRunningSince != null;
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [, forceTick] = useState(0);
  const rafRef = useRef<number | null>(null);
  const checkpointIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // live display tick while running
  useEffect(() => {
    if (!running) return;
    function tick() {
      forceTick((n) => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [running]);

  // periodic safety checkpoint (every 30s) while running, plus one immediately on mount
  // (catches up any time that accrued while this component wasn't mounted at all)
  useEffect(() => {
    if (!running) return;
    onCheckpoint();
    checkpointIntervalRef.current = setInterval(onCheckpoint, 30_000);
    return () => {
      if (checkpointIntervalRef.current) clearInterval(checkpointIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  // flush directly to storage the moment this component unmounts (e.g. navigating to another page)
  useEffect(() => {
    return () => {
      onFlushOnUnmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Big HH:MM:SS digits: total elapsed for this session (spans pause/resume,
  // only cleared by Reset) — frozen at its accumulated value while paused,
  // instead of dropping to 0.
  const sessionElapsedMs = stopwatchSessionMs + (running ? Date.now() - stopwatchRunningSince! : 0);

  // "today" total + goal progress: today's already-committed hours (from the log,
  // which periodic checkpoints keep up to date) plus only the slice elapsed since
  // the *last checkpoint* — using session-since-start here would double-count
  // every chunk a checkpoint already flushed into the log.
  const liveSinceCheckpointMs = running ? Date.now() - (stopwatchLastFlushAt ?? stopwatchRunningSince!) : 0;
  const liveHours = todayHours + liveSinceCheckpointMs / 3_600_000;
  const goalPct = dailyGoalHours > 0 ? Math.min(100, (liveHours / dailyGoalHours) * 100) : 0;

  const totalSecs = Math.floor(sessionElapsedMs / 1000);
  const hh = pad(Math.floor(totalSecs / 3600));
  const mm = pad(Math.floor((totalSecs % 3600) / 60));
  const ss = pad(totalSecs % 60);
  const centis = pad(Math.floor((sessionElapsedMs % 1000) / 10));

  if (isLight) {
    return (
      <SoftCard delay={0.05}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="sf-badge" style={{ width: 38, height: 38 }}>
              <BookOpen size={17} strokeWidth={1.9} />
            </span>
            <span className="sf-cap">Study session</span>
          </div>
          <div>
            <h2 className="sf-title" style={{ fontSize: 24 }}>Stopwatch</h2>
            <div className="mt-2">
              <SoftStatus state={running ? "live" : "idle"}>{running ? "Session running" : "Ready to start"}</SoftStatus>
            </div>
          </div>

          <SoftTiles hh={hh} mm={mm} ss={ss}>
            <span className="sf-centis">.{centis}</span>
          </SoftTiles>

          <div className="sf-spread sf-sub">
            <span>Today: {fmtHrs(liveHours)}</span>
            <span>Sessions: {stopwatchSessions}</span>
          </div>

          <div className="sf-actions">
            <button type="button" className="sf-btn sf-btn--lg" onClick={running ? onPause : onStart}>
              {running ? <Pause size={18} strokeWidth={2.2} /> : <Play size={18} strokeWidth={2.2} fill="currentColor" />}
              {running ? "Pause" : "Start"}
            </button>
            <button type="button" className="sf-chip sf-chip--lg" onClick={onReset}>
              <RotateCcw size={16} strokeWidth={2.2} /> Reset
            </button>
          </div>

          <div className="sf-spread">
            <span className="sf-cap">Daily goal</span>
            <span className="flex items-center gap-2">
              <input
                type="number"
                step="0.5"
                min="0"
                aria-label="Daily goal in hours"
                value={dailyGoalHours}
                onChange={(e) => onSetGoal(parseFloat(e.target.value))}
                className="sf-input w-[76px]"
              />
              <span className="sf-sub">h</span>
            </span>
          </div>
          <div
            className="sf-track"
            role="progressbar"
            aria-label="Daily goal progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(goalPct)}
            title={`${Math.round(goalPct)}% of today's goal`}
          >
            <i style={{ width: `${goalPct}%` }} />
          </div>
        </div>
      </SoftCard>
    );
  }

  return (
    <PaperCard delay={0.08}>
      <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
        <Gauge size={11} strokeWidth={1.75} /> study session
      </span>
      <h2 className="text-[16px] font-medium text-[#F7F2E7]">Stopwatch</h2>

      <div className="mb-4 mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-wide text-white/40">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: running ? "#FFC93D" : "rgba(255,201,61,0.25)",
            boxShadow: running ? "0 0 8px rgba(255,201,61,0.85)" : "none",
            animation: running ? "pulse 1.1s ease-in-out infinite" : "none",
          }}
        />
        {running ? "session running" : "ready to start"}
      </div>

      <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mb-1 flex items-end gap-0">
        {[
          { v: hh, u: "hrs" },
          { v: mm, u: "min" },
          { v: ss, u: "sec" },
        ].map((b, i) => (
          <div key={b.u} className="flex items-end">
            <div className="flex min-w-[58px] flex-col items-center">
              <span
                className="font-tabular text-[34px] font-bold leading-none text-[#F7F2E7]"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.35)" }}
              >
                {b.v}
              </span>
              <span className="mt-1 text-[8px] uppercase tracking-wide text-white/40">{b.u}</span>
            </div>
            {i < 2 && <span className="pb-3.5 text-2xl text-[#FFD64D]/50">:</span>}
          </div>
        ))}
        <span className="pb-1.5 pl-1 font-tabular text-[16px] font-medium text-[#FFC93D]/60">.{centis}</span>
      </div>

      <div className="mb-3 mt-2 flex justify-between text-[10px] uppercase tracking-wide text-white/40">
        <span>today: {fmtHrs(liveHours)}</span>
        <span>sessions: {stopwatchSessions}</span>
      </div>

      <div className="mb-4 flex gap-2">
        <CapsuleButton onClick={running ? onPause : onStart} accent="gold" variant="solid" className="flex-1 rounded-full">
          {running ? (
            <>
              <Pause size={14} strokeWidth={1.75} /> Pause
            </>
          ) : (
            <>
              <Play size={14} strokeWidth={1.75} /> Start
            </>
          )}
        </CapsuleButton>
        <CapsuleButton onClick={onReset} className="flex-1 rounded-full">
          <RotateCcw size={14} strokeWidth={1.75} /> Reset
        </CapsuleButton>
      </div>

      <div className="flex items-center justify-between text-[9px] uppercase tracking-wide text-white/40">
        <span>daily goal</span>
        <span className="flex items-center gap-1 font-tabular text-[#FFD64D]">
          <input
            type="number"
            step="0.5"
            min="0"
            value={dailyGoalHours}
            onChange={(e) => onSetGoal(parseFloat(e.target.value))}
            className="w-10 border-0 border-b border-dashed border-[#FFD64D]/45 bg-transparent text-right outline-none"
          />
          h
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full border border-white/10 bg-black/25">
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{ width: `${goalPct}%`, background: "linear-gradient(90deg,#7A4E0A,#FFE38A)" }}
        />
      </div>
    </PaperCard>
  );
}
