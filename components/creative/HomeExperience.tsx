"use client";

import { useSyncExternalStore, useCallback } from "react";
import { SiteIntro } from "./SiteIntro";
import {
  dispatchIntroComplete,
  getIntroPhase,
  subscribeToIntroPhase,
  type IntroPhase,
} from "@/lib/intro";

function getServerSnapshot(): IntroPhase {
  return "content";
}

interface HomeExperienceProps {
  children: React.ReactNode;
}

export function HomeExperience({ children }: HomeExperienceProps) {
  const phase = useSyncExternalStore(
    subscribeToIntroPhase,
    getIntroPhase,
    getServerSnapshot
  );

  const handleIntroComplete = useCallback(() => {
    sessionStorage.setItem("intro-seen", "1");
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
