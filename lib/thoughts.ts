// Original short affirmations — written for this app, not quoted from any external source.
export const BUILT_IN_THOUGHTS: string[] = [
  "Progress hides inside repetition. Show up again today.",
  "You don't need to feel ready. You just need to begin.",
  "Every chapter you revise is a future point on the exam.",
  "Small consistent effort beats occasional intensity.",
  "The version of you that clears NEET is built today, one hour at a time.",
  "Difficult topics feel that way right up until they don't.",
  "You're not behind. You're exactly where your effort has taken you — keep adding to it.",
  "Rest is part of the plan, not a break from it.",
  "One focused hour is worth more than three distracted ones.",
  "Your future self is counting on the version of you sitting here right now.",
  "Doubt is just tiredness talking. Keep going.",
  "The syllabus doesn't care how you feel about it — but your discipline does.",
  "You've already survived every hard day so far. That's a good track record.",
  "Understanding beats memorizing, but showing up beats both.",
  "Nobody sees the quiet hours. That's exactly why they matter.",
  "A slow chapter finished is better than a fast chapter half-done.",
  "Comparison steals focus. Your only competition is yesterday's you.",
  "The white coat is built from ordinary Tuesdays like this one.",
  "You don't have to feel motivated. You just have to open the book.",
  "Confusion is the first step before clarity — stay in the process.",
  "Every mock test, good or bad, is data. Use it, don't fear it.",
  "The goal isn't a perfect day. It's a day that moves you forward.",
  "You are allowed to be a beginner at something you'll one day master.",
  "Struggling with a topic means you're finally at the edge of your ability — that's where growth happens.",
  "Today's revision is tomorrow's recall.",
  "Discipline is choosing what you want most over what you want now.",
  "You don't need more time. You need one more focused hour, right now.",
  "The exam rewards preparation, not panic.",
  "Every mistake corrected today is a mark saved tomorrow.",
  "Keep your promises to yourself — that's where real confidence comes from.",
];

/** Days since the Unix epoch for a YYYY-MM-DD key, used as a stable daily rotation index. */
function dayNumber(dateKey: string): number {
  return Math.floor(new Date(`${dateKey}T00:00:00Z`).getTime() / 86_400_000);
}

/** Deterministic "thought of the day" — same for everyone on the same date, shifts as custom thoughts are added. */
export function getThoughtOfTheDay(dateKey: string, customThoughts: string[]): string {
  const pool = [...BUILT_IN_THOUGHTS, ...customThoughts];
  if (pool.length === 0) return "Add your first thought below.";
  const idx = ((dayNumber(dateKey) % pool.length) + pool.length) % pool.length;
  return pool[idx];
}

/** Pick a different random thought from the pool, for the manual "shuffle" action. */
export function getRandomThought(customThoughts: string[], exclude?: string): string {
  const pool = [...BUILT_IN_THOUGHTS, ...customThoughts];
  if (pool.length === 0) return "Add your first thought below.";
  if (pool.length === 1) return pool[0];
  let pick = pool[Math.floor(Math.random() * pool.length)];
  let guard = 0;
  while (pick === exclude && guard < 10) {
    pick = pool[Math.floor(Math.random() * pool.length)];
    guard++;
  }
  return pick;
}
