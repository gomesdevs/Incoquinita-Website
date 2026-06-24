import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { SECTORS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function SocialProof() {
  return (
    <Section className="bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Setores Atendidos</SectionTitle>
          <SectionDescription>
            Experiência em diversos segmentos que demandam segurança da informação.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {SECTORS.map((sector) => (
            <Badge key={sector} variant="accent" className="px-5 py-2 text-sm">
              {sector}
            </Badge>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-2xl rounded-xl border border-border bg-bg-primary p-8 text-center">
          <blockquote className="text-lg italic leading-relaxed text-text-primary">
            &ldquo;A Incoquinita nos entregou um relatório claro e acionável.
            Em 30 dias, remедiamos 100% das vulnerabilidades críticas encontradas.&rdquo;
          </blockquote>
          <div className="mt-4">
            <p className="font-display text-sm font-semibold text-text-primary">
              Cliente Fintech
            </p>
            <p className="text-xs text-text-muted">Head de Segurança da Informação</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
