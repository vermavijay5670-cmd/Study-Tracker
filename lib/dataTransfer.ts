import { STORAGE_KEY, defaultState } from "./useTrackerState";
import { todayKey } from "./date-utils";
import type { ChapterState, ChapterSubtopic, TestEvent, PracticeTag, QuizDoneRecord, CustomChapter, CustomSubject, Difficulty, Goal, QuizProgress, TrackerState } from "./types";

/** Marker written into every export so imports can recognise the file. */
export const EXPORT_APP = "neet-study-tracker";
export const EXPORT_FORMAT = 1;
const MAX_FILE_BYTES = 5 * 1024 * 1024;

export interface ExportFile {
  app: typeof EXPORT_APP;
  format: number;
  exportedAt: string;
  data: TrackerState;
}

export interface ImportSummary {
  studyDays: number;
  totalHours: number;
  chaptersTracked: number;
  goalDays: number;
  markedDays: number;
  notes: number;
  exportedAt: string | null;
}

export type ImportMode = "replace" | "merge";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const CHAPTER_RE = /^(?:phy|chem|bio|cs[a-z0-9]{3,14})_(11|12)_\d+$/;
const CUSTOM_ID_RE = /^cs[a-z0-9]{3,14}$/;
const SUBTOPIC_RE = /^(?:phy|chem|bio|cs[a-z0-9]{3,14})_(11|12)_\d+_\d+$/;

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, max: number, fallback = ""): string => (typeof v === "string" ? v.slice(0, max) : fallback);
const num = (v: unknown, min: number, max: number, fallback: number): number =>
  typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : fallback;

/** Read the tracker data currently saved on this device (the app's source of truth). */
function sanitizeTests(v: unknown): TestEvent[] {
  if (!Array.isArray(v)) return [];
  const out: TestEvent[] = [];
  const seen = new Set<string>();
  for (const raw of v.slice(0, 100)) {
    if (!isObj(raw) || typeof raw.id !== "string" || raw.id.length > 40 || seen.has(raw.id)) continue;
    if (typeof raw.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(raw.date)) continue;
    const title = str(raw.title, 80).trim();
    if (!title) continue;
    seen.add(raw.id);
    const ids = new Set<number>();
    const syllabus: { id: number; text: string; done: boolean }[] = [];
    if (Array.isArray(raw.syllabus)) {
      for (const it of raw.syllabus.slice(0, 100)) {
        if (!isObj(it)) continue;
        const text = str(it.text, 120).trim();
        if (typeof it.id !== "number" || !Number.isInteger(it.id) || it.id < 0 || it.id > 1_000_000 || ids.has(it.id) || !text) continue;
        ids.add(it.id);
        syllabus.push({ id: it.id, text, done: it.done === true });
      }
    }
    const maxId = syllabus.reduce((m, i) => Math.max(m, i.id), -1);
    out.push({ id: raw.id, date: raw.date, title, syllabus, nextItemId: Math.max(maxId + 1, typeof raw.nextItemId === "number" && Number.isInteger(raw.nextItemId) ? Math.min(raw.nextItemId, 1_000_001) : 0) });
  }
  return out;
}

function sanitizeBookmarks(v: unknown): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  if (!isObj(v)) return out;
  for (const [k, list] of Object.entries(v).slice(0, 500)) {
    if (!CHAPTER_RE.test(k) || !Array.isArray(list)) continue;
    const ids = Array.from(new Set(list.filter((x): x is string => typeof x === "string" && x.length > 0 && x.length <= 80))).slice(0, 2000);
    if (ids.length > 0) out[k] = ids;
  }
  return out;
}

function sanitizeQuizDone(v: unknown): Record<string, QuizDoneRecord> {
  const out: Record<string, QuizDoneRecord> = {};
  if (!isObj(v)) return out;
  for (const [k, r] of Object.entries(v).slice(0, 500)) {
    if (!CHAPTER_RE.test(k) || !isObj(r)) continue;
    const { score, total, at } = r as Record<string, unknown>;
    if (typeof score !== "number" || typeof total !== "number" || typeof at !== "number") continue;
    if (!Number.isFinite(score) || !Number.isFinite(total) || total < 1 || total > 100000 || score < 0 || score > total) continue;
    out[k] = { score: Math.round(score), total: Math.round(total), at };
  }
  return out;
}

