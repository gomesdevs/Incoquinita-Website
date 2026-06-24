import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Incoquinita: nossa história, missão e valores em cibersegurança.",
};

const VALUES = [
  {
    title: "Confidencialidade",
    description:
      "NDA padrão em todos os engagements. Dados criptografados e política rigorosa de handling de informações sensíveis.",
  },
  {
    title: "Rigor Técnico",
    description:
      "Metodologia alinhada a padrões internacionais (OWASP, PTES, CIS). Cada teste é documentado e reproduzível.",
  },
  {
    title: "Transparência",
    description:
      "Processos claros, entregáveis acionáveis e comunicação constante durante todo o engagement.",
  },
  {
    title: "Ética",
    description:
      "Testes controlados, sem impacto desnecessário. Comunicação prévia de limites e janelas de teste.",
  },
];

const CERTIFICATIONS = [
  "OWASP",
  "PTES",
  "CIS Benchmarks",
  "NIST",
  "ISO 27001",
  "LGPD",
];

export default function SobrePage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
              Sobre a Incoquinita
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              A Incoquinita nasceu da necessidade de transformar incógnitas em
              visibilidade. Não somos apenas uma consultoria — somos parceiros
              na construção de ambientes digitais mais seguros.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-normal text-text-primary">
                Nossa Missão
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Iluminar o que não se vê no ambiente digital. Ajudamos
                empresas a identificar, priorizar e remediar vulnerabilidades
                antes que sejam exploradas — com metodologia rigorosa,
                entregáveis claros e compromisso com a confidencialidade.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-normal text-text-primary">
                Nossa Abordagem
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                Trabalhamos com engajamento estruturado: scoping detalhado,
                execução controlada, relatório completo com PoC e recomendações
                priorizadas, debrief com o time, e retest para validar
                correções. Cada etapa é transparente e rastreável.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Nossos Valores</SectionTitle>
            <SectionDescription>
              Princípios que guiam cada decisão e cada engagement.
            </SectionDescription>
          </SectionHeader>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-xl font-normal text-text-primary">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Frameworks e Standards</SectionTitle>
            <SectionDescription>
              Nossos testes seguem metodologias reconhecidas internacionalmente.
            </SectionDescription>
          </SectionHeader>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {CERTIFICATIONS.map((c) => (
              <span key={c} className="text-sm font-medium text-text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Política de Confidencialidade</SectionTitle>
          </SectionHeader>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-text-muted leading-relaxed">
              Todos os nossos engagements são cobertos por NDA (Acordo de
              Não Divulgação). Dados de clientes são tratados com o mais alto
              nível de sigilo: criptografia em trânsito e em repouso, acesso
              restrito e política de retenção alinhada à LGPD. Nunca
              compartilhamos informações de um cliente com outro.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
