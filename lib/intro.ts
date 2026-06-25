export const INTRO_PHASE_EVENT = "intro-phase-change";
export const INTRO_SEEN_EVENT = "intro-seen";
export const INTRO_COMPLETE_EVENT = "intro-complete";

export type IntroPhase = "intro" | "content";

const STORAGE_KEY = "intro-seen";

let initialized = false;
let currentPhase: IntroPhase = "content";
const subscribers = new Set<() => void>();

function notify() {
  for (const cb of subscribers) cb();
}

function readPhaseFromStorage(): IntroPhase {
  if (typeof window === "undefined") return "content";
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return "content";
  return sessionStorage.getItem(STORAGE_KEY) === "1" ? "content" : "intro";
}

function setPhase(phase: IntroPhase) {
  if (typeof window === "undefined") return;
  if (currentPhase === phase) return;
  currentPhase = phase;
  window.dispatchEvent(
    new CustomEvent(INTRO_PHASE_EVENT, { detail: { phase } })
  );
  if (phase === "content") {
    window.dispatchEvent(new Event(INTRO_SEEN_EVENT));
  }
  notify();
}

export function getIntroPhase(): IntroPhase {
  if (!initialized && typeof window !== "undefined") {
    currentPhase = readPhaseFromStorage();
    initialized = true;
  }
  return currentPhase;
}

export function setIntroPhase(phase: IntroPhase) {
  setPhase(phase);
}

export function dispatchIntroComplete() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
  setPhase("content");
}

export function subscribeToIntroPhase(callback: () => void): () => void {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}
