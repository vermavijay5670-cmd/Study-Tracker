"use client";

import { useEffect, useState } from "react";
import { Target } from "lucide-react";
import { NmBadge, NmCard, NmTiles, NmTrack } from "./nm/NmUI";
import { parseKey, pad } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftTiles } from "@/components/ui/soft/SoftUI";

interface CountdownProps {
  examDate: string;
  startDate: string;
  onSetExamDate: (v: string) => void;
}

export function Countdown({ examDate, startDate, onSetExamDate }: CountdownProps) {
  const [now, setNow] = useState<Date | null>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return isLight ? (
      <div className="sf-card" style={{ minHeight: 240 }} />
    ) : (
      <NmCard delay={0} className="min-h-[220px]"><span /></NmCard>
    );
  }

  let days = "—";
  let hh = "00";
  let mm = "00";
  let ss = "00";
  let label = "set your exam date below";
  let pct = 0;

  if (examDate) {
    const target = new Date(`${examDate}T23:59:59`);
    const diff = target.getTime() - now.getTime();
    label = "days to go";
    if (diff <= 0) {
      days = "0";
      label = "exam day!";
      pct = 100;
    } else {
      const totalSecs = Math.floor(diff / 1000);
      days = String(Math.floor(totalSecs / 86400));
      hh = pad(Math.floor((totalSecs % 86400) / 3600));
      mm = pad(Math.floor((totalSecs % 3600) / 60));
      ss = pad(totalSecs % 60);
      const start = parseKey(startDate);
      const totalSpan = target.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();
      pct = totalSpan > 0 ? Math.min(100, Math.max(0, (elapsed / totalSpan) * 100)) : 0;
    }
  }

  if (isLight) {
    return (
      <SoftCard>
        <div className="sf-cd">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="sf-badge" style={{ width: 38, height: 38 }}>
                <Target size={17} strokeWidth={1.9} />
              </span>
              <span className="sf-cap">Target exam</span>
            </div>
            <h2 className="sf-title mt-4" style={{ fontSize: 26 }}>NEET UG Countdown</h2>
            <label className="mt-3 flex flex-wrap items-center gap-3">
              <span className="sf-cap">Exam date</span>
              <input
                type="date"
                value={examDate}
                onChange={(e) => onSetExamDate(e.target.value)}
                className="sf-input sf-input--date"
              />
            </label>
            <div className="mt-6 flex flex-wrap items-end gap-x-4 gap-y-1">
              <span className="sf-hero">{days}</span>
              <span className="sf-hero__lbl">{label}</span>
            </div>
          </div>

          <div className="sf-cd__clock">
            <SoftTiles hh={hh} mm={mm} ss={ss} size="lg" />
            <div
              className="sf-track"
              role="progressbar"
              aria-label="Time elapsed since you started"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pct)}
              title={`${Math.round(pct)}% of the journey elapsed`}
            >
              <i style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </SoftCard>
    );
  }

  return (
    <NmCard delay={0} className="nm-card--fit">
      <div className="nm-head">
        <NmBadge>
          <Target size={17} strokeWidth={1.8} />
        </NmBadge>
        <div className="min-w-0">
          <span className="nm-cap">Target exam</span>
          <h2 className="nm-title">NEET UG Countdown</h2>
        </div>
      </div>

      <label className="mt-4 flex flex-wrap items-center gap-3">
        <span className="nm-cap">Exam date</span>
        <input type="date" value={examDate} onChange={(e) => onSetExamDate(e.target.value)} className="nm-input nm-input--date" />
      </label>

      <div className="flex flex-1 items-center py-6">
        <div className="flex flex-wrap items-end gap-x-4 gap-y-1">
          <span className="nm-hero nm-hero--fit">{days}</span>
          <span className="nm-hero-lbl">{label}</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <NmTiles hh={hh} mm={mm} ss={ss} />
        <NmTrack pct={pct} label="Time elapsed since you started" />
      </div>
    </NmCard>
  );
}
