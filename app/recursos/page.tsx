import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { ScopeCalculator } from "@/components/interactive/ScopeCalculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Whitepapers, checklists e guias gratuitos para melhorar a segurança da sua empresa.",
  openGraph: {
    title: "Recursos — Incoquinita",
    description:
      "Materiais gratuitos de segurança.",
    images: ["/og/recursos.png"],
  },
};

const RESOURCES = [
  {
    title: "Checklist OWASP Top 10",
    description:
      "Checklist completo com os 10 principais riscos de segurança em aplicações web e como cada um pode ser identificado e mitigado.",
    type: "Checklist",
    status: "Disponível",
  },
  {
    title: "Questionário de Scoping",
    description:
      "Template usado em nossos engagements para coletar informações necessárias ao planejamento de um pentest.",
    type: "Template",
    status: "Disponível",
  },
  {
    title: "Guia de Preparação para Pentest",
    description:
      "Tudo que sua empresa precisa preparar antes de um engagement de teste de intrusão — credenciais, escopo, contatos.",
    type: "Guia",
    status: "Em breve",
  },
];

export default function RecursosPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Recursos</SectionTitle>
            <SectionDescription>
              Materiais gratuitos para ajudar sua empresa a entender e melhorar
              sua postura de segurança.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {RESOURCES.map((r) => (
              <div
                key={r.title}
                className="flex items-start justify-between gap-8 border-b border-border py-8 first:border-t"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-2xl font-normal text-text-primary">
                      {r.title}
                    </h3>
                    <span className="text-xs text-text-muted">{r.type}</span>
                  </div>
                  <p className="mt-3 ml-8 max-w-xl text-sm leading-relaxed text-text-muted">
                    {r.description}
                  </p>
                </div>
                <div className="mt-2 flex-shrink-0">
                  <span
                    className={`text-xs font-medium ${
                      r.status === "Disponível" ? "text-success" : "text-warning"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScopeCalculator />
        </div>
      </Section>
    </>
  );
}
