"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Check, ChevronDown, Pencil, Plus, Trash2, X } from "lucide-react";
import { CHAPTER_NAME_MAX, MAX_CHAPTERS, MAX_SUBJECTS, SUBJECT_NAME_MAX, useCustomSubjects } from "@/lib/customSubjects";
import type { CustomSubject } from "@/lib/types";

type Api = ReturnType<typeof useCustomSubjects>;

function ChapterLine({ subject, chapterId, index, count, name, api }: { subject: CustomSubject; chapterId: number; index: number; count: number; name: string; api: Api }) {
  const [draft, setDraft] = useState(name);
  const [confirm, setConfirm] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function save() {
    if (draft === name) return;
    const e = api.renameChapter(subject.id, chapterId, draft);
    if (e) {
      setErr(e);
      setDraft(name);
    } else setErr(null);
  }

  return (
    <div>
      <div className="sd-chap">
        <span className="sd-chap-num">{index + 1}</span>
        <input
          className="sd-input"
          value={draft}
          maxLength={CHAPTER_NAME_MAX}
          aria-label={`Chapter ${index + 1} name`}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") (e.target as HTMLInputElement).blur();
          }}
        />
        <button type="button" className="sd-mini" onClick={() => api.moveChapter(subject.id, chapterId, -1)} disabled={index === 0} aria-label="Move chapter up">
          <ArrowUp size={14} strokeWidth={2.2} />
        </button>
        <button type="button" className="sd-mini" onClick={() => api.moveChapter(subject.id, chapterId, 1)} disabled={index === count - 1} aria-label="Move chapter down">
          <ArrowDown size={14} strokeWidth={2.2} />
        </button>
        {confirm ? (
          <>
            <button type="button" className="sd-mini sd-mini--danger" onClick={() => api.deleteChapter(subject.id, chapterId)} aria-label="Confirm delete chapter" title="Delete chapter and its progress">
              <Check size={14} strokeWidth={2.6} />
            </button>
            <button type="button" className="sd-mini" onClick={() => setConfirm(false)} aria-label="Keep chapter">
              <X size={14} strokeWidth={2.4} />
            </button>
          </>
        ) : (
          <button type="button" className="sd-mini sd-mini--danger" onClick={() => setConfirm(true)} aria-label="Delete chapter">
            <Trash2 size={14} strokeWidth={2.2} />
          </button>
        )}
      </div>
      {confirm && <div className="sd-hint" style={{ marginLeft: 28 }}>Delete this chapter and its progress?</div>}
      {err && <div className="sd-note sd-note--err" role="alert" style={{ marginLeft: 28 }}>{err}</div>}
    </div>
  );
}

