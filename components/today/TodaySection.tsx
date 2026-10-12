"use client";

import { Countdown } from "./Countdown";
import { Stopwatch } from "./Stopwatch";
import { Timer } from "./Timer";
import { useTrackerState } from "@/lib/useTrackerState";
import { todayKey } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";

export function TodaySection() {
  const {
    state,
    hydrated,
    setExamDate,
    addLogHours,
    setDailyGoalHours,
    startStopwatch,
    pauseStopwatch,
    resetStopwatchSessions,
    checkpointStopwatch,
    flushStopwatchOnUnmount,
    startTimer,
    pauseTimer,
    resetTimer,
    setTimerDuration,
    completeTimer,
  } = useTrackerState();

  const { theme } = useTheme();
  const isLight = theme === "light";

  if (!hydrated) {
    return (
      <div className={isLight ? "sf-loading" : "py-24 text-center text-sm text-white/50"}>
        Loading…
      </div>
    );
  }

  const todayHours = state.log[todayKey()] ?? 0;

  const countdown = <Countdown examDate={state.examDate} startDate={state.startDate} onSetExamDate={setExamDate} />;
  const stopwatch = (
        <Stopwatch
          todayHours={todayHours}
          dailyGoalHours={state.dailyGoalHours}
          stopwatchRunningSince={state.stopwatchRunningSince}
          stopwatchLastFlushAt={state.stopwatchLastFlushAt}
          stopwatchSessions={state.stopwatchSessions}
          stopwatchSessionMs={state.stopwatchSessionMs}
          onStart={startStopwatch}
          onPause={pauseStopwatch}
          onReset={resetStopwatchSessions}
          onCheckpoint={checkpointStopwatch}
          onFlushOnUnmount={flushStopwatchOnUnmount}
          onSetGoal={setDailyGoalHours}
        />
  );
  const timer = (
        <Timer
          timerDurationMs={state.timerDurationMs}
          timerRemainingMs={state.timerRemainingMs}
          timerEndAt={state.timerEndAt}
          onStart={startTimer}
          onPause={pauseTimer}
          onReset={resetTimer}
          onSetDuration={setTimerDuration}
          onComplete={completeTimer}
          onAddHours={addLogHours}
        />
  );

  // Dark mode: three cards side by side that always fit one screen on laptops/desktops (stacked on phones).
  if (!isLight) {
    return (
      <div className="nm-fit-grid grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {countdown}
        {stopwatch}
        {timer}
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {countdown}
      <div className="sf-grid2">
        {stopwatch}
        {timer}
      </div>
    </div>
  );
}
