export type TestSubjectId = "physics" | "physical-chemistry" | "inorganic-chemistry" | "organic-chemistry" | "botany" | "zoology";

/** One MCQ. Same shape as the Question Practice questions, with `type` and `difficulty` optional. */
export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  type?: "mcq" | "statement" | "assertion-reason" | "how-many";
  difficulty?: "easy" | "medium" | "hard";
}

/** One test paper (one file under lib/subject-tests/papers). */
export interface TestPaper {
  id: string;
  title: string;
  /** Suggested time limit. The student can still change it before starting. Defaults to 1 minute per question. */
  durationMinutes?: number;
  questions: TestQuestion[];
}

/** What the runner hands back when a test is submitted. */
export interface AttemptResult {
  /** question id -> chosen option index. A missing id means not attempted. */
  answers: Record<string, number>;
  bookmarked: string[];
  timeTakenSec: number;
  autoSubmitted: boolean;
  /** Time limit used for this attempt (null = no timer). */
  minutes: number | null;
}
