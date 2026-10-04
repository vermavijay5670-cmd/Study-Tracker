"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState, type ComponentType, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, Home, LogOut, Moon, Settings, Sun, X } from "lucide-react";
import "./nav.css";

export interface NavItem {
  href: string;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
  /** Circle colour for the active page. */
  color: string;
  /** Label colour on a light page / on a dark page (readable on the slot background). */
  inkLight: string;
  inkDark: string;
}

const PANEL = "#0c0c0e";
const R = 22; // outer corner radius
const RC = 22; // radius of the rounded corners where the slot meets the panel edge
const X0 = 6; // slot starts this far from the left edge

/** Panel outline: a rounded rectangle with a pill-shaped slot cut into its right edge. */
/** The slot itself (used to give the phone drawer an opaque slot so the page doesn't show through). */
function slotPath(w: number, slot: { y1: number; y2: number }): string {
  const half = (slot.y2 - slot.y1) / 2;
  return `M${X0 + half},${slot.y1} H${w + 1} V${slot.y2} H${X0 + half} A${half},${half} 0 0 1 ${X0 + half},${slot.y1} Z`;
}

function panelPath(w: number, h: number, slot?: { y1: number; y2: number }): string {
  const f = (n: number) => n.toFixed(1);
  let d = `M${R},0 H${w - R} A${R},${R} 0 0 1 ${w},${R}`;
  if (slot && slot.y2 - slot.y1 > 8) {
    const { y1, y2 } = slot;
    const half = (y2 - y1) / 2;
    const rc = Math.min(RC, Math.max(4, w - X0 - half - 4));
    d += ` V${f(y1 - rc)} A${rc},${rc} 0 0 1 ${f(w - rc)},${f(y1)}`;
    d += ` H${f(X0 + half)} A${f(half)},${f(half)} 0 0 0 ${f(X0 + half)},${f(y2)}`;
    d += ` H${f(w - rc)} A${rc},${rc} 0 0 1 ${w},${f(y2 + rc)}`;
  }
  d += ` V${h - R} A${R},${R} 0 0 1 ${w - R},${h} H${R} A${R},${R} 0 0 1 0,${h - R} V${R} A${R},${R} 0 0 1 ${R},0 Z`;
  return d;
}

interface SidebarProps {
  items: NavItem[];
  activeHref: string;
  expanded: boolean;
  isLight: boolean;
  homeUrl: string;
  studentName: string;
  targetExam: string;
  signedIn: boolean;
  showKinetic: boolean;
  kineticOn: boolean;
  /** "drawer" = the phone menu: always open, with a close button instead of the arrow pill. */
  variant?: "dock" | "drawer";
  onToggleExpanded?: () => void;
  onClose?: () => void;
  onNavigate?: () => void;
  onOpenSettings: () => void;
  onToggleTheme: () => void;
  onToggleKinetic: () => void;
  onSignOut: () => void;
}

