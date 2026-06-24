import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teste de Carga e Resistência",
  description: "Testes de carga e resistência para validar a disponibilidade e performance da sua aplicação.",
};

const TECHNIQUES = [
  "Testes de carga progressiva",
  "Testes de resistência (soak)",
  "Testes de pico (spike)",
  "Análise de gargalos",
  "Métricas de performance",
  "Monitoramento em tempo real",
  "Diferenciação de pentest vs stress test",
  "Relatório de capacidade",
];

const DELIVERABLES = [
  { title: "Relatório de Performance", description: "Métricas detalhadas de throughput, latência e erro em cada cenário." },
  { title: "Análise de Gargalos", description: "Identificação de pontos de bottleneck no infrastructure e aplicação." },
  { title: "Relatório de Capacidade", description: "Estimativa de capacidade máxima e recomendações de escala." },
  { title: "Plano de Otimização", description: "Ações para melhorar performance e resiliência." },
];

const FAQ = [
  { question: "Qual a diferença entre pentest e stress test?", answer: "Pentest foca em segurança (vulnerabilidades). Stress test foca em disponibilidade e performance (capacidade de suportar carga)." },
  { question: "Vocês usam ferramentas específicas?", answer: "Sim. Utilizamos ferramentas como k6, JMeter e Locust, conforme o cenário e objetivo do teste." },
  { question: "Testam em produção?", answer: "Preferimos ambientes de staging. Em produção, definimos janelas e limites para não impactar usuários reais." },
  { question: "Quanto tempo leva?", answer: "Depende da complexidade. Testes simples levam 1-2 dias. Cenários complexos com múltiplos padrões podem levar 1-2 semanas." },
];

export default function StressTestPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
              Teste de Carga e Resistência
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Validação da capacidade da sua aplicação de suportar carga,
              identificando gargalos e estimando limites de performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-sm text-text-muted">k6</span>
              <span className="text-sm text-text-muted">JMeter</span>
              <span className="text-sm text-text-muted">Locust</span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-normal text-text-primary">
                O Problema
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Aplicações que não são testadas sob carga falham nos momentos
                críticos — Black Friday, lançamentos, picos de uso. Uma falha
                de performance pode causar perda de receita e credibilidade.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-normal text-text-primary">
                O que Inclui
              </h2>
              <div className="mt-4 space-y-2">
                {TECHNIQUES.map((t) => (
                  <div key={t} className="text-sm text-text-muted">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Entregáveis</SectionTitle>
          </SectionHeader>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="border border-border p-6">
                <h3 className="font-body text-sm font-semibold text-text-primary">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Perguntas Frequentes</SectionTitle>
          </SectionHeader>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {FAQ.map((item) => (
              <div key={item.question} className="border border-border bg-bg-primary p-6">
                <h3 className="font-display text-lg font-normal text-text-primary">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-normal text-text-primary">
            Valide sua performance
          </h2>
          <p className="mt-2 text-text-muted">
            Solicite uma proposta para Teste de Carga.
          </p>
          <div className="mt-6">
            <Link href="/proposta">
              <Button size="lg">Solicitar Proposta</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
