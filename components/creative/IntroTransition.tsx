"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Flip);
}

interface IntroTransitionProps {
  onComplete?: () => void;
}

export function IntroTransition({ onComplete }: IntroTransitionProps) {
  const hasRun = useRef(false);

  const runTransition = useCallback(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete?.();
      return;
    }

    const introMark = document.querySelector<HTMLElement>("[data-intro-mark]");
    const headerMark = document.querySelector<HTMLElement>("[data-logo-mark]");

    if (!introMark || !headerMark) {
      onComplete?.();
      return;
    }

    // Show header mark but keep it invisible until the FLIP
    headerMark.style.visibility = "visible";
    headerMark.style.opacity = "0";

    const state = Flip.getState(introMark);
    const headerRect = headerMark.getBoundingClientRect();
    const introRect = introMark.getBoundingClientRect();

    // Compute the delta to move the intro mark into the header position
    const deltaX = headerRect.left + headerRect.width / 2 - (introRect.left + introRect.width / 2);
    const deltaY = headerRect.top + headerRect.height / 2 - (introRect.top + introRect.height / 2);
    const scale = headerRect.width / introRect.width;

    gsap.set(introMark, {
      position: "fixed",
      left: introRect.left,
      top: introRect.top,
      x: 0,
      y: 0,
      transformOrigin: "center center",
    });

    gsap.timeline({
      onComplete: () => {
        introMark.style.visibility = "hidden";
        headerMark.style.opacity = "";
        headerMark.style.visibility = "";
        onComplete?.();
      },
    })
      .to(introMark, {
        x: deltaX,
        y: deltaY,
        scale,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0)
      .to(headerMark, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }, 0.4);

    // Silence the unused state var warning
    void state;
  }, [onComplete]);

  useEffect(() => {
    const onComplete = () => runTransition();
    window.addEventListener("intro-complete", onComplete);
    return () => window.removeEventListener("intro-complete", onComplete);
  }, [runTransition]);

  return null;
}
