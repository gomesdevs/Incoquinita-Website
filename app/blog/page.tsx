import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section, SectionHeader, SectionTitle, SectionDescription } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos técnicos sobre cibersegurança, pentest, cloud assessment e mais.",
};

const POSTS = [
  {
    slug: "o-que-esperar-primeiro-pentest-web",
    title: "O Que Esperar do Seu Primeiro Pentest Web",
    description:
      "Um guia completo para gestores e times técnicos que estão organizando seu primeiro engagement de teste de intrusão em aplicações web.",
    category: "Pentest",
    date: "Junho 2025",
    readTime: "8 min",
  },
  {
    slug: "owasp-top-10-o-que-mudou",
    title: "OWASP Top 10 em 2025: O Que Mudou e O Que Fazer",
    description:
      "Análise das principais mudanças no OWASP Top 10 e como sua empresa pode se preparar para cada categoria de vulnerabilidade.",
    category: "OWASP",
    date: "Junho 2025",
    readTime: "10 min",
  },
  {
    slug: "cloud-assessment-shared-responsibility",
    title: "Cloud Assessment: Shared Responsibility na Prática",
    description:
      "Entenda como o modelo de responsabilidade compartilhada funciona na prática e por que muitas empresas falham em entender seus papéis.",
    category: "Cloud",
    date: "Junho 2025",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader>
            <SectionTitle>Blog</SectionTitle>
            <SectionDescription>
              Artigos técnicos sobre cibersegurança, melhores práticas e
              conteúdo relevante para decisores e profissionais de segurança.
            </SectionDescription>
          </SectionHeader>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="accent">{post.category}</Badge>
                      <span className="text-xs text-text-muted">{post.readTime}</span>
                    </div>
                    <CardTitle className="mt-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardDescription>{post.description}</CardDescription>
                  <p className="mt-4 text-xs text-text-muted">{post.date}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted">
              Mais artigos sendo preparados. Volte em breve!
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
