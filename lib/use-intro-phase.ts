"use client";

import { useSyncExternalStore } from "react";
import { getIntroPhase, subscribeToIntroPhase, type IntroPhase } from "@/lib/intro";

function getServerSnapshot(): IntroPhase {
  return "content";
}

export function useIntroPhase(): IntroPhase {
  return useSyncExternalStore(
    subscribeToIntroPhase,
    getIntroPhase,
    getServerSnapshot
  );
}
