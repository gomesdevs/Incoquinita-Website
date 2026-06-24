"use client";

import { useState } from "react";
import { SiteIntro } from "./SiteIntro";
import { useIntroSeen } from "./useIntroSeen";

interface HomeExperienceProps {
  children: React.ReactNode;
}

export function HomeExperience({ children }: HomeExperienceProps) {
  const { introSeen, isReducedMotion, markIntroSeen } = useIntroSeen();
  const [introDismissed, setIntroDismissed] = useState(introSeen);

  const handleIntroComplete = () => {
    markIntroSeen();
    setIntroDismissed(true);
  };

  // Skip intro if reduced motion or already seen
  const showIntro = !introDismissed && !isReducedMotion;

  return (
    <>
      {showIntro && <SiteIntro onComplete={handleIntroComplete} />}
      <div
        className={`transition-opacity duration-700 ${
          introDismissed ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