function pickBooleans(v: unknown, re: RegExp): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  if (!isObj(v)) return out;
  for (const [k, val] of Object.entries(v).slice(0, 20000)) if (re.test(k) && typeof val === "boolean") out[k] = val;
  return out;
}

function sanitizePracticeLists(v: unknown): Record<string, PracticeTag[]> {
  const out: Record<string, PracticeTag[]> = {};
  if (!isObj(v)) return out;
  for (const [k, list] of Object.entries(v).slice(0, 2000)) {
    if (!CHAPTER_RE.test(k) || !Array.isArray(list)) continue;
    const ids = new Set<number>();
    const items: PracticeTag[] = [];
    for (const t of list.slice(0, 12)) {
      if (!isObj(t)) continue;
      const name = str(t.name, 40).trim();
      if (typeof t.id !== "number" || !Number.isInteger(t.id) || t.id < 0 || t.id > 1_000_000 || ids.has(t.id) || !name) continue;
      ids.add(t.id);
      items.push({ id: t.id, name });
    }
    out[k] = items;
  }
  return out;
}

function sanitizeSubtopicLists(v: unknown): Record<string, ChapterSubtopic[]> {
  const out: Record<string, ChapterSubtopic[]> = {};
  if (!isObj(v)) return out;
  for (const [k, list] of Object.entries(v).slice(0, 2000)) {
    if (!CHAPTER_RE.test(k) || !Array.isArray(list)) continue;
    const ids = new Set<number>();
    const items: ChapterSubtopic[] = [];
    for (const t of list.slice(0, 60)) {
      if (!isObj(t)) continue;
      const name = str(t.name, 120).trim();
      if (typeof t.id !== "number" || !Number.isInteger(t.id) || t.id < 0 || t.id > 1_000_000 || ids.has(t.id) || !name) continue;
      ids.add(t.id);
      items.push({ id: t.id, name });
    }
    out[k] = items;
  }
  return out;
}

function sanitizeCustomSubjects(v: unknown): CustomSubject[] {
  if (!Array.isArray(v)) return [];
  const out: CustomSubject[] = [];
  const seen = new Set<string>();
  for (const raw of v.slice(0, 50)) {
    if (!isObj(raw) || typeof raw.id !== "string" || !CUSTOM_ID_RE.test(raw.id) || seen.has(raw.id)) continue;
    const name = str(raw.name, 60).trim();
    if (!name) continue;
    seen.add(raw.id);
    const chapters: CustomChapter[] = [];
    const ids = new Set<number>();
    if (Array.isArray(raw.chapters)) {
      for (const c of raw.chapters.slice(0, 500)) {
        if (!isObj(c)) continue;
        const cname = str(c.name, 120).trim();
        if (typeof c.id !== "number" || !Number.isInteger(c.id) || c.id < 0 || c.id > 1_000_000 || ids.has(c.id) || !cname) continue;
        ids.add(c.id);
        chapters.push({ id: c.id, name: cname });
      }
    }
    const maxId = chapters.reduce((m, c) => Math.max(m, c.id), -1);
    const next = typeof raw.nextChapterId === "number" && Number.isInteger(raw.nextChapterId) ? Math.max(raw.nextChapterId, maxId + 1) : maxId + 1;
    out.push({ id: raw.id, name, chapters, nextChapterId: Math.min(next, 1_000_001) });
  }
  return out;
}

export function readLocalState(): TrackerState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return sanitizeState(JSON.parse(raw));
  } catch {
    return defaultState();
  }
}

/**
 * Turn arbitrary parsed JSON into a valid TrackerState: unknown keys are dropped and any
 * entry with the wrong shape is skipped, so a damaged or hand-edited file can never put the
 * app into a state it can't render.
 */
