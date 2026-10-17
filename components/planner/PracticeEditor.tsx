"use client";

import { useState } from "react";
import { Check, ChevronDown, Plus, RotateCcw, X } from "lucide-react";
import type { PracticeTag } from "@/lib/types";

/** Everything a chapter row needs to show and edit its Practice dropdown. */
export interface PracticeApi {
  tags: PracticeTag[];
  isDone: (id: number) => boolean;
  onToggle: (id: number) => void;
  /** `all` = add to every chapter of the subject. Returns an error message to show, or null on success. */
  onAdd: (raw: string, all: boolean) => string | null;
  /** `all` = remove same-named tags from every chapter of the subject. */
  onRemove: (id: number, all: boolean) => void;
  /** Only given when this chapter's tags were customised. */
  onReset?: () => void;
  /** Subject name for the "all chapters" checkbox, e.g. "Physics". */
  scopeLabel: string;
}

type Px = "sf" | "nm";

/** The "Practice" chip on a chapter row. Its corner dot is red until every tag is done, then green; no dot when there are no tags. */
export function PracticeToggle({ px, api, open, onToggle }: { px: Px; api: PracticeApi; open: boolean; onToggle: () => void }) {
  const total = api.tags.length;
  const done = api.tags.filter((t) => api.isDone(t.id)).length;
  const complete = total > 0 && done === total;
  return (
    <button
      type="button"
      className={`${px}-chip ${px}-chip--badge`}
      aria-expanded={open}
      aria-label={total > 0 ? `Practice: ${done} of ${total} completed. ${open ? "Hide" : "Show"} the practice list` : `Practice: no tags yet. ${open ? "Hide" : "Show"} the practice list`}
      onClick={onToggle}
    >
      {total > 0 ? "Practice" : "+ Practice"}
      {total > 1 && <span style={{ opacity: 0.55 }}>{done}/{total}</span>}
      <ChevronDown size={13} strokeWidth={2.4} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
      {total > 0 && <span className={`${px}-pbadge`} data-ok={complete} aria-hidden />}
    </button>
  );
}

/** The Practice dropdown: tick tags off, add your own (here or on every chapter of the subject), remove any. */
export function PracticePanel({ px, api }: { px: Px; api: PracticeApi }) {
  const [draft, setDraft] = useState("");
  const [all, setAll] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function submit() {
    if (!draft.trim()) return;
    const e = api.onAdd(draft, all);
    if (e) setErr(e);
    else {
      setErr(null);
      setDraft("");
    }
  }

  return (
    <div className={`${px}-panel`}>
      {api.tags.length === 0 && <p className={`${px}-subempty`}>No practice tags yet — add one below (for example PYQs or Mock test).</p>}

      {api.tags.map((t) => {
        const done = api.isDone(t.id);
        return (
          <div key={t.id} className={`${px}-subrow`}>
            <button type="button" aria-pressed={done} onClick={() => api.onToggle(t.id)} className={`${px}-pitem ${done ? "is-done" : ""}`}>
              <span className={`${px}-pmark`}>{done ? <Check size={12} strokeWidth={3.4} /> : <i />}</span>
              <span>{t.name}</span>
              <span className={`${px}-pstat`}>{done ? "Completed" : "Not done"}</span>
            </button>
            <button
              type="button"
              className={`${px}-xbtn`}
              aria-label={`Remove tag ${t.name}${all ? ` from all ${api.scopeLabel} chapters` : ""}`}
              title={all ? `Remove from all ${api.scopeLabel} chapters` : "Remove tag"}
              onClick={() => api.onRemove(t.id, all)}
            >
              <X size={13} strokeWidth={2.4} />
            </button>
          </div>
        );
      })}

      <div className={`${px}-subadd`}>
        <input
          type="text"
          value={draft}
          maxLength={40}
          placeholder="Add a tag, e.g. PYQs"
          aria-label="New practice tag"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button type="button" onClick={submit} disabled={!draft.trim()}>
          <Plus size={14} strokeWidth={2.4} /> Add
        </button>
      </div>

      <label className={`${px}-allrow`}>
        <input type="checkbox" checked={all} onChange={(e) => setAll(e.target.checked)} />
        <span>Apply adding / removing to all {api.scopeLabel} chapters</span>
      </label>

      {err && (
        <p role="alert" className={`${px}-suberr`}>
          {err}
        </p>
      )}

      {api.onReset && (
        <button type="button" className={`${px}-subreset`} onClick={api.onReset}>
          <RotateCcw size={12} strokeWidth={2.2} /> Reset to the default tags
        </button>
      )}
    </div>
  );
}
