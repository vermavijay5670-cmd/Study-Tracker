"use client";

import { useEffect, useMemo, useState } from "react";
import { Quote, Shuffle, Plus } from "lucide-react";
import { todayKey } from "@/lib/date-utils";
import { getThoughtOfTheDay, getRandomThought, SHARED_THOUGHT_KEY, THOUGHT_EVENT } from "@/lib/thoughts";
import { HighlightedText } from "./HighlightedText";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmBadge, NmCard, NmPill, NmRound } from "@/components/today/nm/NmUI";

interface ThoughtCardProps {
  customThoughts: string[];
  onAddThought: (text: string) => void;
}

export function ThoughtCard({ customThoughts, onAddThought }: ThoughtCardProps) {
  const { theme } = useTheme();
  const dailyThought = useMemo(() => getThoughtOfTheDay(todayKey(), customThoughts), [customThoughts]);
  const [shown, setShown] = useState(dailyThought);

  // the thought popup (shown when the page opened) may have been shuffled — keep the card in step with it
  useEffect(() => {
    try {
      const t = window.sessionStorage.getItem(SHARED_THOUGHT_KEY);
      if (t) setShown(t);
    } catch {
      /* ignore */
    }
    const onThought = (e: Event) => {
      const t = (e as CustomEvent<string>).detail;
      if (typeof t === "string" && t) setShown(t);
    };
    window.addEventListener(THOUGHT_EVENT, onThought);
    return () => window.removeEventListener(THOUGHT_EVENT, onThought);
  }, []);
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

  if (theme === "light") {
    return (
      <SoftCard delay={0.1}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="sf-badge" style={{ width: 38, height: 38 }}>
              <Quote size={17} strokeWidth={1.9} />
            </span>
            <span className="sf-cap">Thought of the day</span>
          </div>
          <button
            type="button"
            onClick={shuffle}
            aria-label="Show another thought"
            title="Show another thought"
            className="sf-round-btn"
          >
            <Shuffle size={18} strokeWidth={1.9} />
          </button>
        </div>

        <p className="sf-quote">
          “<HighlightedText text={shown} tone="green" />”
        </p>

        <hr className="sf-rule" />

        {showAdd ? (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex flex-wrap gap-3">
              <input
                autoFocus
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={() => !draft && setShowAdd(false)}
                placeholder="Write a thought that keeps you going…"
                aria-label="Your own thought"
                className="sf-input sf-input--text min-w-[200px]"
              />
              <button type="submit" className="sf-btn">
                Save
              </button>
            </div>
            <p className="sf-sub">Tip: wrap a word in **asterisks** to highlight it.</p>
          </form>
        ) : (
          <button type="button" onClick={() => setShowAdd(true)} className="sf-linkbtn inline-flex items-center gap-2">
            <Plus size={16} strokeWidth={2.2} /> Add your own thought
          </button>
        )}
      </SoftCard>
    );
  }

  // Dark: raised card in the dark theme (Mark Your Days' sidebar colour: teal).
  return (
    <NmCard delay={0.1} accent="teal">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <NmBadge>
            <Quote size={17} strokeWidth={1.9} />
          </NmBadge>
          <span className="nm-cap">Thought of the day</span>
        </div>
        <NmRound size="md" onClick={shuffle} aria-label="Show another thought" title="Show another thought">
          <Shuffle size={18} strokeWidth={1.9} />
        </NmRound>
      </div>

      <p className="nm-quote">
        “<HighlightedText text={shown} tone="teal" />”
      </p>

      <hr className="nm-rule" />

      {showAdd ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-wrap gap-3">
            <input
              autoFocus
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={() => !draft && setShowAdd(false)}
              placeholder="Write a thought that keeps you going…"
              aria-label="Your own thought"
              className="nm-input nm-input--text min-w-[200px]"
            />
            <NmPill type="submit" tone="cyan" className="!flex-none">
              Save
            </NmPill>
          </div>
          <p className="nm-sub" style={{ letterSpacing: 0 }}>Tip: wrap a word in **asterisks** to highlight it.</p>
        </form>
      ) : (
        <button type="button" onClick={() => setShowAdd(true)} className="nm-linkbtn inline-flex items-center gap-2" style={{ background: "none", border: 0, cursor: "pointer", fontFamily: "inherit" }}>
          <Plus size={16} strokeWidth={2.2} /> Add your own thought
        </button>
      )}
    </NmCard>
  );
}