export function sanitizeState(input: unknown): TrackerState {
  const base = defaultState();
  const src = isObj(input) ? input : {};

  const log: Record<string, number> = {};
  if (isObj(src.log)) {
    for (const [k, v] of Object.entries(src.log)) {
      if (DATE_RE.test(k) && typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= 24) log[k] = v;
    }
  }

  const planner: Record<string, ChapterState> = {};
  if (isObj(src.planner)) {
    for (const [k, v] of Object.entries(src.planner)) {
      if (!CHAPTER_RE.test(k) || !isObj(v)) continue;
      const ch: ChapterState = {};
      if (typeof v.done === "boolean") ch.done = v.done;
      if (typeof v.revCount === "number" && Number.isFinite(v.revCount)) ch.revCount = Math.max(0, Math.floor(v.revCount));
      if (typeof v.lastRevised === "string" && DATE_RE.test(v.lastRevised)) ch.lastRevised = v.lastRevised;
      else if (v.lastRevised === null) ch.lastRevised = null;
      if (v.diff === "easy" || v.diff === "medium" || v.diff === "hard" || v.diff === null) ch.diff = v.diff as Difficulty;
      if (typeof v.note === "string") ch.note = v.note.slice(0, 5000);
      if (typeof v.practiceDone === "boolean") ch.practiceDone = v.practiceDone;
      if (typeof v.neetAdvDone === "boolean") ch.neetAdvDone = v.neetAdvDone;
      if (typeof v.assignmentsDone === "boolean") ch.assignmentsDone = v.assignmentsDone;
      planner[k] = ch;
    }
  }

  const subtopics: Record<string, boolean> = {};
  if (isObj(src.subtopics)) {
    for (const [k, v] of Object.entries(src.subtopics)) {
      if (SUBTOPIC_RE.test(k) && typeof v === "boolean") subtopics[k] = v;
    }
  }

  const dailyGoals: Record<string, Goal[]> = {};
  if (isObj(src.dailyGoals)) {
    for (const [k, v] of Object.entries(src.dailyGoals)) {
      if (!DATE_RE.test(k) || !Array.isArray(v)) continue;
      const goals: Goal[] = [];
      for (const g of v.slice(0, 200)) {
        if (!isObj(g) || typeof g.text !== "string") continue;
        goals.push({
          id: str(g.id, 80, `g${goals.length}-${k}`),
          text: g.text.slice(0, 500),
          done: g.done === true,
          ...(g.mandatory === true ? { mandatory: true } : {}),
        });
      }
      dailyGoals[k] = goals;
    }
  }

  const customThoughts = Array.isArray(src.customThoughts)
    ? src.customThoughts.filter((t): t is string => typeof t === "string" && t.trim().length > 0).map((t) => t.slice(0, 500)).slice(0, 300)
    : [];

  const quizProgress: Record<string, QuizProgress> = {};
  if (isObj(src.quizProgress)) {
    for (const [k, v] of Object.entries(src.quizProgress)) {
      if (!CHAPTER_RE.test(k) || !isObj(v)) continue;
      const selections: Record<string, number> = {};
      if (isObj(v.selections)) {
        for (const [qid, sel] of Object.entries(v.selections)) {
          if (typeof sel === "number" && Number.isInteger(sel) && sel >= 0 && sel < 10) selections[qid.slice(0, 120)] = sel;
        }
      }
      quizProgress[k] = { index: Math.floor(num(v.index, 0, 100000, 0)), selections };
    }
  }

  const dayMarks: Record<string, "tick" | "cross"> = {};
  if (isObj(src.dayMarks)) {
    for (const [k, v] of Object.entries(src.dayMarks)) {
      if (DATE_RE.test(k) && (v === "tick" || v === "cross")) dayMarks[k] = v;
    }
  }

  const dayNotes: Record<string, string> = {};
  if (isObj(src.dayNotes)) {
    for (const [k, v] of Object.entries(src.dayNotes)) {
      if (DATE_RE.test(k) && typeof v === "string" && v.trim()) dayNotes[k] = v.slice(0, 2000);
    }
  }

  const timerDurationMs = num(src.timerDurationMs, 1000, 24 * 3600_000, base.timerDurationMs);

  return {
    startDate: typeof src.startDate === "string" && DATE_RE.test(src.startDate) ? src.startDate : base.startDate,
    examDate: typeof src.examDate === "string" && (src.examDate === "" || DATE_RE.test(src.examDate)) ? src.examDate : "",
    dailyGoalHours: num(src.dailyGoalHours, 0, 24, base.dailyGoalHours),
    studentName: str(src.studentName, 80),
    targetExam: str(src.targetExam, 80),
    log,
    planner,
    customSubjects: sanitizeCustomSubjects(src.customSubjects),
    subtopics,
    subtopicLists: sanitizeSubtopicLists(src.subtopicLists),
    practiceLists: sanitizePracticeLists(src.practiceLists),
    quizDone: sanitizeQuizDone(src.quizDone),
    bookmarks: sanitizeBookmarks(src.bookmarks),
    tests: sanitizeTests(src.tests),
    practiceDone: pickBooleans(src.practiceDone, SUBTOPIC_RE),
    dailyGoals,
    customThoughts,
    quizProgress,
    dayMarks,
    dayNotes,
    // a running stopwatch / timer must not "resume" from another device's or an old clock
    stopwatchRunningSince: null,
    stopwatchLastFlushAt: null,
    stopwatchSessions: Math.floor(num(src.stopwatchSessions, 0, 10000, 0)),
    stopwatchSessionMs: num(src.stopwatchSessionMs, 0, 7 * 24 * 3600_000, 0),
    stopwatchSessionsDate: typeof src.stopwatchSessionsDate === "string" && DATE_RE.test(src.stopwatchSessionsDate) ? src.stopwatchSessionsDate : todayKey(),
    timerDurationMs,
    timerRemainingMs: timerDurationMs,
    timerEndAt: null,
    lastModified: typeof src.lastModified === "number" && Number.isFinite(src.lastModified) ? src.lastModified : 0,
  };
}

