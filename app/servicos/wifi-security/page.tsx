import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segurança Wireless",
  description: "Auditoria de redes wireless, detecção de rogue APs e validação de segmentação de convidados.",
};

const TECHNIQUES = [
  "Auditoria de redes Wi-Fi",
  "WPA/WPA2/WPA3",
  "Detecção de rogue APs",
  "Segmentação de convidados",
  "Criptografia e protocolos",
  "Configurações de roteadores",
  "Testes de sinal e cobertura",
  "Políticas de acesso wireless",
];

const DELIVERABLES = [
  { title: "Mapa de Redes", description: "Inventário completo de redes wireless detectadas e seus riscos." },
  { title: "Relatório de Vulnerabilidades", description: "Detalhamento de cada falha encontrada com evidências." },
  { title: "Plano de Remediação", description: "Ações corretivas para cada vulnerabilidade identificada." },
  { title: "Retest Incluso", description: "Validação de que as correções foram implementadas corretamente." },
];

const FAQ = [
  { question: "Testam redes com WPA3?", answer: "Sim. Avaliamos todas as versões do WPA e identificamos configurações fracas mesmo em WPA3." },
  { question: "Detectam access points não autorizados?", answer: "Sim. Identificamos rogue APs e dispositivos não autorizados na área de cobertura." },
  { question: "Precisamos parar as redes Wi-Fi?", answer: "Não. Os testes são realizados sem impacto na disponibilidade das redes." },
  { question: "Atendem ambientes grandes?", answer: "Sim. Temos experiência em escritórios, campus, data centers e ambientes industriais." },
];

export default function WifiSecurityPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
              Segurança Wireless
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Auditoria completa de redes wireless, identificando access points
              não autorizados, configurações fracas e gaps de segmentação.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-sm text-text-muted">WPA3</span>
              <span className="text-sm text-text-muted">Rogue AP</span>
              <span className="text-sm text-text-muted">Segmentação</span>
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
                Redes wireless são uma porta de entrada frequente para atacantes.
                Configurações fracas, rogue APs e segmentação inadequada podem
                comprometer toda a rede corporativa.
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
            Proteja suas redes wireless
          </h2>
          <p className="mt-2 text-text-muted">
            Solicite uma proposta para Segurança Wireless.
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
