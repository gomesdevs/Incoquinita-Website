import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança de Dados",
  description:
    "Como a Incoquinita trata e protege dados de clientes durante engagements de cibersegurança.",
};

const PRACTICES = [
  {
    icon: Lock,
    title: "Criptografia",
    description:
      "Todos os dados são criptografados em trânsito (TLS 1.3) e em repouso (AES-256). Credenciais e evidências sensíveis são armazenadas em cofres digitais com acesso restrito.",
  },
  {
    icon: Eye,
    title: "Acesso Restrito",
    description:
      "Apenas membros da equipe diretamente envolvidos no engagement têm acesso aos dados do cliente. Controle de acesso baseado em função (RBAC) e logs de auditoria.",
  },
  {
    icon: FileCheck,
    title: "NDA Padrão",
    description:
      "Todo engagement começa com a assinatura de Acordo de Não Divulgação (NDA). Isso protege tanto os dados do cliente quanto os resultados dos testes.",
  },
  {
    icon: Shield,
    title: "Política de Retenção",
    description:
      "Após o engagement, dados do cliente são mantidos pelo período mínimo necessário e então removidos de forma segura. Não retemos dados além do necessário.",
  },
];

export default function SegurancaPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Segurança de Dados
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Como empresa de cibersegurança, tratamos a segurança dos dados
              dos nossos clientes com o mais alto nível de rigor — porque
              confiança é a base do nosso trabalho.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {PRACTICES.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.title}>
                  <CardHeader>
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeader>
                  <p className="text-sm text-text-muted">{p.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Durante o Engagement
            </h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                Durante a realização de testes de segurança, a Incoquinita
                manipula dados sensíveis como credenciais de acesso, configurações
                de sistema e vulnerabilidades encontradas. Esses dados são
                tratados com sigilo absoluto:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Credenciais de teste são fornecidas via canal seguro e não são armazenadas em texto plano</li>
                <li>Evidências de vulnerabilidades são coletadas e armazenadas em ambiente isolado e criptografado</li>
                <li>Relatórios são entregues via canal criptografado com acesso restrito ao time do cliente</li>
                <li>Após o debrief e retest, dados brutos são removidos dos nossos sistemas</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
