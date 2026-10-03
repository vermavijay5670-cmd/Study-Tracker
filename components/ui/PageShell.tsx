"use client";

import { useEffect, useState } from "react";
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
  LogOut,
  Menu,
  Home,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Sidebar, type NavItem } from "./nav/Sidebar";
import { useTrackerState } from "@/lib/useTrackerState";
import { useKineticGrid } from "@/lib/KineticGridContext";
import { useTheme } from "@/lib/ThemeContext";
import { useSidebar } from "@/lib/SidebarContext";
import "./nav/nav.css";

// Active-page circle colours (inkLight/inkDark keep the label readable on pale and dark pages).
const NAV: NavItem[] = [
  { href: "/today", label: "Today", icon: Clock, color: "#ef4444", inkLight: "#c62828", inkDark: "#ff7a7a" },
  { href: "/study-log", label: "Study Log", icon: NotebookPen, color: "#f59e0b", inkLight: "#b45309", inkDark: "#fbbf24" },
  { href: "/planner", label: "Planner", icon: BookOpenCheck, color: "#a855f7", inkLight: "#7e22ce", inkDark: "#c98bff" },
  { href: "/question-practice", label: "Question Practice", icon: ListChecks, color: "#22c55e", inkLight: "#15803d", inkDark: "#4ade80" },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, color: "#3b82f6", inkLight: "#1d4ed8", inkDark: "#7db2ff" },
  { href: "/daily-goals", label: "Daily Goals", icon: Target, color: "#ec4899", inkLight: "#be185d", inkDark: "#ff7ab8" },
  { href: "/mark-your-days", label: "Mark Your Days", icon: CalendarCheck, color: "#14b8a6", inkLight: "#0f766e", inkDark: "#4fe3d1" },
];

const HOME_URL = "https://neetstudy-tracker.lovable.app/";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { state, hydrated, user, signOut } = useTrackerState();
  const { enabled: kineticOn, setEnabled: setKineticOn } = useKineticGrid();
  const { theme, toggleTheme } = useTheme();
  const { expanded, toggle } = useSidebar();
  const isLight = theme === "light";
  const [mobileOpen, setMobileOpen] = useState(false);
  // Kinetic-grid vs matte is a dark-mode-only visual — light mode always uses its own backdrop.
  const showKinetic = pathname !== "/today" && !isLight;

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  async function handleSignOut() {
    await signOut();
    router.push("/login");
    router.refresh();
  }

  const sidebarProps = {
    items: NAV,
    activeHref: pathname,
    isLight,
    homeUrl: HOME_URL,
    studentName: hydrated ? state.studentName : "",
    targetExam: hydrated ? state.targetExam : "",
    signedIn: Boolean(hydrated && user),
    showKinetic,
    kineticOn,
    onToggleTheme: toggleTheme,
    onToggleKinetic: () => setKineticOn(!kineticOn),
    onSignOut: handleSignOut,
  };

  return (
    <div className="md:flex md:min-h-screen">
      {/* Desktop sidebar: the spacer reserves the room, the fixed dock holds the panel */}
      <div className="nv-spacer" data-expanded={expanded} aria-hidden="true" />
      <div className="nv-dock">
        <Sidebar {...sidebarProps} expanded={expanded} onToggleExpanded={toggle} />
      </div>

      {/* Mobile top bar */}
      <header className="nv-topbar flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <button onClick={() => setMobileOpen(true)} aria-label="Open menu" className="nv-round-btn">
            <Menu size={17} strokeWidth={1.75} />
          </button>
          <ThemeToggle variant="bk" />
        </div>

        <a href={HOME_URL} className="nv-mini-logo">
          <Home size={18} strokeWidth={1.8} />
          <b>Study Tracker</b>
        </a>

        <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center">
          {hydrated && user && (
            <button onClick={handleSignOut} aria-label="Sign out" className="nv-round-btn">
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
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 w-[272px] md:hidden"
            >
              <Sidebar
                {...sidebarProps}
                expanded
                variant="drawer"
                onClose={() => setMobileOpen(false)}
                onNavigate={() => setMobileOpen(false)}
              />
            </motion.div>
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
