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

    // Each card transition = 1 viewport height of scroll.
    const segmentVh = window.innerHeight;

    // Initial state: only the first card is visible
    cards.forEach((card, i) => {
      gsap.set(card, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 0.95,
      });
    });

    // Pin the container; total pin distance = (n-1) viewports
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(cards.length - 1) * segmentVh}`,
      pin: true,
      pinSpacing: true,
    });

    // For each transition (card N → card N+1):
    // fade out card N, fade in card N+1
    for (let i = 0; i < cards.length - 1; i++) {
      const outgoing = cards[i];
      const incoming = cards[i + 1];
      const startScroll = i * segmentVh;
      const endScroll = (i + 1) * segmentVh;

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: () => `top+=${startScroll} top`,
          end: () => `top+=${endScroll} top`,
          scrub: true,
        },
      })
        .to(outgoing, { opacity: 0, scale: 0.95, ease: "none" }, 0)
        .to(incoming, { opacity: 1, scale: 1, ease: "none" }, 0);
    }

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
