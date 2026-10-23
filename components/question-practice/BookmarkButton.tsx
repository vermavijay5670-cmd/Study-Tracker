"use client";

import { Star } from "lucide-react";

/** Star toggle shown on a question: filled amber when the question is bookmarked. */
export function BookmarkButton({ active, onToggle, soft }: { active: boolean; onToggle: () => void; soft: boolean }) {
  const on = soft ? "#d9a21b" : "#fbbf24";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={active ? "Remove bookmark" : "Bookmark this question"}
      title={active ? "Bookmarked — click to remove" : "Bookmark this question"}
      className={`ml-auto inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 ${soft ? "sf-round-btn" : "nm-round"}`}
      style={{ width: 32, height: 32, color: active ? on : soft ? "#8fa0b2" : "rgba(231,233,239,0.4)" }}
    >
      <Star size={16} strokeWidth={1.9} fill={active ? on : "none"} />
    </button>
  );
}
