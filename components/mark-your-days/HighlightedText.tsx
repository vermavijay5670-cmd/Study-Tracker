"use client";

import { useId, type ReactNode } from "react";

/**
 * Splits text on **word** markers and wraps marked words in a rough,
 * hand-drawn marker-style highlight — an SVG blob with a jittered edge
 * and a sketchy border sitting behind the word, not a flat color block.
 */
export function HighlightedText({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\*\*([^*]+)\*\*$/);
        if (m) return <MarkerHighlight key={i}>{m[1]}</MarkerHighlight>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function MarkerHighlight({ children }: { children: string }) {
  const rawId = useId();
  const filterId = `rough-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  // Deterministic "randomness" from the word itself, so server and client render
  // identically (no hydration mismatch) while still varying between words.
  const seed = Array.from(children).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const rotation = ((seed % 5) - 2) * 0.5; // -1deg .. 1deg
  const turbSeed = (seed % 40) + 1;

  return (
    <span className="relative inline-block px-[3px] py-0" style={{ transform: `rotate(${rotation}deg)` }}>
      <svg
        aria-hidden
        className="pointer-events-none absolute -inset-y-[6%] -inset-x-[6%] -z-10"
        style={{ width: "112%", height: "116%", left: "-6%", top: "-8%" }}
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <filter id={filterId} x="-20%" y="-40%" width="140%" height="180%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.3" numOctaves="2" seed={turbSeed} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <rect
          x="3"
          y="6"
          width="94"
          height="28"
          rx="3"
          fill="rgba(224,122,54,0.5)"
          stroke="rgba(138,79,30,0.75)"
          strokeWidth="2.2"
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="relative text-[#3A2410]">{children}</span>
    </span>
  );
}
