"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Consultoria em Cibersegurança
            </p>
          </div>

          <h1
            className={`mt-6 font-display text-4xl font-normal leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl transition-all duration-1000 ease-out delay-200 ${
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {SITE.tagline}
          </h1>

          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-text-muted transition-all duration-1000 ease-out delay-500 ${
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Pentest, cloud assessment, segurança wireless e awareness — com
            metodologia rigorosa, entregáveis acionáveis e retest incluso.
          </p>

          <div
            className={`mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center transition-all duration-1000 ease-out delay-700 ${
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
      </div>

      <div
        className={`absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/[0.03] to-transparent transition-opacity duration-1500 ease-out delay-300 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
    </section>
  );
}
