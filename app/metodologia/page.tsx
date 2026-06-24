import { METHODOLOGY_STEPS } from "@/lib/constants";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { Shield, FileSearch, MessageSquare, RefreshCw, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Como trabalhamos: scoping, execução, relatório, debrief e retest — um processo claro e transparente.",
};

const stepIcons = [FileSearch, Shield, FileSearch, MessageSquare, RefreshCw];

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
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
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

          <div className="mt-16 space-y-8">
            {METHODOLOGY_STEPS.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Card key={step.number} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
                  <div className="flex items-start gap-6 pl-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-medium text-accent">
                          FASE {step.number}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

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
              <Card key={f.name}>
                <CardHeader>
                  <CardTitle>{f.name}</CardTitle>
                </CardHeader>
                <p className="text-sm text-text-muted">{f.description}</p>
              </Card>
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
