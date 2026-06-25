import { METHODOLOGY_STEPS } from "@/lib/constants";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { StackingCards } from "@/components/creative/StackingCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Como trabalhamos: scoping, execução, relatório, debrief e retest — um processo claro e transparente.",
  openGraph: {
    title: "Metodologia — Incoquinita",
    description:
      "Processo claro e transparente do início ao fim.",
    images: ["/og/metodologia.png"],
  },
};

const FRAMEWORKS = [
  {
    name: "OWASP",
    description: "Application Security Verification Standard (ASVS), Web Security Testing Guide (WSTG).",
  },
  {
    name: "PTES",
    description: "Penetration Testing Execution Standard — metodologia para testes de infraestrutura.",
  },
  {
    name: "CIS Benchmarks",
    description: "Configurações de segurança para servidores, cloud e aplicações.",
  },
  {
    name: "NIST",
    description: "Framework de segurança da informação e Guidelines for Security Testing.",
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
              Nossa Metodologia
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Um processo estruturado e transparente que garante resultados
              acionáveis em cada engagement.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>As 5 Fases</SectionTitle>
            <SectionDescription>
              Do primeiro contato ao retest — cada fase tem objetivos claros e entregáveis definidos.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <StackingCards>
        {METHODOLOGY_STEPS.map((step) => (
          <div
            key={step.number}
            data-stack-card
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-3xl border border-border bg-bg-primary p-8 sm:p-12">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border font-body text-sm font-medium text-text-muted">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-normal text-text-primary sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </StackingCards>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Frameworks e Standards</SectionTitle>
            <SectionDescription>
              Nossos testes seguem metodologias reconhecidas internacionalmente.
            </SectionDescription>
          </SectionHeader>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <div key={f.name} className="border border-border p-6">
                <h3 className="font-body text-sm font-semibold text-text-primary">
                  {f.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Confidencialidade e NDA</SectionTitle>
          </SectionHeader>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-text-muted leading-relaxed">
              Todos os nossos engagements começam com a assinatura de um Acordo
              de Não Divulgação (NDA). Isso garante que todas as informações
              compartilhadas durante o teste — credenciais, arquitetura,
              vulnerabilidades — sejam tratadas com o mais alto nível de
              sigilo. Após o engagement, todos os dados do cliente são
              removidos dos nossos sistemas conforme política de retenção.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
