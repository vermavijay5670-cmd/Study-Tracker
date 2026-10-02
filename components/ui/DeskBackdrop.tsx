"use client";

import "../today/desk/desk.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Kalam:wght@400;700&family=Manrope:wght@500;600;700&family=Oswald:wght@500;600&family=Permanent+Marker&display=swap";

/**
 * Light-mode Today backdrop: a dark walnut desk lit by a lamp, with books,
 * a plant, a pen and a notebook on it. Pure CSS/SVG — no text is baked into
 * an image, so every label stays real, editable HTML.
 */
export function DeskBackdrop() {
  return (
    <div className="dk-bg" aria-hidden>
      {/* React 19 hoists this into <head> and dedupes it. */}
      <link rel="stylesheet" href={FONTS} precedence="default" />
      <div className="dk-bg__wood" />
      <div className="dk-bg__lamp" />
      <div className="dk-bg__shade" />

      <div className="dk-bg__books">
        <div className="dk-book">PHYSICS</div>
        <div className="dk-book">CHEMISTRY</div>
        <div className="dk-book">BIOLOGY</div>
      </div>

      <svg className="dk-bg__plant" viewBox="0 0 230 230">
        <defs>
          <linearGradient id="dk-leaf" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3f6b2e" />
            <stop offset="1" stopColor="#14290f" />
          </linearGradient>
          <linearGradient id="dk-pot" x1="0" x2="1">
            <stop offset="0" stopColor="#8a7a4d" />
            <stop offset="1" stopColor="#4a3f22" />
          </linearGradient>
        </defs>
        <ellipse cx="150" cy="24" rx="62" ry="24" fill="url(#dk-pot)" />
        <g fill="url(#dk-leaf)" stroke="rgba(0,0,0,.35)" strokeWidth="1">
          <ellipse cx="96" cy="86" rx="24" ry="62" transform="rotate(-38 96 86)" />
          <ellipse cx="146" cy="104" rx="22" ry="66" transform="rotate(-6 146 104)" />
          <ellipse cx="196" cy="96" rx="22" ry="60" transform="rotate(30 196 96)" />
          <ellipse cx="124" cy="60" rx="18" ry="50" transform="rotate(-20 124 60)" />
        </g>
      </svg>

      <div className="dk-bg__notebook">
        Plan
        <br />
        Study
        <br />
        Achieve
      </div>
      <div className="dk-bg__pen" />
      <div className="dk-bg__vignette" />
    </div>
  );
}