export function Sidebar({
  items,
  activeHref,
  expanded,
  isLight,
  homeUrl,
  studentName,
  targetExam,
  signedIn,
  showKinetic,
  kineticOn,
  variant = "dock",
  onToggleExpanded,
  onClose,
  onNavigate,
  onOpenSettings,
  onToggleTheme,
  onToggleKinetic,
  onSignOut,
}: SidebarProps) {
  const ref = useRef<HTMLElement>(null);
  const [geo, setGeo] = useState<{ w: number; h: number; slot?: { y1: number; y2: number } }>({ w: 0, h: 0 });
  const open = variant === "drawer" || expanded;
  const name = studentName.trim();

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const active = el.querySelector<HTMLElement>(".nv-item.is-active");
    let slot: { y1: number; y2: number } | undefined;
    if (active) {
      const r = active.getBoundingClientRect();
      slot = { y1: r.top - box.top, y2: r.bottom - box.top };
    }
    setGeo({ w: el.offsetWidth, h: el.offsetHeight, slot });
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const nav = el.querySelector(".nv-nav");
    nav?.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      nav?.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure, activeHref, open]);

  const ready = geo.w > 0 && geo.h > 0;
  const ThemeIcon = isLight ? Moon : Sun;

  return (
    <aside
      ref={ref}
      aria-label="Sidebar"
      className={`nv ${open ? "is-expanded" : ""} ${ready ? "is-measured" : ""} ${variant === "drawer" ? "nv--drawer" : ""}`}
    >
      {ready && (
        <svg className="nv__bg" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} aria-hidden="true">
          {variant === "drawer" && geo.slot && <path d={slotPath(geo.w, geo.slot)} fill={isLight ? "#e8ecee" : "#101113"} />}
          <path d={panelPath(geo.w, geo.h, geo.slot)} fill={PANEL} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
        </svg>
      )}

      <div className="nv__inner">
        <div className="nv-top">
          <a href={homeUrl} className="nv-item nv-logo" aria-label="Study Tracker home" title="Home">
            <span className="nv-ico">
              <Home size={22} strokeWidth={1.7} />
            </span>
            <span className="nv-label">
              Study Tracker
              <span className="nv-sub">NEET UG Prep</span>
            </span>
          </a>

          {variant === "drawer" ? (
            <button type="button" onClick={onClose} aria-label="Close menu" className="nv-toggle" title="Close menu">
              <X size={16} strokeWidth={2.6} />
            </button>
          ) : (
            <button
              type="button"
              onClick={onToggleExpanded}
              className="nv-toggle"
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              title={expanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              {expanded ? <ChevronLeft size={18} strokeWidth={2.6} /> : <ChevronRight size={18} strokeWidth={2.6} />}
            </button>
          )}
        </div>

        <nav className="nv-nav" aria-label="Sections">
          {items.map(({ href, label, icon: Icon, color, inkLight, inkDark }) => {
            const active = href === activeHref;
            const style = { "--c": color, "--t": isLight ? inkLight : inkDark } as CSSProperties;
            return (
              <Link
                key={href}
                href={href}
                onClick={onNavigate}
                title={label}
                aria-current={active ? "page" : undefined}
                className={`nv-item ${active ? "is-active" : ""}`}
                style={style}
              >
                <span className="nv-ico">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <span className="nv-label">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="nv-bottom">
          <button type="button" className="nv-item" onClick={onOpenSettings} title="Settings" aria-haspopup="dialog">
            <span className="nv-ico">
              <Settings strokeWidth={1.6} />
            </span>
            <span className="nv-label">Settings</span>
          </button>

          <button type="button" className="nv-item" onClick={onToggleTheme} title={isLight ? "Switch to dark mode" : "Switch to light mode"}>
            <span className="nv-ico">
              <ThemeIcon strokeWidth={1.6} />
            </span>
            <span className="nv-label">{isLight ? "Dark mode" : "Light mode"}</span>
          </button>

          {showKinetic && (
            <button
              type="button"
              className={`nv-item nv-kinetic ${kineticOn ? "is-on" : ""}`}
              onClick={onToggleKinetic}
              aria-pressed={kineticOn}
              title="Kinetic grid background"
            >
              <span className="nv-ico">
                <Grid3x3 strokeWidth={1.6} />
              </span>
              <span className="nv-label">Kinetic Grid</span>
            </button>
          )}

          <Link href="/#profile-form" className="nv-item" onClick={onNavigate} title={name || "Profile"}>
            <span className="nv-ico">
              <span className="nv-avatar">{name ? name.charAt(0).toUpperCase() : "+"}</span>
            </span>
            <span className="nv-label">
              {name || "Add your name"}
              {name && targetExam && <span className="nv-sub">{targetExam}</span>}
            </span>
          </Link>

          {signedIn && (
            <button type="button" className="nv-item" onClick={onSignOut} title="Sign out">
              <span className="nv-ico">
                <LogOut strokeWidth={1.6} />
              </span>
              <span className="nv-label">Log out</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
