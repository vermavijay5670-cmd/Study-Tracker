"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight, Clock, FileText } from "lucide-react";
import { loadPapers, type TestSubject } from "@/lib/subject-tests";
import { getAttempt, type PastAttempt } from "@/lib/subject-tests/history";
import { validatePaper } from "@/lib/subject-tests/scoring";
import type { TestPaper } from "@/lib/subject-tests/types";
import { S, useSoft } from "@/lib/softClass";
import { BackBar } from "./ui";

export const paperKey = (subjectId: string, paperId: string) => `${subjectId}:${paperId}`;

export function PaperList({ subject, onBack, onOpen }: { subject: TestSubject; onBack: () => void; onOpen: (p: TestPaper) => void }) {
  const soft = useSoft();
  const accent = soft ? subject.accentLight : subject.accentDark;
  const [papers, setPapers] = useState<TestPaper[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [past, setPast] = useState<Record<string, PastAttempt | undefined>>({});

  useEffect(() => {
    let cancelled = false;
    loadPapers(subject.id)
      .then((list) => {
        if (cancelled) return;
        setPapers(list);
        const map: Record<string, PastAttempt | undefined> = {};
        list.forEach((p) => (map[p.id] = getAttempt(paperKey(subject.id, p.id))));
        setPast(map);
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [subject.id]);

  return (
    <div>
      <BackBar soft={soft} label={subject.name} sub="Choose a test paper" accent={accent} onBack={onBack} />

      {failed && <p className={S("text-[13px] text-white/60", soft)}>Couldn&apos;t load the test papers. Check the file names in lib/subject-tests/index.ts.</p>}
      {!papers && !failed && <p className={S("text-[13px] text-white/50", soft)}>Loading…</p>}
      {papers && papers.length === 0 && (
        <div className={`${soft ? "sf-card" : "nm-qpanel"} p-6 text-center`}>
          <p className={S("text-[14px] text-white/70", soft)}>No test papers added for {subject.name} yet.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {papers?.map((p, i) => {
          const errs = validatePaper(p);
          const last = past[p.id];
          const mins = p.durationMinutes ?? p.questions.length;
          return (
            <motion.button
              key={p.id}
              type="button"
              disabled={errs.length > 0}
              onClick={() => onOpen(p)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: i * 0.04 }}
              className={`${soft ? "sf-card sf-pickcard" : "nm-pickcard"} flex w-full items-center justify-between gap-4 text-left disabled:cursor-not-allowed disabled:opacity-70`}
              style={{ ["--nm-a" as string]: accent }}
            >
              <div className="min-w-0">
                <h3 className={S("text-[16px] font-medium text-white", soft)}>{p.title}</h3>
                {errs.length === 0 ? (
                  <div className={S("mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-white/60", soft)}>
                    <span className="inline-flex items-center gap-1">
                      <FileText size={13} /> {p.questions.length} questions
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} /> {mins} min
                    </span>
                    {last && (
                      <span style={{ color: accent }}>
                        Last: {last.score}/{last.max}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="mt-2 flex items-start gap-1.5 text-[12px] text-[#ff7a7a]">
                    <AlertTriangle size={13} className="mt-0.5 flex-none" />
                    <span>
                      Paper has errors: {errs.slice(0, 3).join("; ")}
                      {errs.length > 3 ? ` (+${errs.length - 3} more)` : ""}
                    </span>
                  </div>
                )}
              </div>
              <ChevronRight size={18} style={{ color: accent }} className="flex-none" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
