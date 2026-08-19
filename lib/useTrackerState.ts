"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CHAPTERS } from "./data";
import { addDays, daysBetween, dateKey, parseKey, todayKey } from "./date-utils";
import { createSupabaseBrowserClient } from "./supabase/client";
import type { User } from "@supabase/supabase-js";
import type { ChapterState, Difficulty, Subject, SubjectStats, Streaks, TrackerState } from "./types";

const STORAGE_KEY = "neet_tracker_v1";
const TABLE = "user_state";
const SYNC_DEBOUNCE_MS = 1500;

const DEFAULT_TIMER_MS = 25 * 60_000;

function defaultState(): TrackerState {
  return {
    startDate: todayKey(),
    examDate: "",
    dailyGoalHours: 6,
    studentName: "",
    targetExam: "",
    log: {},
    planner: {},
    subtopics: {},
    stopwatchRunningSince: null,
    stopwatchLastFlushAt: null,
    stopwatchSessions: 0,
    stopwatchSessionMs: 0,
    stopwatchSessionsDate: todayKey(),
    timerDurationMs: DEFAULT_TIMER_MS,
    timerRemainingMs: DEFAULT_TIMER_MS,
    timerEndAt: null,
    lastModified: 0,
  };
}

function loadState(): TrackerState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const merged: TrackerState = {
      ...defaultState(),
      ...parsed,
      log: parsed.log ?? {},
      planner: parsed.planner ?? {},
      subtopics: parsed.subtopics ?? {},
    };
    // Stopwatch session count/timer are per-day — start fresh if this is a new day
    // (including for users whose stored data predates this field entirely).
    if (merged.stopwatchSessionsDate !== todayKey()) {
      merged.stopwatchSessions = 0;
      merged.stopwatchSessionMs = 0;
      merged.stopwatchSessionsDate = todayKey();
    }
    return merged;
  } catch {
    return defaultState();
  }
}

