import { Shield, FileSearch, ClipboardCheck, Lock } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { DIFFERENTIALS } from "@/lib/constants";

const iconMap = [Shield, FileSearch, ClipboardCheck, Lock];

export function WhyIncoquinita() {
  return (
    <Section className="bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Por que Incoquinita?</SectionTitle>
          <SectionDescription>
            Não somos apenas mais uma consultoria.nos diferenciamos pelo rigor e pela entrega.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = iconMap[i];
            return (
              <div key={diff.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">
                  {diff.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
