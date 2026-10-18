"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CHAPTERS, SUBTOPICS } from "./data";
import { addDays, daysBetween, dateKey, parseKey, todayKey } from "./date-utils";
import { createSupabaseBrowserClient } from "./supabase/client";
import type { User } from "@supabase/supabase-js";
import type { ChapterState, ChapterSubtopic, Difficulty, PracticeTag, Goal, PracticeKey, QuizProgress, QuizDoneRecord, Subject, SubjectStats, Streaks, TrackerState } from "./types";

export const STORAGE_KEY = "neet_tracker_v1";
const OWNER_KEY = "neet_tracker_owner"; // which account the local cache belongs to
const TABLE = "user_state";
/** Fired on window whenever one hook instance (or Settings) changes the saved state, so every other live instance adopts it. */
export const STATE_EVENT = "tracker:state";
const SYNC_DEBOUNCE_MS = 1500;

const DEFAULT_TIMER_MS = 25 * 60_000;

export function defaultState(): TrackerState {
  return {
    startDate: todayKey(),
    examDate: "",
    dailyGoalHours: 6,
    studentName: "",
    targetExam: "",
    log: {},
    planner: {},
    customSubjects: [],
    subtopics: {},
    subtopicLists: {},
    practiceLists: {},
    practiceDone: {},
    dailyGoals: {},
    customThoughts: [],
    quizProgress: {},
    quizDone: {},
    dayMarks: {},
    dayNotes: {},
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

export function loadState(): TrackerState {
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
      customSubjects: Array.isArray(parsed.customSubjects) ? parsed.customSubjects : [],
      subtopics: parsed.subtopics ?? {},
      subtopicLists: parsed.subtopicLists ?? {},
      practiceLists: parsed.practiceLists ?? {},
      practiceDone: parsed.practiceDone ?? {},
      dailyGoals: parsed.dailyGoals ?? {},
      customThoughts: parsed.customThoughts ?? [],
      quizProgress: parsed.quizProgress ?? {},
      quizDone: parsed.quizDone ?? {},
      dayMarks: parsed.dayMarks ?? {},
      dayNotes: parsed.dayNotes ?? {},
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

export const MAX_PRACTICE_TAGS = 12;
export const PRACTICE_TAG_MAX = 40;
const FIRST_OWN_TAG_ID = 10;

/** Built-in tags keep using the three original flags on the chapter, so nothing already ticked is lost. */
function builtInPractice(subj: string): PracticeTag[] {
  return subj === "bio"
    ? [
        { id: 0, name: "NEET Advance questions" },
        { id: 1, name: "Assignments" },
      ]
    : [{ id: 0, name: "Question practice" }];
}
const LEGACY_FIELD = (subj: string, id: number): "practiceDone" | "neetAdvDone" | "assignmentsDone" | null =>
  subj === "bio" ? (id === 0 ? "neetAdvDone" : id === 1 ? "assignmentsDone" : null) : id === 0 ? "practiceDone" : null;

const sameTags = (a: PracticeTag[], b: PracticeTag[]) => a.length === b.length && a.every((t, i) => t.id === b[i].id && t.name === b[i].name);

/** Planner keys of every chapter in a subject (built-in Physics/Chemistry/Biology, or a custom subject). */
function chapterKeysOf(s: TrackerState, subj: string): string[] {
  if (subj === "phy" || subj === "chem" || subj === "bio") {
    const keys: string[] = [];
    for (const cls of [11, 12] as const) CHAPTERS[subj][cls].forEach((_, i) => keys.push(`${subj}_${cls}_${i}`));
    return keys;
  }
  return (s.customSubjects.find((c) => c.id === subj)?.chapters ?? []).map((ch) => `${subj}_11_${ch.id}`);
}

/** Subject id a chapter key belongs to ("phy_11_3" -> "phy"). */
const subjectOfKey = (key: string) => key.split("_")[0];

export const MAX_SUBTOPICS = 60;
export const SUBTOPIC_NAME_MAX = 120;

/** The built-in subtopic list for a chapter (only Biology ships with one). Ids are the list positions, matching saved ticks. */
function builtInSubtopics(subj: string, cls: 11 | 12, i: number): ChapterSubtopic[] {
  const base = (SUBTOPICS as Record<string, Record<number, string[][]> | undefined>)[subj]?.[cls]?.[i];
  return base ? base.map((name, id) => ({ id, name })) : [];
}

type Boot = {
  user: User | null;
  state: TrackerState;
  /** True when the loaded state replaced this device's local copy (cloud was newer, or a different account's cache was dropped). */
  replaced: boolean;
};

/**
 * The account + cloud sync only needs to happen once per page load, not on every navigation. Until now every
 * part of every page (sidebar, section, alarm…) asked Supabase "who is this?" and re-downloaded the saved
 * data on each section switch, which is why switching felt slow. The result is kept here and reused.
 */
let bootResult: Boot | null = null;
let bootPromise: Promise<Boot> | null = null;
let authListening = false;

function withTimeout<T>(p: PromiseLike<T>, ms: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("timeout")), ms);
    Promise.resolve(p).then(
      (v) => {
        clearTimeout(t);
        resolve(v);
      },
      (e) => {
        clearTimeout(t);
        reject(e);
      }
    );
  });
}

