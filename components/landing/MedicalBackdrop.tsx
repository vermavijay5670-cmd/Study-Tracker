"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Pill, Syringe, Microscope, Activity, Plus, Thermometer } from "lucide-react";

const ICONS = [
  { Icon: Stethoscope, top: "8%", left: "6%", size: 120, rotate: -12, delay: 0 },
  { Icon: HeartPulse, top: "18%", left: "82%", size: 90, rotate: 8, delay: 0.5 },
  { Icon: Pill, top: "60%", left: "4%", size: 80, rotate: 20, delay: 1 },
  { Icon: Syringe, top: "74%", left: "86%", size: 100, rotate: -16, delay: 1.5 },
  { Icon: Microscope, top: "42%", left: "92%", size: 110, rotate: 10, delay: 0.8 },
  { Icon: Activity, top: "88%", left: "30%", size: 130, rotate: 0, delay: 0.3 },
  { Icon: Plus, top: "6%", left: "46%", size: 100, rotate: -6, delay: 1.2 },
  { Icon: Thermometer, top: "50%", left: "50%", size: 70, rotate: 18, delay: 0.6 },
];

// Fine grain, baked into the background itself so every section — not just
// the hero photo — carries the same grainy, filmic texture.
const GRAIN_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function MedicalBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0C0D10]">
      {/* dark charcoal base with a warm sunset wash (bottom-right) and a cool
          blue wash (top-left) — echoes the hero photo's palette so scrolling
          past it into the rest of the page feels like one continuous scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 90%, rgba(217,142,58,0.10) 0%, transparent 45%), radial-gradient(circle at 10% 5%, rgba(59,130,246,0.10) 0%, transparent 42%), #0C0D10",
        }}
      />

      {/* static grain, always visible so the transition out of the hero photo
          never feels like a hard cut to a flat, textureless background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
      />
      {/* faint animated flicker on top, same as the dashboard cards */}
      <div
        aria-hidden
        className="absolute -inset-full opacity-[0.03] mix-blend-soft-light"
        style={{ backgroundImage: `url("${GRAIN_SVG}")`, animation: "grainNoise 0.8s steps(6) infinite" }}
      />

      {ICONS.map(({ Icon, top, left, size, rotate, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-[#3B82F6]"
          style={{ top, left, opacity: 0.05 }}
          initial={{ y: 0, rotate }}
          animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 3, rotate] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
