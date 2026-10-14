const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/**
 * Light-mode background: a soft sky-blue paper surface with a faint grain,
 * darkened (via multiply) rather than lightened (via screen) since the base
 * is already light — mirrors MatteGrainBackdrop/CrumpledPaperBackdrop's
 * technique, just inverted for a light base.
 */
export function LightBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#dce7f2]" aria-hidden>
      {/* soft uneven tonal patches */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 40% at 18% 12%, rgba(70,110,160,0.05) 0%, transparent 60%)," +
            "radial-gradient(50% 42% at 82% 22%, rgba(70,110,160,0.07) 0%, transparent 62%)," +
            "radial-gradient(65% 50% at 35% 78%, rgba(70,110,160,0.05) 0%, transparent 60%)," +
            "radial-gradient(55% 48% at 88% 88%, rgba(70,110,160,0.06) 0%, transparent 60%)",
        }}
      />

      {/* fine, even paper grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
    </div>
  );
}
