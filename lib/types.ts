export type Subject = "phy" | "chem" | "bio";
export type Difficulty = "easy" | "medium" | "hard" | null;

export interface ChapterState {
  done?: boolean;
  revCount?: number;
  lastRevised?: string | null; // YYYY-MM-DD
  diff?: Difficulty;
}

export interface Goal {
  id: string;
  text: string;
  done: boolean;
  mandatory?: boolean;
}

export interface TrackerState {
  startDate: string; // YYYY-MM-DD
  examDate: string; // YYYY-MM-DD or ""
  dailyGoalHours: number;
  studentName: string;
  targetExam: string;
  log: Record<string, number>; // date -> hours
  planner: Record<string, ChapterState>; // "phy_11_0" -> state
  subtopics: Record<string, boolean>; // "phy_11_0_2" -> done
  dailyGoals: Record<string, Goal[]>; // date -> that day's goal checklist
  customThoughts: string[]; // user-added positive thoughts, added to the daily rotation pool
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
