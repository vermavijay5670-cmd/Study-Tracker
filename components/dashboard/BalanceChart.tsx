"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { addDays, dateKey, parseKey } from "@/lib/date-utils";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftSeg } from "@/components/ui/soft/SoftUI";
import { NmBadge, NmCard, NmSeg } from "@/components/today/nm/NmUI";

interface BalanceChartProps {
  log: Record<string, number>;
  startDate: string;
  totalHoursLogged: number;
  totalDays: number;
}

const RANGES = [
  { key: "7", label: "7 days" },
  { key: "30", label: "30 days" },
  { key: "90", label: "90 days" },
  { key: "all", label: "All time" },
] as const;

type RangeKey = (typeof RANGES)[number]["key"];

function sumHours(log: Record<string, number>, from: Date, to: Date): number {
  let total = 0;
  let cursor = new Date(from);
  while (cursor <= to) {
    total += log[dateKey(cursor)] ?? 0;
    cursor = addDays(cursor, 1);
  }
  return total;
}

export function BalanceChart({ log, startDate, totalHoursLogged, totalDays }: BalanceChartProps) {
  const [range, setRange] = useState<RangeKey>("30");
  const { theme } = useTheme();
  const isLight = theme === "light";

  const today = useMemo(() => new Date(), []);
  const start = parseKey(startDate);

  const windowDays = range === "all" ? totalDays : Math.min(Number(range), totalDays);

  const series = useMemo(() => {
    // cumulative sum from the very start, but only render the selected window
    const allDates: Date[] = [];
    let cursor = new Date(start);
    while (cursor <= today) {
      allDates.push(new Date(cursor));
      cursor = addDays(cursor, 1);
    }
    let running = 0;
    const withCumulative = allDates.map((d) => {
      running += log[dateKey(d)] ?? 0;
      return { date: d, cumulative: Math.round(running * 10) / 10, daily: log[dateKey(d)] ?? 0 };
    });
    const windowed = withCumulative.slice(-windowDays);
    return windowed.map((p) => ({
      label: p.date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      cumulative: p.cumulative,
      daily: p.daily,
    }));
  }, [log, start, today, windowDays]);

  const last7 = sumHours(log, addDays(today, -6), today);
  const prev7 = sumHours(log, addDays(today, -13), addDays(today, -7));
  const pct = prev7 > 0 ? ((last7 - prev7) / prev7) * 100 : last7 > 0 ? 100 : 0;
  const up = pct >= 0;

  const avgPerDay = totalDays > 0 ? totalHoursLogged / totalDays : 0;

  const c = isLight
    ? {
        line: "#5d8838",
        fillTop: "#86ab57",
        tick: "#6b7f93",
        cursor: "rgba(93,136,56,0.45)",
        tip: { background: "#e6eef6", border: "1px solid #c1d0df", borderRadius: 14, fontSize: 12, color: "#27363c", boxShadow: "4px 6px 14px rgba(150,165,176,.45)" },
        dotFill: "#fff",
      }
    : {
        line: "#ff7a7a", // Today's colour in the sidebar (study hours are tracked on Today)
        fillTop: "#ff7a7a",
        tick: "rgba(231,233,239,0.4)",
        cursor: "rgba(255,122,122,0.35)",
        tip: { background: "#1c1e24", border: "none", borderRadius: 14, fontSize: 12, color: "#e7e9ef", boxShadow: "6px 6px 14px rgba(3,4,7,.6)" },
        dotFill: "#1f2127",
      };

  const chart = (
    <div className="mt-5 h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={series} margin={{ top: 10, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c.fillTop} stopOpacity={isLight ? 0.5 : 0.45} />
              <stop offset="100%" stopColor={c.fillTop} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: c.tick, fontSize: 10 }}
            interval={Math.max(0, Math.floor(series.length / 6))}
          />
          <Tooltip
            cursor={{ stroke: c.cursor, strokeWidth: 1 }}
            contentStyle={c.tip}
            formatter={(v: number) => [`${v}h`, "Total hours"]}
          />
          <Area
            type="monotone"
            dataKey="cumulative"
            stroke={c.line}
            strokeWidth={isLight ? 3 : 2}
            fill="url(#balanceFill)"
            dot={false}
            activeDot={{ r: 5, fill: c.dotFill, stroke: c.line, strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  if (isLight) {
    return (
      <SoftCard>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="sf-badge" style={{ width: 38, height: 38 }}>
                <Clock size={17} strokeWidth={1.9} />
              </span>
              <span className="sf-cap">Total study hours</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="sf-bignum">{totalHoursLogged.toFixed(1)}h</span>
              <span className={`sf-trend ${up ? "is-up" : ""}`}>
                {up ? <ArrowUpRight size={13} strokeWidth={2.4} /> : <ArrowDownRight size={13} strokeWidth={2.4} />}
                {Math.abs(pct).toFixed(1)}%
              </span>
            </div>
          </div>
          <SoftSeg value={range} onChange={setRange} label="Chart range" options={RANGES.map((r) => ({ key: r.key, label: r.label }))} />
        </div>

        {chart}

        <div className="sf-sub mt-3 flex flex-wrap items-center justify-between gap-2">
          <span>Average pace · {avgPerDay.toFixed(1)}h / day</span>
          <span>Cumulative hours logged</span>
        </div>
      </SoftCard>
    );
  }

  return (
    <NmCard accent="red">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <NmBadge>
              <Clock size={17} strokeWidth={1.9} />
            </NmBadge>
            <span className="nm-cap">Total study hours</span>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="nm-bignum">{totalHoursLogged.toFixed(1)}h</span>
            <span className={`nm-trend ${up ? "is-up" : ""}`}>
              {up ? <ArrowUpRight size={13} strokeWidth={2.4} /> : <ArrowDownRight size={13} strokeWidth={2.4} />}
              {Math.abs(pct).toFixed(1)}%
            </span>
          </div>
        </div>
        <NmSeg value={range} onChange={setRange} label="Chart range" options={RANGES.map((r) => ({ key: r.key, label: r.label }))} />
      </div>

      {chart}

      <div className="nm-sub mt-3 flex flex-wrap items-center justify-between gap-2">
        <span>Average pace · {avgPerDay.toFixed(1)}h / day</span>
        <span>Cumulative hours logged</span>
      </div>
    </NmCard>
  );
}
