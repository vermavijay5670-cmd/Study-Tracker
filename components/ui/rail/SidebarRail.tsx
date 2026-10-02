"use client";

import type { ComponentType, CSSProperties } from "react";
import { Grid3x3, Home, LogOut, Moon, Sun, User } from "lucide-react";
import "./rail.css";

interface RailItem {
  href: string;
  label: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

/**
 * Decorative collapsed state of the sidebar (black pill with white icons and a bubble
 * around the active page). It is aria-hidden: the real, keyboard-accessible sidebar
 * stays in the DOM and takes over as soon as the pointer or keyboard focus enters.
 */
export function SidebarRail({
  items,
  activeHref,
  isLight,
  showGrid,
  gridOn,
  initial,
  signedIn,
}: {
  items: RailItem[];
  activeHref: string;
  isLight: boolean;
  showGrid: boolean;
  gridOn: boolean;
  initial: string;
  signedIn: boolean;
}) {
  const activeIdx = items.findIndex((i) => i.href === activeHref);
  const style = { "--rl-idx": Math.max(activeIdx, 0) } as CSSProperties;
  const ThemeIcon = isLight ? Moon : Sun;

  return (
    <div className="rl-rail" aria-hidden="true">
      <span className="rl-logo">
        <Home size={24} strokeWidth={1.8} />
      </span>

      <div className="rl-pill" style={style} data-has-active={activeIdx >= 0}>
        <div className="rl-pill__bg" />
        {activeIdx >= 0 && <span className="rl-bubble" />}

        <div className="rl-items">
          {items.map(({ href, icon: Icon }) => (
            <span key={href} className={`rl-item ${href === activeHref ? "is-active" : ""}`}>
              <Icon size={20} strokeWidth={1.6} />
            </span>
          ))}
        </div>

        <div className="rl-bottom">
          <span className="rl-icon">
            <ThemeIcon size={20} strokeWidth={1.6} />
          </span>
          {showGrid && (
            <span className={`rl-icon ${gridOn ? "is-on" : ""}`}>
              <Grid3x3 size={20} strokeWidth={1.6} />
            </span>
          )}
          <span className="rl-avatar">{initial ? initial : <User size={20} strokeWidth={1.8} />}</span>
          {signedIn && (
            <span className="rl-icon">
              <LogOut size={20} strokeWidth={1.6} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
