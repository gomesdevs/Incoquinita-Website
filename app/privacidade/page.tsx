import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Incoquinita coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Política de Privacidade</SectionTitle>
        </SectionHeader>

        <div className="prose-dark mt-8 space-y-6 text-sm leading-relaxed text-text-muted">
          <p><strong className="text-text-primary">Última atualização:</strong> Junho de 2025</p>

          <h2 className="font-display text-lg font-normal text-text-primary">1. Dados Coletados</h2>
          <p>
            Coletamos dados pessoais que você nos fornece diretamente, como nome, e-mail, empresa
            e informações de contato, quando você preenche nossos formulários de contato ou proposta.
          </p>

          <h2 className="font-display text-lg font-normal text-text-primary">2. Uso dos Dados</h2>
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a suas solicitações de contato e proposta</li>
            <li>Realizar os serviços de consultoria contratados</li>
            <li>Enviar comunicações relacionadas aos nossos serviços</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>

          <h2 className="font-display text-lg font-normal text-text-primary">3. Compartilhamento</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para
            a execução dos serviços contratados ou por obrigação legal.
          </p>

          <h2 className="font-display text-lg font-normal text-text-primary">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
            não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2 className="font-display text-lg font-normal text-text-primary">5. Cookies</h2>
          <p>
            Nosso site pode utilizar cookies essenciais para seu funcionamento. Não utilizamos
            cookies de rastreamento ou terceiros para fins de marketing.
          </p>

          <h2 className="font-display text-lg font-normal text-text-primary">6. Seus Direitos</h2>
          <p>
            Conforme a LGPD, você tem direito de acessar, corrigir, anonimizar, bloquear ou
            eliminar seus dados pessoais. Para exercer esses direitos, entre em contato
            conosco.
          </p>

          <h2 className="font-display text-lg font-normal text-text-primary">7. Contato</h2>
          <p>
            Para dúvidas sobre esta política, entre em contato: contato@incoquinita.com.br
          </p>
        </div>
      </div>
    </Section>
  );
}
