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

const iconMap = {
  Globe,
  Network,
  Cloud,
  Wifi,
  Activity,
  Users,
} as const;

export function ServicesHighlight() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader>
          <SectionTitle>Nossos Serviços</SectionTitle>
          <SectionDescription>
            Soluções completas de cibersegurança para proteger o que mais importa.
          </SectionDescription>
        </SectionHeader>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
