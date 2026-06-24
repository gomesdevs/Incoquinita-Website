import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { DIFFERENTIALS } from "@/lib/constants";

export function WhyIncoquinita() {
  return (
    <Section className="bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Por que Incoquinita?</SectionTitle>
          <SectionDescription>
            Não somos apenas mais uma consultoria. Nos diferenciamos pelo rigor e pela entrega.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((diff) => (
            <div key={diff.title}>
              <h3 className="font-display text-xl font-normal text-text-primary">
                {diff.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
