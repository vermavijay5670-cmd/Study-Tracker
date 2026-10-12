"use client";

import Link from "next/link";
import { Clock3, RefreshCw } from "lucide-react";
import type { Subject } from "@/lib/types";
import { relDays } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard } from "@/components/ui/soft/SoftUI";
import { NmCard } from "@/components/today/nm/NmUI";

type Activity =
  | { type: "log"; date: string; hours: number }
  | { type: "revision"; date: string; subject: Subject; chapter: string };

export function RecentActivityList({ activity }: { activity: Activity[] }) {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <SoftCard delay={0.15}>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="sf-title" style={{ fontSize: 22 }}>Recent activity</h2>
          <Link href="/study-log" className="sf-linkbtn">
            View all
          </Link>
        </div>

        {activity.length === 0 ? (
          <p className="sf-sub py-6 text-center">Nothing logged yet — get started on Today.</p>
        ) : (
          <div>
            {activity.map((a, i) =>
              a.type === "log" ? (
                <div key={i} className="sf-act">
                  <span className="sf-act__ico">
                    <Clock3 size={16} strokeWidth={1.9} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-semibold" style={{ color: "var(--sf-text)" }}>Study session</div>
                    <div className="sf-sub" style={{ fontSize: 11 }}>{relDays(a.date)}</div>
                  </div>
                  <span className="font-tabular flex-shrink-0 text-[14px] font-bold" style={{ color: "#3b7d45" }}>
                    +{a.hours.toFixed(1)}h
                  </span>
                </div>
              ) : (
                <div key={i} className="sf-act">
                  <span className="sf-act__ico">
                    <RefreshCw size={16} strokeWidth={1.9} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[14px] font-semibold" style={{ color: "var(--sf-text)" }}>{a.chapter}</div>
                    <div className="sf-sub" style={{ fontSize: 11 }}>{relDays(a.date)}</div>
                  </div>
                  <span className="sf-trend is-up flex-shrink-0">Revised</span>
                </div>
              )
            )}
          </div>
        )}
      </SoftCard>
    );
  }

  return (
    <NmCard delay={0.15} accent="amber">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="nm-title" style={{ fontSize: 22 }}>Recent activity</h2>
        <Link href="/study-log" className="nm-linkbtn">
          View all
        </Link>
      </div>

      {activity.length === 0 ? (
        <p className="nm-sub py-6 text-center" style={{ letterSpacing: 0 }}>Nothing logged yet — get started on Today.</p>
      ) : (
        <div>
          {activity.map((a, i) =>
            a.type === "log" ? (
              <div key={i} className="nm-act">
                <span className="nm-act__ico nm-raised">
                  <Clock3 size={16} strokeWidth={1.9} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[14px] font-medium" style={{ color: "var(--nm-text)" }}>Study session</div>
                  <div className="nm-sub" style={{ fontSize: 11, letterSpacing: 0 }}>{relDays(a.date)}</div>
                </div>
                <span className="font-tabular nm-cyan flex-shrink-0 text-[14px] font-semibold">+{a.hours.toFixed(1)}h</span>
              </div>
            ) : (
              <div key={i} className="nm-act">
                <span className="nm-act__ico nm-raised">
                  <RefreshCw size={16} strokeWidth={1.9} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[14px] font-medium" style={{ color: "var(--nm-text)" }}>{a.chapter}</div>
                  <div className="nm-sub" style={{ fontSize: 11, letterSpacing: 0 }}>{relDays(a.date)}</div>
                </div>
                <span className="nm-trend is-up flex-shrink-0">Revised</span>
              </div>
            )
          )}
        </div>
      )}
    </NmCard>
  );
}
