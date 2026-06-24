import Link from "next/link";
import { Users, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança para Pessoas",
  description: "Treinamento de awareness, simulação de phishing e políticas de segurança para colaboradores.",
};

const TECHNIQUES = [
  "Treinamento de awareness",
  "Simulação de phishing",
  "Políticas de senha",
  "Autenticação multifator (MFA)",
  "Engenharia social",
  "Uso seguro de dispositivos",
  "Relatórios de conscientização",
  "Campanhas contínuas",
];

const DELIVERABLES = [
  { title: "Relatório de Conscientização", description: "Métricas de aderência e identificação de gaps de conhecimento." },
  { title: "Campanhas de Phishing", description: "Simulações realistas com métricas de clique e report." },
  { title: "Material de Treinamento", description: "Conteúdo personalizado para的不同 perfis de colaboradores." },
  { title: "Plano de Melhoria Contínua", description: "Cronograma de treinamentos e campanhas recorrentes." },
];

const FAQ = [
  { question: "As simulações de phishing são éticas?", answer: "Sim. Comunicamos previamente à liderança e os dados são anonimizados. O objetivo é educar, não punir." },
  { question: "Personalizam o treinamento?", answer: "Sim. Adaptamos o conteúdo para diferentes perfis: devs, gestores, RH, financeiro, etc." },
  { question: "Fornecem certificados?", answer: "Sim. Colaboradores que completam o treinamento recebem certificado de conclusão." },
  { question: "Funciona para empresas grandes?", answer: "Sim. Nossos programas escalam de 10 a 10.000+ colaboradores com automação e relatórios consolidados." },
];

export default function SegurancaPessoasPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Users className="h-6 w-6" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">Segurança para Pessoas</h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">Transforme seus colaboradores em(barreira de segurança. Treinamento de awareness, phishing simulation e políticas práticas.</p>
            <div className="mt-6 flex flex-wrap gap-2"><Badge variant="accent">Awareness</Badge><Badge variant="accent">Phishing</Badge><Badge variant="accent">MFA</Badge></div>
          </div>
        </div>
      </Section>
      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-text-primary">O Problema</h2>
              <p className="mt-4 text-text-muted leading-relaxed">A maioria dos incidentes de segurança começa com erro humano — um clique em phishing, uma senha fraca ou um dispositivo desprotegido. A tecnologia sozinha não basta.</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-text-primary">O que Inclui</h2>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {TECHNIQUES.map((t) => (<div key={t} className="flex items-start gap-2 text-sm text-text-muted"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{t}</div>))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader><SectionTitle>Entregáveis</SectionTitle></SectionHeader>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((d) => (<Card key={d.title}><CardHeader><CardTitle>{d.title}</CardTitle></CardHeader><p className="text-sm text-text-muted">{d.description}</p></Card>))}
          </div>
        </div>
      </Section>
      <Section className="bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader><SectionTitle>Perguntas Frequentes</SectionTitle></SectionHeader>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {FAQ.map((item) => (
              <div key={item.question} className="rounded-xl border border-border bg-bg-primary p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div><h3 className="font-display font-semibold text-text-primary">{item.question}</h3><p className="mt-2 text-sm leading-relaxed text-text-muted">{item.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-text-primary">Fortaleça sua cultura de segurança</h2>
          <p className="mt-2 text-text-muted">Solicite uma proposta para Segurança para Pessoas.</p>
          <div className="mt-6"><Link href="/proposta"><Button size="lg">Solicitar Proposta<ArrowRight className="h-4 w-4" /></Button></Link></div>
        </div>
      </Section>
    </>
  );
}
