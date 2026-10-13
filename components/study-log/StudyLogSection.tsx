"use client";

import { useState } from "react";
import { Flame, Trophy, CalendarCheck, Timer, ClipboardList, ArrowRight } from "lucide-react";
import { Heatmap } from "./Heatmap";
import { HoursBarChart } from "./HoursBarChart";
import { Ledger } from "./Ledger";
import { useTrackerState } from "@/lib/useTrackerState";
import { fmtHrs } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftCountStat } from "@/components/ui/soft/SoftUI";
import { NmCard, NmBadge, NmCountStat } from "@/components/today/nm/NmUI";

export function StudyLogSection() {
  const { state, hydrated, setLogEntry, setDailyGoalHours, streaks, totalDays, totalHoursLogged, daysStudied } =
    useTrackerState();

  const { theme } = useTheme();
  const [ledgerOpen, setLedgerOpen] = useState(false);

  if (!hydrated) {
    return theme === "light" ? (
      <div className="sf-loading">Loading your log…</div>
    ) : (
      <div className="nm-loading">Loading your log…</div>
    );
  }

  const avgPerStudied = daysStudied > 0 ? totalHoursLogged / daysStudied : 0;
  const pctDays = totalDays > 0 ? Math.round((daysStudied / totalDays) * 100) : 0;

  if (theme === "light") {
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

  // Dark: the same layout as light mode, in the dark theme. Everything here is Study Log's sidebar colour (amber).
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 min-[560px]:grid-cols-2 min-[1480px]:grid-cols-4">
        <NmCountStat accent="amber" label="Current streak" value={streaks.current} suffix="d" sub={`best: ${streaks.best}d`} icon={Flame} delay={0} />
        <NmCountStat accent="amber" label="Total logged" value={totalHoursLogged} decimals={1} suffix="h" sub={`since ${state.startDate}`} icon={Trophy} delay={0.05} />
        <NmCountStat accent="amber" label="Days studied" value={daysStudied} suffix={`/${totalDays}`} sub={`${pctDays}% of days`} icon={CalendarCheck} delay={0.1} />
        <NmCountStat
          accent="amber"
          label="Avg / studied day"
          value={avgPerStudied}
          decimals={1}
          suffix="h"
          sub={`${fmtHrs(totalDays > 0 ? totalHoursLogged / totalDays : 0)} / calendar day`}
          icon={Timer}
          delay={0.15}
        />
      </div>

      <NmCard delay={0.2} accent="amber">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="nm-title">Activity</h2>
            <p className="nm-sub mt-1" style={{ letterSpacing: 0 }}>Hours logged by date, and your daily goal</p>
          </div>
          <label className="nm-pillfield nm-raised">
            Daily goal
            <input
              type="number"
              step="0.5"
              min="0"
              aria-label="Daily goal in hours"
              value={state.dailyGoalHours}
              onChange={(e) => setDailyGoalHours(parseFloat(e.target.value))}
              className="nm-input nm-input--num"
            />
            <span className="pr-1">h</span>
          </label>
        </div>

        <Heatmap log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} />

        <div className="nm-divider" />

        <h3 className="nm-cap mb-2">Last 14 days</h3>
        <HoursBarChart log={state.log} dailyGoalHours={state.dailyGoalHours} />
      </NmCard>

      <NmCard delay={0.25} accent="amber">
        <button type="button" className="nm-fold" aria-expanded={ledgerOpen} aria-controls="nm-ledger-panel" onClick={() => setLedgerOpen((v) => !v)}>
          <NmBadge>
            <ClipboardList size={19} strokeWidth={1.9} />
          </NmBadge>
          <span className="nm-title" style={{ fontSize: 20 }}>Daily ledger</span>
          <span className="nm-round nm-round--sm nm-fold__arrow" aria-hidden>
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </button>
        <div id="nm-ledger-panel" className={`nm-collapse ${ledgerOpen ? "is-open" : ""}`} inert={!ledgerOpen}>
          <div>
            <div className="pt-5">
              <Ledger log={state.log} startDate={state.startDate} dailyGoalHours={state.dailyGoalHours} onChange={setLogEntry} />
            </div>
          </div>
        </div>
      </NmCard>
    </div>
  );
}
