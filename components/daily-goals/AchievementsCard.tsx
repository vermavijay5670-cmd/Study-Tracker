"use client";

import { Trophy, Flame, CheckCircle2 } from "lucide-react";
import { PaperTiltCard } from "@/components/ui/PaperTiltCard";

interface AchievementsCardProps {
  currentStreak: number;
  bestStreak: number;
  perfectDayCount: number;
  todayDone: number;
  todayTotal: number;
  totalCompleted: number;
  totalGoals: number;
  mandatoryDone: number;
  mandatoryTotal: number;
}

export function AchievementsCard({
  currentStreak,
  bestStreak,
  perfectDayCount,
  todayDone,
  todayTotal,
  totalCompleted,
  totalGoals,
  mandatoryDone,
  mandatoryTotal,
}: AchievementsCardProps) {
  const todayPct = todayTotal > 0 ? Math.round((todayDone / todayTotal) * 100) : 0;

  return (
    <PaperTiltCard className="flex-1">
      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#FFD64D]/30 bg-[#FFD64D]/15 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-[#FFD64D]">
        <Trophy size={11} strokeWidth={1.75} /> goal achievements
      </span>

      <div className="grid grid-cols-2 gap-4">
        <Stat icon={CheckCircle2} label="today" value={`${todayDone}/${todayTotal}`} sub={`${todayPct}% complete`} />
        <Stat icon={Flame} label="perfect streak" value={`${currentStreak}d`} sub={`best: ${bestStreak}d`} />
        <Stat icon={Trophy} label="perfect days" value={`${perfectDayCount}`} sub="all goals done" />
        <Stat
          icon={CheckCircle2}
          label="all-time"
          value={`${totalCompleted}/${totalGoals}`}
          sub={mandatoryTotal > 0 ? `mandatory: ${mandatoryDone}/${mandatoryTotal}` : "goals completed"}
        />
      </div>
    </PaperTiltCard>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3.5">
      <div className="mb-1.5 flex items-center gap-1.5 text-[9px] uppercase tracking-wide text-white/40">
        <Icon size={11} strokeWidth={1.75} />
        {label}
      </div>
      <div className="font-tabular text-[19px] font-semibold text-[#F6F4FF]">{value}</div>
      <div className="mt-0.5 text-[10px] text-white/35">{sub}</div>
    </div>
  );
}
