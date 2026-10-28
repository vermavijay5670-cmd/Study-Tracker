"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";
import { pad } from "@/lib/date-utils";

/** Start / pause the study stopwatch from any section. Shows the session time once it has been started today. */
export function StopwatchToggle() {
  const { state, hydrated, startStopwatch, pauseStopwatch } = useTrackerState();
  const { theme } = useTheme();
  const soft = theme === "light";
  const running = state.stopwatchRunningSince != null;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!running) return;
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [running]);

  if (!hydrated) return null;

  const sessionMs = state.stopwatchSessionMs + (running ? Math.max(0, now - (state.stopwatchRunningSince as number)) : 0);
  const secs = Math.floor(sessionMs / 1000);
  const time = `${pad(Math.floor(secs / 3600))}:${pad(Math.floor((secs % 3600) / 60))}:${pad(secs % 60)}`;
  const showTime = running || sessionMs > 0;
  const px = soft ? "sf" : "nm";

  return (
    <button
      type="button"
      onClick={running ? pauseStopwatch : startStopwatch}
      aria-pressed={running}
      aria-label={running ? `Pause the stopwatch. Session time ${time}` : showTime ? `Resume the stopwatch. Session time ${time}` : "Start the stopwatch"}
      title={running ? "Pause stopwatch" : showTime ? "Resume stopwatch" : "Start stopwatch"}
      data-running={running}
      className={`${px}-swbtn`}
    >
      <span className={`${px}-swbtn__ico`}>{running ? <Pause size={13} strokeWidth={2.4} fill="currentColor" /> : <Play size={13} strokeWidth={2.4} fill="currentColor" />}</span>
      <span className={`${px}-swbtn__txt`}>{showTime ? time : "Start"}</span>
    </button>
  );
}
