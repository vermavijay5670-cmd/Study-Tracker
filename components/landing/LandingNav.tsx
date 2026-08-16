"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";

export function LandingNav() {
  return (
    <header className="mx-auto flex max-w-[1120px] items-center justify-between px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0D9488]/10">
          <Stethoscope size={16} strokeWidth={1.75} className="text-[#0D9488]" />
        </span>
        <span className="text-[15px] font-medium text-slate-900">Study Tracker</span>
      </div>

      <Link
        href="/today"
        className="rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-4 py-2 text-[13px] font-medium text-[#0F766E] transition-colors hover:bg-[#0D9488]/20"
      >
        Open App
      </Link>
    </header>
  );
}
