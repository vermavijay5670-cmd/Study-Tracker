"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STATE_EVENT, STORAGE_KEY, loadState, mutateStoredState } from "./useTrackerState";
import type { CustomSubject, TrackerState } from "./types";

export const MAX_SUBJECTS = 20;
export const MAX_CHAPTERS = 200;
export const SUBJECT_NAME_MAX = 60;
export const CHAPTER_NAME_MAX = 120;

const BUILT_IN_NAMES = ["physics", "chemistry", "biology"];

const newSubjectId = () => "cs" + Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 5);

/** Planner key for one chapter of a custom subject. Custom subjects have no class split, so class 11 is a fixed placeholder. */
export const customChapterKey = (subjectId: string, chapterId: number) => `${subjectId}_11_${chapterId}`;

const clean = (v: string) => v.replace(/\s+/g, " ").trim();

function dropProgress(planner: TrackerState["planner"], keep: (key: string) => boolean) {
  const out: TrackerState["planner"] = {};
  for (const [k, v] of Object.entries(planner)) if (keep(k)) out[k] = v;
  return out;
}

type Result = string | null; // null = ok, otherwise a message for the person

/** Subjects added in Settings, kept live across the whole app, plus the operations that change them. */
export function useCustomSubjects() {
  const [subjects, setSubjects] = useState<CustomSubject[]>([]);
  const lastMod = useRef(0);

  useEffect(() => {
    const apply = (s: TrackerState) => {
      if ((s.lastModified ?? 0) < lastMod.current) return;
      lastMod.current = s.lastModified ?? 0;
      setSubjects(Array.isArray(s.customSubjects) ? s.customSubjects : []);
    };
    apply(loadState());
    const onEvent = (e: Event) => {
      const d = (e as CustomEvent<{ state: TrackerState }>).detail;
      if (d?.state) apply(d.state);
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) apply(loadState());
    };
    window.addEventListener(STATE_EVENT, onEvent);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(STATE_EVENT, onEvent);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const commit = useCallback((fn: (s: TrackerState) => TrackerState) => {
    const next = mutateStoredState(fn);
    lastMod.current = next.lastModified;
    setSubjects(next.customSubjects);
  }, []);

  const addSubject = useCallback(
    (rawName: string): Result => {
      const name = clean(rawName).slice(0, SUBJECT_NAME_MAX);
      if (!name) return "Type a subject name first.";
      const cur = loadState().customSubjects;
      if (cur.length >= MAX_SUBJECTS) return `You can add up to ${MAX_SUBJECTS} subjects.`;
      const lower = name.toLowerCase();
      if (BUILT_IN_NAMES.includes(lower) || cur.some((c) => c.name.toLowerCase() === lower)) return `"${name}" already exists.`;
      commit((s) => ({ ...s, customSubjects: [...s.customSubjects, { id: newSubjectId(), name, chapters: [], nextChapterId: 0 }] }));
      return null;
    },
    [commit]
  );

  const renameSubject = useCallback(
    (id: string, rawName: string): Result => {
      const name = clean(rawName).slice(0, SUBJECT_NAME_MAX);
      if (!name) return "A subject needs a name.";
      const lower = name.toLowerCase();
      const cur = loadState().customSubjects;
      if (BUILT_IN_NAMES.includes(lower) || cur.some((c) => c.id !== id && c.name.toLowerCase() === lower)) return `"${name}" already exists.`;
      commit((s) => ({ ...s, customSubjects: s.customSubjects.map((c) => (c.id === id ? { ...c, name } : c)) }));
      return null;
    },
    [commit]
  );

  const deleteSubject = useCallback(
    (id: string) => {
      commit((s) => ({
        ...s,
        customSubjects: s.customSubjects.filter((c) => c.id !== id),
        planner: dropProgress(s.planner, (k) => !k.startsWith(`${id}_`)),
      }));
    },
    [commit]
  );

  /** Adds one chapter per non-empty line, so a whole list can be pasted at once. */
  const addChapters = useCallback(
    (id: string, raw: string): Result => {
      const names = raw
        .split(/\r?\n/)
        .map((l) => clean(l.replace(/^\s*(?:\d+[.)]|[-•*])\s*/, "")).slice(0, CHAPTER_NAME_MAX))
        .filter(Boolean);
      if (names.length === 0) return "Type a chapter name first.";
      const subj = loadState().customSubjects.find((c) => c.id === id);
      if (!subj) return "That subject no longer exists.";
      if (subj.chapters.length + names.length > MAX_CHAPTERS) return `A subject can have up to ${MAX_CHAPTERS} chapters.`;
      commit((s) => ({
        ...s,
        customSubjects: s.customSubjects.map((c) => {
          if (c.id !== id) return c;
          let next = c.nextChapterId;
          const added = names.map((name) => ({ id: next++, name }));
          return { ...c, chapters: [...c.chapters, ...added], nextChapterId: next };
        }),
      }));
      return null;
    },
    [commit]
  );

  const renameChapter = useCallback(
    (id: string, chapterId: number, rawName: string): Result => {
      const name = clean(rawName).slice(0, CHAPTER_NAME_MAX);
      if (!name) return "A chapter needs a name.";
      commit((s) => ({
        ...s,
        customSubjects: s.customSubjects.map((c) =>
          c.id === id ? { ...c, chapters: c.chapters.map((ch) => (ch.id === chapterId ? { ...ch, name } : ch)) } : c
        ),
      }));
      return null;
    },
    [commit]
  );

  const deleteChapter = useCallback(
    (id: string, chapterId: number) => {
      commit((s) => ({
        ...s,
        customSubjects: s.customSubjects.map((c) => (c.id === id ? { ...c, chapters: c.chapters.filter((ch) => ch.id !== chapterId) } : c)),
        planner: dropProgress(s.planner, (k) => k !== customChapterKey(id, chapterId)),
      }));
    },
    [commit]
  );

  const moveChapter = useCallback(
    (id: string, chapterId: number, dir: -1 | 1) => {
      commit((s) => ({
        ...s,
        customSubjects: s.customSubjects.map((c) => {
          if (c.id !== id) return c;
          const i = c.chapters.findIndex((ch) => ch.id === chapterId);
          const j = i + dir;
          if (i < 0 || j < 0 || j >= c.chapters.length) return c;
          const chapters = [...c.chapters];
          [chapters[i], chapters[j]] = [chapters[j], chapters[i]];
          return { ...c, chapters };
        }),
      }));
    },
    [commit]
  );

  return { subjects, addSubject, renameSubject, deleteSubject, addChapters, renameChapter, deleteChapter, moveChapter };
}
