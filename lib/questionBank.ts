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
  phy_11_0: () => import("./question-data/phy-11-units-and-measurements").then((m) => m.default),
  phy_11_1: () => import("./question-data/phy-11-motion-in-a-straight-line").then((m) => m.default),
  phy_11_2: () => import("./question-data/phy-11-motion-in-a-plane").then((m) => m.default),
  bio_11_0: () => import("./question-data/bio-11-living-world").then((m) => m.default),
  bio_11_1: () => import("./question-data/bio-11-biological-classification").then((m) => m.default),
  bio_11_2: () => import("./question-data/bio-11-plant-kingdom").then((m) => m.default),
  chem_11_0: () => import("./question-data/chem-11-some-basic-concepts").then((m) => m.default),
  chem_11_1: () => import("./question-data/chem-11-structure-of-atom").then((m) => m.default),
  chem_11_4: () => import("./question-data/chem-11-thermodynamics").then((m) => m.default),
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
