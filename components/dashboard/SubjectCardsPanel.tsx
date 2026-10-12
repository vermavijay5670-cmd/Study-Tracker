"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, GraduationCap } from "lucide-react";
import { SUBJECT_NAME } from "@/lib/data";
import type { Subject, SubjectStats } from "@/lib/types";
import { useTheme } from "@/lib/ThemeContext";
import { SoftCard, SoftLink } from "@/components/ui/soft/SoftUI";
import { NmCard, NmLink } from "@/components/today/nm/NmUI";

interface SubjectCardsPanelProps {
  perSubject: (SubjectStats & { subject: Subject })[];
}

export function SubjectCardsPanel({ perSubject }: SubjectCardsPanelProps) {
  // default to whichever subject has the lowest completion — most useful "front card"
  const sortedByNeed = [...perSubject].sort((a, b) => a.done / a.total - b.done / b.total);
  const { theme } = useTheme();
  const [frontSubject, setFrontSubject] = useState<Subject>(sortedByNeed[0]?.subject ?? "phy");

  const front = perSubject.find((s) => s.subject === frontSubject) ?? perSubject[0];
  const others = perSubject.filter((s) => s.subject !== frontSubject);
  const pct = front.total > 0 ? Math.round((front.done / front.total) * 100) : 0;

  if (theme === "light") {
    return (
      <SoftCard>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="sf-title" style={{ fontSize: 22 }}>Subjects</h2>
          <Link href="/planner" className="sf-linkbtn">
            Open planner →
          </Link>
        </div>

        <div className="mb-4 flex gap-3">
          {others.map((s) => {
            const p = s.total > 0 ? Math.round((s.done / s.total) * 100) : 0;
            return (
              <button
                key={s.subject}
                type="button"
                onClick={() => setFrontSubject(s.subject)}
                className="sf-chip flex-1 !justify-between !rounded-2xl !px-4 !py-3 text-left"
              >
                <span>{SUBJECT_NAME[s.subject]}</span>
                <span className="font-tabular" style={{ color: "#5d8838" }}>
                  {p}%
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={front.subject}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="sf-index"
          >
            <div className="flex items-center justify-between pl-2">
              <span className="sf-cap flex items-center gap-1.5">
                <GraduationCap size={14} strokeWidth={1.9} style={{ color: "#5d8838" }} />
                {SUBJECT_NAME[front.subject]}
              </span>
              <span className="sf-cap" style={{ color: "#5d8838" }}>NEET</span>
            </div>

            <div className="mt-5 flex items-end justify-between pl-2">
              <div>
                <div className="sf-cap" style={{ fontSize: 10 }}>Chapters done</div>
                <div className="sf-bignum mt-1" style={{ fontSize: 34 }}>
                  {front.done}/{front.total}
                </div>
              </div>
              <span className="sf-trend is-up">{pct}%</span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-5 flex gap-3">
          <SoftLink href="/study-log" className="flex-1">
            <ArrowDownLeft size={15} strokeWidth={2} /> Log hours
          </SoftLink>
          <SoftLink href="/planner" tone="green" className="flex-1">
            <ArrowUpRight size={15} strokeWidth={2} /> Revise
          </SoftLink>
        </div>
      </SoftCard>
    );
  }

  return (
    <NmCard accent="blue">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="nm-title" style={{ fontSize: 22 }}>Subjects</h2>
        <Link href="/planner" className="nm-linkbtn">
          Open planner →
        </Link>
      </div>

      <div className="mb-4 flex gap-3">
        {others.map((s) => {
          const p = s.total > 0 ? Math.round((s.done / s.total) * 100) : 0;
          return (
            <button key={s.subject} type="button" onClick={() => setFrontSubject(s.subject)} className="nm-chipwide">
              <span>{SUBJECT_NAME[s.subject]}</span>
              <span className="font-tabular nm-cyan">{p}%</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={front.subject}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="nm-index nm-raised"
        >
          <div className="flex items-center justify-between pl-2">
            <span className="nm-cap flex items-center gap-1.5">
              <GraduationCap size={14} strokeWidth={1.9} className="nm-cyan" />
              {SUBJECT_NAME[front.subject]}
            </span>
            <span className="nm-cap nm-cyan">NEET</span>
          </div>

          <div className="mt-5 flex items-end justify-between pl-2">
            <div>
              <div className="nm-cap" style={{ fontSize: 10 }}>Chapters done</div>
              <div className="nm-bignum mt-1" style={{ fontSize: 34 }}>
                {front.done}/{front.total}
              </div>
            </div>
            <span className="nm-trend is-up">{pct}%</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex gap-3">
        <NmLink href="/study-log" className="flex-1">
          <ArrowDownLeft size={15} strokeWidth={2} /> Log hours
        </NmLink>
        <NmLink href="/planner" tone="cyan" className="flex-1">
          <ArrowUpRight size={15} strokeWidth={2} /> Revise
        </NmLink>
      </div>
    </NmCard>
  );
}
