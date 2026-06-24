import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

const POSTS: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    content: string[];
  }
> = {
  "o-que-esperar-primeiro-pentest-web": {
    title: "O Que Esperar do Seu Primeiro Pentest Web",
    category: "Pentest",
    date: "Junho 2025",
    readTime: "8 min",
    content: [
      "Um pentest web é uma avaliação estruturada da segurança de uma aplicação web, realizada por profissionais especializados que simulam ataques reais para identificar vulnerabilidades antes que atacantes mal-intencionados as explorem.",
      "Antes do engagement começar, a empresa de segurança irá conduzir um scoping detalhado. Isso inclui um questionário sobre a aplicação, tecnologias utilizadas, dados sensíveis tratados e objetivos do teste. Quanto mais informações, mais preciso e eficiente será o teste.",
      "Durante a execução, os testadores utilizam metodologias reconhecidas como OWASP WSTG e seguem o OWASP Top 10 como referência principal. Eles testam autenticação, autorização, injeção de código, XSS, SSRF, lógica de negócio e muito mais.",
      "O entregável principal é um relatório detalhado com cada vulnerabilidade classificada por severidade (CVSS), incluindo evidências, prova de conceito (PoC) e recomendações de remediação priorizadas. Um relatório executivo complementar traduz os achados para gestores não-técnicos.",
      "Após a entrega do relatório, uma sessão de debrief é agendada para apresentar os findings, esclarecer dúvidas e discutir o plano de remediação. O retest valida que as correções foram implementadas corretamente.",
      "A duração varia conforme o escopo. Uma aplicação simples pode levar de 5 a 7 dias úteis. Sistemas complexos com múltiplos módulos, APIs e integrações podem demandar 2 a 4 semanas de trabalho.",
    ],
  },
  "owasp-top-10-o-que-mudou": {
    title: "OWASP Top 10 em 2025: O Que Mudou e O Que Fazer",
    category: "OWASP",
    date: "Junho 2025",
    readTime: "10 min",
    content: [
      "O OWASP Top 10 é a lista de referência mundial para as vulnerabilidades mais críticas em aplicações web. Atualizada periodicamente, ela reflete as ameaças mais relevantes identificadas em milhares de aplicações reais.",
      "A versão de 2021 introduziu mudanças significativas em relação à edição anterior. Vulnerabilidades como 'Broken Authentication' e 'Sensitive Data Exposure' foram reorganizadas e combinadas, refletindo uma visão mais madura sobre como os ataques realmente ocorrem.",
      "Uma das mudanças mais notáveis foi a inclusão de 'Security Misconfiguration' como uma categoria mais ampla, e a separação de 'Software and Data Integrity Failures' como nova categoria, reconhecendo a importância da cadeia de suprimentos de software.",
      "Para empresas que estão começando agora, a recomendação é priorizar as categorias mais comuns: Broken Access Control (agora em primeiro lugar), Cryptographic Failures e Injection. Essas três categorias representam a maioria das vulnerabilidades encontradas em assessments reais.",
      "A melhor abordagem é mapear cada categoria do OWASP Top 10 contra a sua aplicação, identificar gaps e priorizar correções com base no risco real para o seu negócio. Um assessment profissional pode acelerar esse processo significativamente.",
    ],
  },
  "cloud-assessment-shared-responsibility": {
    title: "Cloud Assessment: Shared Responsibility na Prática",
    category: "Cloud",
    date: "Junho 2025",
    readTime: "7 min",
    content: [
      "O modelo de responsabilidade compartilhada (Shared Responsibility Model) é o pilar fundamental da segurança em nuvem. Ele define quem é responsável por quê: o provedor cloud (AWS, Azure, GCP) ou o cliente.",
      "De forma simplificada, o provedor é responsável pela segurança DA nuvem (infraestrutura física, rede, virtualização), enquanto o cliente é responsável pela segurança NA nuvem (dados, identidades, configurações, aplicações).",
      "O erro mais comum é assumir que a segurança é inteiramente responsabilidade do provedor. Na prática, configurações incorretas de IAM, buckets S3 expostos publicamente e credenciais compartilhadas são problemas do cliente — e são a causa da maioria dos incidentes em cloud.",
      "Um cloud assessment systematically evaluates these configurations against CIS Benchmarks and best practices. The scope typically covers IAM policies, storage permissions, network security groups, logging and monitoring, and compliance with relevant frameworks.",
      "Após o assessment, o cliente recebe um relatório detalhado com a postura de segurança atual, gaps identificados e um plano de remediação priorizado. Isso não apenas reduz riscos, mas também prepara a empresa para auditorias de compliance como SOC 2 e PCI-DSS.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.content[0],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <Section>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-4xl font-normal text-text-primary">
            Post não encontrado
          </h1>
          <p className="mt-4 text-text-muted">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link href="/blog" className="mt-6 inline-block">
            <Button variant="secondary">Voltar ao Blog</Button>
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-medium text-accent">{post.category}</span>
            <span className="text-xs text-text-muted">{post.date}</span>
            <span className="text-xs text-text-muted">{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-normal tracking-tight text-text-primary sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-text-muted leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link href="/blog">
              <Button variant="secondary">Voltar ao Blog</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
