import type { TestPaper } from "../types";

/**
 * Copy this file to e.g. physics-test-1.ts, fill it in, then register it in ../index.ts.
 *
 * Rules:
 *  - `id` must be unique across all papers (e.g. "phy-test-1").
 *  - Every question `id` must be unique inside the paper.
 *  - `options` has 4 items (2+ works). `correctIndex` is the 0-based position of the right option
 *    (0 = first option, 3 = fourth). Spread the correct answer across 0-3 instead of always using one position.
 *  - `explanation`, `type` and `difficulty` are optional. Use \n inside `question` for line breaks
 *    (statement / assertion-reason questions).
 *  - Scoring is fixed: +4 correct, -1 wrong, 0 not attempted.
 */
const paper: TestPaper = {
  id: "example-test-1",
  title: "Test 1",
  durationMinutes: 60,
  questions: [
    {
      id: "q1",
      question: "The SI unit of force is:",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correctIndex: 1,
      explanation: "Force = mass x acceleration, so its unit is kg m/s^2, called newton.",
      difficulty: "easy",
    },
    {
      id: "q2",
      type: "assertion-reason",
      question: "Assertion (A): A body moving with constant speed can still be accelerating.\nReason (R): Acceleration depends on the change in direction of velocity as well.",
      options: [
        "Both A and R are true and R is the correct explanation of A",
        "Both A and R are true but R is not the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true",
      ],
      correctIndex: 0,
      explanation: "In uniform circular motion the speed is constant but the direction keeps changing.",
      difficulty: "medium",
    },
  ],
};

export default paper;
