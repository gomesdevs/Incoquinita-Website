import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { METHODOLOGY_STEPS } from "@/lib/constants";

export function MethodologyPreview() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Como Trabalhamos</SectionTitle>
          <SectionDescription>
            Um processo claro e transparente do início ao fim.
          </SectionDescription>
        </SectionHeader>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {METHODOLOGY_STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background font-display text-sm font-bold text-accent">
                    {step.number}
                  </div>
                </div>

                <div
                  className={`ml-14 sm:ml-0 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/metodologia">
            <Button variant="secondary">
              Ver Metodologia Completa
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
