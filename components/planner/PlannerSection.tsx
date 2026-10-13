"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SubjectCard } from "./SubjectCard";
import { CUSTOM_ACCENTS, CustomSubjectCard } from "./CustomSubjectCard";
import { useCustomSubjects } from "@/lib/customSubjects";
import { useSidebar } from "@/lib/SidebarContext";
import { SUBJECT_NAME } from "@/lib/data";
import type { Subject } from "@/lib/types";
import { useTheme } from "@/lib/ThemeContext";
import { Atom, BookOpen, FlaskConical, Leaf, Plus } from "lucide-react";

const SOFT_ICON = { phy: Atom, chem: FlaskConical, bio: Leaf } as const;

const SUBJECTS: Subject[] = ["phy", "chem", "bio"];

interface Tab {
  id: string;
  label: string;
  Icon: typeof Atom;
}

export function PlannerSection() {
  const [active, setActive] = useState<string>("phy");
  const { theme } = useTheme();
  const { subjects: customSubjects } = useCustomSubjects();
  const { openSettings } = useSidebar();

  const tabs: Tab[] = [
    ...SUBJECTS.map((s) => ({ id: s, label: SUBJECT_NAME[s], Icon: SOFT_ICON[s] })),
    ...customSubjects.map((c) => ({ id: c.id, label: c.name, Icon: BookOpen })),
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
      <div className="nm-tabs-bar nm-acc-purple">
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Subject">
          {tabs.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={current === t.id} onClick={() => setActive(t.id)} className={`nm-tab ${current === t.id ? "is-on" : ""}`}>
              <t.Icon size={17} strokeWidth={1.9} />
              <span>{t.label}</span>
            </button>
          ))}
          <button type="button" className="nm-tab nm-tab--add" onClick={openSettings} aria-label="Add a subject in Settings" title="Add a subject">
            <Plus size={16} strokeWidth={2.2} />
            <span>Add subject</span>
          </button>
        </div>
      </div>
      {body}
    </div>
  );
}
