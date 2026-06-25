"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StackingCardsProps {
  children: React.ReactNode;
}

export function StackingCards({ children }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-stack-card]")
    );
    if (cards.length < 2) return;

    // Pin the container, stack cards on top of each other
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${cards.length * 100}%`,
      pin: true,
    });

    // Animate each card: scale down + fade as next card comes in
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return; // last card stays
      gsap.to(card, {
        scale: 0.92,
        opacity: 0.4,
        scrollTrigger: {
          trigger: container,
          start: () => `top+=${i * 100}% top`,
          end: () => `top+=${(i + 1) * 100}% top`,
          scrub: true,
        },
      });
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full">
      {children}
    </div>
  );
}
