"use client";

import { useState, useCallback } from "react";

const STORAGE_KEY = "intro-seen";

function getInitialState() {
  if (typeof window === "undefined") {
    return { introSeen: true, isReducedMotion: false };
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    return { introSeen: true, isReducedMotion: true };
  }

  const seen = sessionStorage.getItem(STORAGE_KEY);
  return { introSeen: seen === "1", isReducedMotion: false };
}

export function useIntroSeen() {
  const [state, setState] = useState(getInitialState);

  const markIntroSeen = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setState((prev) => ({ ...prev, introSeen: true }));
  }, []);

  return { introSeen: state.introSeen, isReducedMotion: state.isReducedMotion, markIntroSeen };
}
