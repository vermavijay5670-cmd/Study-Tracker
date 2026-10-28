"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarClock, Check, X } from "lucide-react";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";
import { parseKey, todayKey } from "@/lib/date-utils";
import { REMINDER_DAYS, daysUntil, nextTest, relativeLabel, syllabusStats } from "@/lib/tests";

const SEEN_KEY = "st_test_popup_seen"; // { [testId]: "YYYY-MM-DD" } — the popup shows once a day per test
const HIDDEN_ON = ["/login", "/signup", "/forgot-password", "/auth/set-password", "/auth/reset-password", "/auth/callback"];

function readSeen(): Record<string, string> {
  try {
    return JSON.parse(window.localStorage.getItem(SEEN_KEY) ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}
function markSeen(id: string) {
  try {
    window.localStorage.setItem(SEEN_KEY, JSON.stringify({ ...readSeen(), [id]: todayKey() }));
  } catch {
    /* ignore */
  }
}

/** Where the popup flies to when it's closed (centre of the top-right chip, relative to the popup's own centre). */
type Fly = { dx: number; dy: number } | null;

const popupVariants = {
  enter: { opacity: 0, scale: 0.9, y: 14 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 26 } },
  // Mac-style "genie": the window narrows faster than it shrinks and slides into the chip.
  exit: (fly: Fly) =>
    fly
      ? {
          x: [0, fly.dx * 0.3, fly.dx],
          y: [0, fly.dy * 0.3, fly.dy],
          scaleX: [1, 0.55, 0.04],
          scaleY: [1, 0.8, 0.05],
          opacity: [1, 1, 0.1],
          transition: { duration: 0.6, times: [0, 0.45, 1], ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
        }
      : { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

/**
 * Top-right chip with the next scheduled test, plus a reminder popup that appears once a day in the last
 * few days before a test (how much syllabus is left / done). Closing the popup shrinks it into the chip.
 */
export function TestReminderHost() {
  const { state, hydrated, toggleSyllabusItem } = useTrackerState();
  const { theme } = useTheme();
  const pathname = usePathname();
  const soft = theme === "light";

  const [open, setOpen] = useState(false);
  const [fly, setFly] = useState<Fly>(null);
  const [bump, setBump] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLButtonElement>(null);
  const autoShown = useRef(false);

  const hidden = HIDDEN_ON.includes(pathname);
  const next = hydrated && !hidden ? nextTest(state.tests) : null;
  const days = next ? daysUntil(next.date) : 0;
  const urgent = next !== null && days <= REMINDER_DAYS;

  // Show the popup automatically once per day in the last REMINDER_DAYS days (not again after it was closed today).
  useEffect(() => {
    if (!next || !urgent || autoShown.current) return;
    if (readSeen()[next.id] === todayKey()) return;
    autoShown.current = true;
    const t = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(t);
  }, [next, urgent]);

  function close() {
    const pop = popupRef.current?.getBoundingClientRect();
    const chip = chipRef.current?.getBoundingClientRect();
    setFly(pop && chip ? { dx: chip.left + chip.width / 2 - (pop.left + pop.width / 2), dy: chip.top + chip.height / 2 - (pop.top + pop.height / 2) } : null);
    if (next) markSeen(next.id);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, next?.id]);

  if (!next) return null;

  const { done, total, left, pct } = syllabusStats(next);
  const remaining = next.syllabus.filter((i) => !i.done);
  const px = soft ? "sf" : "nm";
  const dateLabel = parseKey(next.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const rel = relativeLabel(days);

  return (
    <div className={soft ? undefined : "nm-vars nm-acc-teal"} style={{ display: "contents" }}>
      <motion.button
        ref={chipRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Next test: ${next.title}, ${rel}. ${open ? "Hide" : "Show"} the reminder`}
        title={`${next.title} — ${dateLabel}`}
        data-urgent={urgent}
        animate={{ scale: bump ? [1, 1.22, 0.96, 1] : 1 }}
        transition={{ duration: 0.45 }}
        key={`chip-${bump}`}
        className={`${px}-tchip`}
      >
        <CalendarClock size={15} strokeWidth={2} />
        <span className={`${px}-tchip__txt`}>{next.title}</span>
        <b>{rel}</b>
      </motion.button>

      <AnimatePresence custom={fly} onExitComplete={() => setBump((b) => b + 1)}>
        {open && (
          <motion.div
            key="scrim"
            className={`${px}-tscrim`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            onClick={close}
          >
            <motion.div
              ref={popupRef}
              role="dialog"
              aria-label={`Test reminder: ${next.title}`}
              custom={fly}
              variants={popupVariants}
              initial="enter"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`${px}-tpop ${soft ? "sf-card" : ""}`}
            >
              <button type="button" className={`${px}-tpop__close ${soft ? "sf-round-btn" : "nm-round nm-round--sm"}`} onClick={close} aria-label="Close reminder">
                <X size={15} strokeWidth={2.2} />
              </button>

              <p className={`${px}-tpop__cap`}>
                <CalendarClock size={13} strokeWidth={2} /> Test reminder
              </p>
              <h2 className={`${px}-tpop__title`}>{next.title}</h2>
              <p className={`${px}-tpop__when`}>
                {dateLabel} · <b>{rel}</b>
              </p>

              {total === 0 ? (
                <p className={`${px}-tpop__empty`}>No syllabus added for this test yet — add the topics from Mark Your Days.</p>
              ) : (
                <>
                  <div className={`${px}-tstats`}>
                    <div className={`${px}-tstat`}>
                      <b>{done}</b>
                      <span>Completed</span>
                    </div>
                    <div className={`${px}-tstat`} data-warn={left > 0}>
                      <b>{left}</b>
                      <span>Left</span>
                    </div>
                    <div className={`${px}-tstat`}>
                      <b>{pct}%</b>
                      <span>Done</span>
                    </div>
                  </div>
                  <div className={soft ? "sf-track" : "nm-track nm-inset"} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Syllabus covered">
                    {soft ? <i style={{ width: `${pct}%` }} /> : <i style={{ width: `${pct}%` }} />}
                  </div>

                  {remaining.length > 0 ? (
                    <div className={`${px}-tlist`}>
                      <p className={`${px}-tlist__cap`}>Still to cover</p>
                      {remaining.slice(0, 6).map((it) => (
                        <button key={it.id} type="button" className={`${px}-sub-item`} aria-pressed={it.done} onClick={() => toggleSyllabusItem(next.id, it.id)}>
                          <span className={`${px}-sub-box`} />
                          <span className={`${px}-sub-txt`}>{it.text}</span>
                        </button>
                      ))}
                      {remaining.length > 6 && <p className={`${px}-tlist__more`}>+ {remaining.length - 6} more</p>}
                    </div>
                  ) : (
                    <p className={`${px}-tpop__empty`}>
                      <Check size={14} strokeWidth={2.6} style={{ display: "inline", marginRight: 6 }} />
                      You&apos;ve covered the whole syllabus. Good luck!
                    </p>
                  )}
                </>
              )}

              <Link href="/mark-your-days" onClick={close} className={`${px}-tpop__link`}>
                Open Mark Your Days <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
