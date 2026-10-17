export type Subject = "phy" | "chem" | "bio";
export type Difficulty = "easy" | "medium" | "hard" | null;

export interface ChapterState {
  done?: boolean;
  revCount?: number;
  lastRevised?: string | null; // YYYY-MM-DD
  diff?: Difficulty;
  note?: string;
  practiceDone?: boolean; // Physics / Chemistry: question practice completed
  neetAdvDone?: boolean; // Biology: NEET Advance questions completed
  assignmentsDone?: boolean; // Biology: assignments completed
}

export interface CustomChapter {
  id: number; // stable id — never reused, so deleting/reordering chapters can't mix up saved progress
  name: string;
}

/** A subject the person added themselves in Settings (e.g. "Mathematics"). Progress lives in `planner` under `${id}_11_${chapter.id}`. */
export interface CustomSubject {
  id: string; // "cs…" — see CUSTOM_ID_RE in dataTransfer
  name: string;
  chapters: CustomChapter[];
  nextChapterId: number;
}

/** One subtopic of a chapter. `id` is stable (never reused while the subtopic exists), so deleting others can't shift saved ticks. */
export interface ChapterSubtopic {
  id: number;
  name: string;
}

/** One tag in a chapter's Practice dropdown (e.g. "PYQs", "Mock test"). Ids 0-9 are the built-in ones; the person's own start at 10. */
export interface PracticeTag {
  id: number;
  name: string;
}

export type PracticeSubject = Subject | "custom";

export type PracticeKey = "practiceDone" | "neetAdvDone" | "assignmentsDone";

export interface Goal {
  id: string;
  text: string;
  done: boolean;
  mandatory?: boolean;
}

export interface QuizProgress {
  index: number;
  selections: Record<string, number>; // questionId -> chosen option index
}

export interface TrackerState {
  startDate: string; // YYYY-MM-DD
  examDate: string; // YYYY-MM-DD or ""
  dailyGoalHours: number;
  studentName: string;
  targetExam: string;
  log: Record<string, number>; // date -> hours
  planner: Record<string, ChapterState>; // "phy_11_0" -> state (custom subjects: "cs1abc_11_<chapterId>")
  customSubjects: CustomSubject[]; // subjects the person added in Settings
  subtopics: Record<string, boolean>; // "phy_11_0_2" -> done (last number = subtopic id)
  practiceLists: Record<string, PracticeTag[]>; // chapter key -> the person's own Practice tags (replaces the built-in ones)
  practiceDone: Record<string, boolean>; // `${chapterKey}_${tagId}` -> done, for tags added by the person (id >= 10)
  subtopicLists: Record<string, ChapterSubtopic[]>; // chapter key -> the person's own subtopic list (replaces the built-in one)
  dailyGoals: Record<string, Goal[]>; // date -> that day's goal checklist
  customThoughts: string[]; // user-added positive thoughts, added to the daily rotation pool
  quizProgress: Record<string, QuizProgress>; // key: `${subject}_${cls}_${chapterIndex}` -> in-progress quiz state
  dayMarks: Record<string, "tick" | "cross">; // key: YYYY-MM-DD -> how that day was marked on the calendar
  dayNotes: Record<string, string>; // key: YYYY-MM-DD -> note attached to that day
  stopwatchRunningSince: number | null; // epoch ms when the current session started; drives the display, never touched by checkpoints
  stopwatchLastFlushAt: number | null; // epoch ms of the last committed checkpoint; bookkeeping only
  stopwatchSessions: number;
  stopwatchSessionMs: number; // accumulated elapsed ms for the current (possibly paused) session, since the last Reset
  stopwatchSessionsDate: string; // date key stopwatchSessions/stopwatchSessionMs belong to, so they reset at the start of a new day
  timerDurationMs: number;
  timerRemainingMs: number; // valid when timerEndAt is null (paused/reset)
  timerEndAt: number | null; // epoch ms when it should complete; null = not running
  lastModified: number; // epoch ms — used to resolve local-vs-cloud sync conflicts (newer wins)
}

export interface SubjectStats {
  done: number;
  rev: number;
  total: number;
  dueRevision: { subj: Subject; name: string; days: number | null }[];
}

export interface Streaks {
  current: number;
  best: number;
}
