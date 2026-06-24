import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Estudos de caso anonimizados demonstrando nossos resultados em cibersegurança.",
};

const CASES = [
  {
    title: "Fintech — Pentest Web Completo",
    sector: "Fintech",
    challenge:
      "Aplicação de pagamentos com múltiplos módulos (portal, API, mobile) sem teste de segurança nos últimos 18 meses. Time de segurança pequeno sem capacidade interna.",
    approach:
      "Engagement de 3 semanas cobrindo OWASP Top 10, lógica de negócio e API Security. Testes automatizados seguidos de exploração manual de cenários complexos.",
    result:
      "12 vulnerabilidades críticas identificadas, incluindo SQL injection em endpoint de pagamento e broken authentication no fluxo de recuperação de senha.",
    metrics: [
      { label: "Vulnerabilidades críticas", value: "12" },
      { label: "Remediadas em 30 dias", value: "100%" },
      { label: "Duração do engagement", value: "3 semanas" },
    ],
  },
  {
    title: "SaaS — Cloud Assessment Multi-Account",
    sector: "SaaS",
    challenge:
      "Startup com infraestrutura em AWS (12 contas, 40+ serviços) sem visibilidade da postura de segurança. Preocupação com compliance para rodada de investimento.",
    approach:
      "Assessment de 2 semanas cobrindo IAM, S3, EC2, RDS e Lambda. Mapeamento de permissões, configs de segurança e CIS Benchmarks.",
    result:
      "8 contas com credenciais expostas, 3 buckets S3 com acesso público e policy IAM com wildcards excessivos identificados e remediados.",
    metrics: [
      { label: "Contas com risco", value: "8" },
      { label: "Buckets S3 expostos", value: "3" },
      { label: "Tempo de remediação", value: "2 semanas" },
    ],
  },
  {
    title: "Indústria — Pentest de Rede Interna",
    sector: "Indústria",
    challenge:
      "Rede corporativa com 500+ dispositivos, sem segmentação adequada entre produção e administrativo. Necessidade de atestar conformidade para ISO 27001.",
    approach:
      "Teste de 4 semanas com escopo de rede interna: scanning, enumeração, exploração controlada, análise de Active Directory e políticas de rede.",
    result:
      "15 vulnerabilidades encontradas, incluindo credenciais Weak no AD, RDP exposto e segmentação defeituosa entre VLANs.",
    metrics: [
      { label: "Vulnerabilidades", value: "15" },
      { label: "Servidores críticos", value: "4" },
      { label: "Retest aprovado", value: "100%" },
    ],
  },
];

export default function CasesPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Cases
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Estudos de caso anonimizados demonstrando nossos resultados.
              Todos os dados de clientes são tratados com sigilo total.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          {CASES.map((c) => (
            <Card key={c.title} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
              <div className="pl-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="accent">{c.sector}</Badge>
                </div>
                <h2 className="font-display text-xl font-bold text-text-primary">
                  {c.title}
                </h2>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                      Desafio
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                      Abordagem
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {c.approach}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                    Resultado
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {c.result}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-2xl font-bold text-accent">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs text-text-muted">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
