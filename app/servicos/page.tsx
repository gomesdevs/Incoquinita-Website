import Link from "next/link";
import {
  Globe,
  Network,
  Cloud,
  Wifi,
  Activity,
  Users,
  ArrowRight,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça nossos serviços de cibersegurança: pentest, cloud assessment, segurança wireless e mais.",
};

const iconMap = {
  Globe,
  Network,
  Cloud,
  Wifi,
  Activity,
  Users,
} as const;

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link key={service.slug} href={service.href}>
                  <Card className="group h-full">
                    <CardHeader>
                      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <CardTitle>{service.shortTitle}</CardTitle>
                    </CardHeader>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:gap-2">
                      Ver detalhes
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
