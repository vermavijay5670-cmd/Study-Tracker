"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  LayoutDashboard,
  NotebookPen,
  BookOpenCheck,
  ListChecks,
  Target,
  CalendarCheck,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";
import { ProfileChip } from "./ProfileChip";
import { BackgroundToggle } from "./BackgroundToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useTrackerState } from "@/lib/useTrackerState";
import { useKineticGrid } from "@/lib/KineticGridContext";
import { useTheme } from "@/lib/ThemeContext";

const NAV = [
  { href: "/today", label: "Today", icon: Clock },
  { href: "/study-log", label: "Study Log", icon: NotebookPen },
  { href: "/planner", label: "Planner", icon: BookOpenCheck },
  { href: "/question-practice", label: "Question Practice", icon: ListChecks },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/daily-goals", label: "Daily Goals", icon: Target },
  { href: "/mark-your-days", label: "Mark Your Days", icon: CalendarCheck },
];

const HOME_URL = "https://neetstudy-tracker.lovable.app/";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, hydrated, user, signOut } = useTrackerState();
  const { enabled: kineticOn, setEnabled: setKineticOn } = useKineticGrid();
  const { theme } = useTheme();
  const isLight = theme === "light";
  // Skeuomorphic "study desk" chrome: light mode on the Today page only (for now).
  const desk = isLight && pathname === "/today";
  const [mobileOpen, setMobileOpen] = useState(false);
  // Kinetic-grid vs matte is a dark-mode-only visual for now — light mode always uses its own backdrop.
  const showBackgroundToggle = pathname !== "/today" && !isLight;

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  async function handleSignOut() {
    await signOut();
    router.push("/login");
    router.refresh();
  }

  const navList = (onNavigate?: () => void) => (
    <nav className="flex flex-1 flex-col gap-1">
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={desk ? "dk-navlink relative block" : "relative block"}
          >
            {active && (
              <motion.span
                layoutId="side-nav-pill"
                className={desk ? "dk-nav-pill" : "absolute inset-0 rounded-xl"}
                style={desk ? undefined : { background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.08)" }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            {desk ? (
              <span className="dk-nav relative z-10">
                <Icon size={19} strokeWidth={1.75} />
                <span>{label}</span>
              </span>
            ) : (
              <span
                className="relative z-10 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors"
                style={{ color: active ? (isLight ? "#171717" : "#ffffff") : isLight ? "#737373" : "rgba(255,255,255,0.8)" }}
              >
                <Icon
                  size={17}
                  strokeWidth={1.75}
                  style={{ color: active ? (isLight ? "#171717" : "#ffffff") : isLight ? "#a3a3a3" : "rgba(255,255,255,0.5)" }}
                />
                <span>{label}</span>
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );

  const logoBlock = (size: "sm" | "lg") => (
    <a href={HOME_URL} className={`flex items-center ${size === "lg" ? "gap-2.5" : "gap-2"}`}>
      {desk ? (
        <>
          <span className="dk-logo-badge">
            <Home size={size === "lg" ? 20 : 18} strokeWidth={1.75} />
          </span>
          <span>
            <p className="dk-logo-kicker">NEET UG PREP</p>
            <h1 className="dk-logo-title mt-0.5">Study Tracker</h1>
          </span>
        </>
      ) : (
        <>
          <span
            className={`flex flex-shrink-0 items-center justify-center rounded-lg border ${size === "lg" ? "h-8 w-8" : "h-7 w-7"}`}
            style={{
              borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
              background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)",
              color: isLight ? "#525252" : "rgba(255,255,255,0.7)",
            }}
          >
            <Home size={size === "lg" ? 15 : 13} strokeWidth={1.75} />
          </span>
          <span>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#737373]">NEET UG PREP</p>
            <h1
              className={`mt-0.5 font-medium ${size === "lg" ? "text-[19px]" : "text-[16px]"}`}
              style={{ color: isLight ? "#171717" : "#ffffff" }}
            >
              Study Tracker
            </h1>
          </span>
        </>
      )}
    </a>
  );

  return (
    <div className="md:flex md:min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className={
          desk
            ? "dk-sidebar hidden w-[284px] flex-shrink-0 px-5 py-6 md:sticky md:top-0 md:flex md:h-screen md:flex-col"
            : "hidden w-[248px] flex-shrink-0 border-r px-4 py-6 md:sticky md:top-0 md:flex md:h-screen md:flex-col"
        }
        style={
          desk
            ? undefined
            : {
                borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
                background: isLight ? "#ffffff" : "rgba(255,255,255,0.02)",
              }
        }
      >
        <div className="mb-4 flex items-center px-1">
          <ThemeToggle variant={desk ? "desk" : "default"} />
        </div>
        <div className="mb-8 px-1">{logoBlock("lg")}</div>

        {navList()}

        <div
          className={desk ? "dk-sep mt-6 flex flex-col gap-3 pt-4" : "mt-6 flex flex-col gap-3 border-t pt-4"}
          style={desk ? undefined : { borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)" }}
        >
          {showBackgroundToggle && (
            <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} />
          )}
          <div className="flex items-center gap-2">
            {hydrated && <ProfileChip desk={desk} studentName={state.studentName} targetExam={state.targetExam} />}
            {hydrated && user && (
              <button
                onClick={handleSignOut}
                aria-label="Sign out"
                title="Sign out"
                className={desk ? "dk-round-btn" : "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-colors"}
                style={
                  desk
                    ? undefined
                    : {
                        borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                        background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                        color: isLight ? "#737373" : "rgba(255,255,255,0.4)",
                      }
                }
              >
                <LogOut size={15} strokeWidth={1.75} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header
        className={desk ? "dk-topbar flex items-center justify-between px-4 py-3 md:hidden" : "flex items-center justify-between border-b px-4 py-4 md:hidden"}
        style={
          desk
            ? undefined
            : {
                borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
                background: isLight ? "#ffffff" : "#0a0a0a",
              }
        }
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={desk ? "dk-round-btn" : "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"}
            style={
              desk
                ? undefined
                : {
                    borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                    background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                    color: isLight ? "#525252" : "rgba(255,255,255,0.7)",
                  }
            }
          >
            <Menu size={17} strokeWidth={1.75} />
          </button>
          <ThemeToggle variant={desk ? "desk" : "default"} />
        </div>

        {logoBlock("sm")}

        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
          {hydrated && user && (
            <button
              onClick={handleSignOut}
              aria-label="Sign out"
              className={desk ? "dk-round-btn" : "flex h-9 w-9 items-center justify-center rounded-full border"}
              style={
                desk
                  ? undefined
                  : {
                      borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                      background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                      color: isLight ? "#737373" : "rgba(255,255,255,0.4)",
                    }
              }
            >
              <LogOut size={15} strokeWidth={1.75} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className={
                desk
                  ? "dk-sidebar fixed inset-y-0 left-0 z-50 flex w-[284px] flex-col px-5 py-6 md:hidden"
                  : "fixed inset-y-0 left-0 z-50 flex w-[268px] flex-col border-r px-4 py-6 md:hidden"
              }
              style={
                desk
                  ? undefined
                  : {
                      borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)",
                      background: isLight ? "#ffffff" : "#0a0a0a",
                    }
              }
            >
              <div className="mb-4 flex items-center justify-between px-1">
                <ThemeToggle variant={desk ? "desk" : "default"} />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className={desk ? "dk-round-btn" : "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"}
                  style={
                    desk
                      ? undefined
                      : {
                          borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                          background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                          color: isLight ? "#525252" : "rgba(255,255,255,0.6)",
                        }
                  }
                >
                  <X size={16} strokeWidth={1.75} />
                </button>
              </div>
              <div className="mb-8 px-1">{logoBlock("lg")}</div>

              {navList(() => setMobileOpen(false))}

              <div
                className={desk ? "dk-sep mt-6 flex flex-col gap-3 pt-4" : "mt-6 flex flex-col gap-3 border-t pt-4"}
                style={desk ? undefined : { borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.06)" }}
              >
                {showBackgroundToggle && (
                  <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} />
                )}
                {hydrated && <ProfileChip desk={desk} studentName={state.studentName} targetExam={state.targetExam} />}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <main className={`mx-auto px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-[48px] ${desk ? "max-w-[1160px]" : "max-w-[1040px]"}`}>{children}</main>
      </div>
    </div>
  );
}
