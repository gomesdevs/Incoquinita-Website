import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { FileText, ClipboardList, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Whitepapers, checklists e guias gratuitos para melhorar a segurança da sua empresa.",
};

const RESOURCES = [
  {
    icon: FileText,
    title: "Checklist OWASP Top 10",
    description:
      "Checklist completo com os 10 principais riscos de segurança em aplicações web e como cada um pode ser identificado e mitigado.",
    type: "Checklist",
    status: "Disponível",
  },
  {
    icon: ClipboardList,
    title: "Questionário de Scoping",
    description:
      "Template usado em nossos engagements para coletar informações necessárias ao planejamento de um pentest.",
    type: "Template",
    status: "Disponível",
  },
  {
    icon: BookOpen,
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <Card key={r.title} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant={r.status === "Disponível" ? "success" : "warning"}>
                        {r.status}
                      </Badge>
                    </div>
                    <CardTitle className="mt-3">{r.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="flex-1">{r.description}</CardDescription>
                  <div className="mt-4">
                    <Badge variant="default">{r.type}</Badge>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
