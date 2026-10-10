"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SubjectCard } from "./SubjectCard";
import { CUSTOM_ACCENTS, CustomSubjectCard } from "./CustomSubjectCard";
import { useCustomSubjects } from "@/lib/customSubjects";
import { useSidebar } from "@/lib/SidebarContext";
import { SUBJECT_ACCENT, SUBJECT_NAME, ACCENT_HEX } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { useTheme } from "@/lib/ThemeContext";
import { Atom, BookOpen, FlaskConical, Leaf, Plus } from "lucide-react";

const SOFT_ICON = { phy: Atom, chem: FlaskConical, bio: Leaf } as const;

const SUBJECTS: Subject[] = ["phy", "chem", "bio"];

interface Tab {
  id: string;
  label: string;
  accentHex: string;
  Icon: typeof Atom;
}

export function PlannerSection() {
  const [active, setActive] = useState<string>("phy");
  const { theme } = useTheme();
  const { subjects: customSubjects } = useCustomSubjects();
  const { openSettings } = useSidebar();

  const tabs: Tab[] = [
    ...SUBJECTS.map((s) => ({ id: s, label: SUBJECT_NAME[s], accentHex: ACCENT_HEX[SUBJECT_ACCENT[s]], Icon: SOFT_ICON[s] })),
    ...customSubjects.map((c, i) => ({ id: c.id, label: c.name, accentHex: ACCENT_HEX[CUSTOM_ACCENTS[i % CUSTOM_ACCENTS.length]], Icon: BookOpen })),
  ];
  // a deleted custom subject can't stay selected
  const current = tabs.some((t) => t.id === active) ? active : "phy";
  const customIndex = customSubjects.findIndex((c) => c.id === current);

  const body = (
    <motion.div
      key={current}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {customIndex >= 0 ? (
        <CustomSubjectCard subject={customSubjects[customIndex]} accent={CUSTOM_ACCENTS[customIndex % CUSTOM_ACCENTS.length]} />
      ) : (
        <SubjectCard subject={current as Subject} />
      )}
    </motion.div>
  );

  if (theme === "light") {
    return (
      <div className="space-y-6">
        <div className="sf-tabs-bar">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Subject">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={current === t.id}
                onClick={() => setActive(t.id)}
                className={`sf-tab ${current === t.id ? "is-on" : ""}`}
              >
                <t.Icon size={18} strokeWidth={1.9} />
                <span className="max-w-[180px] truncate">{t.label}</span>
              </button>
            ))}
            <button type="button" className="sf-tab" onClick={openSettings} aria-label="Add a subject in Settings" title="Add a subject">
              <Plus size={18} strokeWidth={2.2} />
              Add subject
            </button>
          </div>
        </div>
        {body}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-20 -mx-4 -mt-6 border-b border-white/[0.06] bg-black/30 px-4 pb-4 pt-6 backdrop-blur-lg sm:-mx-6 sm:-mt-10 sm:px-6 sm:pt-10 md:-mx-12 md:-mt-[48px] md:px-12 md:pt-[48px]">
        <div className="flex flex-wrap gap-2.5">
          {tabs.map((t) => {
            const isActive = current === t.id;
            return (
              <button key={t.id} onClick={() => setActive(t.id)} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="planner-tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: `${t.accentHex}1a`, border: `1px solid ${t.accentHex}55` }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span
                  className="relative z-10 block max-w-[200px] truncate rounded-full px-5 py-2 text-sm font-medium transition-colors"
                  style={{ color: isActive ? t.accentHex : "#a3a3a3" }}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
          <button
            onClick={openSettings}
            aria-label="Add a subject in Settings"
            title="Add a subject"
            className="flex items-center gap-1.5 rounded-full border border-dashed border-white/15 px-4 py-2 text-sm text-white/45 transition-colors hover:border-white/30 hover:text-white/75"
          >
            <Plus size={14} strokeWidth={2.2} />
            Add subject
          </button>
        </div>
      </div>
      {body}
    </div>
  );
}