function bootstrap(supabase: ReturnType<typeof createSupabaseBrowserClient>): Promise<Boot> {
  if (bootResult) return Promise.resolve(bootResult);

  if (!authListening) {
    authListening = true;
    // Signing in/out (a different account) invalidates what we loaded; token refreshes of the same account don't.
    supabase.auth.onAuthStateChange((_event, session) => {
      const id = session?.user?.id ?? null;
      if (id !== (bootResult?.user?.id ?? null)) {
        bootResult = null;
        bootPromise = null;
      }
    });
  }

  if (!bootPromise) {
    bootPromise = (async (): Promise<Boot> => {
      let local = loadState();
      let currentUser: User | null = null;
      try {
        // getSession reads the session already stored in the browser (no network round trip, unlike getUser).
        // Security is not decided here: the database's row-level rules and the server middleware check the real login.
        const { data } = await withTimeout(supabase.auth.getSession(), 5000);
        currentUser = data.session?.user ?? null;
        if (!currentUser) return (bootResult = { user: null, state: local, replaced: false });

        let replaced = false;
        // the local cache belongs to whoever used this browser last — never let it overwrite a different account
        try {
          const owner = window.localStorage.getItem(OWNER_KEY);
          if (owner && owner !== currentUser.id) {
            local = defaultState();
            replaced = true;
          }
          window.localStorage.setItem(OWNER_KEY, currentUser.id);
        } catch {
          /* ignore */
        }

        const { data: row } = await withTimeout(supabase.from(TABLE).select("state").eq("user_id", currentUser.id).maybeSingle(), 8000);
        const cloud = row?.state as Partial<TrackerState> | undefined;

        // cloud wins if it's newer, or if this device has nothing of its own yet (never push an empty local over real cloud data)
        const hasCloud = cloud && Object.keys(cloud).length > 0;
        if (hasCloud && ((cloud.lastModified ?? 0) > local.lastModified || local.lastModified === 0)) {
          const merged: TrackerState = {
            ...defaultState(),
            ...cloud,
            log: cloud.log ?? {},
            planner: cloud.planner ?? {},
            customSubjects: Array.isArray(cloud.customSubjects) ? cloud.customSubjects : [],
            subtopics: cloud.subtopics ?? {},
            subtopicLists: cloud.subtopicLists ?? {},
            practiceLists: cloud.practiceLists ?? {},
            quizDone: cloud.quizDone ?? {},
            practiceDone: cloud.practiceDone ?? {},
          };
          if (merged.stopwatchSessionsDate !== todayKey()) {
            merged.stopwatchSessions = 0;
            merged.stopwatchSessionMs = 0;
            merged.stopwatchSessionsDate = todayKey();
          }
          try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          } catch {
            /* ignore */
          }
          return (bootResult = { user: currentUser, state: merged, replaced: true });
        }

        // local is newer (or cloud had nothing) — push it up so the cloud row exists/matches
        void supabase.from(TABLE).upsert({ user_id: currentUser.id, state: local }).then(() => {});
        return (bootResult = { user: currentUser, state: local, replaced });
      } catch {
        // Offline or Supabase unreachable: carry on with the local copy instead of showing "Loading…" forever.
        // Not cached, so the next page tries the cloud again.
        bootPromise = null;
        return { user: currentUser, state: local, replaced: false };
      }
    })();
  }
  return bootPromise;
}

