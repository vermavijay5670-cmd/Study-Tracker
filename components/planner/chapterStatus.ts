import type { ChapterState } from "@/lib/types";
import { daysBetween, parseKey, relDays } from "@/lib/date-utils";

export type ChapterStatus = "new" | "readyToRevise" | "fresh" | "stale";

export function getChapterStatus(state: ChapterState): ChapterStatus {
  if (!state.done) return "new";
  const revCount = state.revCount ?? 0;
  if (revCount === 0) return "readyToRevise";
  const staleDays = state.lastRevised ? daysBetween(parseKey(state.lastRevised), new Date()) : Infinity;
  return staleDays >= 7 ? "stale" : "fresh";
}

export function getChapterStatusLabel(state: ChapterState): string {
  const status = getChapterStatus(state);
  if (status === "new") return "Not started";
  if (status === "readyToRevise") return "Ready to revise";
  if (status === "fresh") return `Revised ${relDays(state.lastRevised) ?? ""}`.trim();
  return `${relDays(state.lastRevised)} · due`;
}

interface ChapterStatusStyle {
  wash: string;
  text: string;
  pillBg: string;
  pillText: string;
  dot: string;
}

export const CHAPTER_STATUS_STYLE: Record<ChapterStatus, ChapterStatusStyle> = {
  new: {
    wash: "linear-gradient(90deg, rgba(255,255,255,0.05), transparent 55%)",
    text: "rgba(163,163,163,0.8)",
    pillBg: "rgba(255,255,255,0.06)",
    pillText: "#a3a3a3",
    dot: "#737373",
  },
  readyToRevise: {
    wash: "linear-gradient(90deg, rgba(56,189,248,0.16), transparent 55%)",
    text: "#7DD3FC",
    pillBg: "rgba(56,189,248,0.16)",
    pillText: "#7DD3FC",
    dot: "#38BDF8",
  },
  fresh: {
    wash: "linear-gradient(90deg, rgba(45,212,191,0.24), rgba(34,197,94,0.10) 42%, transparent 68%)",
    text: "#5EEAD4",
    pillBg: "rgba(45,212,191,0.22)",
    pillText: "#5EEAD4",
    dot: "#2DD4BF",
  },
  stale: {
    wash: "linear-gradient(90deg, rgba(251,146,60,0.24), rgba(248,113,113,0.12) 42%, transparent 68%)",
    text: "#FDBA74",
    pillBg: "rgba(251,146,60,0.22)",
    pillText: "#FDBA74",
    dot: "#FB923C",
  },
};
