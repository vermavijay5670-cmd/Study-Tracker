"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Gauge, BookOpen } from "lucide-react";
import { NmBadge, NmCard, NmDial, NmPill, NmRound, NmStatus, NmTrack, NmWell } from "./nm/NmUI";
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
    <NmCard delay={0.08} className="nm-card--fit">
      <div className="flex items-start justify-between gap-3">
        <div className="nm-head">
          <NmBadge>
            <Gauge size={17} strokeWidth={1.8} />
          </NmBadge>
          <div className="min-w-0">
            <span className="nm-cap">Study session</span>
            <h2 className="nm-title">Stopwatch</h2>
          </div>
        </div>
        <NmStatus state={running ? "live" : "idle"}>{running ? "Running" : "Ready"}</NmStatus>
      </div>

      <div className="flex flex-1 items-center justify-center py-5">
        <NmDial pct={goalPct} running={running} label={`${Math.round(goalPct)}% of today's goal`}>
          <div className="nm-dial__time">
            {hh}:{mm}:{ss}
          </div>
          <div className="nm-dial__sub">.{centis} · {Math.round(goalPct)}% of goal</div>
        </NmDial>
      </div>

      <div className="nm-sub mb-4 flex justify-between">
        <span>Today: {fmtHrs(liveHours)}</span>
        <span>Sessions: {stopwatchSessions}</span>
      </div>

      <div className="mb-5 flex items-center gap-3">
        <NmWell>
          <NmPill tone={running ? "red" : "cyan"} onClick={running ? onPause : onStart}>
            {running ? <Pause size={15} strokeWidth={2.2} /> : <Play size={15} strokeWidth={2.2} fill="currentColor" />}
            {running ? "Pause" : "Start"}
          </NmPill>
        </NmWell>
        <NmRound size="md" onClick={onReset} aria-label="Reset session count" title="Reset">
          <RotateCcw size={18} strokeWidth={2} />
        </NmRound>
      </div>

      <div className="flex items-center justify-between">
        <span className="nm-cap">Daily goal</span>
        <span className="flex items-center gap-2">
          <input
            type="number"
            step="0.5"
            min="0"
            aria-label="Daily goal in hours"
            value={dailyGoalHours}
            onChange={(e) => onSetGoal(parseFloat(e.target.value))}
            className="nm-input nm-input--num"
          />
          <span className="nm-sub">h</span>
        </span>
      </div>
      <div className="mt-3">
        <NmTrack pct={goalPct} label="Daily goal progress" />
      </div>
    </NmCard>
  );
}
