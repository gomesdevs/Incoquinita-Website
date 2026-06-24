"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
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
    // TODO: integrate with API route / Resend / SendGrid
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
                <Card className="py-12 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-success" />
                  <h3 className="mt-4 font-display text-xl font-bold text-text-primary">
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
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Formulário de Contato</CardTitle>
                  </CardHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              )}
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Canais</CardTitle>
                </CardHeader>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">E-mail</p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-sm text-text-muted hover:text-accent"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-text-primary">Localização</p>
                      <p className="text-sm text-text-muted">Brasil</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horário de Atendimento</CardTitle>
                </CardHeader>
                <p className="text-sm text-text-muted">
                  Segunda a sexta, das 9h às 18h (horário de Brasília).
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