export function useTrackerState() {
  const [state, setStateRaw] = useState<TrackerState>(defaultState);
  const [hydrated, setHydrated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const supabaseRef = useRef(createSupabaseBrowserClient());
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipNextPushRef = useRef(false); // true right after we adopt cloud data, so we don't immediately echo it back

  // Every mutator function below calls setState(updater) — wrapping the raw setter here
  // means all of them automatically stamp lastModified, without editing each one individually.
  const setState = useCallback((updater: (s: TrackerState) => TrackerState) => {
    setStateRaw((s) => ({ ...updater(s), lastModified: Date.now() }));
  }, []);

  // 1) Load the local cache instantly (fast, synchronous-feeling), then reconcile with
  //    the cloud once the user + their cloud row are known. Whichever side has the more
  //    recent lastModified wins, and we push the winner to the other side to converge.
  useEffect(() => {
    const local = loadState();
    setStateRaw(local);

    const supabase = supabaseRef.current;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      const currentUser = userData.user ?? null;
      setUser(currentUser);

      if (!currentUser) {
        setHydrated(true);
        return;
      }

      const { data: row } = await supabase.from(TABLE).select("state").eq("user_id", currentUser.id).maybeSingle();
      const cloud = row?.state as Partial<TrackerState> | undefined;

      if (cloud && (cloud.lastModified ?? 0) > local.lastModified) {
        const merged: TrackerState = {
          ...defaultState(),
          ...cloud,
          log: cloud.log ?? {},
          planner: cloud.planner ?? {},
          subtopics: cloud.subtopics ?? {},
        };
        skipNextPushRef.current = true;
        setStateRaw(merged);
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        } catch {
          /* ignore */
        }
      } else {
        // local is newer (or cloud had nothing) — push it up so the cloud row exists/matches
        await supabase.from(TABLE).upsert({ user_id: currentUser.id, state: local });
      }

      setHydrated(true);
    })();
  }, []);

  // 2) Whenever state changes: always mirror to the local cache immediately (fast, resilient),
  //    and debounce a push to Supabase so we're not writing on every keystroke.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be unavailable — fail silently */
    }

    if (skipNextPushRef.current) {
      skipNextPushRef.current = false;
      return;
    }
    if (!user) return;

    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(() => {
      supabaseRef.current.from(TABLE).upsert({ user_id: user.id, state }).then(() => {});
    }, SYNC_DEBOUNCE_MS);

    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [state, hydrated, user]);

  const signOut = useCallback(async () => {
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    // flush any pending change before signing out
    if (user) {
      await supabaseRef.current.from(TABLE).upsert({ user_id: user.id, state });
    }
    await supabaseRef.current.auth.signOut();
  }, [user, state]);

  const setDailyGoalHours = useCallback((hours: number) => {
    setState((s) => ({ ...s, dailyGoalHours: Number.isFinite(hours) ? hours : 0 }));
  }, [setState]);

  const setExamDate = useCallback((v: string) => {
    setState((s) => ({ ...s, examDate: v }));
  }, [setState]);

  const setProfile = useCallback((name: string, exam: string) => {
    setState((s) => ({ ...s, studentName: name.trim(), targetExam: exam.trim() }));
  }, [setState]);

  const setLogEntry = useCallback((key: string, hours: number | null) => {
    setState((s) => {
      const log = { ...s.log };
      if (hours === null || Number.isNaN(hours)) {
        delete log[key];
      } else {
        log[key] = Math.max(0, hours);
      }
      const startDate = key < s.startDate ? key : s.startDate;
      return { ...s, log, startDate };
    });
  }, [setState]);

  const addLogHours = useCallback((key: string, hoursDelta: number) => {
    setState((s) => {
      const log = { ...s.log };
      log[key] = Math.round(((log[key] ?? 0) + hoursDelta) * 1000) / 1000;
      return { ...s, log };
    });
  }, [setState]);

  const getChapterState = useCallback(
    (subj: Subject, cls: 11 | 12, i: number): ChapterState => {
      return state.planner[`${subj}_${cls}_${i}`] ?? {};
    },
    [state.planner]
  );

  const setChapterState = useCallback((subj: Subject, cls: 11 | 12, i: number, patch: Partial<ChapterState>) => {
    setState((s) => {
      const key = `${subj}_${cls}_${i}`;
      return { ...s, planner: { ...s.planner, [key]: { ...s.planner[key], ...patch } } };
    });
  }, [setState]);

  const toggleDone = useCallback(
    (subj: Subject, cls: 11 | 12, i: number) => {
      const cur = getChapterState(subj, cls, i);
      setChapterState(subj, cls, i, { done: !cur.done });
    },
    [getChapterState, setChapterState]
  );

  const bumpRevision = useCallback(
    (subj: Subject, cls: 11 | 12, i: number) => {
      const cur = getChapterState(subj, cls, i);
      setChapterState(subj, cls, i, { revCount: (cur.revCount ?? 0) + 1, lastRevised: todayKey() });
    },
    [getChapterState, setChapterState]
  );

  const resetRevision = useCallback(
    (subj: Subject, cls: 11 | 12, i: number) => {
      setChapterState(subj, cls, i, { revCount: 0, lastRevised: null });
    },
    [setChapterState]
  );

  const cycleDifficulty = useCallback(
    (subj: Subject, cls: 11 | 12, i: number) => {
      const order: Difficulty[] = [null, "easy", "medium", "hard"];
      const cur = getChapterState(subj, cls, i);
      const next = order[(order.indexOf(cur.diff ?? null) + 1) % order.length];
      setChapterState(subj, cls, i, { diff: next });
    },
    [getChapterState, setChapterState]
  );

  const isSubtopicDone = useCallback(
    (subj: Subject, cls: 11 | 12, chapterIdx: number, subIdx: number) => {
      return Boolean(state.subtopics[`${subj}_${cls}_${chapterIdx}_${subIdx}`]);
    },
    [state.subtopics]
  );

  const toggleSubtopic = useCallback((subj: Subject, cls: 11 | 12, chapterIdx: number, subIdx: number) => {
    setState((s) => {
      const key = `${subj}_${cls}_${chapterIdx}_${subIdx}`;
      const subtopics = { ...s.subtopics, [key]: !s.subtopics[key] };
      return { ...s, subtopics };
    });
  }, [setState]);

  // ---- Stopwatch: persisted so it survives navigating to another page ----
  // stopwatchRunningSince anchors the *display* (time since Start) and is only ever
  // touched by Start/Pause/Reset. stopwatchLastFlushAt is separate bookkeeping used
  // purely to know how much *new* time to commit into the log at each checkpoint —
  // if these were the same field, every checkpoint would visually reset the timer.
  const startStopwatch = useCallback(() => {
    setState((s) => {
      const now = Date.now();
      const isNewDay = s.stopwatchSessionsDate !== todayKey();
      return {
        ...s,
        stopwatchRunningSince: now,
        stopwatchLastFlushAt: now,
        stopwatchSessions: (isNewDay ? 0 : s.stopwatchSessions) + 1,
        stopwatchSessionMs: isNewDay ? 0 : s.stopwatchSessionMs,
        stopwatchSessionsDate: todayKey(),
      };
    });
  }, [setState]);

  const pauseStopwatch = useCallback(() => {
    setState((s) => {
      if (s.stopwatchRunningSince == null) return s;
      const now = Date.now();
      const since = s.stopwatchLastFlushAt ?? s.stopwatchRunningSince;
      const elapsedHours = (now - since) / 3_600_000;
      const key = todayKey();
      const log = { ...s.log };
      log[key] = Math.round(((log[key] ?? 0) + elapsedHours) * 1000) / 1000;
      // Freeze the on-screen session timer at its accumulated value instead of
      // letting it drop back to zero the instant the stopwatch is paused.
      const sessionMs = (s.stopwatchSessionMs ?? 0) + (now - s.stopwatchRunningSince);
      return { ...s, log, stopwatchRunningSince: null, stopwatchLastFlushAt: null, stopwatchSessionMs: sessionMs };
    });
  }, [setState]);

  const resetStopwatchSessions = useCallback(() => {
    setState((s) => {
      let next = s;
      if (s.stopwatchRunningSince != null) {
        const now = Date.now();
        const since = s.stopwatchLastFlushAt ?? s.stopwatchRunningSince;
        const elapsedHours = (now - since) / 3_600_000;
        const key = todayKey();
        const log = { ...s.log };
        log[key] = Math.round(((log[key] ?? 0) + elapsedHours) * 1000) / 1000;
        next = { ...s, log, stopwatchRunningSince: null, stopwatchLastFlushAt: null };
      }
      return { ...next, stopwatchSessions: 0, stopwatchSessionMs: 0, stopwatchSessionsDate: todayKey() };
    });
  }, [setState]);

  // Periodic safety checkpoint while running (called every ~30s AND once on mount) —
  // commits elapsed time into today's log. Deliberately does NOT touch stopwatchRunningSince,
  // so the on-screen timer keeps counting up smoothly instead of jumping back on every checkpoint.
  const checkpointStopwatch = useCallback(() => {
    setState((s) => {
      if (s.stopwatchRunningSince == null) return s;
      const now = Date.now();
      const since = s.stopwatchLastFlushAt ?? s.stopwatchRunningSince;
      const elapsedHours = (now - since) / 3_600_000;
      if (elapsedHours <= 0) return s;
      const key = todayKey();
      const log = { ...s.log };
      log[key] = Math.round(((log[key] ?? 0) + elapsedHours) * 1000) / 1000;
      return { ...s, log, stopwatchLastFlushAt: now };
    });
  }, [setState]);

  // Last-resort direct localStorage flush for the moment a page unmounts (navigation away).
  // Bypasses React state entirely so it can't be clobbered by a stale in-flight render.
  // Same rule applies: only stopwatchLastFlushAt is updated, runningSince (display anchor) is left alone.
  const flushStopwatchOnUnmount = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.stopwatchRunningSince) {
        const now = Date.now();
        const since = parsed.stopwatchLastFlushAt ?? parsed.stopwatchRunningSince;
        const elapsedHours = (now - since) / 3_600_000;
        const key = todayKey();
        parsed.log = parsed.log ?? {};
        parsed.log[key] = Math.round(((parsed.log[key] ?? 0) + elapsedHours) * 1000) / 1000;
        parsed.stopwatchLastFlushAt = now;
        parsed.lastModified = now;
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      }
    } catch {
      /* best-effort — a missed flush just means a few seconds of unlogged time */
    }
  }, []);

  // ---- Timer: persisted as an absolute end timestamp so it keeps counting down correctly
  // regardless of which page is mounted. ----
  const startTimer = useCallback(() => {
    setState((s) => {
      if (s.timerRemainingMs <= 0) return s;
      return { ...s, timerEndAt: Date.now() + s.timerRemainingMs };
    });
  }, [setState]);

  const pauseTimer = useCallback(() => {
    setState((s) => {
      if (s.timerEndAt == null) return s;
      const remaining = Math.max(0, s.timerEndAt - Date.now());
      return { ...s, timerEndAt: null, timerRemainingMs: remaining };
    });
  }, [setState]);

  const resetTimer = useCallback(() => {
    setState((s) => ({ ...s, timerEndAt: null, timerRemainingMs: s.timerDurationMs }));
  }, [setState]);

  const setTimerDuration = useCallback((ms: number) => {
    setState((s) => (s.timerEndAt != null ? s : { ...s, timerDurationMs: ms, timerRemainingMs: ms }));
  }, [setState]);

  const completeTimer = useCallback(() => {
    setState((s) => (s.timerEndAt == null ? s : { ...s, timerEndAt: null, timerRemainingMs: 0 }));
  }, [setState]);

  const streaks: Streaks = useMemo(() => {
    const studied = new Set(Object.keys(state.log).filter((k) => state.log[k] > 0));
    let current = 0;
    let cursor = new Date();
    if (!studied.has(dateKey(cursor))) cursor = addDays(cursor, -1);
    while (studied.has(dateKey(cursor))) {
      current++;
      cursor = addDays(cursor, -1);
    }
    let best = 0;
    let run = 0;
    let iter = parseKey(state.startDate);
    const end = new Date();
    while (iter <= end) {
      if (studied.has(dateKey(iter))) {
        run++;
        best = Math.max(best, run);
      } else {
        run = 0;
      }
      iter = addDays(iter, 1);
    }
    return { current, best };
  }, [state.log, state.startDate]);

  const totalDays = useMemo(
    () => Math.max(1, daysBetween(parseKey(state.startDate), new Date()) + 1),
    [state.startDate]
  );

  const totalHoursLogged = useMemo(
    () => Object.values(state.log).reduce((a, b) => a + b, 0),
    [state.log]
  );

  const daysStudied = useMemo(
    () => Object.values(state.log).filter((h) => h > 0).length,
    [state.log]
  );

  const getSubjectStats = useCallback(
    (subj: Subject): SubjectStats => {
      let done = 0;
      let rev = 0;
      let total = 0;
      const dueRevision: SubjectStats["dueRevision"] = [];
      ([11, 12] as const).forEach((cls) => {
        CHAPTERS[subj][cls].forEach((name, i) => {
          total++;
          const st = getChapterState(subj, cls, i);
          if (st.done) done++;
          if ((st.revCount ?? 0) > 0) rev++;
          if (st.done) {
            const staleDays = st.lastRevised ? daysBetween(parseKey(st.lastRevised), new Date()) : Infinity;
            if (staleDays >= 7) {
              dueRevision.push({ subj, name, days: st.lastRevised ? staleDays : null });
            }
          }
        });
      });
      return { done, rev, total, dueRevision };
    },
    [getChapterState]
  );

  const getRecentActivity = useCallback(
    (limit = 6) => {
      type Activity =
        | { type: "log"; date: string; hours: number }
        | { type: "revision"; date: string; subject: Subject; chapter: string };

      const logActivities: Activity[] = Object.entries(state.log)
        .filter(([, hours]) => hours > 0)
        .map(([date, hours]) => ({ type: "log" as const, date, hours }));

      const revisionActivities: Activity[] = [];
      (["phy", "chem", "bio"] as Subject[]).forEach((subj) => {
        ([11, 12] as const).forEach((cls) => {
          CHAPTERS[subj][cls].forEach((name, i) => {
            const st = getChapterState(subj, cls, i);
            if (st.lastRevised) {
              revisionActivities.push({ type: "revision", date: st.lastRevised, subject: subj, chapter: name });
            }
          });
        });
      });

      return [...logActivities, ...revisionActivities].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
    },
    [state.log, getChapterState]
  );

  return {
    state,
    hydrated,
    user,
    signOut,
    setDailyGoalHours,
    setExamDate,
    setProfile,
    setLogEntry,
    addLogHours,
    getChapterState,
    toggleDone,
    bumpRevision,
    resetRevision,
    cycleDifficulty,
    streaks,
    totalDays,
    totalHoursLogged,
    daysStudied,
    getSubjectStats,
    getRecentActivity,
    isSubtopicDone,
    toggleSubtopic,
    startStopwatch,
    pauseStopwatch,
    resetStopwatchSessions,
    checkpointStopwatch,
    flushStopwatchOnUnmount,
    startTimer,
    pauseTimer,
    resetTimer,
    setTimerDuration,
    completeTimer,
  };
}
