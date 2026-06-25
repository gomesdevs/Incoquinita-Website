export const INTRO_PHASE_EVENT = "intro-phase-change";
export const INTRO_SEEN_EVENT = "intro-seen";
export const INTRO_COMPLETE_EVENT = "intro-complete";

export type IntroPhase = "intro" | "content";

function getPhase(): IntroPhase {
  if (typeof document === "undefined") return "content";
  return document.documentElement.dataset.introPhase === "intro" ? "intro" : "content";
}

function setPhase(phase: IntroPhase) {
  if (typeof document === "undefined") return;
  if (document.documentElement.dataset.introPhase === phase) return;
  document.documentElement.dataset.introPhase = phase;
  window.dispatchEvent(
    new CustomEvent(INTRO_PHASE_EVENT, { detail: { phase } })
  );
}

export function setIntroPhase(phase: IntroPhase) {
  setPhase(phase);
}

export function dispatchIntroComplete() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
  window.dispatchEvent(new Event(INTRO_SEEN_EVENT));
  setPhase("content");
}

export function getIntroPhase(): IntroPhase {
  return getPhase();
}

export function subscribeToIntroPhase(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(INTRO_PHASE_EVENT, callback);
  return () => window.removeEventListener(INTRO_PHASE_EVENT, callback);
}
