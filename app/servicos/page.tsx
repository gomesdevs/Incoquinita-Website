import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça nossos serviços de cibersegurança: pentest, cloud assessment, segurança wireless e mais.",
  openGraph: {
    title: "Serviços — Incoquinita",
    description:
      "Pentest, cloud assessment, segurança wireless e mais.",
    images: ["/og/servicos.png"],
  },
};

export default function ServicosPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Nossos Serviços</SectionTitle>
            <SectionDescription>
              Soluções completas de cibersegurança, cada uma com metodologia
              própria, entregáveis claros e retest incluso.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex items-start justify-between gap-8 border-b border-border py-8 transition-colors first:border-t hover:border-accent/40"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-4">
                    <span className="font-body text-xs font-medium text-text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-normal text-text-primary transition-colors group-hover:text-accent sm:text-3xl">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p className="mt-3 ml-8 max-w-xl text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
                <div className="mt-2 flex-shrink-0 text-text-muted transition-colors group-hover:text-accent">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
