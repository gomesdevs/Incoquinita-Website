"use client";

import { useSyncExternalStore, useCallback } from "react";
import { SiteIntro } from "./SiteIntro";

const STORAGE_KEY = "intro-seen";
const EVENT_NAME = "intro-seen";

// Snapshots: identical on server and client → no hydration mismatch
function getServerSnapshot() {
  return "content" as const;
}

function getBrowserSnapshot() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) return "content" as const;

  const seen = sessionStorage.getItem(STORAGE_KEY);
  return seen === "1" ? ("content" as const) : ("intro" as const);
}

// Subscribe to custom event fired when intro is dismissed
function subscribeToPhase(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}

interface HomeExperienceProps {
  children: React.ReactNode;
}

export function HomeExperience({ children }: HomeExperienceProps) {
  const phase = useSyncExternalStore(
    subscribeToPhase,
    getBrowserSnapshot,
    getServerSnapshot
  );

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    window.dispatchEvent(new Event(EVENT_NAME));
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
