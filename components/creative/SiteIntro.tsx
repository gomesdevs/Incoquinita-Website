"use client";

import { useState, useEffect, useCallback } from "react";
import { QuestionMarkFallback } from "./QuestionMarkFallback";

type IntroState = "idle" | "animating" | "awaiting-input" | "exiting" | "done";

interface SiteIntroProps {
  onComplete: () => void;
}

export function SiteIntro({ onComplete }: SiteIntroProps) {
  const [state, setState] = useState<IntroState>("idle");

  const dismiss = useCallback(() => {
    if (state === "exiting" || state === "done") return;
    setState("exiting");
    setTimeout(() => {
      setState("done");
      onComplete();
    }, 800);
  }, [state, onComplete]);

  // Keyboard handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismiss();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
      }
    };

    if (state === "awaiting-input") {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [state, dismiss]);

  // Phase 1: idle → animating (after mount)
  useEffect(() => {
    const t1 = setTimeout(() => setState("animating"), 100);
    const t2 = setTimeout(() => setState("awaiting-input"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "done") return null;

  return (
    <div
      role="dialog"
      aria-label="Incoquinita intro"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0E0E0E] transition-opacity duration-800 ${
        state === "exiting" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ? Symbol — Phase 1: appears */}
      <div
        className={`transition-all duration-1000 ease-out ${
          state === "idle"
            ? "scale-90 opacity-0"
            : state === "exiting"
              ? "scale-110 opacity-0"
              : "scale-100 opacity-100"
        }`}
      >
        <QuestionMarkFallback
          size={120}
          animated={state === "animating" || state === "awaiting-input"}
          className="text-accent"
        />
      </div>

      {/* Name — Phase 2: appears after ? */}
      <div
        className={`mt-8 transition-all duration-700 ease-out delay-300 ${
          state === "animating" || state === "awaiting-input"
            ? "translate-y-0 opacity-100"
            : state === "exiting"
              ? "-translate-y-4 opacity-0"
              : "translate-y-4 opacity-0"
        }`}
      >
        <span className="font-display text-2xl font-normal text-[#F5F5F0]">
          Incoquinita
        </span>
      </div>

      {/* CTA — Phase 3: awaiting input */}
      <div
        className={`mt-12 transition-all duration-500 ease-out ${
          state === "awaiting-input"
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        <p className="text-center text-sm text-[#9C9C9C]">
          Pressione Enter ou clique para continuar
        </p>
      </div>

      {/* Skip button — always visible once awaiting */}
      <button
        onClick={dismiss}
        className={`absolute bottom-8 right-8 text-sm text-[#9C9C9C] transition-all duration-500 hover:text-[#F5F5F0] ${
          state === "awaiting-input" ? "opacity-100" : "opacity-0"
        }`}
      >
        Pular
      </button>

      {/* Click anywhere to dismiss */}
      {state === "awaiting-input" && (
        <button
          onClick={dismiss}
          className="absolute inset-0 cursor-pointer"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