export function buildExport(state: TrackerState): ExportFile {
  return { app: EXPORT_APP, format: EXPORT_FORMAT, exportedAt: new Date().toISOString(), data: state };
}

export function exportFileName(): string {
  return `neet-study-tracker-backup-${todayKey()}.json`;
}

/** Save a JSON file to the user's device. */
export function downloadJson(file: ExportFile, name = exportFileName()) {
  const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function summarize(state: TrackerState, exportedAt: string | null = null): ImportSummary {
  return {
    studyDays: Object.values(state.log).filter((h) => h > 0).length,
    totalHours: Math.round(Object.values(state.log).reduce((a, b) => a + b, 0) * 10) / 10,
    chaptersTracked: Object.values(state.planner).filter((c) => c.done || (c.revCount ?? 0) > 0).length,
    goalDays: Object.values(state.dailyGoals).filter((g) => g.length > 0).length,
    markedDays: Object.keys(state.dayMarks).length,
    notes: Object.keys(state.dayNotes).length,
    exportedAt,
  };
}

/** Parse + validate a backup file's text. Throws an Error with a human-readable message. */
export function parseImport(text: string, byteLength: number): { state: TrackerState; summary: ImportSummary } {
  if (byteLength > MAX_FILE_BYTES) throw new Error("That file is too large to be a backup (over 5 MB).");
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error("That file isn't valid JSON. Choose a backup you exported from this app.");
  }
  if (!isObj(json)) throw new Error("That file doesn't look like a backup from this app.");

  let payload: unknown = json;
  let exportedAt: string | null = null;
  if ("data" in json) {
    if (json.app !== EXPORT_APP) throw new Error("That file wasn't exported from this app.");
    if (typeof json.format === "number" && json.format > EXPORT_FORMAT) {
      throw new Error("That backup was made by a newer version of the app. Update the app and try again.");
    }
    payload = json.data;
    exportedAt = typeof json.exportedAt === "string" ? json.exportedAt : null;
  }
  // also accept a raw tracker state (e.g. a copy of the saved data)
  if (!isObj(payload) || !isObj(payload.log)) throw new Error("That file doesn't contain any tracker data.");

  const state = sanitizeState(payload);
  const summary = summarize(state, exportedAt);
  if (
    summary.studyDays === 0 &&
    summary.chaptersTracked === 0 &&
    summary.goalDays === 0 &&
    summary.markedDays === 0 &&
    summary.notes === 0 &&
    Object.keys(state.planner).length === 0
  ) {
    throw new Error("That backup is empty — importing it would not add anything.");
  }
  return { state, summary };
}