function SubjectItem({ subject, api }: { subject: CustomSubject; api: Api }) {
  const [open, setOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [nameDraft, setNameDraft] = useState(subject.name);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [chapterDraft, setChapterDraft] = useState("");
  const [err, setErr] = useState<string | null>(null);

  function saveName() {
    const e = api.renameSubject(subject.id, nameDraft);
    if (e) setErr(e);
    else {
      setErr(null);
      setRenaming(false);
    }
  }

  function addChapter() {
    const e = api.addChapters(subject.id, chapterDraft);
    if (e) setErr(e);
    else {
      setErr(null);
      setChapterDraft("");
    }
  }

  const n = subject.chapters.length;

  return (
    <div className="sd-subj">
      <div className="sd-subj-head">
        {renaming ? (
          <>
            <input
              className="sd-input"
              autoFocus
              value={nameDraft}
              maxLength={SUBJECT_NAME_MAX}
              aria-label="Subject name"
              onChange={(e) => setNameDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveName();
                if (e.key === "Escape") {
                  e.stopPropagation(); // cancel the rename only, keep Settings open
                  setRenaming(false);
                  setNameDraft(subject.name);
                  setErr(null);
                }
              }}
            />
            <button type="button" className="sd-mini" onClick={saveName} aria-label="Save name">
              <Check size={14} strokeWidth={2.6} />
            </button>
            <button
              type="button"
              className="sd-mini"
              onClick={() => {
                setRenaming(false);
                setNameDraft(subject.name);
                setErr(null);
              }}
              aria-label="Cancel rename"
            >
              <X size={14} strokeWidth={2.4} />
            </button>
          </>
        ) : (
          <>
            <button type="button" className="sd-subj-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <ChevronDown size={16} strokeWidth={2.2} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", flex: "none" }} />
              <span className="truncate">{subject.name}</span>
              <span className="sd-count">{n} {n === 1 ? "chapter" : "chapters"}</span>
            </button>
            <button type="button" className="sd-mini" onClick={() => { setRenaming(true); setOpen(true); }} aria-label={`Rename ${subject.name}`}>
              <Pencil size={14} strokeWidth={2.2} />
            </button>
            {confirmDelete ? (
              <>
                <button type="button" className="sd-mini sd-mini--danger" onClick={() => api.deleteSubject(subject.id)} aria-label={`Confirm delete ${subject.name}`}>
                  <Check size={14} strokeWidth={2.6} />
                </button>
                <button type="button" className="sd-mini" onClick={() => setConfirmDelete(false)} aria-label="Keep subject">
                  <X size={14} strokeWidth={2.4} />
                </button>
              </>
            ) : (
              <button type="button" className="sd-mini sd-mini--danger" onClick={() => setConfirmDelete(true)} aria-label={`Delete ${subject.name}`}>
                <Trash2 size={14} strokeWidth={2.2} />
              </button>
            )}
          </>
        )}
      </div>
      {confirmDelete && (
        <div className="sd-hint" style={{ padding: "0 14px 12px" }}>
          Delete <b>{subject.name}</b>, its {n} {n === 1 ? "chapter" : "chapters"} and all progress marked on them? This can&apos;t be undone.
        </div>
      )}
      {err && (
        <div className="sd-note sd-note--err" role="alert" style={{ margin: "0 12px 12px" }}>
          {err}
        </div>
      )}

      {open && (
        <div className="sd-subj-body">
          {n === 0 && <div className="sd-hint" style={{ marginTop: 10 }}>No chapters yet — add the first one below.</div>}
          {subject.chapters.map((ch, i) => (
            <ChapterLine key={ch.id} subject={subject} chapterId={ch.id} index={i} count={n} name={ch.name} api={api} />
          ))}

          <div className="sd-addrow" style={{ marginTop: 14 }}>
            <textarea
              className="sd-input"
              rows={2}
              value={chapterDraft}
              maxLength={CHAPTER_NAME_MAX * 40}
              placeholder="Chapter name — or paste a list, one chapter per line"
              aria-label={`Add chapters to ${subject.name}`}
              onChange={(e) => setChapterDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  addChapter();
                }
              }}
            />
            <button type="button" className="sd-btn sd-btn--primary" onClick={addChapter} disabled={n >= MAX_CHAPTERS}>
              <Plus size={15} strokeWidth={2.4} /> Add
            </button>
          </div>
          <div className="sd-hint" style={{ marginTop: 6 }}>Enter adds · Shift+Enter for a new line</div>
        </div>
      )}
    </div>
  );
}

/** Settings → Subjects: add your own subjects and their chapters; each gets a Planner tab with the same marks as the built-in subjects. */
export function SubjectsManager() {
  const api = useCustomSubjects();
  const [name, setName] = useState("");
  const [err, setErr] = useState<string | null>(null);

  function add() {
    const e = api.addSubject(name);
    if (e) setErr(e);
    else {
      setErr(null);
      setName("");
    }
  }

  return (
    <section className="sd-section" aria-label="Subjects">
      <div className="sd-label">Subjects</div>
      <div className="sd-hint" style={{ marginTop: -4, marginBottom: 12 }}>
        Physics, Chemistry and Biology are built in. Add your own subjects (Maths, History, Accountancy…) and their chapters — each gets its own tab in the
        Planner with the same Done, Revise, Difficulty, Practice and Note marks.
      </div>

      <div className="sd-addrow">
        <input
          className="sd-input"
          value={name}
          maxLength={SUBJECT_NAME_MAX}
          placeholder="New subject name"
          aria-label="New subject name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") add();
          }}
        />
        <button type="button" className="sd-btn sd-btn--primary" onClick={add} disabled={api.subjects.length >= MAX_SUBJECTS}>
          <Plus size={15} strokeWidth={2.4} /> Add subject
        </button>
      </div>
      {err && <div className="sd-note sd-note--err" role="alert">{err}</div>}

      {api.subjects.map((s) => (
        <SubjectItem key={s.id} subject={s} api={api} />
      ))}
    </section>
  );
}
