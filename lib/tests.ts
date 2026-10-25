import { dateKey } from "./date-utils";
import type { TestEvent } from "./types";

export const MAX_TESTS = 100;
export const MAX_SYLLABUS_ITEMS = 100;
export const TEST_TITLE_MAX = 80;
export const SYLLABUS_TEXT_MAX = 120;
/** The reminder popup starts showing this many days before a test. */
export const REMINDER_DAYS = 3;

/** Whole calendar days from today to `date` (0 = today, 1 = tomorrow, negative = already past). */
export function daysUntil(date: string, from: Date = new Date()): number {
  const target = new Date(`${date}T00:00:00`);
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  return Math.round((target.getTime() - start.getTime()) / 86_400_000);
}

export function relativeLabel(days: number): string {
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days === -1) return "Yesterday";
  return days > 0 ? `In ${days} days` : `${-days} days ago`;
}

export function syllabusStats(t: TestEvent) {
  const total = t.syllabus.length;
  const done = t.syllabus.filter((i) => i.done).length;
  return { total, done, left: total - done, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

/** The soonest test that hasn't happened yet (today counts). */
export function nextTest(tests: TestEvent[], from: Date = new Date()): TestEvent | null {
  const today = dateKey(from);
  const upcoming = tests.filter((t) => t.date >= today).sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : a.date < b.date ? -1 : 1));
  return upcoming[0] ?? null;
}

export const testsOn = (tests: TestEvent[], date: string) => tests.filter((t) => t.date === date);