/** "Merge": keep everything already here and only add what the file has that this device doesn't. */
export function mergeStates(current: TrackerState, incoming: TrackerState): { state: TrackerState; added: number } {
  let added = 0;
  const addMissing = <T,>(a: Record<string, T>, b: Record<string, T>, isEmpty?: (v: T) => boolean): Record<string, T> => {
    const out = { ...a };
    for (const [k, v] of Object.entries(b)) {
      if (!(k in out) || (isEmpty && isEmpty(out[k]))) {
        out[k] = v;
        added++;
      }
    }
    return out;
  };

  const thoughts = [...current.customThoughts];
  for (const t of incoming.customThoughts) {
    if (!thoughts.includes(t)) {
      thoughts.push(t);
      added++;
    }
  }

  const customSubjects: CustomSubject[] = current.customSubjects.map((c) => ({ ...c, chapters: [...c.chapters] }));
  for (const inc of incoming.customSubjects) {
    const ex = customSubjects.find((c) => c.id === inc.id);
    if (!ex) {
      customSubjects.push({ ...inc, chapters: [...inc.chapters] });
      added++;
      continue;
    }
    for (const ch of inc.chapters) {
      if (!ex.chapters.some((c) => c.id === ch.id)) {
        ex.chapters.push(ch);
        ex.nextChapterId = Math.max(ex.nextChapterId, ch.id + 1);
        added++;
      }
    }
  }

  const state: TrackerState = {
    ...current,
    customSubjects,
    startDate: incoming.startDate < current.startDate ? incoming.startDate : current.startDate,
    examDate: current.examDate || incoming.examDate,
    studentName: current.studentName || incoming.studentName,
    targetExam: current.targetExam || incoming.targetExam,
    log: addMissing(current.log, incoming.log),
    planner: addMissing(current.planner, incoming.planner),
    subtopics: addMissing(current.subtopics, incoming.subtopics),
    subtopicLists: addMissing(current.subtopicLists, incoming.subtopicLists),
    practiceLists: addMissing(current.practiceLists, incoming.practiceLists),
    quizDone: addMissing(current.quizDone, incoming.quizDone),
    tests: (() => {
      const merged = current.tests.map((t) => ({ ...t, syllabus: [...t.syllabus] }));
      for (const inc of incoming.tests) {
        const ex = merged.find((t) => t.id === inc.id);
        if (!ex) {
          merged.push({ ...inc, syllabus: [...inc.syllabus] });
          added++;
          continue;
        }
        for (const it of inc.syllabus) {
          if (!ex.syllabus.some((x) => x.id === it.id)) {
            ex.syllabus.push(it);
            ex.nextItemId = Math.max(ex.nextItemId, it.id + 1);
            added++;
          }
        }
      }
      return merged;
    })(),
    bookmarks: (() => {
      const merged = { ...current.bookmarks };
      for (const [k, ids] of Object.entries(incoming.bookmarks)) {
        const have = new Set(merged[k] ?? []);
        const extra = ids.filter((id) => !have.has(id));
        if (extra.length > 0) {
          merged[k] = [...(merged[k] ?? []), ...extra];
          added += extra.length;
        }
      }
      return merged;
    })(),
    practiceDone: addMissing(current.practiceDone, incoming.practiceDone),
    dailyGoals: addMissing(current.dailyGoals, incoming.dailyGoals, (g) => g.length === 0),
    customThoughts: thoughts,
    quizProgress: addMissing(current.quizProgress, incoming.quizProgress),
    dayMarks: addMissing(current.dayMarks, incoming.dayMarks),
    dayNotes: addMissing(current.dayNotes, incoming.dayNotes),
  };
  return { state, added };
}

/**
 * Save the imported data as this device's data and reload. The app's normal start-up sync then
 * sees a newer local copy and pushes it to the signed-in account, so cloud and device agree.
 */
export function applyImportedState(next: TrackerState) {
  const stamped: TrackerState = { ...next, lastModified: Date.now() };
  const json = JSON.stringify(stamped);
  window.localStorage.setItem(STORAGE_KEY, json);
  // Another tab/hook could write its older copy in the instant before the reload — write ours
  // once more as the page goes away so the imported data is what survives.
  window.addEventListener("pagehide", () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, json);
    } catch {
      /* ignore */
    }
  });
  window.location.reload();
}
