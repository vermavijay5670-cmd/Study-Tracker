export function DoctorCoatIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustration of a white doctor's coat with a stethoscope"
    >
      {/* soft ground shadow */}
      <ellipse cx="210" cy="430" rx="130" ry="16" fill="#0F172A" opacity="0.06" />

      {/* hanger */}
      <path d="M210 34 v20" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      <path d="M182 54 h56" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="210" cy="30" r="7" fill="none" stroke="#94A3B8" strokeWidth="4" />

      {/* coat body */}
      <path
        d="M136 60
           L182 54
           C 190 78 230 78 238 54
           L284 60
           L306 138
           L286 150
           L276 100
           L266 400
           C 266 412 254 420 240 420
           H180
           C 166 420 154 412 154 400
           L144 100
           L134 150
           L114 138
           Z"
        fill="#FBFCFE"
        stroke="#CBD5E1"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* left lapel */}
      <path d="M182 54 L164 96 L196 126 L206 78 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" strokeLinejoin="round" />
      {/* right lapel */}
      <path d="M238 54 L256 96 L224 126 L214 78 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" strokeLinejoin="round" />

      {/* center seam */}
      <path d="M210 82 L210 410" stroke="#E2E8F0" strokeWidth="2" />

      {/* buttons */}
      <circle cx="210" cy="150" r="4.5" fill="#CBD5E1" />
      <circle cx="210" cy="196" r="4.5" fill="#CBD5E1" />
      <circle cx="210" cy="242" r="4.5" fill="#CBD5E1" />

      {/* chest pocket */}
      <rect x="168" y="168" width="40" height="30" rx="4" fill="none" stroke="#CBD5E1" strokeWidth="2" />
      {/* pens in pocket */}
      <rect x="176" y="150" width="4" height="26" rx="2" fill="#0D9488" />
      <rect x="184" y="148" width="4" height="28" rx="2" fill="#0EA5E9" />

      {/* side pockets */}
      <path d="M158 268 h44 v14 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 Z" fill="none" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M218 268 h44 v14 a6 6 0 0 1 -6 6 h-32 a6 6 0 0 1 -6 -6 Z" fill="none" stroke="#CBD5E1" strokeWidth="2" />

      {/* sleeves */}
      <path d="M136 60 L96 96 L88 190 L120 198 L134 100 Z" fill="#FBFCFE" stroke="#CBD5E1" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M284 60 L324 96 L332 190 L300 198 L286 100 Z" fill="#FBFCFE" stroke="#CBD5E1" strokeWidth="2.5" strokeLinejoin="round" />

      {/* ---- stethoscope draped over the collar ---- */}
      <g>
        {/* neck loop */}
        <path
          d="M186 70 C 186 100 234 100 234 70"
          stroke="#0D9488"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* left tube down to chestpiece */}
        <path
          d="M188 82 C 176 130 172 190 196 246"
          stroke="#0D9488"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* right tube down to chestpiece */}
        <path
          d="M232 82 C 244 130 244 190 220 246"
          stroke="#14B8A6"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        {/* earpieces */}
        <circle cx="186" cy="68" r="7" fill="#0F766E" />
        <circle cx="234" cy="68" r="7" fill="#0F766E" />
        {/* chestpiece */}
        <circle cx="208" cy="258" r="20" fill="#F0FDFA" stroke="#0D9488" strokeWidth="6" />
        <circle cx="208" cy="258" r="8" fill="#0D9488" />
      </g>

      {/* subtle heartbeat pulse accent, bottom right of the coat */}
      <path
        d="M300 340 h18 l8 -20 l10 34 l8 -14 h20"
        stroke="#0EA5E9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
