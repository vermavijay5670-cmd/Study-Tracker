// Last score per paper, kept in this browser only (not synced to the cloud).
const KEY = "st:test-attempts:v1";

export interface PastAttempt {
  score: number;
  max: number;
  at: number;
}

function readAll(): Record<string, PastAttempt> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, PastAttempt>) : {};
  } catch {
    return {};
  }
}

export function getAttempt(key: string): PastAttempt | undefined {
  return readAll()[key];
}

export function saveAttempt(key: string, a: PastAttempt) {
  try {
    const all = readAll();
    all[key] = a;
    localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // storage full or blocked: score is still shown, just not remembered
  }
}
