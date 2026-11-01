import type { TestPaper } from "./types";

export const MARKS_CORRECT = 4;
export const MARKS_WRONG = -1;

export interface Score {
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  score: number;
  max: number;
}

/** NEET pattern: +4 correct, -1 incorrect, 0 not attempted. */
export function scoreAttempt(paper: TestPaper, answers: Record<string, number>): Score {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  for (const q of paper.questions) {
    const a = answers[q.id];
    if (a === undefined) unattempted++;
    else if (a === q.correctIndex) correct++;
    else wrong++;
  }
  const total = paper.questions.length;
  return { correct, wrong, unattempted, total, score: correct * MARKS_CORRECT + wrong * MARKS_WRONG, max: total * MARKS_CORRECT };
}

/** Returns a list of problems in a paper file (empty = fine). Shown in the paper list so typos are easy to spot. */
export function validatePaper(p: TestPaper): string[] {
  const errs: string[] = [];
  if (!p.id) errs.push("Missing paper id");
  if (!p.title) errs.push("Missing title");
  if (!Array.isArray(p.questions) || p.questions.length === 0) return [...errs, "No questions"];
  const seen = new Set<string>();
  p.questions.forEach((q, i) => {
    const n = `Q${i + 1}`;
    if (!q.id) errs.push(`${n}: missing id`);
    else if (seen.has(q.id)) errs.push(`${n}: duplicate id "${q.id}"`);
    seen.add(q.id);
    if (!q.question?.trim()) errs.push(`${n}: empty question`);
    if (!Array.isArray(q.options) || q.options.length < 2) errs.push(`${n}: needs at least 2 options`);
    else if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) errs.push(`${n}: correctIndex out of range`);
  });
  return errs;
}
