"use client";

import { useState } from "react";
import { Flame, Trophy, CalendarCheck, Timer, ClipboardList, ArrowRight } from "lucide-react";
import { PaperTiltCard } from "@/components/ui/PaperTiltCard";
import { StatCard } from "@/components/ui/StatCard";
import { Heatmap } from "./Heatmap";
import { HoursBarChart } from "./HoursBarChart";
import { Ledger } from "./Ledger";
import { useTrackerState } from "@/lib/useTrackerState";
import { fmtHrs } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftCountStat } from "@/components/ui/soft/SoftUI";

export function StudyLogSection() {
  const { state, hydrated, setLogEntry, setDailyGoalHours, streaks, totalDays, totalHoursLogged, daysStudied } =
    useTrackerState();

  const { theme } = useTheme();
  const [ledgerOpen, setLedgerOpen] = useState(false);

  if (!hydrated) {
    return theme === "light" ? (
      <div className="sf-loading">Loading your log…</div>
    ) : (
      <div className="py-24 text-center text-sm text-[#a3a3a3]">Loading your log…</div>
    );
  }

  const avgPerStudied = daysStudied > 0 ? totalHoursLogged / daysStudied : 0;

  if (theme === "light") {
    const pctDays = totalDays > 0 ? Math.round((daysStudied / totalDays) * 100) : 0;
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 min-[1480px]:grid-cols-4">
          <SoftCountStat label="Current streak" value={streaks.current} suffix="d" sub={`best: ${streaks.best}d`} icon={Flame} delay={0} />
          <SoftCountStat label="Total logged" value={totalHoursLogged} decimals={1} suffix="h" sub={`since ${state.startDate}`} icon={Trophy} delay={0.05} />
          <SoftCountStat label="Days studied" value={daysStudied} suffix={`/${totalDays}`} sub={`${pctDays}% of days`} icon={CalendarCheck} delay={0.1} />
          <SoftCountStat
            label="Avg / studied day"
            value={avgPerStudied}
            decimals={1}
            suffix="h"
            sub={`${fmtHrs(totalDays > 0 ? totalHoursLogged / totalDays : 0)} / calendar day`}
            icon={Timer}
            delay={0.15}
          />
        </div>

        <SoftCard delay={0.2}>
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="sf-title">Activity</h2>
              <p className="sf-sub mt-1">Hours logged by date, and your daily goal</p>
            </div>
            <label className="sf-pill-field">
              Daily goal
              <input
                type="number"
                step="0.5"
                min="0"
                aria-label="Daily goal in hours"
                value={state.dailyGoalHours}
                onChange={(e) => setDailyGoalHours(parseFloat(e.target.value))}
                className="sf-input w-[72px]"
              />
              <span className="pr-2">h</span>
            </label>
          </div>

          <Heatmap log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} />

          <div className="my-6 h-px w-full" style={{ background: "rgba(150,165,176,0.3)" }} />

          <h3 className="sf-cap mb-2">Last 14 days</h3>
          <HoursBarChart log={state.log} dailyGoalHours={state.dailyGoalHours} />
        </SoftCard>

        <SoftCard delay={0.25}>
          <button
            type="button"
            className="sf-fold"
            aria-expanded={ledgerOpen}
            aria-controls="sf-ledger-panel"
            onClick={() => setLedgerOpen((v) => !v)}
          >
            <span className="sf-badge">
              <ClipboardList size={19} strokeWidth={1.9} />
            </span>
            <span className="sf-title" style={{ fontSize: 20 }}>Daily ledger</span>
            <span className="sf-round-btn sf-fold__arrow" aria-hidden>
              <ArrowRight size={18} strokeWidth={2} />
            </span>
          </button>
          <div id="sf-ledger-panel" className={`sf-collapse ${ledgerOpen ? "is-open" : ""}`} inert={!ledgerOpen}>
            <div>
              <div className="pt-5">
                <Ledger log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} onChange={setLogEntry} />
              </div>
            </div>
          </div>
        </SoftCard>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-5">
        <StatCard label="Current streak" value={streaks.current} suffix="d" sub={`best: ${streaks.best}d`} icon={Flame} accent="lime" delay={0} variant="tilt" />
        <StatCard
          label="Total logged"
          value={totalHoursLogged}
          decimals={1}
          suffix="h"
          sub={`since ${state.startDate}`}
          icon={Trophy}
          accent="gold"
          delay={0.05}
          variant="tilt"
        />
        <StatCard
          label="Days studied"
          value={daysStudied}
          suffix={`/${totalDays}`}
          sub={`${Math.round((daysStudied / totalDays) * 100)}% of days`}
          icon={CalendarCheck}
          accent="purple"
          delay={0.1}
          variant="tilt"
        />
        <StatCard
          label="Avg / studied day"
          value={avgPerStudied}
          decimals={1}
          suffix="h"
          sub={`${fmtHrs(totalHoursLogged / totalDays)} / calendar day`}
          icon={Timer}
          accent="cyan"
          delay={0.15}
          variant="tilt"
        />
      </div>

      <PaperTiltCard delay={0.2}>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-medium text-white">Activity</h2>
            <p className="text-[11px] text-[#a3a3a3]">Hours logged by date, and your daily goal</p>
          </div>
          <label className="flex items-center gap-2 text-[11px] text-[#a3a3a3]">
            Daily goal
            <input
              type="number"
              step="0.5"
              min="0"
              value={state.dailyGoalHours}
              onChange={(e) => setDailyGoalHours(parseFloat(e.target.value))}
              className="w-14 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-right font-tabular text-xs text-[#FFD64D] outline-none focus:border-white/20"
            />
            h
          </label>
        </div>

        <Heatmap log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} />

        <div className="my-6 h-px w-full bg-white/[0.05]" />

        <h3 className="mb-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#a3a3a3]">Last 14 days</h3>
        <HoursBarChart log={state.log} dailyGoalHours={state.dailyGoalHours} />
      </PaperTiltCard>

      <PaperTiltCard delay={0.25}>
        <h2 className="mb-4 text-[15px] font-medium text-white">Daily ledger</h2>
        <Ledger log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} onChange={setLogEntry} />
      </PaperTiltCard>
    </div>
  );
}
