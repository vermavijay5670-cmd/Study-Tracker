"use client";

import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";
import { PaperCard } from "@/components/ui/PaperCard";
import { parseKey, pad } from "@/lib/date-utils";

interface CountdownProps {
  examDate: string;
  startDate: string;
  onSetExamDate: (v: string) => void;
}

export function Countdown({ examDate, startDate, onSetExamDate }: CountdownProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return <PaperCard delay={0} className="min-h-[220px]"><span /></PaperCard>;

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

  return (
    <PaperCard delay={0}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        {/* left: label + big day count */}
        <div className="min-w-0">
          <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#D8B4FE]/30 bg-[#A855F7]/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#D8B4FE]">
            <CalendarClock size={11} strokeWidth={1.75} /> target exam
          </span>
          <h2 className="text-[16px] font-medium text-[#F6F4FF]">NEET UG Countdown</h2>
          <label className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-wide text-white/40">
            exam date
            <input
              type="date"
              value={examDate}
              onChange={(e) => onSetExamDate(e.target.value)}
              className="rounded border-0 border-b border-dashed border-white/30 bg-transparent px-1 py-0.5 text-[11px] text-white/70 outline-none focus:border-[#D8B4FE]"
            />
          </label>

          <div className="mt-4 flex items-end gap-3">
            <span
              className="font-tabular text-[64px] font-bold leading-none text-[#F6F4FF] sm:text-[76px]"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              {days}
            </span>
            <span className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">{label}</span>
          </div>
        </div>

        {/* right: hh:mm:ss + progress */}
        <div className="flex flex-col gap-4 sm:min-w-[260px]">
          <div className="flex items-center justify-center gap-0 sm:justify-end">
            {[
              { v: hh, u: "hrs" },
              { v: mm, u: "min" },
              { v: ss, u: "sec" },
            ].map((b, i) => (
              <div key={b.u} className="flex items-center">
                <div className="flex min-w-[58px] flex-col items-center">
                  <span className="font-tabular text-[26px] font-bold text-[#D8B4FE]">{b.v}</span>
                  <span className="mt-0.5 text-[8px] uppercase tracking-wide text-white/40">{b.u}</span>
                </div>
                {i < 2 && <span className="pb-3 text-lg text-[#A855F7]/50">:</span>}
              </div>
            ))}
          </div>

          <div className="h-1 w-full overflow-hidden rounded-full border border-white/10 bg-black/25">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6d28d9,#D8B4FE)" }}
            />
          </div>
        </div>
      </div>
    </PaperCard>
  );
}
