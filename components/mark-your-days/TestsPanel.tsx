"use client";

import { useState } from "react";
import { Check, ChevronDown, ClipboardList, Plus, X } from "lucide-react";
import { syllabusStats, testsOn } from "@/lib/tests";
import type { TestEvent } from "@/lib/types";

interface TestsPanelProps {
  /** Class prefix: "sf" for the light theme, "nm" for the dark one. */
  px: "sf" | "nm";
  date: string;
  tests: TestEvent[];
  onAddTest: (date: string, title: string) => string | null;
  onDeleteTest: (id: string) => void;
  onAddItems: (id: string, raw: string) => string | null;
  onToggleItem: (id: string, itemId: number) => void;
  onDeleteItem: (id: string, itemId: number) => void;
}

function TestCard({ px, test, onDeleteTest, onAddItems, onToggleItem, onDeleteItem }: Omit<TestsPanelProps, "date" | "tests" | "onAddTest"> & { test: TestEvent }) {
  const [open, setOpen] = useState(test.syllabus.length === 0);
  const [draft, setDraft] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const { done, total } = syllabusStats(test);

  function submit(raw: string) {
    if (!raw.trim()) return;
    const e = onAddItems(test.id, raw);
    if (e) setErr(e);
    else {
      setErr(null);
      setDraft("");
    }
  }

  return (
    <div className={`${px}-tcard`}>
      <div className={`${px}-tcard__head`}>
        <button type="button" className={`${px}-tcard__toggle`} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <ChevronDown size={15} strokeWidth={2.2} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", flex: "none" }} />
          <span className={`${px}-tcard__title`}>{test.title}</span>
          <span className={`${px}-tprog`}>{total > 0 ? `${done}/${total}` : "no syllabus"}</span>
        </button>
        {confirm ? (
          <>
            <button type="button" className={`${px}-xbtn ${px}-xbtn--on`} aria-label={`Confirm delete ${test.title}`} onClick={() => onDeleteTest(test.id)}>
              <Check size={13} strokeWidth={2.6} />
            </button>
            <button type="button" className={`${px}-xbtn`} aria-label="Keep test" onClick={() => setConfirm(false)}>
              <X size={13} strokeWidth={2.4} />
            </button>
          </>
        ) : (
          <button type="button" className={`${px}-xbtn`} aria-label={`Delete test ${test.title}`} title="Delete test" onClick={() => setConfirm(true)}>
            <X size={13} strokeWidth={2.4} />
          </button>
        )}
      </div>
      {confirm && <p className={`${px}-suberr`}>Delete this test and its syllabus?</p>}

      {open && (
        <div className={`${px}-tbody`}>
          {test.syllabus.length === 0 && <p className={`${px}-subempty`}>No syllabus yet — add the topics you need to cover.</p>}
          {test.syllabus.map((it) => (
            <div key={it.id} className={`${px}-subrow`}>
              <button type="button" aria-pressed={it.done} onClick={() => onToggleItem(test.id, it.id)} className={`${px}-sub-item ${it.done ? "is-done" : ""}`}>
                <span className={`${px}-sub-box`}>{it.done && <Check size={11} strokeWidth={3.2} />}</span>
                <span className={`${px}-sub-txt`}>{it.text}</span>
              </button>
              <button type="button" className={`${px}-xbtn`} aria-label={`Delete topic ${it.text}`} title="Delete topic" onClick={() => onDeleteItem(test.id, it.id)}>
                <X size={13} strokeWidth={2.4} />
              </button>
            </div>
          ))}
          <div className={`${px}-subadd`}>
            <input
              type="text"
              value={draft}
              placeholder="Add a topic — or paste a list"
              aria-label={`Add a syllabus topic to ${test.title}`}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit(draft);
                }
              }}
              onPaste={(e) => {
                const text = e.clipboardData.getData("text");
                if (/\r?\n/.test(text.trim())) {
                  e.preventDefault();
                  submit(text);
                }
              }}
            />
            <button type="button" onClick={() => submit(draft)} disabled={!draft.trim()}>
              <Plus size={14} strokeWidth={2.4} /> Add
            </button>
          </div>
          {err && (
            <p role="alert" className={`${px}-suberr`}>
              {err}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/** Tests scheduled on one date (shown in the day dialog): add a test, add its syllabus, tick topics off. */
export function TestsPanel({ px, date, tests, onAddTest, onDeleteTest, onAddItems, onToggleItem, onDeleteItem }: TestsPanelProps) {
  const [title, setTitle] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const onDay = testsOn(tests, date);

  function submit() {
    if (!title.trim()) return;
    const e = onAddTest(date, title);
    if (e) setErr(e);
    else {
      setErr(null);
      setTitle("");
    }
  }

  return (
    <div className={`${px}-tests`}>
      <label className={`${px}-tests__cap`}>
        <ClipboardList size={11} strokeWidth={1.75} /> test on this day
      </label>

      {onDay.map((t) => (
        <TestCard key={t.id} px={px} test={t} onDeleteTest={onDeleteTest} onAddItems={onAddItems} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} />
      ))}

      <div className={`${px}-subadd`}>
        <input
          type="text"
          value={title}
          maxLength={80}
          placeholder={onDay.length > 0 ? "Schedule another test…" : "Schedule a test, e.g. Physics unit test"}
          aria-label="Test name"
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button type="button" onClick={submit} disabled={!title.trim()}>
          <Plus size={14} strokeWidth={2.4} /> Add
        </button>
      </div>
      {err && (
        <p role="alert" className={`${px}-suberr`}>
          {err}
        </p>
      )}
    </div>
  );
}
