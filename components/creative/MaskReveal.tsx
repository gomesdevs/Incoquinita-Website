"use client";

import { useRef, useEffect } from "react";

interface MaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function MaskReveal({
  children,
  delay = 0,
  className = "",
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.clipPath = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.clipPath = "inset(0 0% 0 0)";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        transform: "translateY(8px)",
        transition:
          "clip-path 800ms cubic-bezier(0.65, 0, 0.35, 1), opacity 600ms ease-out, transform 600ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
