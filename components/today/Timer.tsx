"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Play, Pause, RotateCcw, TimerReset, Plus, Check, Volume2, VolumeX, BellOff } from "lucide-react";
import { NmBadge, NmCard, NmChip, NmDial, NmPill, NmRound, NmStatus, NmWell } from "./nm/NmUI";
import { pad, todayKey } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftTiles, SoftStatus } from "@/components/ui/soft/SoftUI";
import {
  getRinging,
  getSoundEnabled,
  playPreview,
  setSoundEnabled,
  stopAlarm,
  subscribeAlarm,
  unlockAudio,
} from "@/lib/timerAlarm";

interface TimerProps {
  timerDurationMs: number;
  timerRemainingMs: number;
  timerEndAt: number | null;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSetDuration: (ms: number) => void;
  onComplete: () => void;
  onAddHours: (key: string, hoursDelta: number) => void;
}

const PRESETS_MIN = [5, 10, 15, 25, 45];

function fmtDurationLabel(ms: number): string {
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h > 0 && m > 0) return `${h}h ${m}m`;
  if (h > 0) return `${h}h`;
  return `${m}m`;
}

export function Timer({
  timerDurationMs,
  timerRemainingMs,
  timerEndAt,
  onStart,
  onPause,
  onReset,
  onSetDuration,
  onComplete,
  onAddHours,
}: TimerProps) {
  const running = timerEndAt != null;
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [, forceTick] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [logged, setLogged] = useState(false);
  const [customHrs, setCustomHrs] = useState("");
  const [customMin, setCustomMin] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const completedRef = useRef(false);
  // The bell itself is rung by the app-wide TimerAlarmHost (so it also sounds on other pages);
  // this card only shows the state and lets you silence it.
  const soundOn = useSyncExternalStore(subscribeAlarm, getSoundEnabled, () => true);
  const ringing = useSyncExternalStore(subscribeAlarm, getRinging, () => false);

  function toggleSound() {
    const next = !soundOn;
    setSoundEnabled(next);
    if (next) {
      unlockAudio();
      playPreview(); // let the user hear it
    } else {
      stopAlarm();
    }
  }

  // On mount: if the persisted end time has already passed (timer finished while
  // this component wasn't mounted), settle it immediately without ringing.
  useEffect(() => {
    if (running && timerEndAt! <= Date.now()) {
      onComplete();
      setCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!running) return;
    completedRef.current = false;
    const id = setInterval(() => {
      const remaining = timerEndAt! - Date.now();
      if (remaining <= 0) {
        forceTick((n) => n + 1);
        if (!completedRef.current) {
          completedRef.current = true;
          onComplete();
          setCompleted(true);
        }
      } else {
        forceTick((n) => n + 1);
      }
    }, 250);
    return () => clearInterval(id);
  }, [running, timerEndAt, onComplete]);

  function handleStart() {
    unlockAudio(); // starting is a click, so this is when the browser allows sound
    stopAlarm();
    setCompleted(false);
    setLogged(false);
    onStart();
  }

  function handleReset() {
    stopAlarm();
    setCompleted(false);
    setLogged(false);
    onReset();
  }

  function applyDuration(ms: number) {
    if (running) return;
    onSetDuration(ms);
    setCompleted(false);
    setLogged(false);
  }

  function applyCustom() {
    const h = parseInt(customHrs, 10) || 0;
    const m = parseInt(customMin, 10) || 0;
    const ms = (h * 3600 + m * 60) * 1000;
    if (ms <= 0) return;
    applyDuration(ms);
  }

  function logSession() {
    stopAlarm();
    onAddHours(todayKey(), timerDurationMs / 3_600_000);
    setLogged(true);
  }

  const remainingMs = running ? Math.max(0, timerEndAt! - Date.now()) : timerRemainingMs;
  const totalSecs = Math.max(0, Math.ceil(remainingMs / 1000));
  const hh = pad(Math.floor(totalSecs / 3600));
  const mm = pad(Math.floor((totalSecs % 3600) / 60));
  const ss = pad(totalSecs % 60);
  const pct = timerDurationMs > 0 ? 100 - (remainingMs / timerDurationMs) * 100 : 0;

  if (isLight) {
    return (
      <SoftCard delay={0.1}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="sf-badge" style={{ width: 38, height: 38 }}>
                <TimerReset size={17} strokeWidth={1.9} />
              </span>
              <span className="sf-cap">Focus timer</span>
            </div>
            <button
              type="button"
              className="sf-round-btn"
              onClick={toggleSound}
              aria-pressed={soundOn}
              aria-label={soundOn ? "Alarm sound on — click to mute" : "Alarm sound off — click to turn on"}
              title={soundOn ? "Alarm sound on" : "Alarm sound off"}
            >
              {soundOn ? <Volume2 size={18} strokeWidth={1.9} /> : <VolumeX size={18} strokeWidth={1.9} />}
            </button>
          </div>
          <div>
            <h2 className="sf-title" style={{ fontSize: 24 }}>Timer</h2>
            <div className="mt-2">
              <SoftStatus state={completed ? "done" : running ? "live" : "idle"}>
                {completed ? "Time's up" : running ? "Counting down" : "Ready to start"}
              </SoftStatus>
            </div>
          </div>

          <SoftTiles hh={hh} mm={mm} ss={ss} done={completed} />
          <div
            className="sf-track"
            role="progressbar"
            aria-label="Timer progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(Math.min(100, Math.max(0, pct)))}
          >
            <i style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {PRESETS_MIN.map((min) => (
              <button
                key={min}
                type="button"
                aria-pressed={timerDurationMs === min * 60_000}
                disabled={running}
                onClick={() => applyDuration(min * 60_000)}
                className={`sf-chip ${timerDurationMs === min * 60_000 ? "is-on" : ""}`}
              >
                {min}m
              </button>
            ))}
            <button
              type="button"
              aria-pressed={showCustom}
              disabled={running}
              onClick={() => setShowCustom((v) => !v)}
              className={`sf-chip ${showCustom ? "is-on" : ""}`}
            >
              Custom
            </button>
          </div>

          {showCustom && !running && (
            <div className="flex flex-wrap items-end gap-3">
              <label className="flex flex-col gap-1">
                <span className="sf-cap" style={{ fontSize: 10 }}>Hrs</span>
                <input
                  type="number"
                  min="0"
                  max="12"
                  placeholder="0"
                  value={customHrs}
                  onChange={(e) => setCustomHrs(e.target.value)}
                  className="sf-input w-[76px]"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="sf-cap" style={{ fontSize: 10 }}>Min</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="0"
                  value={customMin}
                  onChange={(e) => setCustomMin(e.target.value)}
                  className="sf-input w-[76px]"
                />
              </label>
              <button type="button" className="sf-btn" onClick={applyCustom}>
                <Check size={15} strokeWidth={2.4} /> Set
              </button>
            </div>
          )}

          {ringing && (
            <button type="button" className="sf-btn sf-btn--lg" onClick={stopAlarm}>
              <BellOff size={18} strokeWidth={2.2} /> Stop alarm
            </button>
          )}

          <div className="sf-actions">
            {completed ? (
              <>
                <button type="button" className="sf-chip sf-chip--lg" onClick={handleReset}>
                  <RotateCcw size={16} strokeWidth={2.2} /> Restart
                </button>
                <button type="button" className="sf-btn sf-btn--lg" onClick={logSession} disabled={logged}>
                  <Plus size={18} strokeWidth={2.2} /> {logged ? "Logged" : `Log ${fmtDurationLabel(timerDurationMs)}`}
                </button>
              </>
            ) : (
              <>
                <button type="button" className="sf-btn sf-btn--lg" onClick={running ? onPause : handleStart}>
                  {running ? <Pause size={18} strokeWidth={2.2} /> : <Play size={18} strokeWidth={2.2} fill="currentColor" />}
                  {running ? "Pause" : "Start"}
                </button>
                <button type="button" className="sf-chip sf-chip--lg" onClick={handleReset}>
                  <RotateCcw size={16} strokeWidth={2.2} /> Reset
                </button>
              </>
            )}
          </div>
        </div>
      </SoftCard>
    );
  }

  return (
    <NmCard delay={0.16}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <NmBadge>
            <TimerReset size={17} strokeWidth={1.8} />
          </NmBadge>
          <span className="nm-cap">Focus timer</span>
        </div>
        <NmRound
          size="sm"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Alarm sound on — click to mute" : "Alarm sound off — click to turn on"}
          title={soundOn ? "Alarm sound on" : "Alarm sound off"}
        >
          {soundOn ? <Volume2 size={15} strokeWidth={1.9} /> : <VolumeX size={15} strokeWidth={1.9} />}
        </NmRound>
      </div>
      <h2 className="nm-title mt-4">Timer</h2>
      <div className="mt-2">
        <NmStatus state={completed ? "done" : running ? "live" : "idle"}>
          {completed ? "Time's up" : running ? "Counting down" : "Ready to start"}
        </NmStatus>
      </div>

      <div className="my-7 flex justify-center">
        <NmDial pct={completed ? 100 : pct} running={running} tone={completed ? "green" : "cyan"} size={236} label={`${Math.round(pct)}% of the timer elapsed`}>
          <div className="nm-dial__time">
            {hh}:{mm}:{ss}
          </div>
          <div className="nm-dial__sub">{completed ? "complete" : "remaining"}</div>
        </NmDial>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        {PRESETS_MIN.map((min) => (
          <NmChip key={min} active={timerDurationMs === min * 60_000} onClick={() => applyDuration(min * 60_000)} disabled={running}>
            {min}m
          </NmChip>
        ))}
        <NmChip active={showCustom} onClick={() => setShowCustom((v) => !v)} disabled={running}>
          Custom
        </NmChip>
      </div>

      {showCustom && !running && (
        <div className="mb-5 flex items-end gap-3">
          <label className="flex flex-col gap-1.5">
            <span className="nm-cap">Hrs</span>
            <input type="number" min="0" max="12" placeholder="0" value={customHrs} onChange={(e) => setCustomHrs(e.target.value)} className="nm-input nm-input--num" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="nm-cap">Min</span>
            <input type="number" min="0" max="59" placeholder="0" value={customMin} onChange={(e) => setCustomMin(e.target.value)} className="nm-input nm-input--num" />
          </label>
          <NmPill tone="plain" onClick={applyCustom} className="!flex-none">
            <Check size={14} strokeWidth={2.2} /> Set
          </NmPill>
        </div>
      )}

      {ringing && (
        <div className="mb-3">
          <NmPill tone="red" onClick={stopAlarm} className="w-full">
            <BellOff size={15} strokeWidth={2} /> Stop alarm
          </NmPill>
        </div>
      )}

      {completed ? (
        <NmWell>
          <NmPill tone="plain" onClick={handleReset}>
            <RotateCcw size={15} strokeWidth={2} /> Restart
          </NmPill>
          <NmPill tone="cyan" onClick={logSession} disabled={logged}>
            <Plus size={15} strokeWidth={2.2} /> {logged ? "Logged" : `Log ${fmtDurationLabel(timerDurationMs)}`}
          </NmPill>
        </NmWell>
      ) : (
        <div className="flex items-center gap-3">
          <NmWell>
            <NmPill tone={running ? "red" : "cyan"} onClick={running ? onPause : handleStart}>
              {running ? <Pause size={15} strokeWidth={2.2} /> : <Play size={15} strokeWidth={2.2} fill="currentColor" />}
              {running ? "Pause" : "Start"}
            </NmPill>
          </NmWell>
          <NmRound size="md" onClick={handleReset} aria-label="Reset timer" title="Reset">
            <RotateCcw size={18} strokeWidth={2} />
          </NmRound>
        </div>
      )}
    </NmCard>
  );
}
