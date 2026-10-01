"use client";

import Link from "next/link";
import { Clock3, RefreshCw } from "lucide-react";
import { PaperTiltCard } from "@/components/ui/PaperTiltCard";
import { SUBJECT_ACCENT, ACCENT_HEX } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { relDays } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { Ledger } from "@/components/today/desk/DeskUI";

type Activity =
  | { type: "log"; date: string; hours: number }
  | { type: "revision"; date: string; subject: Subject; chapter: string };

export function RecentActivityList({ activity }: { activity: Activity[] }) {
  const { theme } = useTheme();

  if (theme === "light") {
    const ink = (h: string) => `color-mix(in srgb, ${h} 55%, #2b1d11)`;
    return (
      <Ledger delay={0.15}>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="dk-h" style={{ fontSize: 24 }}>Recent activity</h2>
          <Link href="/study-log" className="dk-link">
            View all
          </Link>
        </div>

        {activity.length === 0 ? (
          <p className="dk-note py-6 text-center">Nothing logged yet — get started on Today.</p>
        ) : (
          <div>
            {activity.map((a, i) => {
              if (a.type === "log") {
                return (
                  <div key={i} className="dk-row">
                    <span className="dk-well">
                      <Clock3 size={15} strokeWidth={1.9} style={{ color: "#5d4830" }} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[14px] font-semibold" style={{ color: "var(--dk-ink)" }}>Study session</div>
                      <div className="dk-note" style={{ fontSize: 11 }}>{relDays(a.date)}</div>
                    </div>
                    <span className="font-tabular flex-shrink-0 text-[14px] font-bold" style={{ color: "#2c6a33" }}>
                      +{a.hours.toFixed(1)}h
                    </span>
                  </div>
                );
              }
              const hex = ACCENT_HEX[SUBJECT_ACCENT[a.subject]];
              return (
                <div key={i} className="dk-row">
                  <span className="dk-well">
                    <RefreshCw size={15} strokeWidth={1.9} style={{ color: ink(hex) }} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-semibold" style={{ color: "var(--dk-ink)" }}>{a.chapter}</div>
                    <div className="dk-note" style={{ fontSize: 11 }}>{relDays(a.date)}</div>
                  </div>
                  <span className="dk-pill flex-shrink-0" style={{ color: ink(hex), background: `color-mix(in srgb, ${hex} 22%, transparent)` }}>
                    Revised
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </Ledger>
    );
  }

  return (
    <PaperTiltCard delay={0.15}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[15px] font-medium text-[#F6F4FF]">Recent activity</h2>
        <Link href="/study-log" className="text-[11px] text-white/40 hover:text-white/70">
          View all
        </Link>
      </div>

      {activity.length === 0 ? (
        <p className="py-6 text-center text-[11px] text-white/35">Nothing logged yet — get started on Today.</p>
      ) : (
        <div className="space-y-1">
          {activity.map((a, i) => {
            if (a.type === "log") {
              return (
                <div key={i} className="flex items-center gap-3 rounded-xl px-1 py-2">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                    <Clock3 size={14} strokeWidth={1.75} className="text-white/60" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[12.5px] text-white/85">Study session</div>
                    <div className="text-[10px] text-white/35">{relDays(a.date)}</div>
                  </div>
                  <span className="flex-shrink-0 font-tabular text-[12.5px] font-medium text-[#8FC998]">
                    +{a.hours.toFixed(1)}h
                  </span>
                </div>
              );
            }
            const hex = ACCENT_HEX[SUBJECT_ACCENT[a.subject]];
            return (
              <div key={i} className="flex items-center gap-3 rounded-xl px-1 py-2">
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${hex}22` }}
                >
                  <RefreshCw size={14} strokeWidth={1.75} style={{ color: hex }} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12.5px] text-white/85">{a.chapter}</div>
                  <div className="text-[10px] text-white/35">{relDays(a.date)}</div>
                </div>
                <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ color: hex, background: `${hex}1a` }}>
                  Revised
                </span>
              </div>
            );
          })}
        </div>
      )}
    </PaperTiltCard>
  );
}
