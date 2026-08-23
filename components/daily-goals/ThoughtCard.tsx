"use client";

import { useMemo, useState } from "react";
import { Quote, Shuffle, Plus } from "lucide-react";
import { todayKey } from "@/lib/date-utils";
import { getThoughtOfTheDay, getRandomThought } from "@/lib/thoughts";

const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

interface ThoughtCardProps {
  customThoughts: string[];
  onAddThought: (text: string) => void;
}

export function ThoughtCard({ customThoughts, onAddThought }: ThoughtCardProps) {
  const dailyThought = useMemo(() => getThoughtOfTheDay(todayKey(), customThoughts), [customThoughts]);
  const [shown, setShown] = useState(dailyThought);
  const [showAdd, setShowAdd] = useState(false);
  const [draft, setDraft] = useState("");

  function shuffle() {
    setShown((prev) => getRandomThought(customThoughts, prev));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    onAddThought(draft);
    setDraft("");
    setShowAdd(false);
  }

  return (
    <div
      className="relative mx-auto max-w-[560px] -rotate-1 rounded-[4px] p-7 sm:p-8"
      style={{
        background: "linear-gradient(165deg, #F6ECD6 0%, #EDE0C2 100%)",
        boxShadow: "0 22px 40px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.4) inset, 0 -6px 14px rgba(0,0,0,0.06) inset",
      }}
    >
      {/* paper grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.18] mix-blend-multiply"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      {/* washi tape */}
      <div
        aria-hidden
        className="absolute -top-3 left-8 h-6 w-16 rotate-[-4deg] rounded-[2px]"
        style={{ background: "rgba(217,142,58,0.55)", boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
      />
      {/* folded corner */}
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-7 w-7 rounded-bl-[4px]"
        style={{
          background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.12) 50%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A6D3B]">
          <Quote size={12} strokeWidth={2} /> thought of the day
        </span>
        <button
          onClick={shuffle}
          aria-label="Show another thought"
          title="Show another thought"
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[#8A6D3B]/60 transition-colors hover:bg-black/5 hover:text-[#8A6D3B]"
        >
          <Shuffle size={14} strokeWidth={1.75} />
        </button>
      </div>

      <p
        className="relative mt-4 text-[19px] italic leading-relaxed text-[#4A3728] sm:text-[21px]"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        “{shown}”
      </p>

      <div className="relative mt-6 border-t border-[#8A6D3B]/15 pt-3">
        {showAdd ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              autoFocus
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={() => !draft && setShowAdd(false)}
              placeholder="Write a thought that keeps you going…"
              className="w-full rounded-lg border border-[#8A6D3B]/25 bg-white/40 px-3 py-2 text-[13.5px] text-[#4A3728] outline-none placeholder:text-[#8A6D3B]/45 focus:border-[#8A6D3B]/50"
            />
            <button
              type="submit"
              className="flex-shrink-0 rounded-lg bg-[#8A6D3B] px-3 py-2 text-[12.5px] font-medium text-[#F6ECD6] transition-transform hover:scale-105"
            >
              Save
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-1.5 text-[12px] font-medium text-[#8A6D3B]/70 transition-colors hover:text-[#8A6D3B]"
          >
            <Plus size={13} strokeWidth={2} /> Add your own thought
          </button>
        )}
      </div>
    </div>
  );
}
