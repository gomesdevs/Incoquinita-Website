export const SITE = {
  name: "Incoquinita",
  tagline: "Iluminamos o que você não vê no seu ambiente digital.",
  description:
    "Consultoria especializada em cibersegurança. Pentest, cloud assessment, segurança wireless e mais.",
  url: "https://incoquinita.com.br",
  email: "contato@incoquinita.com.br",
  phone: "",
  whatsapp: "",
  linkedin: "",
};

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Metodologia", href: "/metodologia" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;

export const SERVICES = [
  {
    slug: "pentest-web",
    title: "Pentest Web",
    shortTitle: "Pentest Web",
    description:
      "Teste de intrusão em aplicações web com foco em OWASP Top 10, autenticação, autorização e lógica de negócio.",
    icon: "Globe",
    href: "/servicos/pentest-web",
  },
  {
    slug: "pentest-rede",
    title: "Pentest Rede / Infraestrutura",
    shortTitle: "Pentest Rede",
    description:
      "Auditoria de infraestrutura de rede com scanning, enumeração e exploração controlada alinhada ao PTES.",
    icon: "Network",
    href: "/servicos/pentest-rede",
  },
  {
    slug: "cloud-assessment",
    title: "Cloud Assessment",
    shortTitle: "Cloud Assessment",
    description:
      "Avaliação de segurança em AWS, Azure e GCP — IAM, storage, configurações e CIS Benchmarks.",
    icon: "Cloud",
    href: "/servicos/cloud-assessment",
  },
  {
    slug: "wifi-security",
    title: "Segurança Wireless",
    shortTitle: "Wi-Fi Security",
    description:
      "Auditoria de redes wireless, detecção de rogue APs e validação de segmentação de convidados.",
    icon: "Wifi",
    href: "/servicos/wifi-security",
  },
  {
    slug: "stress-test",
    title: "Teste de Carga e Resistência",
    shortTitle: "Stress Test",
    description:
      "Testes de carga e resistência para validar a disponibilidade e performance da sua aplicação.",
    icon: "Activity",
    href: "/servicos/stress-test",
  },
  {
    slug: "seguranca-pessoas",
    title: "Segurança para Pessoas",
    shortTitle: "Awareness",
    description:
      "Treinamento de awareness, simulação de phishing e políticas de segurança para colaboradores.",
    icon: "Users",
    href: "/servicos/seguranca-pessoas",
  },
] as const;

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Scoping",
    description:
      "Questionário detalhado, call de alinhamento e definição precisa do escopo do engagement.",
  },
  {
    number: "02",
    title: "Execução",
    description:
      "Testes realizados conforme metodologia acordada (OWASP WSTG, PTES, CIS) com ferramentas certificadas.",
  },
  {
    number: "03",
    title: "Relatório",
    description:
      "Entrega de relatório executivo e técnico com CVSS, evidências, PoC e recomendações priorizadas.",
  },
  {
    number: "04",
    title: "Debrief",
    description:
      "Call de apresentação dos findings com o time técnico e decisores, esclarecendo cada vulnerabilidade.",
  },
  {
    number: "05",
    title: "Retest",
    description:
      "Validação de correções para garantir que as vulnerabilidades foram devidamente remediadas.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Metodologia Rigorosa",
    description:
      "Alinhada a padrões internacionais como OWASP, PTES e CIS. Cada teste é documentado e reproduzível.",
  },
  {
    title: "Retest Incluso",
    description:
      "Não apenas encontramos vulnerabilidades — validamos que as correções funcionam antes de encerrar o engagement.",
  },
  {
    title: "Entregáveis Acionáveis",
    description:
      "Relatórios executivos para gestores e relatórios técnicos para devs. Cada vuln tem PoC e plano de remediação.",
  },
  {
    title: "Confidencialidade Total",
    description:
      "NDA padrão, dados criptografados e política rigorosa de handling de informações sensíveis dos clientes.",
  },
] as const;

export const SECTORS = [
  "Fintech",
  "Saúde",
  "Varejo",
  "Educação",
  "SaaS",
  "Indústria",
] as const;
