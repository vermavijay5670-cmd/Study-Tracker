"use client";

import { Atom, Beaker, FlaskConical, Flower2, PawPrint, TestTube2 } from "lucide-react";
import { motion } from "framer-motion";
import { TEST_SUBJECTS, testCount, type TestSubjectId } from "@/lib/subject-tests";
import { NmBadge } from "@/components/today/nm/NmUI";
import { S, useSoft } from "@/lib/softClass";
import "@/components/today/nm/nm.css";

const ICONS: Record<TestSubjectId, typeof Atom> = {
  physics: Atom,
  "physical-chemistry": Beaker,
  "inorganic-chemistry": FlaskConical,
  "organic-chemistry": TestTube2,
  botany: Flower2,
  zoology: PawPrint,
};

export function SubjectWiseTests() {
  const soft = useSoft();

  return (
    <div className={`relative min-h-[420px] ${soft ? "" : "nm-q"}`}>
      <header className="mb-6">
        <h1 className={S("text-[24px] font-semibold text-white", soft)}>Subject wise test</h1>
        <p className={S("mt-1 text-[13px] text-white/60", soft)}>Pick a subject to open its tests.</p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {TEST_SUBJECTS.map((subject, i) => {
          const Icon = ICONS[subject.id];
          const accent = soft ? subject.accentLight : subject.accentDark;
          const count = testCount(subject.id);

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`${subject.name} tests`}
                className={`${soft ? "sf-card sf-pickcard" : "nm-pickcard"} flex min-h-[168px] flex-col justify-between gap-5 outline-none`}
                style={{ ["--nm-a" as string]: accent }}
              >
                <div className="flex items-start gap-4">
                  {soft ? (
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl" style={{ background: `${accent}1a` }}>
                      <Icon size={22} strokeWidth={1.75} style={{ color: accent }} />
                    </span>
                  ) : (
                    <NmBadge>
                      <Icon size={19} strokeWidth={1.8} />
                    </NmBadge>
                  )}
                  <div className="min-w-0">
                    <h2 className={S("text-[17px] font-medium text-white", soft)}>{subject.name}</h2>
                    <p className={S("mt-1 text-[12.5px] leading-relaxed text-white/65", soft)}>{subject.blurb}</p>
                  </div>
                </div>

                <span
                  className="self-start rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wide"
                  style={{ background: `${accent}1f`, color: accent, border: `1px solid ${accent}55` }}
                >
                  {count === 0 ? "No tests yet" : `${count} ${count === 1 ? "test" : "tests"}`}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
