"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Clock,
  LayoutDashboard,
  NotebookPen,
  BookOpenCheck,
  ListChecks,
  Target,
  CalendarCheck,
  ChevronLeft,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";
import { ProfileChip } from "./ProfileChip";
import { BackgroundToggle } from "./BackgroundToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SidebarRail } from "./rail/SidebarRail";
import { useTrackerState } from "@/lib/useTrackerState";
import { useKineticGrid } from "@/lib/KineticGridContext";
import { useTheme } from "@/lib/ThemeContext";
import { useSidebar } from "@/lib/SidebarContext";
import "./rail/sidebar.css";

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
  const { theme, toggleTheme } = useTheme();
  const { expanded, setExpanded } = useSidebar();
  const isLight = theme === "light";
  const [mobileOpen, setMobileOpen] = useState(false);
  // Kinetic-grid vs matte is a dark-mode-only visual — light mode always uses its own backdrop.
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
    <nav className="flex flex-1 flex-col gap-1" aria-label="Sections">
      {NAV.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className="bk-navlink relative block"
          >
            <span className="bk-nav relative z-10">
              <Icon size={22} strokeWidth={1.6} />
              <span>{label}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );

  const logoBlock = (size: "sm" | "lg") => (
    <a href={HOME_URL} className={`flex min-w-0 items-center ${size === "lg" ? "gap-3" : "gap-2"}`}>
      <span className="bk-logo-badge" style={size === "sm" ? { width: 38, height: 38 } : undefined}>
        <Home size={size === "lg" ? 20 : 17} strokeWidth={1.75} />
      </span>
      <span>
        <p className="bk-logo-kicker">NEET UG PREP</p>
        <h1 className="bk-logo-title mt-0.5">Study Tracker</h1>
      </span>
    </a>
  );

  const bottomBlock = (withProfile: boolean) => (
    <div className="bk-bottom">
      <div className="bk-actions">
        <ThemeToggle variant="bk" />
        {hydrated && user && (
          <button onClick={handleSignOut} aria-label="Sign out" title="Sign out" className="bk-round-btn">
            <LogOut size={17} strokeWidth={1.75} />
          </button>
        )}
      </div>
      {showBackgroundToggle && (
        <BackgroundToggle enabled={kineticOn} onToggle={() => setKineticOn(!kineticOn)} variant="bk" />
      )}
      {withProfile && hydrated && (
        <div className="flex items-center">
          <ProfileChip bk studentName={state.studentName} targetExam={state.targetExam} />
        </div>
      )}
    </div>
  );

  return (
    <div className="md:flex md:min-h-screen">
      {/* Desktop sidebar: the spacer reserves the room; the rail or the full sidebar fills it */}
      <div className="rail-spacer" data-expanded={expanded} aria-hidden="true" />
      <div className="rail-wrap" data-expanded={expanded}>
        <aside className="rail-aside bk-sidebar hidden md:flex md:flex-col" aria-label="Sidebar" inert={!expanded}>
          <div className="bk-top">{logoBlock("lg")}</div>

          <div className="bk-wing">
            <button
              type="button"
              className="bk-toggle"
              onClick={() => setExpanded(false)}
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
            >
              <ChevronLeft size={18} strokeWidth={2.6} />
            </button>
            {navList()}
          </div>

          {bottomBlock(true)}
        </aside>

        <SidebarRail
          items={NAV}
          activeHref={pathname}
          homeUrl={HOME_URL}
          isLight={isLight}
          showGrid={showBackgroundToggle}
          gridOn={kineticOn}
          initial={hydrated ? (state.studentName || "").trim().charAt(0).toUpperCase() : ""}
          signedIn={Boolean(hydrated && user)}
          hidden={expanded}
          onExpand={() => setExpanded(true)}
          onToggleTheme={toggleTheme}
          onToggleGrid={() => setKineticOn(!kineticOn)}
          onSignOut={handleSignOut}
        />
      </div>

      {/* Mobile top bar */}
      <header className="bk-topbar flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="bk-round-btn">
            <Menu size={17} strokeWidth={1.75} />
          </button>
          <ThemeToggle variant="bk" />
        </div>

        {logoBlock("sm")}

        <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center">
          {hydrated && user && (
            <button onClick={handleSignOut} aria-label="Sign out" className="bk-round-btn">
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
              className="bk-sidebar bk-sidebar--drawer fixed inset-y-0 left-0 z-50 flex w-[284px] flex-col md:hidden"
            >
              <div className="bk-top">
                {logoBlock("sm")}
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="bk-round-btn">
                  <X size={16} strokeWidth={1.75} />
                </button>
              </div>

              <div className="bk-wing">{navList(() => setMobileOpen(false))}</div>

              {bottomBlock(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <main className={`mx-auto px-4 py-6 sm:px-6 sm:py-10 md:px-12 md:py-[48px] ${isLight ? "max-w-[1320px]" : "max-w-[1040px]"}`}>{children}</main>
      </div>
    </div>
  );
}
