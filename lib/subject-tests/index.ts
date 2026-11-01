/**
 * Subject-wise test registry.
 *
 * To add a test paper: create a file in ./papers (copy ./papers/TEMPLATE.example.ts), then add one
 * line for it under the right subject in PAPERS below. Papers load lazily, only when a subject is opened.
 */
import type { TestPaper, TestSubjectId } from "./types";

export type { TestSubjectId } from "./types";

export interface TestSubject {
  id: TestSubjectId;
  name: string;
  blurb: string;
  accentDark: string;
  accentLight: string;
}

export const TEST_SUBJECTS: TestSubject[] = [
  { id: "physics", name: "Physics", blurb: "Class 11 and 12 physics tests.", accentDark: "#7db2ff", accentLight: "#2f5fb3" },
  { id: "physical-chemistry", name: "Physical Chemistry", blurb: "Numericals and concepts from physical chemistry.", accentDark: "#4fe3d1", accentLight: "#0f766e" },
  { id: "inorganic-chemistry", name: "Inorganic Chemistry", blurb: "Periodic table, bonding, d and f block, coordination compounds.", accentDark: "#c98bff", accentLight: "#7e22ce" },
  { id: "organic-chemistry", name: "Organic Chemistry", blurb: "Reactions, mechanisms and named reactions.", accentDark: "#ff7ab8", accentLight: "#be185d" },
  { id: "botany", name: "Botany", blurb: "Plant biology tests from Class 11 and 12.", accentDark: "#4ade80", accentLight: "#2f6b35" },
  { id: "zoology", name: "Zoology", blurb: "Animal biology and human physiology tests.", accentDark: "#fbbf24", accentLight: "#b45309" },
];

type Loader = () => Promise<TestPaper>;

// Order here = order of Test 1, Test 2, ... in the list.
const PAPERS: Record<TestSubjectId, Loader[]> = {
  physics: [
    // () => import("./papers/physics-test-1").then((m) => m.default),
  ],
  "physical-chemistry": [],
  "inorganic-chemistry": [],
  "organic-chemistry": [],
  botany: [],
  zoology: [],
};

export function testCount(id: TestSubjectId): number {
  return PAPERS[id].length;
}

export async function loadPapers(id: TestSubjectId): Promise<TestPaper[]> {
  return Promise.all(PAPERS[id].map((load) => load()));
}