/**
 * Change the saved state from outside a hook instance (Settings → Subjects). Writes the local cache,
 * then tells every live hook instance to adopt it; one of them pushes it to the cloud.
 */
export function mutateStoredState(fn: (s: TrackerState) => TrackerState): TrackerState {
  const next: TrackerState = { ...fn(loadState()), lastModified: Date.now() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage may be unavailable — live instances still get the change below */
  }
  window.dispatchEvent(new CustomEvent(STATE_EVENT, { detail: { from: "external", state: next, needsPush: true } }));
  return next;
}

export function useTrackerState() {
  // After the first section has loaded, later ones start from the saved copy and are ready immediately (no "Loading…").
  const [state, setStateRaw] = useState<TrackerState>(() => (bootResult ? loadState() : defaultState()));
  const [hydrated, setHydrated] = useState(() => bootResult !== null);
  const [user, setUser] = useState<User | null>(() => bootResult?.user ?? null);
  const supabaseRef = useRef(createSupabaseBrowserClient());
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipNextPushRef = useRef(false); // true right after we adopt cloud data, so we don't immediately echo it back
  const instanceId = useRef(Math.random().toString(36).slice(2));
  const stateRef = useRef(state);
  const hydratedRef = useRef(false);
  const adoptedRef = useRef<TrackerState | null>(null); // the state object we last adopted from elsewhere (don't re-broadcast it)

  // Every mutator function below calls setState(updater) — wrapping the raw setter here
  // means all of them automatically stamp lastModified, without editing each one individually.
  const setState = useCallback((updater: (s: TrackerState) => TrackerState) => {
    setStateRaw((s) => ({ ...updater(s), lastModified: Date.now() }));
  }, []);

  // 1) Show the local copy instantly, then (once per page load) reconcile with the cloud. Whichever side
  //    has the more recent lastModified wins, and the winner is pushed to the other side to converge.
  useEffect(() => {
    if (bootResult) {
      // Already loaded earlier in this visit: just pick up anything newer from storage — no network at all.
      const local = loadState();
      if (local.lastModified > stateRef.current.lastModified) setStateRaw(local);
      setUser(bootResult.user);
      setHydrated(true);
      return;
    }

    setStateRaw(loadState());
    let alive = true;
    bootstrap(supabaseRef.current).then((res) => {
      if (!alive) return;
      setUser(res.user);
      if (res.replaced) {
        skipNextPushRef.current = true;
        setStateRaw(res.state);
      }
      setHydrated(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  useEffect(() => {
    hydratedRef.current = hydrated;
  }, [hydrated]);

  // Other hook instances on the page (and other tabs) each hold their own copy of the state. Adopt any
  // newer copy so a change made in one place (e.g. adding a subject in Settings) shows up everywhere
  // and an out-of-date instance can never write its old copy back over it.
  useEffect(() => {
    const adopt = (incoming: TrackerState, push: boolean) => {
      if (!hydratedRef.current) return;
      if ((incoming.lastModified ?? 0) <= stateRef.current.lastModified) return;
      adoptedRef.current = incoming;
      skipNextPushRef.current = !push;
      setStateRaw(incoming);
    };
    const onEvent = (e: Event) => {
      const d = (e as CustomEvent<{ from: string; state: TrackerState; needsPush?: boolean }>).detail;
      if (!d || d.from === instanceId.current) return;
      adopt(d.state, Boolean(d.needsPush));
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        adopt({ ...defaultState(), ...JSON.parse(e.newValue) }, false);
      } catch {
        /* ignore a malformed value */
      }
    };
    window.addEventListener(STATE_EVENT, onEvent);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(STATE_EVENT, onEvent);
      window.removeEventListener("storage", onStorage);
    };
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
    if (adoptedRef.current !== state) {
      window.dispatchEvent(new CustomEvent(STATE_EVENT, { detail: { from: instanceId.current, state } }));
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
    bootResult = null;
    bootPromise = null;
    await supabaseRef.current.auth.signOut();
    // don't leave this account's data in the browser for the next person who signs in
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      window.localStorage.removeItem(OWNER_KEY);
    } catch {
      /* ignore */
    }
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
    (subj: string, cls: 11 | 12, i: number): ChapterState => {
      return state.planner[`${subj}_${cls}_${i}`] ?? {};
    },
    [state.planner]
  );

  const setChapterState = useCallback((subj: string, cls: 11 | 12, i: number, patch: Partial<ChapterState>) => {
    setState((s) => {
      const key = `${subj}_${cls}_${i}`;
      return { ...s, planner: { ...s.planner, [key]: { ...s.planner[key], ...patch } } };
    });
  }, [setState]);

  const toggleDone = useCallback(
    (subj: string, cls: 11 | 12, i: number) => {
      const cur = getChapterState(subj, cls, i);
      setChapterState(subj, cls, i, { done: !cur.done });
    },
    [getChapterState, setChapterState]
  );

  const togglePractice = useCallback(
    (subj: string, cls: 11 | 12, i: number, key: PracticeKey) => {
      setState((s) => {
        const ck = `${subj}_${cls}_${i}`;
        const cur = s.planner[ck] ?? {};
        return { ...s, planner: { ...s.planner, [ck]: { ...cur, [key]: !cur[key] } } };
      });
    },
    [setState]
  );

  const bumpRevision = useCallback(
    (subj: string, cls: 11 | 12, i: number) => {
      const cur = getChapterState(subj, cls, i);
      setChapterState(subj, cls, i, { revCount: (cur.revCount ?? 0) + 1, lastRevised: todayKey() });
    },
    [getChapterState, setChapterState]
  );

  const resetRevision = useCallback(
    (subj: string, cls: 11 | 12, i: number) => {
      setChapterState(subj, cls, i, { revCount: 0, lastRevised: null });
    },
    [setChapterState]
  );

  const cycleDifficulty = useCallback(
    (subj: string, cls: 11 | 12, i: number) => {
      const order: Difficulty[] = [null, "easy", "medium", "hard"];
      const cur = getChapterState(subj, cls, i);
      const next = order[(order.indexOf(cur.diff ?? null) + 1) % order.length];
      setChapterState(subj, cls, i, { diff: next });
    },
    [getChapterState, setChapterState]
  );

  const setChapterNote = useCallback(
    (subj: string, cls: 11 | 12, i: number, note: string) => {
      setChapterState(subj, cls, i, { note });
    },
    [setChapterState]
  );


  /** The chapter's Practice tags: the person's own list if they've edited it, otherwise the built-in one. */
  const getPractice = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number): PracticeTag[] => {
      return state.practiceLists[`${subj}_${cls}_${chapterIdx}`] ?? builtInPractice(subj);
    },
    [state.practiceLists]
  );

  const isPracticeDone = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, tagId: number) => {
      const key = `${subj}_${cls}_${chapterIdx}`;
      const legacy = tagId < FIRST_OWN_TAG_ID ? LEGACY_FIELD(subj, tagId) : null;
      return legacy ? Boolean(state.planner[key]?.[legacy]) : Boolean(state.practiceDone[`${key}_${tagId}`]);
    },
    [state.planner, state.practiceDone]
  );

  const togglePracticeTag = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, tagId: number) => {
      setState((s) => {
        const key = `${subj}_${cls}_${chapterIdx}`;
        const legacy = tagId < FIRST_OWN_TAG_ID ? LEGACY_FIELD(subj, tagId) : null;
        if (legacy) {
          const cur = s.planner[key] ?? {};
          return { ...s, planner: { ...s.planner, [key]: { ...cur, [legacy]: !cur[legacy] } } };
        }
        const k = `${key}_${tagId}`;
        return { ...s, practiceDone: { ...s.practiceDone, [k]: !s.practiceDone[k] } };
      });
    },
    [setState]
  );

  /** Adds one tag per non-empty line. `all` adds them to every chapter of the subject. Returns an error message or null. */
  const addPracticeTags = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, raw: string, all: boolean): string | null => {
      const names = raw
        .split(/\r?\n|,/)
        .map((l) => l.replace(/\s+/g, " ").trim().slice(0, PRACTICE_TAG_MAX))
        .filter(Boolean);
      if (names.length === 0) return "Type a tag name first.";
      const here = `${subj}_${cls}_${chapterIdx}`;
      const cur = stateRef.current.practiceLists[here] ?? builtInPractice(subj);
      const fresh = names.filter((n) => !cur.some((t) => t.name.toLowerCase() === n.toLowerCase()));
      if (!all && fresh.length === 0) return "That tag is already here.";
      if (!all && cur.length + fresh.length > MAX_PRACTICE_TAGS) return `A chapter can have up to ${MAX_PRACTICE_TAGS} tags.`;
      setState((s) => {
        const keys = all ? chapterKeysOf(s, subj) : [here];
        const lists = { ...s.practiceLists };
        for (const key of keys) {
          const list = lists[key] ?? builtInPractice(subj);
          let next = Math.max(FIRST_OWN_TAG_ID, list.reduce((m, t) => Math.max(m, t.id), -1) + 1);
          const add: PracticeTag[] = [];
          for (const n of names) {
            if (list.some((t) => t.name.toLowerCase() === n.toLowerCase()) || add.some((t) => t.name.toLowerCase() === n.toLowerCase())) continue;
            if (list.length + add.length >= MAX_PRACTICE_TAGS) break;
            add.push({ id: next++, name: n });
          }
          if (add.length > 0) lists[key] = [...list, ...add];
          if (lists[key] && sameTags(lists[key], builtInPractice(subjectOfKey(key)))) delete lists[key];
        }
        return { ...s, practiceLists: lists };
      });
      return null;
    },
    [setState]
  );

  /** Removes a tag (and its tick). `all` removes tags with the same name from every chapter of the subject. */
  const removePracticeTag = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, tagId: number, all: boolean) => {
      setState((s) => {
        const here = `${subj}_${cls}_${chapterIdx}`;
        const name = (s.practiceLists[here] ?? builtInPractice(subj)).find((t) => t.id === tagId)?.name.toLowerCase();
        if (name === undefined) return s;
        const keys = all ? chapterKeysOf(s, subj) : [here];
        const lists = { ...s.practiceLists };
        const done = { ...s.practiceDone };
        let planner = s.planner;
        for (const key of keys) {
          const list = lists[key] ?? builtInPractice(subjectOfKey(key));
          const hit = list.find((t) => (key === here && !all ? t.id === tagId : t.name.toLowerCase() === name));
          if (!hit) continue;
          const remaining = list.filter((t) => t.id !== hit.id);
          if (sameTags(remaining, builtInPractice(subjectOfKey(key)))) delete lists[key];
          else lists[key] = remaining;
          const legacy = hit.id < FIRST_OWN_TAG_ID ? LEGACY_FIELD(subjectOfKey(key), hit.id) : null;
          if (legacy && planner[key]) planner = { ...planner, [key]: { ...planner[key], [legacy]: false } };
          delete done[`${key}_${hit.id}`];
        }
        return { ...s, practiceLists: lists, practiceDone: done, planner };
      });
    },
    [setState]
  );

  /** Back to the built-in tags. Ticks on tags the person added are removed with them. */
  const resetPractice = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number) => {
      setState((s) => {
        const key = `${subj}_${cls}_${chapterIdx}`;
        const lists = { ...s.practiceLists };
        delete lists[key];
        const done: Record<string, boolean> = {};
        for (const [k, v] of Object.entries(s.practiceDone)) if (!k.startsWith(`${key}_`)) done[k] = v;
        return { ...s, practiceLists: lists, practiceDone: done };
      });
    },
    [setState]
  );

  /** The chapter's subtopics: the person's own list if they've edited it, otherwise the built-in one (Biology) or none. */
  const getSubtopics = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number): ChapterSubtopic[] => {
      return state.subtopicLists[`${subj}_${cls}_${chapterIdx}`] ?? builtInSubtopics(subj, cls, chapterIdx);
    },
    [state.subtopicLists]
  );

  const isSubtopicDone = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, subId: number) => {
      return Boolean(state.subtopics[`${subj}_${cls}_${chapterIdx}_${subId}`]);
    },
    [state.subtopics]
  );

  const toggleSubtopic = useCallback((subj: string, cls: 11 | 12, chapterIdx: number, subId: number) => {
    setState((s) => {
      const key = `${subj}_${cls}_${chapterIdx}_${subId}`;
      const subtopics = { ...s.subtopics, [key]: !s.subtopics[key] };
      return { ...s, subtopics };
    });
  }, [setState]);

  /** Adds one subtopic per non-empty line (so a pasted list works). Returns an error message or null. */
  const addSubtopics = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, raw: string): string | null => {
      const names = raw
        .split(/\r?\n/)
        .map((l) => l.replace(/^\s*(?:\d+[.)]|[-•*])\s*/, "").replace(/\s+/g, " ").trim().slice(0, SUBTOPIC_NAME_MAX))
        .filter(Boolean);
      if (names.length === 0) return "Type a subtopic name first.";
      const key = `${subj}_${cls}_${chapterIdx}`;
      const current = stateRef.current.subtopicLists[key] ?? builtInSubtopics(subj, cls, chapterIdx);
      if (current.length + names.length > MAX_SUBTOPICS) return `A chapter can have up to ${MAX_SUBTOPICS} subtopics.`;
      setState((s) => {
        const list = s.subtopicLists[key] ?? builtInSubtopics(subj, cls, chapterIdx);
        let next = list.reduce((m, t) => Math.max(m, t.id), -1) + 1;
        const added = names.map((name) => ({ id: next++, name }));
        return { ...s, subtopicLists: { ...s.subtopicLists, [key]: [...list, ...added] } };
      });
      return null;
    },
    [setState]
  );

  const deleteSubtopic = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number, subId: number) => {
      setState((s) => {
        const key = `${subj}_${cls}_${chapterIdx}`;
        const list = (s.subtopicLists[key] ?? builtInSubtopics(subj, cls, chapterIdx)).filter((t) => t.id !== subId);
        const progress = { ...s.subtopics };
        delete progress[`${key}_${subId}`]; // an id can be reused later, so don't leave a stale tick behind
        return { ...s, subtopicLists: { ...s.subtopicLists, [key]: list }, subtopics: progress };
      });
    },
    [setState]
  );

  /** Back to the built-in list (Biology). Ticks on subtopics the person added are removed with them. */
  const resetSubtopics = useCallback(
    (subj: string, cls: 11 | 12, chapterIdx: number) => {
      setState((s) => {
        const key = `${subj}_${cls}_${chapterIdx}`;
        const lists = { ...s.subtopicLists };
        delete lists[key];
        const builtInIds = new Set(builtInSubtopics(subj, cls, chapterIdx).map((t) => t.id));
        const progress: Record<string, boolean> = {};
        for (const [k, v] of Object.entries(s.subtopics)) {
          if (k.startsWith(`${key}_`) && !builtInIds.has(Number(k.slice(key.length + 1)))) continue;
          progress[k] = v;
        }
        return { ...s, subtopicLists: lists, subtopics: progress };
      });
    },
    [setState]
  );

  // ---- Stopwatch: persisted so it survives navigating to another page ----
  // stopwatchRunningSince anchors the *display* (time since Start) and is only ever
  // touched by Start/Pause/Reset. stopwatchLastFlushAt is separate bookkeeping used
  // purely to know how much *new* time to commit into the log at each checkpoint —
  // if these were the same field, every checkpoint would visually reset the timer.
  const startStopwatch = useCallback(() => {
    setState((s) => {
      if (s.stopwatchRunningSince != null) return s; // already running — a second Start must not reset the display or add a session
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

  // ---- Daily Goals: a fresh checklist per calendar day, keyed like `log` ----
  const addGoal = useCallback(
    (text: string, mandatory: boolean = false, dates?: string[]) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const targets = Array.from(new Set(dates && dates.length > 0 ? dates : [todayKey()]));
      setState((s) => {
        const dailyGoals = { ...s.dailyGoals };
        targets.forEach((key, i) => {
          const goal: Goal = {
            id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 8)}`,
            text: trimmed,
            done: false,
            mandatory,
          };
          dailyGoals[key] = [...(dailyGoals[key] ?? []), goal];
        });
        return { ...s, dailyGoals };
      });
    },
    [setState]
  );

  const toggleGoal = useCallback(
    (id: string, date?: string) => {
      setState((s) => {
        const key = date ?? todayKey();
        const list = s.dailyGoals[key] ?? [];
        const updated = list.map((g) => (g.id === id ? { ...g, done: !g.done } : g));
        return { ...s, dailyGoals: { ...s.dailyGoals, [key]: updated } };
      });
    },
    [setState]
  );

  const deleteGoal = useCallback(
    (id: string, date?: string) => {
      setState((s) => {
        const key = date ?? todayKey();
        const list = s.dailyGoals[key] ?? [];
        return { ...s, dailyGoals: { ...s.dailyGoals, [key]: list.filter((g) => g.id !== id) } };
      });
    },
    [setState]
  );

  const toggleGoalMandatory = useCallback(
    (id: string, date?: string) => {
      setState((s) => {
        const key = date ?? todayKey();
        const list = s.dailyGoals[key] ?? [];
        const updated = list.map((g) => (g.id === id ? { ...g, mandatory: !g.mandatory } : g));
        return { ...s, dailyGoals: { ...s.dailyGoals, [key]: updated } };
      });
    },
    [setState]
  );

  // ---- Positive thoughts: user-added thoughts join the daily rotation pool ----
  const addCustomThought = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setState((s) => ({ ...s, customThoughts: [...s.customThoughts, trimmed] }));
    },
    [setState]
  );

  // ---- Quiz progress: resume a chapter's quiz where you left off ----
  const saveQuizProgress = useCallback(
    (key: string, progress: QuizProgress) => {
      setState((s) => ({ ...s, quizProgress: { ...s.quizProgress, [key]: progress } }));
    },
    [setState]
  );

  /** Records that the chapter's quiz was finished, so it shows as completed even though its saved progress is cleared. */
  const completeQuiz = useCallback(
    (key: string, score: number, total: number) => {
      const rec: QuizDoneRecord = { score, total, at: Date.now() };
      setState((s) => ({ ...s, quizDone: { ...s.quizDone, [key]: rec } }));
    },
    [setState]
  );

  const clearQuizProgress = useCallback(
    (key: string) => {
      setState((s) => {
        if (!(key in s.quizProgress)) return s;
        const next = { ...s.quizProgress };
        delete next[key];
        return { ...s, quizProgress: next };
      });
    },
    [setState]
  );

  const setDayMark = useCallback(
    (dateKey: string, mark: "tick" | "cross") => {
      setState((s) => ({ ...s, dayMarks: { ...s.dayMarks, [dateKey]: mark } }));
    },
    [setState]
  );

  const clearDayMark = useCallback(
    (dateKey: string) => {
      setState((s) => {
        if (!(dateKey in s.dayMarks)) return s;
        const next = { ...s.dayMarks };
        delete next[dateKey];
        return { ...s, dayMarks: next };
      });
    },
    [setState]
  );

  const setDayNote = useCallback(
    (dateKey: string, note: string) => {
      setState((s) => {
        const next = { ...s.dayNotes };
        if (note.trim()) {
          next[dateKey] = note;
        } else {
          delete next[dateKey];
        }
        return { ...s, dayNotes: next };
      });
    },
    [setState]
  );

  const clearDayNote = useCallback(
    (dateKey: string) => {
      setState((s) => {
        if (!(dateKey in s.dayNotes)) return s;
        const next = { ...s.dayNotes };
        delete next[dateKey];
        return { ...s, dayNotes: next };
      });
    },
    [setState]
  );

  // Commit the time since the last checkpoint into today's log, moving only stopwatchLastFlushAt
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

  const goalStats = useMemo(() => {
    const today = todayKey();
    // goals planned for future days don't count towards streaks or totals until their day arrives
    const days = Object.keys(state.dailyGoals).filter((k) => k <= today && (state.dailyGoals[k]?.length ?? 0) > 0);
    const isPerfect = (k: string) => {
      const list = state.dailyGoals[k] ?? [];
      return list.length > 0 && list.every((g) => g.done);
    };
    const perfectDays = new Set(days.filter(isPerfect));

    let current = 0;
    let cursor = new Date();
    if (!perfectDays.has(dateKey(cursor))) cursor = addDays(cursor, -1);
    while (perfectDays.has(dateKey(cursor))) {
      current++;
      cursor = addDays(cursor, -1);
    }

    let best = 0;
    let run = 0;
    let iter = parseKey(state.startDate);
    const end = new Date();
    while (iter <= end) {
      if (perfectDays.has(dateKey(iter))) {
        run++;
        best = Math.max(best, run);
      } else {
        run = 0;
      }
      iter = addDays(iter, 1);
    }

    const todaysGoals = state.dailyGoals[todayKey()] ?? [];
    const todayDone = todaysGoals.filter((g) => g.done).length;
    const todayTotal = todaysGoals.length;

    let totalCompleted = 0;
    let totalGoals = 0;
    let mandatoryTotal = 0;
    let mandatoryDone = 0;
    Object.entries(state.dailyGoals).forEach(([k, list]) => {
      if (k > today) return;
      list.forEach((g) => {
        totalGoals++;
        if (g.done) totalCompleted++;
        if (g.mandatory) {
          mandatoryTotal++;
          if (g.done) mandatoryDone++;
        }
      });
    });

    return {
      currentStreak: current,
      bestStreak: best,
      perfectDayCount: perfectDays.size,
      todayDone,
      todayTotal,
      totalCompleted,
      totalGoals,
      mandatoryTotal,
      mandatoryDone,
    };
  }, [state.dailyGoals, state.startDate]);

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
    togglePractice,
    bumpRevision,
    resetRevision,
    cycleDifficulty,
    setChapterNote,
    streaks,
    totalDays,
    totalHoursLogged,
    daysStudied,
    getSubjectStats,
    getRecentActivity,
    getPractice,
    isPracticeDone,
    togglePracticeTag,
    addPracticeTags,
    removePracticeTag,
    resetPractice,
    getSubtopics,
    isSubtopicDone,
    toggleSubtopic,
    addSubtopics,
    deleteSubtopic,
    resetSubtopics,
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
    addGoal,
    toggleGoal,
    deleteGoal,
    toggleGoalMandatory,
    goalStats,
    addCustomThought,
    saveQuizProgress,
    completeQuiz,
    clearQuizProgress,
    setDayMark,
    clearDayMark,
    setDayNote,
    clearDayNote,
  };
}
