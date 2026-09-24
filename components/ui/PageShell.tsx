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
} from "lucide-react";
import { ProfileChip } from "./ProfileChip";
import { BackgroundToggle } from "./BackgroundToggle";
import { useTrackerState } from "@/lib/useTrackerState";
import { useKineticGrid } from "@/lib/KineticGridContext";

const NAV = [
  { href: "/today", label: "Today", icon: Clock },
  { href: "/study-log", label: "Study Log", icon: NotebookPen },
  { href: "/planner", label: "Planner", icon: BookOpenCheck },
  { href: "/question-practice", label: "Question Practice", icon: ListChecks },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/daily-goals", label: "Daily Goals", icon: Target },
  { href: "/mark-your-days", label: "Mark Your Days", icon: CalendarCheck },
];

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, hydrated, user, signOut } = useTrackerState();
  const { enabled: kineticOn, setEnabled: setKineticOn } = useKineticGrid();
  const [mobileOpen, setMobileOpen] = useState(false);
  const showBackgroundToggle = pathname !== "/today";

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
          <Link key={href} href={href} onClick={onNavigate} className="relative block">
            {active && (
              <motion.span
                layoutId="side-nav-pill"
                className="absolute inset-0 rounded-xl bg-white/[0.08]"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white">
              <Icon size={17} strokeWidth={1.75} className={active ? "text-white" : "text-white/50"} />
              <span className={active ? "text-white" : ""}>{label}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="md:flex md:min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden w-[248px] flex-shrink-0 border-r border-white/[0.06] bg-white/[0.02] px-4 py-6 md:sticky md:top-0 md:flex md:h-screen md:flex-col">
        <Link href="/" className="mb-8 block px-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#737373]">NEET UG PREP</p>
          <h1 className="mt-1 text-[19px] font-medium text-white">Study Tracker</h1>
        </Link>

        {navList()}

        <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
          {showBackgroundToggle && (
            <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} />
          )}
          <div className="flex items-center gap-2">
            {hydrated && <ProfileChip studentName={state.studentName} targetExam={state.targetExam} />}
            {hydrated && user && (
              <button
                onClick={handleSignOut}
                aria-label="Sign out"
                title="Sign out"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 transition-colors hover:text-white/80"
              >
                <LogOut size={15} strokeWidth={1.75} />
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a] px-4 py-4 md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70"
        >
          <Menu size={17} strokeWidth={1.75} />
        </button>

        <Link href="/" className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#737373]">NEET UG PREP</p>
          <h1 className="text-[16px] font-medium text-white">Study Tracker</h1>
        </Link>

        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
          {hydrated && user && (
            <button
              onClick={handleSignOut}
              aria-label="Sign out"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40"
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
              className="fixed inset-y-0 left-0 z-50 flex w-[268px] flex-col border-r border-white/[0.06] bg-[#0a0a0a] px-4 py-6 md:hidden"
            >
              <div className="mb-8 flex items-center justify-between px-1">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#737373]">NEET UG PREP</p>
                  <h1 className="mt-1 text-[19px] font-medium text-white">Study Tracker</h1>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60"
                >
                  <X size={16} strokeWidth={1.75} />
                </button>
              </div>

              {navList(() => setMobileOpen(false))}

              <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
                {showBackgroundToggle && (
                  <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} />
                )}
                {hydrated && <ProfileChip studentName={state.studentName} targetExam={state.targetExam} />}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <main className="mx-auto max-w-[1040px] px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-[48px]">{children}</main>
      </div>
    </div>
  );
}
