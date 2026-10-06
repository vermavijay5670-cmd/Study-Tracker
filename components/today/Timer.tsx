"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Play, Pause, RotateCcw, TimerReset, Plus, Check, Volume2, VolumeX, BellOff } from "lucide-react";
import { PaperCard } from "@/components/ui/PaperCard";
import { CapsuleButton } from "@/components/ui/CapsuleButton";
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
    <PaperCard delay={0.16}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
          <TimerReset size={11} strokeWidth={1.75} /> focus timer
        </span>
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Alarm sound on — click to mute" : "Alarm sound off — click to turn on"}
          title={soundOn ? "Alarm sound on" : "Alarm sound off"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/30 hover:text-white"
        >
          {soundOn ? <Volume2 size={14} strokeWidth={1.75} /> : <VolumeX size={14} strokeWidth={1.75} />}
        </button>
      </div>
        <h2 className="text-[16px] font-medium text-[#F7F2E7]">Timer</h2>

        <div className="mb-4 mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-wide text-white/40">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: completed ? "#6FB37A" : running ? "#FFC93D" : "rgba(255,201,61,0.25)",
              boxShadow: completed ? "0 0 8px rgba(111,179,122,0.85)" : running ? "0 0 8px rgba(255,201,61,0.85)" : "none",
              animation: running ? "pulse 1.1s ease-in-out infinite" : "none",
            }}
          />
          {completed ? "time's up" : running ? "counting down" : "ready to start"}
        </div>

        <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mb-3 flex items-end gap-0">
          {[
            { v: hh, u: "hrs" },
            { v: mm, u: "min" },
            { v: ss, u: "sec" },
          ].map((b, i) => (
            <div key={b.u} className="flex items-end">
              <div className="flex min-w-[52px] flex-col items-center">
                <span
                  className="font-tabular text-[28px] font-bold leading-none"
                  style={{
                    color: completed ? "#86EFAC" : "#F7F2E7",
                    textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                  }}
                >
                  {b.v}
                </span>
                <span className="mt-1 text-[8px] uppercase tracking-wide text-white/40">{b.u}</span>
              </div>
              {i < 2 && <span className="pb-3 text-xl text-[#FFD64D]/50">:</span>}
            </div>
          ))}
        </div>

        <div className="mb-4 h-1 w-full overflow-hidden rounded-full border border-white/10 bg-black/25">
          <div
            className="h-full rounded-full transition-[width] duration-300"
            style={{
              width: `${pct}%`,
              background: completed ? "linear-gradient(90deg,#15803d,#6FB37A)" : "linear-gradient(90deg,#7A4E0A,#FFD64D)",
            }}
          />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          {PRESETS_MIN.map((min) => (
            <button
              key={min}
              onClick={() => applyDuration(min * 60_000)}
              disabled={running}
              className="rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors disabled:opacity-40"
              style={
                timerDurationMs === min * 60_000
                  ? { borderColor: "rgba(255,214,77,0.5)", background: "rgba(255,214,77,0.22)", color: "#F7F2E7" }
                  : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }
              }
            >
              {min}m
            </button>
          ))}
          <button
            onClick={() => setShowCustom((v) => !v)}
            disabled={running}
            className="rounded-full border px-2.5 py-1 text-[10px] font-medium transition-colors disabled:opacity-40"
            style={
              showCustom
                ? { borderColor: "rgba(255,214,77,0.5)", background: "rgba(255,214,77,0.22)", color: "#F7F2E7" }
                : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)" }
            }
          >
            Custom
          </button>
        </div>

        {showCustom && !running && (
          <div className="mb-4 flex items-end gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-[8px] uppercase tracking-wide text-white/35">Hrs</span>
              <input
                type="number"
                min="0"
                max="12"
                placeholder="0"
                value={customHrs}
                onChange={(e) => setCustomHrs(e.target.value)}
                className="w-14 rounded-lg border border-white/10 bg-black/25 px-2 py-1.5 text-center font-tabular text-[13px] text-white/85 outline-none focus:border-[#FFD64D]/50"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[8px] uppercase tracking-wide text-white/35">Min</span>
              <input
                type="number"
                min="0"
                max="59"
                placeholder="0"
                value={customMin}
                onChange={(e) => setCustomMin(e.target.value)}
                className="w-14 rounded-lg border border-white/10 bg-black/25 px-2 py-1.5 text-center font-tabular text-[13px] text-white/85 outline-none focus:border-[#FFD64D]/50"
              />
            </label>
            <CapsuleButton onClick={applyCustom} className="!px-4 !py-2">
              <Check size={13} strokeWidth={2} /> Set
            </CapsuleButton>
          </div>
        )}

        {ringing && (
          <CapsuleButton onClick={stopAlarm} accent="gold" variant="solid" className="mb-2 w-full rounded-full">
            <BellOff size={14} strokeWidth={1.75} /> Stop alarm
          </CapsuleButton>
        )}

        {completed ? (
          <div className="mb-1 flex gap-2">
            <CapsuleButton onClick={handleReset} className="flex-1 rounded-full">
              <RotateCcw size={14} strokeWidth={1.75} /> Restart
            </CapsuleButton>
            <CapsuleButton onClick={logSession} accent="gold" variant="solid" className="flex-1 rounded-full" disabled={logged}>
              <Plus size={14} strokeWidth={1.75} /> {logged ? "Logged" : `Log ${fmtDurationLabel(timerDurationMs)}`}
            </CapsuleButton>
          </div>
        ) : (
          <div className="flex gap-2">
            <CapsuleButton onClick={running ? onPause : handleStart} accent="gold" variant="solid" className="flex-1 rounded-full">
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
            <CapsuleButton onClick={handleReset} className="flex-1 rounded-full">
              <RotateCcw size={14} strokeWidth={1.75} /> Reset
            </CapsuleButton>
          </div>
        )}
    </PaperCard>
  );
}
