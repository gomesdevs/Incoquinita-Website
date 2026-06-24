import { Section, SectionHeader, SectionTitle } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições de uso do site da Incoquinita.",
};

export default function TermosPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Termos de Uso</SectionTitle>
        </SectionHeader>

        <div className="prose-dark mt-8 space-y-6 text-sm leading-relaxed text-text-muted">
          <p><strong className="text-text-primary">Última atualização:</strong> Junho de 2025</p>

          <h2 className="font-display text-lg font-bold text-text-primary">1. Aceitação</h2>
          <p>
            Ao acessar e utilizar o site da Incoquinita, você concorda com estes termos de uso.
            Caso não concorde, não utilize o site.
          </p>

          <h2 className="font-display text-lg font-bold text-text-primary">2. Uso do Site</h2>
          <p>
            O site é fornecido para fins informativos. O conteúdo não constitui consultoria de
            segurança da informação e não deve ser utilizado como único critério para decisões
            de segurança.
          </p>

          <h2 className="font-display text-lg font-bold text-text-primary">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site (textos, logotipos, gráficos, código) é propriedade da
            Incoquinita e protegido por direitos autorais.
          </p>

          <h2 className="font-display text-lg font-bold text-text-primary">4. Limitação de Responsabilidade</h2>
          <p>
            A Incoquinita não se responsabiliza por danos decorrentes do uso das informações
            disponibilizadas no site. Os serviços de consultoria são regidos por contrato
            específico.
          </p>

          <h2 className="font-display text-lg font-bold text-text-primary">5. Links Externos</h2>
          <p>
            O site pode conter links para sites de terceiros. Não nos responsabilizamos pelo
            conteúdo ou práticas de privacidade desses sites.
          </p>

          <h2 className="font-display text-lg font-bold text-text-primary">6. Alterações</h2>
          <p>
            Estes termos podem ser alterados a qualquer momento. Recomendamos a revisão periódica.
          </p>
        </div>
      </div>
    </Section>
  );
}
