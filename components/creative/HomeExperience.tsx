"use client";

import { useSyncExternalStore, useCallback } from "react";
import { SiteIntro } from "./SiteIntro";
import {
  dispatchIntroComplete,
  getIntroPhase,
  setIntroPhase,
  subscribeToIntroPhase,
  type IntroPhase,
} from "@/lib/intro";

const STORAGE_KEY = "intro-seen";

function getServerSnapshot(): IntroPhase {
  return "content";
}

function getInitialSnapshot(): IntroPhase {
  if (typeof window === "undefined") return "content";

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) return "content";

  const seen = sessionStorage.getItem(STORAGE_KEY);
  return seen === "1" ? "content" : "intro";
}

interface HomeExperienceProps {
  children: React.ReactNode;
}

export function HomeExperience({ children }: HomeExperienceProps) {
  // Initial render: check storage (server returns "content" for hydration safety)
  const initialPhase = useSyncExternalStore(
    subscribeToIntroPhase,
    getInitialSnapshot,
    getServerSnapshot
  );

  // Live phase from shared store (DOM attribute)
  const livePhase = useSyncExternalStore(
    subscribeToIntroPhase,
    getIntroPhase,
    getServerSnapshot
  );

  // Sync store with initial phase on first client render
  // This is a DOM write (not setState), safe in render
  if (typeof window !== "undefined" && livePhase !== initialPhase) {
    setIntroPhase(initialPhase);
  }

  const phase = initialPhase;

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    dispatchIntroComplete();
  }, []);

  return (
    <>
      {phase === "intro" && (
        <SiteIntro onComplete={handleIntroComplete} />
      )}
      <div
        className={`transition-opacity duration-700 ${
          phase === "intro" ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
