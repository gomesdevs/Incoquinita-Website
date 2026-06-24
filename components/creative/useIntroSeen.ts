"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "intro-seen";

export function useIntroSeen() {
  const [introSeen, setIntroSeen] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setIsReducedMotion(prefersReduced);

    if (prefersReduced) {
      setIntroSeen(true);
      return;
    }

    const seen = sessionStorage.getItem(STORAGE_KEY);
    setIntroSeen(seen === "1");
  }, []);

  const markIntroSeen = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setIntroSeen(true);
  }, []);

  return { introSeen, isReducedMotion, markIntroSeen };
}
