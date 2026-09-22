const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
const NOISE_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function CrumpledPaperBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0908]" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <filter id="crumple" x="-20%" y="-20%" width="140%" height="140%">
          {/* base fold structure — low frequency for big creases */}
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.012" numOctaves="2" seed="7" result="bigFolds" />
          {/* fine fiber / wrinkle detail layered on top */}
          <feTurbulence type="fractalNoise" baseFrequency="0.09 0.11" numOctaves="3" seed="21" result="fiber" />
          <feComposite in="bigFolds" in2="fiber" operator="arithmetic" k1="0" k2="0.82" k3="0.22" k4="0" result="paperSurface" />
          {/* emboss the combined noise field with a raking light to fake real creases/folds */}
          <feDiffuseLighting in="paperSurface" lighting-color="#d8d2c2" surfaceScale="6.5" diffuseConstant="1.15" result="lit">
            <feDistantLight azimuth="235" elevation="48" />
          </feDiffuseLighting>
          {/* flatten to a dim, desaturated charcoal tone so it stays low-contrast */}
          <feColorMatrix
            in="lit"
            type="matrix"
            values="0.22 0.22 0.22 0 0
                    0.22 0.22 0.22 0 0
                    0.22 0.22 0.22 0 0
                    0    0    0    1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#crumple)" />
      </svg>

      {/* keep exposure very low and readable — darken everything, brighten only the center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 8%, rgba(10,9,8,0.35) 0%, rgba(6,5,5,0.72) 55%, rgba(3,3,3,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* static fine grain, sitting on top of the fold texture — screen blend so specks
          actually read as light grain against the near-black surface, instead of
          vanishing the way overlay/multiply would on such a dark base */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-screen"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      {/* slow flickering noise on top, for a lively, filmic grain that's still subtle */}
      <div
        className="absolute -inset-full opacity-[0.09] mix-blend-screen"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, animation: "grainNoise 0.7s steps(6) infinite" }}
      />
    </div>
  );
}
