"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { addDays, dateKey, parseKey } from "@/lib/date-utils";
import type { ChapterState, Subject } from "@/lib/types";
import { CHAPTERS } from "@/lib/data";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftSeg } from "@/components/ui/soft/SoftUI";
import { NmCard, NmSeg } from "@/components/today/nm/NmUI";

interface RevisionBarChartProps {
  getChapterState: (subj: Subject, cls: 11 | 12, i: number) => ChapterState;
}

type Period = "week" | "month";

export function RevisionBarChart({ getChapterState }: RevisionBarChartProps) {
  const [period, setPeriod] = useState<Period>("week");
  const { theme } = useTheme();
  const isLight = theme === "light";

  const revisionDates = useMemo(() => {
    const dates: string[] = [];
    (["phy", "chem", "bio"] as Subject[]).forEach((subj) => {
      ([11, 12] as const).forEach((cls) => {
        CHAPTERS[subj][cls].forEach((_, i) => {
          const st = getChapterState(subj, cls, i);
          if (st.lastRevised) dates.push(st.lastRevised);
        });
      });
    });
    return dates;
  }, [getChapterState]);

  const data = useMemo(() => {
    const today = new Date();
    const buckets = period === "week" ? 6 : 6;
    const bucketSize = period === "week" ? 7 : 30;

    return Array.from({ length: buckets }, (_, i) => {
      const bucketEnd = addDays(today, -(buckets - 1 - i) * bucketSize);
      const bucketStart = addDays(bucketEnd, -(bucketSize - 1));
      const count = revisionDates.filter((d) => {
        const dk = parseKey(d).getTime();
        return dk >= parseKey(dateKey(bucketStart)).getTime() && dk <= parseKey(dateKey(bucketEnd)).getTime();
      }).length;
      const label =
        period === "week"
          ? bucketEnd.toLocaleDateString("en-US", { month: "short", day: "numeric" })
          : bucketEnd.toLocaleDateString("en-US", { month: "short" });
      return { label, count };
    });
  }, [revisionDates, period]);

  const maxCount = Math.max(1, ...data.map((d) => d.count));
  const totalThisPeriod = data[data.length - 1]?.count ?? 0;

  const c = isLight
    ? {
        tick: "#78868c",
        cursor: "rgba(93,136,56,0.08)",
        tip: { background: "#f3f6f6", border: "1px solid #cfd7da", borderRadius: 14, fontSize: 12, color: "#27363c", boxShadow: "4px 6px 14px rgba(150,165,176,.45)" },
        hi: "#6f9a47",
        lo: "rgba(134,171,87,0.4)",
      }
    : {
        tick: "rgba(231,233,239,0.4)",
        cursor: "rgba(255,255,255,0.04)",
        tip: { background: "#1c1e24", border: "none", borderRadius: 14, fontSize: 12, color: "#e7e9ef", boxShadow: "6px 6px 14px rgba(3,4,7,.6)" },
        hi: "#c98bff", // Planner's colour in the sidebar
        lo: "rgba(201,139,255,0.28)",
      };

  const chart = (
    <div className="h-[170px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 4, left: -20, bottom: 0 }}>
          <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: c.tick, fontSize: 10 }} />
          <Tooltip
            cursor={{ fill: c.cursor }}
            contentStyle={c.tip}
            formatter={(v: number) => [`${v}`, "Chapters revised"]}
          />
          <Bar dataKey="count" radius={[8, 8, 8, 8]} maxBarSize={34}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.count === maxCount && maxCount > 0 ? c.hi : c.lo} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  if (isLight) {
    return (
      <SoftCard delay={0.1}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="sf-title" style={{ fontSize: 20 }}>Revision activity</h2>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="sf-bignum" style={{ fontSize: 30 }}>{totalThisPeriod}</span>
              <span className="sf-sub">this {period}</span>
            </div>
          </div>
          <SoftSeg
            value={period}
            onChange={setPeriod}
            label="Revision period"
            options={[
              { key: "week", label: "Weekly" },
              { key: "month", label: "Monthly" },
            ]}
          />
        </div>
        {chart}
      </SoftCard>
    );
  }

  return (
    <NmCard delay={0.1} accent="purple">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="nm-title" style={{ fontSize: 20 }}>Revision activity</h2>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="nm-bignum" style={{ fontSize: 30 }}>{totalThisPeriod}</span>
            <span className="nm-sub" style={{ letterSpacing: 0 }}>this {period}</span>
          </div>
        </div>
        <NmSeg
          value={period}
          onChange={setPeriod}
          label="Revision period"
          options={[
            { key: "week", label: "Weekly" },
            { key: "month", label: "Monthly" },
          ]}
        />
      </div>
      {chart}
    </NmCard>
  );
}
