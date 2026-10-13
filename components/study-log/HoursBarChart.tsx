"use client";

import { addDays, dateKey, weekdayShort } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";

interface HoursBarChartProps {
  log: Record<string, number>;
  dailyGoalHours: number;
}

export function HoursBarChart({ log, dailyGoalHours }: HoursBarChartProps) {
  const { theme } = useTheme();
  const today = new Date();
  const data = Array.from({ length: 14 }, (_, i) => {
    const d = addDays(today, -(13 - i));
    const key = dateKey(d);
    return { day: weekdayShort(d), hours: Math.round((log[key] ?? 0) * 10) / 10, goal: dailyGoalHours };
  });

  const max = Math.max(1, dailyGoalHours > 0 ? dailyGoalHours : 0, ...data.map((d) => d.hours));
  const MAX_PX = 140;
  const px = theme === "light" ? "sf" : "nm";
  return (
    <div className={`${px}-bars`} role="list" aria-label="Hours studied, last 14 days">
      {data.map((d, i) => {
        const empty = d.hours <= 0;
        const h = empty ? 12 : Math.max(14, (d.hours / max) * MAX_PX);
        return (
          <div key={i} className={`${px}-bar`} role="listitem" tabIndex={0} aria-label={`${d.day}: ${d.hours} hours`}>
            <span className={`${px}-bar__tip`}>{d.hours}h</span>
            <div className={`${px}-bar__cap ${empty ? "is-empty" : ""}`} style={{ height: h }} />
            <span className={`${px}-bar__lbl`}>{d.day}</span>
          </div>
        );
      })}
    </div>
  );
}
