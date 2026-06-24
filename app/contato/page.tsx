"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { SERVICES, SITE } from "@/lib/constants";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Contact form:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Fale Conosco</SectionTitle>
            <SectionDescription>
              Preencha o formulário ou entre em contato por um dos canais abaixo.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="border border-border p-12 text-center">
                  <h3 className="font-display text-xl font-normal text-text-primary">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 text-text-muted">
                    Entraremos em contato em até 24 horas úteis.
                  </p>
                  <Button
                    variant="secondary"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <div className="border border-border p-8">
                  <h3 className="font-display text-xl font-normal text-text-primary">
                    Formulário de Contato
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
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
                        Serviço de interesse
                      </label>
                      <select
                        {...register("service")}
                        className="flex h-10 w-full rounded-lg border border-border bg-bg-primary px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Selecione um serviço</option>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service?.message && (
                        <p className="text-xs text-danger">{errors.service.message}</p>
                      )}
                    </div>
                    <Textarea
                      label="Mensagem"
                      placeholder="Descreva sua necessidade..."
                      {...register("message")}
                      error={errors.message?.message}
                    />
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="border border-border p-6">
                <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
                  Canais
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-text-primary">E-mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-sm text-text-muted hover:text-text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Localização</p>
                    <p className="text-sm text-text-muted">Brasil</p>
                  </div>
                </div>
              </div>

              <div className="border border-border p-6">
                <h3 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
                  Horário de Atendimento
                </h3>
                <p className="mt-4 text-sm text-text-muted">
                  Segunda a sexta, das 9h às 18h (horário de Brasília).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
