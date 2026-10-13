"use client";

import { motion } from "framer-motion";
import { addDays, dateKey, parseKey, fmtHrs } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";

interface HeatmapProps {
  log: Record<string, number>;
  startDate: string;
  dailyGoalHours: number;
  weeks?: number;
}

function levelFor(hours: number, goal: number): number {
  if (hours <= 0) return 0;
  if (goal <= 0) return 2;
  if (hours < goal * 0.5) return 1;
  if (hours < goal) return 2;
  return 3;
}

export function Heatmap({ log, startDate, dailyGoalHours, weeks = 16 }: HeatmapProps) {
  const { theme } = useTheme();
  const today = new Date();
  const start = parseKey(startDate);

  const columns = Array.from({ length: weeks }, (_, wFromLeft) => {
    const w = weeks - 1 - wFromLeft;
    return Array.from({ length: 7 }, (_, d) => {
      const day = addDays(today, -(w * 7) + d - today.getDay());
      const inRange = day <= today && day >= start;
      const key = dateKey(day);
      const hours = log[key] ?? 0;
      const level = inRange ? levelFor(hours, dailyGoalHours) : -1;
      return { key, hours, level, inRange };
    });
  });

  if (theme === "light") {
    return (
      <div className="overflow-x-auto p-2 pb-3">
        <div className="sf-heat">
          {columns
            .filter((col) => col.some((c) => c.inRange))
            .map((col, ci) => (
            <div key={ci} className="sf-heat__col">
              {col.map((cell, ri) =>
                cell.inRange ? (
                  <motion.div
                    key={cell.key}
                    title={`${cell.key}: ${fmtHrs(cell.hours)}`}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (ci * 7 + ri) * 0.003, type: "spring", stiffness: 300, damping: 20 }}
                    className={`sf-cell sf-cell--${cell.level}`}
                  />
                ) : (
                  <div key={`${ci}-${ri}`} className="sf-cell" style={{ visibility: "hidden" }} />
                )
              )}
            </div>
          ))}
        </div>
        <div className="sf-legend">
          <span>Less</span>
          {[0, 1, 2, 3].map((l) => (
            <span key={l} className={`sf-cell sf-cell--${l}`} />
          ))}
          <span>More</span>
          <span>·&nbsp; Each column = 1 week, ending today</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-2 pb-3">
      <div className="nm-heat">
        {columns
          .filter((col) => col.some((c) => c.inRange))
          .map((col, ci) => (
            <div key={ci} className="nm-heat__col">
              {col.map((cell, ri) =>
                cell.inRange ? (
                  <motion.div
                    key={cell.key}
                    title={`${cell.key}: ${fmtHrs(cell.hours)}`}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (ci * 7 + ri) * 0.003, type: "spring", stiffness: 300, damping: 20 }}
                    className={`nm-cell nm-cell--${cell.level}`}
                  />
                ) : (
                  <div key={`${ci}-${ri}`} className="nm-cell" style={{ visibility: "hidden" }} />
                )
              )}
            </div>
          ))}
      </div>
      <div className="nm-legend">
        <span>Less</span>
        {[0, 1, 2, 3].map((l) => (
          <span key={l} className={`nm-cell nm-cell--${l}`} />
        ))}
        <span>More</span>
        <span>·&nbsp; Each column = 1 week, ending today</span>
      </div>
    </div>
  );
}
