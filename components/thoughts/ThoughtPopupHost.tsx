"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Shuffle, X } from "lucide-react";
import { HighlightedText } from "@/components/mark-your-days/HighlightedText";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useTrackerState } from "@/lib/useTrackerState";
import { useTheme } from "@/lib/ThemeContext";
import { todayKey } from "@/lib/date-utils";
import { SHARED_THOUGHT_KEY, THOUGHT_EVENT, getRandomThought, getThoughtOfTheDay } from "@/lib/thoughts";

const HIDDEN_ON = ["/login", "/signup", "/forgot-password", "/auth/set-password", "/auth/reset-password", "/auth/callback"];

/** True once the popup has been shown in this page load. A page refresh resets it (module state), so it shows again. */
let shownThisLoad = false;

type Fly = { dx: number; dy: number } | null;

const popupVariants = {
  enter: { opacity: 0, scale: 0.92, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 280, damping: 26 } },
  // Mac-style "genie": narrows faster than it shrinks while sliding into the Mark Your Days item in the sidebar.
  exit: (fly: Fly) =>
    fly
      ? {
          x: [0, fly.dx * 0.3, fly.dx],
          y: [0, fly.dy * 0.3, fly.dy],
          scaleX: [1, 0.5, 0.03],
          scaleY: [1, 0.78, 0.04],
          opacity: [1, 1, 0.1],
          transition: { duration: 0.65, times: [0, 0.45, 1], ease: [0.5, 0, 0.75, 0] as [number, number, number, number] },
        }
      : { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
};

/** The Mark Your Days item in the sidebar, if it's actually visible on screen (it isn't while the mobile menu is closed). */
function markYourDaysTarget(): HTMLElement | null {
  const el = document.querySelector<HTMLElement>('a[href="/mark-your-days"]');
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const visible = r.width > 4 && r.height > 4 && r.right > 0 && r.left < window.innerWidth && r.bottom > 0 && r.top < window.innerHeight;
  return visible ? el : null;
}

/**
 * "Thought of the day" popup: shown on every page load once you're signed in (including the first page after
 * signing up), and when closed it shrinks into the Mark Your Days item in the sidebar, where the thought lives.
 */
export function ThoughtPopupHost() {
  const { state, hydrated } = useTrackerState();
  const { theme } = useTheme();
  const pathname = usePathname();
  const soft = theme === "light";
  const px = soft ? "sf" : "nm";

  const [open, setOpen] = useState(false);
  const [thought, setThought] = useState("");
  const [fly, setFly] = useState<Fly>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const customRef = useRef(state.customThoughts);
  customRef.current = state.customThoughts;

  // Open once per page load, on the first app page where there is a signed-in session.
  useEffect(() => {
    if (shownThisLoad || !hydrated || HIDDEN_ON.includes(pathname)) return;
    let cancelled = false;
    createSupabaseBrowserClient()
      .auth.getSession()
      .then(({ data }) => {
        if (cancelled || shownThisLoad || !data.session) return;
        shownThisLoad = true;
        const t = getThoughtOfTheDay(todayKey(), customRef.current);
        setThought(t);
        try {
          window.sessionStorage.setItem(SHARED_THOUGHT_KEY, t);
        } catch {
          /* ignore */
        }
        window.dispatchEvent(new CustomEvent(THOUGHT_EVENT, { detail: t }));
        openTimer.current = setTimeout(() => setOpen(true), 350);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname, hydrated]);

  useEffect(
    () => () => {
      if (openTimer.current) clearTimeout(openTimer.current);
    },
    []
  );

  function close() {
    const pop = popupRef.current?.getBoundingClientRect();
    const target = markYourDaysTarget();
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (pop && !reduce) {
      const tx = target ? target.getBoundingClientRect().left + target.getBoundingClientRect().width / 2 : 28;
      const ty = target ? target.getBoundingClientRect().top + target.getBoundingClientRect().height / 2 : window.innerHeight / 2;
      setFly({ dx: tx - (pop.left + pop.width / 2), dy: ty - (pop.top + pop.height / 2) });
    } else setFly(null);
    setOpen(false);
  }

  // Esc closes it — handled in the capture phase so it doesn't also close another popup behind it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        close();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  function shuffle() {
    const next = getRandomThought(customRef.current, thought);
    setThought(next);
    try {
      window.sessionStorage.setItem(SHARED_THOUGHT_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent(THOUGHT_EVENT, { detail: next }));
  }

  // When it lands, give the sidebar item a little "caught it" pulse.
  function arrived() {
    const el = markYourDaysTarget();
    if (!el || !el.animate || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    el.animate(
      [
        { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(79,227,209,0.8)" },
        { transform: "scale(1.3)", boxShadow: "0 0 0 12px rgba(79,227,209,0)", offset: 0.5 },
        { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(79,227,209,0)" },
      ],
      { duration: 700, easing: "ease-out" }
    );
  }

  return (
    <div className={soft ? undefined : "nm-vars nm-acc-teal"} style={{ display: "contents" }}>
      <AnimatePresence custom={fly} onExitComplete={arrived}>
        {open && (
          <motion.div
            key="thought-scrim"
            className={`${px}-thscrim`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            onClick={close}
          >
            <motion.div
              ref={popupRef}
              role="dialog"
              aria-label="Thought of the day"
              custom={fly}
              variants={popupVariants}
              initial="enter"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className={`${px}-thpop ${soft ? "sf-card" : ""}`}
            >
              <button type="button" className={`${px}-thpop__close ${soft ? "sf-round-btn" : "nm-round nm-round--sm"}`} onClick={close} aria-label="Close thought of the day">
                <X size={15} strokeWidth={2.2} />
              </button>

              <p className={`${px}-thpop__cap`}>
                <Quote size={14} strokeWidth={2} /> Thought of the day
              </p>
              <blockquote className={`${px}-thpop__quote`}>
                “<HighlightedText text={thought} tone={soft ? "green" : "teal"} />”
              </blockquote>

              <div className={`${px}-thpop__foot`}>
                <button type="button" className={`${px}-thpop__again`} onClick={shuffle}>
                  <Shuffle size={14} strokeWidth={2} /> Another thought
                </button>
                <span className={`${px}-thpop__hint`}>Closes into Mark Your Days</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
