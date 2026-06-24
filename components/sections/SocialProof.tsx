import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { SECTORS } from "@/lib/constants";

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

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="font-body text-sm font-medium text-text-muted"
            >
              {sector}
            </span>
          ))}
        </div>

        <div className="mt-20 mx-auto max-w-2xl border-l-2 border-accent pl-8">
          <blockquote className="font-display text-xl font-normal leading-relaxed text-text-primary">
            &ldquo;A Incoquinita nos entregou um relatório claro e acionável.
            Em 30 dias, remediaram 100% das vulnerabilidades críticas encontradas.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-sm font-medium text-text-primary">
              Cliente Fintech
            </p>
            <p className="text-xs text-text-muted">Head de Segurança da Informação</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
