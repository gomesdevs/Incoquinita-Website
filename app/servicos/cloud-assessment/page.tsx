import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Assessment",
  description:
    "Avaliação de segurança em AWS, Azure e GCP — IAM, storage, configurações e CIS Benchmarks.",
};

const TECHNIQUES = [
  "IAM e gerenciamento de identidades",
  "Storage público exposto",
  "Configurações de segurança",
  "CIS Benchmarks",
  "Shared Responsibility Model",
  "Logs e monitoramento",
  "Redes e Grupos de Segurança",
  "Serviços gerenciados (RDS, S3, Lambda...)",
];

const CLOUDS = [
  { name: "AWS", services: "IAM, S3, EC2, RDS, Lambda, CloudFront" },
  { name: "Azure", services: "AD, Blob Storage, VMs, SQL Database" },
  { name: "GCP", services: "IAM, GCS, Compute Engine, Cloud SQL" },
];

const DELIVERABLES = [
  {
    title: "Relatório de Postura",
    description: "Visão geral da postura de segurança com score por categoria.",
  },
  {
    title: "Mapeamento de Ativos",
    description: "Inventário de recursos cloud com classificação de risco.",
  },
  {
    title: "Plano de Remediação",
    description: "Ações corretivas priorizadas alinhadas ao CIS Benchmark.",
  },
  {
    title: "Retest Incluso",
    description: "Validação de que as configurações corretas foram aplicadas.",
  },
];

const FAQ = [
  {
    question: "Vocês acessam nossa conta cloud?",
    answer:
      "Sim, com credenciais read-only ou via AWS Security Hub/Azure Defender. Nunca modificamos configurações durante o assessment.",
  },
  {
    question: "Testam multi-cloud?",
    answer:
      "Sim. Temos experiência em AWS, Azure e GCP. Também avaliamos ambientes multi-cloud e híbridos.",
  },
  {
    question: "O assessment cobre compliance?",
    answer:
      "Sim. Mapeamos configurações contra CIS Benchmarks e podemos orientar sobre PCI-DSS, SOC 2 e outras regulamentações.",
  },
  {
    question: "Precisamos parar os serviços?",
    answer:
      "Não. O assessment é não-intrusivo e não impacta a disponibilidade dos serviços em produção.",
  },
];

export default function CloudAssessmentPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
              Cloud Assessment
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Avaliação completa da postura de segurança em ambientes cloud —
              AWS, Azure e GCP — com foco em IAM, configurações e CIS
              Benchmarks.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-sm text-text-muted">AWS</span>
              <span className="text-sm text-text-muted">Azure</span>
              <span className="text-sm text-text-muted">GCP</span>
              <span className="text-sm text-text-muted">CIS</span>
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
                Ambientes cloud são configurados rapidamente e frequentemente
                com permissões excessivas, storage público acidental e gaps de
                segurança. O Shared Responsibility Model pode criar confusia
                sobre quem é responsável por quê.
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
            <SectionTitle>Clouds Atendidos</SectionTitle>
            <SectionDescription>
              Experiência nas principais plataformas cloud do mercado.
            </SectionDescription>
          </SectionHeader>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {CLOUDS.map((cloud) => (
              <div key={cloud.name} className="border border-border p-6">
                <h3 className="font-body text-sm font-semibold text-text-primary">
                  {cloud.name}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{cloud.services}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Entregáveis</SectionTitle>
          </SectionHeader>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="border border-border bg-bg-primary p-6">
                <h3 className="font-body text-sm font-semibold text-text-primary">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Perguntas Frequentes</SectionTitle>
          </SectionHeader>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {FAQ.map((item) => (
              <div key={item.question} className="border border-border p-6">
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
            Avalie sua postura cloud
          </h2>
          <p className="mt-2 text-text-muted">
            Solicite uma proposta para Cloud Assessment.
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
