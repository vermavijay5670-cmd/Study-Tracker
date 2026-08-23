import type { Subject } from "./types";

export type QuestionType = "mcq" | "statement" | "assertion-reason" | "how-many";
export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
}

// Keyed as `${subject}_${class}_${chapterIndex}`, chapterIndex matching CHAPTERS[subject][cls].
// Add each chapter's file under ./question-data and register it here — loaded lazily so
// unopened chapters never add to the bundle other tabs have to download.
const REGISTRY: Record<string, () => Promise<Question[]>> = {
  chem_12_0: () => import("./question-data/chem-12-solutions").then((m) => m.default),
  chem_12_1: () => import("./question-data/chem-12-electrochemistry").then((m) => m.default),
  phy_12_0: () => import("./question-data/phy-12-electric-charges-fields").then((m) => m.default),
  phy_12_1: () => import("./question-data/phy-12-electrostatic-potential-capacitance").then((m) => m.default),
  phy_12_2: () => import("./question-data/phy-12-current-electricity").then((m) => m.default),
  phy_12_3: () => import("./question-data/phy-12-moving-charges-magnetism").then((m) => m.default),
  bio_12_0: () => import("./question-data/bio-12-sexual-reproduction-plants").then((m) => m.default),
  bio_12_1: () => import("./question-data/bio-12-human-reproduction").then((m) => m.default),
  bio_12_2: () => import("./question-data/bio-12-reproductive-health").then((m) => m.default),
};

export async function getChapterQuestions(subject: Subject, cls: 11 | 12, chapterIndex: number): Promise<Question[]> {
  const loader = REGISTRY[`${subject}_${cls}_${chapterIndex}`];
  if (!loader) return [];
  return loader();
}

export function hasChapterQuestions(subject: Subject, cls: 11 | 12, chapterIndex: number): boolean {
  return `${subject}_${cls}_${chapterIndex}` in REGISTRY;
}
