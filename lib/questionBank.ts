import type { Subject } from "./types";

export interface Question {
  question: string;
  options: string[];
  answer: number; // index into options
  explanation?: string;
}

// Keyed as `${subject}_${class}_${chapterIndex}`, chapterIndex matching CHAPTERS[subject][cls].
// Empty for now — drop question arrays in here (or wire this up to fetch from wherever
// the JS question files end up living) once the actual question banks are provided.
export const QUESTIONS: Record<string, Question[]> = {};

export function getChapterQuestions(subject: Subject, cls: 11 | 12, chapterIndex: number): Question[] {
  return QUESTIONS[`${subject}_${cls}_${chapterIndex}`] ?? [];
}
