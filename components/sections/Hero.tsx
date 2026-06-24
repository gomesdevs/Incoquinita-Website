"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { QuestionMarkFallback } from "@/components/creative/QuestionMarkFallback";
import { SITE } from "@/lib/constants";

const QuestionMark3D = dynamic(
  () =>
    import("@/components/creative/QuestionMark3D").then((mod) => ({
      default: mod.QuestionMark3D,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <QuestionMarkFallback size={200} animated className="opacity-20" />
      </div>
    ),
  }
);

export function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text — left side, 50% */}
          <div>
            <h1
              className={`font-display text-4xl font-normal leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl transition-all duration-1000 ease-out ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {SITE.tagline}
            </h1>

            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed text-text-muted transition-all duration-1000 ease-out delay-200 ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Pentest, cloud assessment, segurança wireless e awareness — com
              metodologia rigorosa, entregáveis acionáveis e retest incluso.
            </p>

            <div
              className={`mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center transition-all duration-1000 ease-out delay-400 ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <Link href="/proposta">
                <Button size="lg">Solicitar Proposta</Button>
              </Link>
              <Link href="/servicos">
                <Button variant="secondary" size="lg">
                  Conheça Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Slot — right side, 50% */}
          <div
            className={`hidden lg:block transition-all duration-1200 ease-out delay-500 ${
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="aspect-square w-full max-w-[500px]">
              <QuestionMark3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
