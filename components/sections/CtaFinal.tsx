import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CtaFinal() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-border bg-bg-secondary p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight text-text-primary sm:text-4xl">
            Pronto para iluminar suas incógnitas?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Solicite uma proposta personalizada ou agende uma call de discovery
            para entender como podemos ajudar.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/proposta">
              <Button size="lg">Solicitar Proposta</Button>
            </Link>
            <Link href="/contato">
              <Button variant="secondary" size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
