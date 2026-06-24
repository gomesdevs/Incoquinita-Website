"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { proposalSchema, type ProposalFormData } from "@/lib/validations";
import { SERVICES } from "@/lib/constants";

const ENV_SIZES = [
  "1-5 aplicações",
  "6-20 aplicações",
  "21-50 aplicações",
  "50+ aplicações",
  "N/A — infraestrutura only",
];

const BUDGET_RANGES = [
  "A definir",
  "Até R$ 15.000",
  "R$ 15.000 - R$ 50.000",
  "R$ 50.000 - R$ 150.000",
  "Acima de R$ 150.000",
];

const HOW_FOUND = [
  "Google",
  "Indicação",
  "LinkedIn",
  "Evento/Conferência",
  "Blog/Artigo",
  "Outro",
];

export default function PropostaPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      services: [],
      urgency: "media",
      previousPentest: "nao",
    },
  });

  const selectedServices = watch("services");

  const onSubmit = async (data: ProposalFormData) => {
    console.log("Proposal form:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Solicitar Proposta</SectionTitle>
            <SectionDescription>
              Preencha os detalhes abaixo para receber uma proposta
              personalizada.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <Card className="py-12 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-success" />
              <h3 className="mt-4 font-display text-xl font-bold text-text-primary">
                Proposta solicitada!
              </h3>
              <p className="mt-2 text-text-muted">
                Recebemos seus dados e entraremos em contato em até 24 horas
                úteis com uma proposta detalhada.
              </p>
              <Button
                variant="secondary"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Enviar outra proposta
              </Button>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Detalhes do Engagement</CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    label="Nome"
                    placeholder="Seu nome completo"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                  <Input
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </div>

                <Input
                  label="Empresa"
                  placeholder="Nome da empresa"
                  {...register("company")}
                  error={errors.company?.message}
                />

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-text-primary">
                    Serviços de interesse
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICES.map((s) => (
                      <label
                        key={s.slug}
                        className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm transition-colors hover:border-accent/50 has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                      >
                        <input
                          type="checkbox"
                          value={s.slug}
                          {...register("services")}
                          className="accent-accent"
                        />
                        <span className="text-text-muted">{s.shortTitle}</span>
                      </label>
                    ))}
                  </div>
                  {errors.services?.message && (
                    <p className="text-xs text-danger">{errors.services.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-text-primary">
                    Tamanho do ambiente
                  </label>
                  <select
                    {...register("environmentSize")}
                    className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Selecione</option>
                    {ENV_SIZES.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                  {errors.environmentSize?.message && (
                    <p className="text-xs text-danger">{errors.environmentSize.message}</p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-text-primary">
                      Urgência
                    </label>
                    <select
                      {...register("urgency")}
                      className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-text-primary">
                      Já fez pentest antes?
                    </label>
                    <select
                      {...register("previousPentest")}
                      className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-text-primary">
                    Orçamento estimado (opcional)
                  </label>
                  <select
                    {...register("budget")}
                    className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Selecione</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-text-primary">
                    Como nos encontrou? (opcional)
                  </label>
                  <select
                    {...register("howFound")}
                    className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="">Selecione</option>
                    {HOW_FOUND.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>

                <Textarea
                  label="Informações adicionais (opcional)"
                  placeholder="Descreva necessidades específicas, urgências, ou qualquer informação relevante..."
                  {...register("message")}
                />

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Solicitar Proposta"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
}
