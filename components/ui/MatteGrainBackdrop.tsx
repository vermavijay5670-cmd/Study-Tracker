const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
const NOISE_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Flat, matte near-black grain texture — a smooth sanded/plaster surface
 * rather than the folded paper used on Today. Fine even grain plus a few soft
 * tonal blotches for the subtle unevenness in the reference photo, no
 * directional light or crease structure.
 */
export function MatteGrainBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#131313]" aria-hidden>
      {/* soft uneven tonal patches, matching the reference's gentle mottling */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 18% 12%, rgba(255,255,255,0.03) 0%, transparent 60%)," +
            "radial-gradient(50% 42% at 82% 22%, rgba(0,0,0,0.32) 0%, transparent 62%)," +
            "radial-gradient(65% 50% at 35% 78%, rgba(255,255,255,0.02) 0%, transparent 60%)," +
            "radial-gradient(55% 48% at 88% 88%, rgba(0,0,0,0.28) 0%, transparent 60%)," +
            "radial-gradient(120% 100% at 50% 45%, transparent 55%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* fine, even matte grain */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      {/* slow flickering noise for a subtle filmic feel */}
      <div
        className="absolute -inset-full opacity-[0.05] mix-blend-soft-light"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, animation: "grainNoise 0.8s steps(6) infinite" }}
      />
    </div>
  );
}
