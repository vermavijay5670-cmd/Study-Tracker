"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { addDays, dateKey, daysBetween, parseKey, weekdayShort } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { NmPill } from "@/components/today/nm/NmUI";

interface LedgerProps {
  log: Record<string, number>;
  startDate: string;
  dailyGoalHours: number;
  onChange: (key: string, hours: number | null) => void;
}

export function Ledger({ log, startDate, dailyGoalHours, onChange }: LedgerProps) {
  const { theme } = useTheme();
  const [manualDate, setManualDate] = useState("");
  const [manualHours, setManualHours] = useState("");

  const today = new Date();
  const start = parseKey(startDate);
  const totalDays = daysBetween(start, today) + 1;
  const rows = Array.from({ length: totalDays }, (_, i) => addDays(today, -i));

  function submitManual() {
    if (!manualDate || manualHours === "") return;
    onChange(manualDate, parseFloat(manualHours));
    setManualHours("");
  }

  if (theme === "light") {
    return (
      <div>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            type="date"
            aria-label="Date to log"
            value={manualDate}
            onChange={(e) => setManualDate(e.target.value)}
            className="sf-input sf-input--date"
          />
          <input
            type="number"
            step="0.1"
            min="0"
            placeholder="hrs"
            aria-label="Hours studied"
            value={manualHours}
            onChange={(e) => setManualHours(e.target.value)}
            className="sf-input w-24"
          />
          <button type="button" onClick={submitManual} disabled={!manualDate || manualHours === ""} className="sf-btn">
            <Plus size={15} strokeWidth={2.2} /> Log this date
          </button>
        </div>

        <div className="sf-ledger-list sf-inset">
          {rows.map((d, i) => {
            const key = dateKey(d);
            const hours = log[key];
            const hit = hours !== undefined && dailyGoalHours > 0 && hours >= dailyGoalHours;
            const pct = dailyGoalHours > 0 ? Math.min(100, ((hours ?? 0) / dailyGoalHours) * 100) : hours ? 100 : 0;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(i, 20) * 0.015 }}
                className={`sf-row ${i === 0 ? "is-today" : ""}`}
              >
                <span className="min-w-[78px] flex-shrink-0 text-[13px] font-semibold tabular-nums">{key}</span>
                <span className="sf-cap min-w-[28px] flex-shrink-0" style={{ fontSize: 10 }}>{weekdayShort(d)}</span>
                <span className={`sf-dot ${hit ? "is-hit" : ""}`} />
                <div className="sf-mini">
                  <i style={{ width: `${pct}%` }} />
                </div>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="—"
                  aria-label={`Hours on ${key}`}
                  defaultValue={hours ?? ""}
                  onBlur={(e) => {
                    const v = e.target.value;
                    onChange(key, v === "" ? null : parseFloat(v));
                  }}
                  className="sf-cellinput"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input
          type="date"
          aria-label="Date to log"
          value={manualDate}
          onChange={(e) => setManualDate(e.target.value)}
          className="nm-input nm-input--date"
        />
        <input
          type="number"
          step="0.1"
          min="0"
          placeholder="hrs"
          aria-label="Hours studied"
          value={manualHours}
          onChange={(e) => setManualHours(e.target.value)}
          className="nm-input w-24"
        />
        <NmPill tone="cyan" onClick={submitManual} disabled={!manualDate || manualHours === ""} className="!flex-none">
          <Plus size={15} strokeWidth={2.2} /> Log this date
        </NmPill>
      </div>

      <div className="nm-ledger nm-inset">
        {rows.map((d, i) => {
          const key = dateKey(d);
          const hours = log[key];
          const hit = hours !== undefined && dailyGoalHours > 0 && hours >= dailyGoalHours;
          const pct = dailyGoalHours > 0 ? Math.min(100, ((hours ?? 0) / dailyGoalHours) * 100) : hours ? 100 : 0;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: Math.min(i, 20) * 0.015 }}
              className={`nm-row ${i === 0 ? "is-today" : ""}`}
            >
              <span className="min-w-[78px] flex-shrink-0 text-[13px] font-medium tabular-nums">{key}</span>
              <span className="nm-cap min-w-[28px] flex-shrink-0" style={{ fontSize: 10 }}>{weekdayShort(d)}</span>
              <span className={`nm-dot ${hit ? "is-hit" : ""}`} />
              <div className="nm-mini">
                <i style={{ width: `${pct}%` }} />
              </div>
              <input
                type="number"
                step="0.1"
                min="0"
                placeholder="—"
                aria-label={`Hours on ${key}`}
                defaultValue={hours ?? ""}
                onBlur={(e) => {
                  const v = e.target.value;
                  onChange(key, v === "" ? null : parseFloat(v));
                }}
                className="nm-cellinput"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
