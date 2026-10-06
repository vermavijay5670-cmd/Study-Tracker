/**
 * "Time's up" alarm for the focus timer: a synthesized bell (no audio files) that rings a
 * few times, with a sound on/off preference. One shared instance for the whole app so the
 * alarm can ring on any page, not only while the Timer card is on screen.
 *
 * Browsers only allow sound after the user has interacted with the page, so the audio
 * engine is unlocked on the first click/tap/key press (and when the timer is started).
 */

const SOUND_KEY = "st_timer_sound";
const PHRASES = 5; // how many "ding-dong" repeats
const PHRASE_GAP_S = 2.4;
const TOTAL_MS = PHRASES * PHRASE_GAP_S * 1000 + 1500;

type Listener = () => void;
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((l) => l());

let ctx: AudioContext | null = null;
let seqMaster: GainNode | null = null;
let stopTimer: ReturnType<typeof setTimeout> | null = null;
let ringing = false;
let blocked = false; // ringing, but the browser hasn't allowed sound yet
let soundOn = true;
let soundLoaded = false;

function loadSound() {
  if (soundLoaded || typeof window === "undefined") return;
  soundLoaded = true;
  try {
    soundOn = window.localStorage.getItem(SOUND_KEY) !== "0";
  } catch {
    /* default on */
  }
}

export function subscribeAlarm(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}
export const getRinging = () => ringing;
export const getBlocked = () => blocked;
export function getSoundEnabled() {
  loadSound();
  return soundOn;
}
export function setSoundEnabled(on: boolean) {
  loadSound();
  soundOn = on;
  try {
    window.localStorage.setItem(SOUND_KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
  emit();
}

function getCtx(): AudioContext | null {
  if (ctx) return ctx;
  try {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
  } catch {
    ctx = null;
  }
  return ctx;
}

// bell partials: [frequency ratio, relative loudness, decay seconds]
const PARTIALS: [number, number, number][] = [
  [0.5, 0.35, 3.0],
  [1, 1, 2.6],
  [1.19, 0.45, 1.9],
  [1.56, 0.4, 1.5],
  [2, 0.55, 1.1],
  [2.74, 0.3, 0.7],
  [4.07, 0.18, 0.45],
];

function strike(c: AudioContext, dest: AudioNode, when: number, freq: number, level: number) {
  PARTIALS.forEach(([ratio, amp, decay]) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = "sine";
    osc.frequency.value = freq * ratio;
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, level * amp), when + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + decay);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(when);
    osc.stop(when + decay + 0.05);
  });
}

function makeMaster(c: AudioContext): GainNode {
  const master = c.createGain();
  master.gain.value = 0.55;
  const comp = c.createDynamicsCompressor();
  master.connect(comp);
  comp.connect(c.destination);
  return master;
}

function startSequence(c: AudioContext) {
  if (seqMaster) return;
  seqMaster = makeMaster(c);
  const t0 = c.currentTime + 0.05;
  for (let i = 0; i < PHRASES; i++) {
    const t = t0 + i * PHRASE_GAP_S;
    strike(c, seqMaster, t, 988, 0.2); // ding
    strike(c, seqMaster, t + 0.55, 784, 0.2); // dong
  }
  blocked = false;
  emit();
}

/** Make sure sound is allowed (call from clicks / key presses / Start). Safe to call often. */
export function unlockAudio() {
  const c = getCtx();
  if (!c) return;
  if (c.state === "suspended") {
    c.resume()
      .then(() => {
        if (ringing && blocked && getSoundEnabled()) startSequence(c);
      })
      .catch(() => {});
  } else if (ringing && blocked && getSoundEnabled()) {
    startSequence(c);
  }
}

/** Ring the alarm (a few ding-dong phrases). Does nothing if it is already ringing. */
export function ringAlarm() {
  if (ringing) return;
  loadSound();
  ringing = true;
  blocked = false;
  emit();
  if (soundOn) {
    const c = getCtx();
    if (c) {
      if (c.state === "running") startSequence(c);
      else {
        blocked = true;
        emit();
        c.resume()
          .then(() => {
            if (ringing && c.state === "running") startSequence(c);
          })
          .catch(() => {});
      }
    }
  }
  if (stopTimer) clearTimeout(stopTimer);
  stopTimer = setTimeout(stopAlarm, TOTAL_MS);
}

export function stopAlarm() {
  if (stopTimer) {
    clearTimeout(stopTimer);
    stopTimer = null;
  }
  const m = seqMaster;
  seqMaster = null;
  if (m && ctx) {
    try {
      m.gain.cancelScheduledValues(ctx.currentTime);
      m.gain.setTargetAtTime(0, ctx.currentTime, 0.03);
      setTimeout(() => m.disconnect(), 250);
    } catch {
      /* ignore */
    }
  }
  if (ringing || blocked) {
    ringing = false;
    blocked = false;
    emit();
  }
}

/** One ding-dong so the user can hear what the alarm sounds like. */
export function playPreview() {
  const c = getCtx();
  if (!c) return;
  const go = () => {
    const m = makeMaster(c);
    const t = c.currentTime + 0.03;
    strike(c, m, t, 988, 0.2);
    strike(c, m, t + 0.55, 784, 0.2);
    setTimeout(() => m.disconnect(), 4000);
  };
  if (c.state === "suspended") c.resume().then(go).catch(() => {});
  else go();
}
