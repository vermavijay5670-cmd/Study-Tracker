"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Download, Moon, Sun, Upload, X } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { useKineticGrid } from "@/lib/KineticGridContext";
import {
  applyImportedState,
  buildExport,
  downloadJson,
  mergeStates,
  parseImport,
  readLocalState,
  summarize,
  type ImportMode,
  type ImportSummary,
} from "@/lib/dataTransfer";
import { todayKey } from "@/lib/date-utils";
import type { TrackerState } from "@/lib/types";
import "./settings.css";

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

interface Pending {
  fileName: string;
  state: TrackerState;
  summary: ImportSummary;
}

export function SettingsDialog({ open, onClose, kineticAvailable }: { open: boolean; onClose: () => void; kineticAvailable: boolean }) {
  const { theme, setTheme } = useTheme();
  const { enabled: kineticOn, setEnabled: setKineticOn } = useKineticGrid();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<Element | null>(null);

  const [mounted, setMounted] = useState(false);
  const [exportMsg, setExportMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<Pending | null>(null);
  const [mode, setMode] = useState<ImportMode>("merge");
  const [backupFirst, setBackupFirst] = useState(true);
  const [busy, setBusy] = useState(false);

  useEffect(() => setMounted(true), []);

  // reset transient state each time the dialog opens
  useEffect(() => {
    if (!open) return;
    setExportMsg(null);
    setError(null);
    setPending(null);
    setMode("merge");
    setBackupFirst(true);
    setBusy(false);
    returnFocus.current = document.activeElement;
    const t = setTimeout(() => closeRef.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      (returnFocus.current as HTMLElement | null)?.focus?.();
    };
  }, [open]);

  // Escape closes the dialog even before focus has moved into it
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      // only genuinely tabbable controls (the hidden file input has tabindex -1)
      const f = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), [href], [tabindex]:not([tabindex="-1"])')
      ).filter((el) => el.tabIndex >= 0 && el.getClientRects().length > 0);
      if (f.length === 0) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  function handleExport() {
    setError(null);
    try {
      const state = readLocalState();
      downloadJson(buildExport(state));
      const s = summarize(state);
      setExportMsg(`Backup downloaded — ${plural(s.studyDays, "study day")}, ${s.totalHours}h logged.`);
    } catch {
      setError("Couldn't create the backup. Please try again.");
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow choosing the same file again
    if (!file) return;
    setError(null);
    setExportMsg(null);
    setPending(null);
    try {
      const text = await file.text();
      const { state, summary } = parseImport(text, file.size);
      setPending({ fileName: file.name, state, summary });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't read that file.");
    }
  }

  function handleImport() {
    if (!pending) return;
    setBusy(true);
    try {
      const current = readLocalState();
      if (backupFirst) downloadJson(buildExport(current), `neet-study-tracker-before-import-${todayKey()}.json`);
      const next = mode === "replace" ? pending.state : mergeStates(current, pending.state).state;
      applyImportedState(next);
    } catch {
      setBusy(false);
      setError("Import failed. Your current data was not changed.");
    }
  }

  if (!mounted || !open) return null;

  const s = pending?.summary;
  return createPortal(
    <div className="sd-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()} onKeyDown={onKeyDown}>
      <div ref={panelRef} className="sd-panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="sd-head">
          <h2 id={titleId} className="sd-title">
            Settings
          </h2>
          <button ref={closeRef} type="button" className="sd-iconbtn" onClick={onClose} aria-label="Close settings">
            <X size={17} strokeWidth={2} />
          </button>
        </div>

        <div className="sd-body">
          <section className="sd-section" aria-label="Appearance">
            <div className="sd-label">Appearance</div>
            <div className="sd-row">
              <div>
                <div className="sd-name">Theme</div>
                <div className="sd-hint">Light or dark mode.</div>
              </div>
              <div className="sd-seg" role="radiogroup" aria-label="Theme">
                <button type="button" role="radio" aria-checked={theme === "light"} onClick={() => setTheme("light")}>
                  <Sun size={14} strokeWidth={2} /> Light
                </button>
                <button type="button" role="radio" aria-checked={theme === "dark"} onClick={() => setTheme("dark")}>
                  <Moon size={14} strokeWidth={2} /> Dark
                </button>
              </div>
            </div>
            <div className="sd-row">
              <div>
                <div className="sd-name">Kinetic grid background</div>
                <div className="sd-hint">
                  {kineticAvailable
                    ? "The animated grid behind dark-mode pages."
                    : "Applies to dark mode pages (not Today). Not visible on this page right now, but your choice is saved."}
                </div>
              </div>
              <button
                type="button"
                role="switch"
                className="sd-switch"
                aria-checked={kineticOn}
                aria-label="Kinetic grid background"
                onClick={() => setKineticOn(!kineticOn)}
              />
            </div>
          </section>

          <section className="sd-section" aria-label="Data">
            <div className="sd-label">Your data</div>
            <div className="sd-hint" style={{ marginTop: -4, marginBottom: 12 }}>
              Everything you track is saved on this device and synced to your account when you&apos;re signed in. A backup file lets you keep
              a copy yourself or move your data to another device.
            </div>

            <div className="sd-actions">
              <button type="button" className="sd-btn sd-btn--primary" onClick={handleExport}>
                <Download size={16} strokeWidth={2.2} /> Export data
              </button>
              <button type="button" className="sd-btn" onClick={() => fileRef.current?.click()}>
                <Upload size={16} strokeWidth={2.2} /> Import data
              </button>
              <input ref={fileRef} type="file" accept=".json,application/json" className="sr-only" tabIndex={-1} onChange={handleFile} aria-label="Choose a backup file" />
            </div>

            {exportMsg && <div className="sd-note sd-note--ok" role="status">{exportMsg}</div>}
            {error && <div className="sd-note sd-note--err" role="alert">{error}</div>}

            {pending && s && (
              <div className="sd-preview">
                <div style={{ fontSize: 13 }}>
                  <b>{pending.fileName}</b>
                  {s.exportedAt && <span style={{ color: "#8d8d95" }}> · exported {new Date(s.exportedAt).toLocaleDateString()}</span>}
                </div>
                <ul>
                  <li>{plural(s.studyDays, "study day")}</li>
                  <li>{s.totalHours}h logged</li>
                  <li>{plural(s.chaptersTracked, "chapter")} tracked</li>
                  <li>{plural(s.goalDays, "day")} with goals</li>
                  <li>{plural(s.markedDays, "marked day")}</li>
                  <li>{plural(s.notes, "day note")}</li>
                </ul>

                <label className="sd-radio" data-on={mode === "merge"}>
                  <input type="radio" name="import-mode" checked={mode === "merge"} onChange={() => setMode("merge")} />
                  <span>
                    <span className="sd-name">Merge</span>
                    <span className="sd-hint" style={{ display: "block" }}>Keep my current data and only add what&apos;s in the file that I don&apos;t have yet.</span>
                  </span>
                </label>
                <label className="sd-radio" data-on={mode === "replace"}>
                  <input type="radio" name="import-mode" checked={mode === "replace"} onChange={() => setMode("replace")} />
                  <span>
                    <span className="sd-name">Replace everything</span>
                    <span className="sd-hint" style={{ display: "block" }}>
                      Overwrite all my data with the file — on this device and, once synced, on my account.
                    </span>
                  </span>
                </label>

                <label className="sd-check">
                  <input type="checkbox" checked={backupFirst} onChange={(e) => setBackupFirst(e.target.checked)} />
                  Download a backup of my current data first
                </label>

                <div className="sd-actions" style={{ marginTop: 16 }}>
                  <button type="button" className={`sd-btn ${mode === "replace" ? "sd-btn--danger" : "sd-btn--primary"}`} onClick={handleImport} disabled={busy}>
                    {busy ? "Importing…" : mode === "replace" ? "Replace my data" : "Merge into my data"}
                  </button>
                  <button type="button" className="sd-btn" onClick={() => setPending(null)} disabled={busy}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
}
