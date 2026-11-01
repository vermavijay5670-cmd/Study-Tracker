/**
 * Subject-wise test registry.
 *
 * Each subject holds its list of tests. Question files (JS/TS format) will be added
 * under this folder later and registered here.
 */

export type TestSubjectId = "physics" | "physical-chemistry" | "inorganic-chemistry" | "organic-chemistry" | "botany" | "zoology";

export interface TestSubject {
  id: TestSubjectId;
  name: string;
  /** Short line shown on the subject card. */
  blurb: string;
  /** Accent colour (dark theme / light theme). */
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

/** Number of tests available per subject. Updated as test files are added. */
export function testCount(_id: TestSubjectId): number {
  return 0;
}
