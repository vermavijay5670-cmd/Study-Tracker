"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Bell, BellOff } from "lucide-react";
import { STORAGE_KEY } from "@/lib/useTrackerState";
import { getBlocked, getRinging, ringAlarm, stopAlarm, subscribeAlarm, unlockAudio } from "@/lib/timerAlarm";

const STALE_MS = 15_000; // a timer that ended longer ago than this (app was closed) doesn't ring

export function useAlarmRinging() {
  return useSyncExternalStore(subscribeAlarm, getRinging, () => false);
}

/**
 * Mounted once in the root layout. Watches the saved timer and rings the alarm the moment the
 * countdown reaches zero — on whichever page you're on — and shows a "Stop" banner while it rings.
 */
export function TimerAlarmHost() {
  const ringing = useAlarmRinging();
  const blocked = useSyncExternalStore(subscribeAlarm, getBlocked, () => false);

  // unlock sound on the first interaction anywhere in the app
  useEffect(() => {
    const unlock = () => unlockAudio();
    const evs = ["pointerdown", "keydown", "touchstart"] as const;
    evs.forEach((e) => window.addEventListener(e, unlock, { passive: true }));
    return () => evs.forEach((e) => window.removeEventListener(e, unlock));
  }, []);

  // watch the saved timer state
  useEffect(() => {
    let lastRaw: string | null = null;
    let endAt: number | null = null;
    let remaining = 0;
    let armed: number | null = null;
    let ignored: number | null = null;

    const read = () => {
      let raw: string | null = null;
      try {
        raw = window.localStorage.getItem(STORAGE_KEY);
      } catch {
        return;
      }
      if (raw === lastRaw) return;
      lastRaw = raw;
      try {
        const s = raw ? JSON.parse(raw) : null;
        endAt = typeof s?.timerEndAt === "number" ? s.timerEndAt : null;
        remaining = typeof s?.timerRemainingMs === "number" ? s.timerRemainingMs : 0;
      } catch {
        endAt = null;
      }
    };

    const tick = () => {
      read();
      const now = Date.now();
      if (endAt != null) {
        if (armed !== endAt && ignored !== endAt) {
          if (now - endAt > STALE_MS) ignored = endAt; // finished while the app was closed
          else armed = endAt;
        }
      } else if (armed != null && remaining > 0) {
        armed = null; // paused or reset before reaching zero
      }
      if (armed != null && now >= armed) {
        armed = null;
        ringAlarm();
      }
    };

    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  if (!ringing) return null;
  return (
    <div
      role="alert"
      style={{
        position: "fixed",
        left: "50%",
        top: 20,
        transform: "translateX(-50%)",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 14px 12px 18px",
        borderRadius: 999,
        background: "#0c0c0e",
        color: "#f2f2f4",
        border: "1px solid rgba(216,255,92,0.45)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
        fontFamily: '"Manrope", Inter, system-ui, sans-serif',
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      <Bell size={20} strokeWidth={1.8} color="#d8ff5c" style={{ flex: "none" }} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, minWidth: 0 }}>
        <b style={{ fontSize: 15 }}>Time&apos;s up!</b>
        <span style={{ fontSize: 11.5, color: "#9a9aa0" }}>{blocked ? "Tap anywhere to hear the alarm" : "Your focus timer reached zero"}</span>
      </span>
      <button
        type="button"
        onClick={stopAlarm}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "9px 16px",
          border: 0,
          borderRadius: 999,
          cursor: "pointer",
          fontWeight: 700,
          fontSize: 13,
          color: "#0a0a0a",
          background: "#d8ff5c",
          flex: "none",
        }}
      >
        <BellOff size={15} strokeWidth={2.2} /> Stop
      </button>
    </div>
  );
}
