"use client";

import { useRef, useEffect, Children } from "react";

interface StackingCardsProps {
  children: React.ReactNode;
}

export function StackingCards({ children }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardCount = Children.count(children);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = Array.from(
      el.querySelectorAll<HTMLElement>("[data-stack-card]")
    );
    if (cards.length < 2) return;

    const totalScroll = el.offsetHeight - window.innerHeight;
    const steps = cards.length - 1;

    function onScroll() {
      const el2 = containerRef.current;
      if (!el2) return;
      const rect = el2.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScroll);

      const exactIndex = progress * steps;
      const currentCard = Math.floor(exactIndex);
      const frac = exactIndex - currentCard;

      for (let i = 0; i < cards.length; i++) {
        let opacity: number;
        let scale: number;

        if (i < currentCard) {
          opacity = 0.3;
          scale = 0.95;
        } else if (i === currentCard) {
          opacity = 1 - frac * 0.7;
          scale = 1 - frac * 0.05;
        } else if (i === currentCard + 1) {
          opacity = frac;
          scale = 0.95 + frac * 0.05;
        } else {
          opacity = 0;
          scale = 0.95;
        }

        cards[i].style.opacity = String(opacity);
        cards[i].style.transform = `scale(${scale})`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${cardCount * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
