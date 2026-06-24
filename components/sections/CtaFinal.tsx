import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CtaFinal() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-bg-secondary to-accent/5 p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Pronto para iluminar suas incógnitas?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
              Solicite uma proposta personalizada ou agende uma call de discovery
              para entender como podemos ajudar.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/proposta">
                <Button size="lg">
                  Solicitar Proposta
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="secondary" size="lg">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
