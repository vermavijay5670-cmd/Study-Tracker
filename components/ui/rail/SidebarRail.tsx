"use client";

import Link from "next/link";
import type { ComponentType, CSSProperties } from "react";
import { ChevronRight, Grid3x3, Home, LogOut, Moon, Sun, User } from "lucide-react";
import "./rail.css";

interface RailItem {
  href: string;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

/**
 * Collapsed sidebar: black pill with white icons and a white bubble (with a scooped notch)
 * around the active page. Every icon is a real link; the lime arrow pill at the top
 * expands the full sidebar.
 */
export function SidebarRail({
  items,
  activeHref,
  homeUrl,
  isLight,
  showGrid,
  gridOn,
  initial,
  signedIn,
  hidden,
  onExpand,
  onToggleTheme,
  onToggleGrid,
  onSignOut,
}: {
  items: RailItem[];
  activeHref: string;
  homeUrl: string;
  isLight: boolean;
  showGrid: boolean;
  gridOn: boolean;
  initial: string;
  signedIn: boolean;
  /** True while the full sidebar is showing (the rail is then inert). */
  hidden: boolean;
  onExpand: () => void;
  onToggleTheme: () => void;
  onToggleGrid: () => void;
  onSignOut: () => void;
}) {
  const activeIdx = items.findIndex((i) => i.href === activeHref);
  const style = { "--rl-idx": Math.max(activeIdx, 0) } as CSSProperties;
  const ThemeIcon = isLight ? Moon : Sun;

  return (
    <div className="rl-rail" inert={hidden} aria-label="Collapsed sidebar">
      <a href={homeUrl} className="rl-logo" aria-label="Home" title="Home">
        <Home size={24} strokeWidth={1.8} />
      </a>

      <div className="rl-pill" style={style} data-has-active={activeIdx >= 0}>
        <div className="rl-pill__bg" />
        {activeIdx >= 0 && <span className="rl-bubble" />}

        <button type="button" className="rl-toggle" onClick={onExpand} aria-label="Expand sidebar" title="Expand sidebar">
          <ChevronRight size={18} strokeWidth={2.6} />
        </button>

        <nav className="rl-items" aria-label="Sections">
          {items.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              title={label}
              aria-current={href === activeHref ? "page" : undefined}
              className={`rl-item ${href === activeHref ? "is-active" : ""}`}
            >
              <Icon size={20} strokeWidth={1.6} />
            </Link>
          ))}
        </nav>

        <div className="rl-bottom">
          <button
            type="button"
            className="rl-icon"
            onClick={onToggleTheme}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            title={isLight ? "Dark mode" : "Light mode"}
          >
            <ThemeIcon size={20} strokeWidth={1.6} />
          </button>
          {showGrid && (
            <button
              type="button"
              className={`rl-icon rl-grid ${gridOn ? "is-on" : ""}`}
              onClick={onToggleGrid}
              aria-pressed={gridOn}
              aria-label="Kinetic grid background"
              title="Kinetic grid"
            >
              <Grid3x3 size={20} strokeWidth={1.6} />
            </button>
          )}
          <Link href="/#profile-form" className="rl-avatar" aria-label="Profile" title="Profile">
            {initial ? initial : <User size={20} strokeWidth={1.8} />}
          </Link>
          {signedIn && (
            <button type="button" className="rl-icon" onClick={onSignOut} aria-label="Sign out" title="Sign out">
              <LogOut size={20} strokeWidth={1.6} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
