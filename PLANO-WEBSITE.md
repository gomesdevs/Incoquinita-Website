# Plano do Novo Website — Incoquinita

> **Objetivo:** construir um site **ALC** — *Awesome, Lovely and Complete* — que posicione a Incoquinita como consultoria de cibersegurança credível, memorável e pronta para converter visitantes em clientes.

---

## 1. Contexto e diagnóstico

### Situação anterior
- O repositório continha um projeto Create React App (`incoquinita-web`) no estado de boilerplate padrão — sem conteúdo real da empresa.
- Antes disso, existia um site estático (HTML/CSS) com serviços, habilidades e contato, removido em julho/2025 na migração para React.
- O conteúdo antigo tinha boas sementes (lista de serviços, dark mode, texto técnico), mas problemas de identidade (logo "?", tom de portfólio pessoal, HTML quebrado, ícones genéricos).

### Por que recomeçar do zero
- CRA não é a stack ideal para um site institucional com foco em SEO, performance e credibilidade.
- O boilerplate ativo prejudicava a imagem da empresa mais do que a ausência de site.
- Tempo não é constraint — dá para construir algo realmente diferenciado.

---

## 2. Visão e posicionamento

### Proposta de valor
> **Iluminamos o que você não vê no seu ambiente digital.**

A Incoquinita transforma incógnitas (superfícies de ataque desconhecidas, vulnerabilidades ocultas, riscos não quantificados) em visibilidade acionável — com metodologia rigorosa e entregáveis que clientes e times técnicos conseguem usar.

### Tom de voz
| Fazer | Evitar |
|---|---|
| Técnico, preciso, confiante | Jargão vazio ("protegemos seu espaço digital") |
| Acessível para decisores não-técnicos | Cosplay de hacker (matrix rain, terminal falso) |
| Tom de **empresa**, não CV pessoal | Flex de ferramentas sem contexto |
| Transparente sobre processo e entregáveis | Promessas genéricas sem substância |

### Público-alvo
1. **Primário:** decisores de TI/Security em PMEs e mid-market (CTO, CISO, Head de Infra)
2. **Secundário:** desenvolvedores e times de engenharia que influenciam a contratação
3. **Terciário:** founders de startups que precisam de assessment antes de due diligence

---

## 3. Pilares ALC

### Awesome — memorável e credível
- Identidade visual com conceito (incógnita → visibilidade → segurança)
- Conteúdo técnico real: metodologias, entregáveis, timelines de engagement
- Elemento interativo que demonstra expertise (quiz de maturidade, calculadora de escopo)
- Prova social: cases, certificações, setores atendidos

### Lovely — design premium
- Dark mode como default, light mode opcional
- Tipografia display + corpo legível, paleta sóbria com accent único
- Motion com propósito (scroll reveal, hover, page transitions) — nunca decorativa demais
- Acessibilidade WCAG AA, mobile impecável, estados de loading/erro cuidados

### Complete — cobertura total
- Arquitetura de informação com páginas profundas por serviço
- Blog/recursos para autoridade contínua
- Fluxos de conversão claros (formulário, calendário, WhatsApp)
- Páginas legais e política de segurança de dados

---

## 4. Arquitetura de informação

```
/
├── /                          Home
├── /sobre                     Sobre a empresa e time
├── /metodologia               Como trabalhamos (kickoff → retest)
├── /servicos
│   ├── /pentest-web           Teste de intrusão em aplicações web
│   ├── /pentest-rede          Teste de intrusão em infraestrutura
│   ├── /cloud-assessment      Avaliação de segurança em cloud
│   ├── /wifi-security         Segurança wireless
│   ├── /stress-test           Testes de carga e resistência
│   └── /seguranca-pessoas     Awareness e phishing simulation
├── /cases                     Estudos de caso (anonimizados)
├── /blog                      Artigos técnicos
├── /recursos                  Whitepapers, checklists, PDFs
├── /contato                   Formulário + calendário + canais
├── /proposta                  Formulário estruturado de solicitação
├── /privacidade               Política de privacidade
├── /termos                    Termos de uso
└── /seguranca                 Como tratamos dados de clientes
```

---

## 5. Conteúdo por página

### 5.1 Home (`/`)

**Seções (ordem sugerida):**

1. **Hero**
   - Headline: proposta de valor concreta
   - Subheadline: serviços principais em uma linha
   - CTAs: "Solicitar proposta" (primário) + "Conheça nossos serviços" (secundário)
   - Visual: animação sutil de "superfície de ataque" ou radar (estilizado, não gimmick)

2. **Serviços em destaque**
   - 3–4 cards dos serviços mais vendidos
   - Cada card: ícone custom, título, descrição de 2 linhas, link "Saiba mais"

3. **Por que Incoquinita**
   - 3–4 diferenciais (metodologia, entregáveis, retest incluso, confidencialidade)
   - Números se disponíveis ("X assessments realizados", "Y% vulns críticas em média")

4. **Metodologia resumida**
   - Timeline visual: Scoping → Execução → Relatório → Debrief → Retest
   - Link para `/metodologia`

5. **Prova social**
   - Logos de clientes ou "setores atendidos" (fintech, saúde, varejo...)
   - Depoimento (mesmo que 1 inicial)

6. **CTA final**
   - "Pronto para iluminar suas incógnitas?"
   - Formulário compacto ou botão para `/proposta`

7. **Footer**
   - Links, redes sociais, e-mail corporativo, copyright, links legais

---

### 5.2 Páginas de serviço (`/servicos/*`)

Cada serviço segue o **mesmo template**, com conteúdo específico:

| Seção | Conteúdo |
|---|---|
| Hero | Nome do serviço + one-liner + CTA |
| O problema | O que o cliente enfrenta sem esse serviço |
| O que inclui | Escopo, técnicas, ferramentas, frameworks (OWASP WSTG, PTES, CIS...) |
| Entregáveis | Relatório executivo, relatório técnico, evidências, plano de remediação |
| Processo | Passo a passo específico deste serviço |
| Pré-requisitos | O que o cliente precisa preparar |
| FAQ | 4–6 perguntas frequentes |
| CTA | "Solicitar proposta para [serviço]" |

#### Serviços herdados do site anterior (expandir):

**Pentest Web**
- OWASP Top 10, OWASP ASVS, WSTG
- Autenticação, autorização, injeção, XSS, SSRF, lógica de negócio
- Entregável: relatório com CVSS, PoC, recomendações priorizadas

**Pentest Rede / Infraestrutura**
- Scanning, enumeração, exploração controlada
- Firewalls, segmentação, serviços expostos
- Alinhamento PTES

**Cloud Assessment**
- AWS / Azure / GCP (conforme expertise do time)
- IAM, storage público, configurações, CIS Benchmarks
- Shared responsibility model explicado ao cliente

**Wi-Fi Security**
- Auditoria de redes wireless
- WPA/WPA2/WPA3, rogue APs, segmentação de convidados

**Stress Test**
- Testes de carga e resistência
- Diferenciar de pentest (disponibilidade vs. segurança)

**Segurança para Pessoas**
- Awareness training, phishing simulation
- Políticas de senha, MFA, engenharia social

---

### 5.3 Sobre (`/sobre`)

- História e missão da Incoquinita
- Valores (confidencialidade, rigor técnico, transparência)
- **Time:** foto, nome, cargo, bio curta, certificações, LinkedIn
- Tom de empresa — "nós", não "eu"

---

### 5.4 Metodologia (`/metodologia`)

- Fases detalhadas do engagement:
  1. **Scoping** — questionário, call de alinhamento, definição de escopo
  2. **Execução** — testes conforme metodologia acordada
  3. **Relatório** — entrega executiva + técnica
  4. **Debrief** — call de apresentação de findings
  5. **Retest** — validação de correções (se incluso)
- Frameworks e standards utilizados
- Política de confidencialidade e NDA
- Exemplo de estrutura de relatório (redacted/blur)

---

### 5.5 Cases (`/cases`)

- 2–4 estudos anonimizados
- Formato: **Desafio → Abordagem → Resultado → Métricas**
- Exemplo: "Identificamos 12 vulnerabilidades críticas em aplicação fintech; 100% remediadas em 30 dias após retest"

---

### 5.6 Blog (`/blog`)

**Artigos fundacionais sugeridos (Fase 2):**
1. "O que esperar do seu primeiro pentest web"
2. "OWASP Top 10 em 2025: o que mudou e o que fazer"
3. "Cloud Assessment: shared responsibility na prática"
4. "Como ler um relatório de pentest (guia para gestores)"
5. "Retest: por que validar correções é tão importante quanto encontrar vulns"

---

### 5.7 Recursos (`/recursos`)

- Checklist OWASP Top 10 (PDF)
- Template de questionário de scoping
- Guia de preparação para pentest
- Lead magnets para captura de e-mail (opcional, Fase 3)

---

### 5.8 Contato (`/contato`)

- Formulário: nome, e-mail, empresa, tipo de serviço, mensagem
- Integração Cal.com / Calendly para call de discovery
- WhatsApp Business
- LinkedIn da empresa
- E-mail corporativo: `contato@incoquinita.com.br` (ou domínio definido)
- Endereço/cidade (se aplicável)

---

### 5.9 Proposta (`/proposta`)

Formulário estruturado para qualificar leads:
- Tipo de serviço (multi-select)
- Tamanho do ambiente (nº apps, IPs, contas cloud)
- Urgência
- Já fez pentest antes? (sim/não)
- Orçamento estimado (faixas)
- Como nos encontrou

---

### 5.10 Páginas legais

- **Privacidade:** LGPD-compliant, cookies, dados coletados
- **Termos:** uso do site, limitações
- **Segurança:** como a Incoquinita trata dados de clientes durante engagements — diferencial forte para empresa de cybersec

---

## 6. Identidade visual

### Conceito
**Incógnita → Visibilidade → Segurança**

Visual que evoca: mapas de rede, superfícies de ataque, scan/radar, grids técnicos — sem cair no clichê "hacker green on black".

### Paleta sugerida (ajustar na Fase 0)

| Token | Uso | Valor sugerido |
|---|---|---|
| `--bg-primary` | Fundo principal | `#0a0e17` |
| `--bg-secondary` | Cards, seções | `#111827` |
| `--text-primary` | Títulos, corpo | `#f1f5f9` |
| `--text-muted` | Subtítulos, labels | `#94a3b8` |
| `--accent` | CTAs, links, highlights | `#22d3ee` (ciano) ou `#a78bfa` (violeta) |
| `--accent-hover` | Hover states | variante 10% mais clara |
| `--success` | Métricas positivas | `#34d399` |
| `--warning` | Alertas, vulns | `#fbbf24` |
| `--danger` | Crítico | `#f87171` |

### Tipografia

| Uso | Fonte sugerida | Fallback |
|---|---|---|
| Display / títulos | Syne, Clash Display, ou Space Grotesk | sans-serif |
| Corpo | IBM Plex Sans, Geist, ou Inter | sans-serif |
| Código / técnico | JetBrains Mono | monospace |

### Componentes visuais
- Ícones custom ou Lucide/Phosphor (consistente, não mix)
- Ilustrações: abstratas/geométricas, não stock photos de cadeado
- Cards com borda sutil + hover com glow leve no accent
- Gradientes apenas em hero e CTAs — resto flat/sóbrio

### Motion
- Scroll reveal (fade + translateY) nas seções
- Stagger nos cards de serviço
- Page transitions suaves (View Transitions API ou Framer Motion)
- Hero: animação de "scan" ou partículas discretas
- Respeitar `prefers-reduced-motion`

---

## 7. Stack técnica recomendada

### Core
| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework | **Next.js 15** (App Router) | SSG/SSR, SEO, API routes, ecossistema maduro |
| Estilo | **Tailwind CSS 4** | Design system rápido, consistência |
| Linguagem | **TypeScript** | Type safety, manutenibilidade |
| Conteúdo | **MDX** (blog/recursos) | Markdown + componentes React |
| Motion | **Framer Motion** | Animações declarativas |
| Formulários | **React Hook Form + Zod** | Validação robusta |
| Ícones | **Lucide React** | Consistente, leve |

### Alternativa mais leve
- **Astro 5 + React islands** — se prioridade máxima for performance e conteúdo estático; React só onde precisa de interatividade.

### CMS (Fase 3+, quando blog crescer)
- **Sanity** ou **Keystatic** — editar conteúdo sem redeploy

### Infra e DevOps
| Item | Solução |
|---|---|
| Hosting | Vercel ou Cloudflare Pages |
| Domínio | `incoquinita.com.br` (ou `.com`) |
| E-mail | Google Workspace ou Proton |
| CI/CD | GitHub Actions (lint, typecheck, build, preview deploy) |
| Analytics | Plausible ou Umami (privacy-friendly) |
| Monitoramento | Better Stack ou Uptime Kuma |
| Formulário | API route Next.js → Resend/SendGrid + webhook Slack |

### Segurança do próprio site
- HTTPS + HSTS
- Security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Dependências auditadas (`npm audit` no CI)
- Rate limiting no endpoint de contato
- Sanitização de inputs
- Sem secrets no client

---

## 8. Elemento interativo diferenciador

### Opção A — Quiz de Maturidade em Segurança (recomendado)
- 8–10 perguntas (MFA, backups, pentest, políticas, treinamento...)
- Resultado: score + nível (Inicial / Em desenvolvimento / Maduro / Avançado)
- Recomendações personalizadas por gap
- CTA: "Quer um assessment completo? Solicite proposta"
- Gera lead qualificado

### Opção B — Calculadora de Escopo de Pentest
- Inputs: nº de aplicações, IPs, ambientes cloud, autenticação
- Output: faixa de esforço (dias) e complexidade
- Disclaimer: estimativa, proposta formal após scoping

### Opção C — Checklist OWASP Top 10 interativo
- 10 itens com explicação + " sua empresa cobre isso?"
- Resultado visual tipo dashboard
- Compartilhável / exportável PDF

**Recomendação:** começar com **Opção A** na Fase 3 — maior valor de conversão.

---

## 9. Estrutura de pastas (Next.js)

```
incoquinita-website/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Home
│   ├── sobre/page.tsx
│   ├── metodologia/page.tsx
│   ├── servicos/
│   │   ├── page.tsx            # Listagem
│   │   ├── pentest-web/page.tsx
│   │   ├── pentest-rede/page.tsx
│   │   ├── cloud-assessment/page.tsx
│   │   ├── wifi-security/page.tsx
│   │   ├── stress-test/page.tsx
│   │   └── seguranca-pessoas/page.tsx
│   ├── cases/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── recursos/page.tsx
│   ├── contato/page.tsx
│   ├── proposta/page.tsx
│   ├── privacidade/page.tsx
│   ├── termos/page.tsx
│   ├── seguranca/page.tsx
│   └── api/
│       └── contact/route.ts
├── components/
│   ├── layout/                 # Header, Footer, Nav
│   ├── ui/                     # Button, Card, Input, Badge...
│   ├── sections/               # Hero, Services, CTA, Timeline...
│   └── interactive/            # MaturityQuiz, ScopeCalculator...
├── content/
│   ├── blog/                   # MDX posts
│   └── resources/              # MDX/PDF metadata
├── lib/
│   ├── utils.ts
│   ├── validations.ts          # Zod schemas
│   └── constants.ts            # Services, nav links, metadata
├── public/
│   ├── fonts/
│   ├── images/
│   └── og/                     # Open Graph images
├── styles/
│   └── globals.css
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 10. Roadmap de implementação

### Fase 0 — Fundação (1–2 semanas)
- [ ] Definir brand book: logo final, paleta, tipografia, tom de voz
- [ ] Wireframes de todas as páginas (Figma ou similar)
- [ ] Design system: tokens, componentes base
- [ ] Setup do projeto Next.js + Tailwind + TypeScript
- [ ] Configurar CI/CD, domínio, deploy preview
- [ ] Migrar/recuperar copy útil do site antigo (git history)

### Fase 1 — Core experience (2–3 semanas)
- [ ] Layout global (Header, Footer, Nav responsiva, dark/light mode)
- [ ] Home completa (todas as seções)
- [ ] 3 páginas de serviço prioritárias (Pentest Web, Cloud Assessment, Pentest Rede)
- [ ] Página Sobre (time, missão)
- [ ] Página Contato (formulário funcional)
- [ ] Deploy production com domínio

### Fase 2 — Profundidade (2–3 semanas)
- [ ] Páginas de serviço restantes (Wi-Fi, Stress Test, Segurança para Pessoas)
- [ ] Página Metodologia
- [ ] Página Proposta (formulário estruturado)
- [ ] 1–2 cases anonimizados
- [ ] Blog: 3 artigos fundacionais
- [ ] Páginas legais (privacidade, termos, segurança)

### Fase 3 — Diferenciação (2–3 semanas)
- [ ] Quiz de maturidade interativo
- [ ] Área de recursos (checklists PDF)
- [ ] OG images custom por página
- [ ] SEO técnico (sitemap, schema.org, meta tags)
- [ ] Newsletter / lead magnet (opcional)
- [ ] Mais 2–3 artigos de blog

### Fase 4 — Polish ALC (1–2 semanas)
- [ ] Motion refinada e page transitions
- [ ] Performance audit (Lighthouse 95+ em todas as páginas)
- [ ] Testes de acessibilidade (axe, teclado, screen reader)
- [ ] Security audit do site (headers, deps, form)
- [ ] Testes cross-browser e mobile
- [ ] Revisão de copy final
- [ ] Soft launch → feedback → ajustes → launch público

---

## 11. Checklist de "pronto para lançar"

### Conteúdo
- [ ] Zero placeholder (Lorem ipsum, "React App", ícones stock)
- [ ] Todas as páginas do mapa existem com conteúdo real
- [ ] Copy revisado (português correto, tom de empresa)
- [ ] E-mail corporativo configurado e testado

### Design
- [ ] Mobile impecável (320px → 1440px+)
- [ ] Dark e light mode funcionais
- [ ] Favicon, OG images, apple-touch-icon
- [ ] Consistência visual em todas as páginas

### Técnico
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Security headers configurados
- [ ] Formulários testados end-to-end
- [ ] `robots.txt` + `sitemap.xml`
- [ ] Analytics instalado
- [ ] CI/CD verde

### Negócio
- [ ] Alguém externo explica o que a Incoquinita faz em 30s na home
- [ ] Fluxo de proposta funciona (form → e-mail/Slack)
- [ ] Site passaria num vendor assessment básico

---

## 12. Conteúdo recuperável do site antigo

Do commit `e4340e8` (site estático original), recuperar e reescrever:

| Asset | Ação |
|---|---|
| Lista de 5 serviços | Expandir em páginas completas |
| Texto técnico de habilidades (OWASP, IDS/IPS, cloud) | Reescrever em tom empresa para `/sobre` e `/metodologia` |
| Dark mode toggle | Reimplementar no design system |
| WhatsApp + LinkedIn | Manter como canais em `/contato` |
| Ícones de serviços (PNG) | Substituir por ícones custom ou Lucide |
| Logo "?" | Substituir por logo real |
| Link LinkedIn pessoal | Trocar por LinkedIn da empresa |

---

## 13. Métricas de sucesso (pós-launch)

| Métrica | Meta inicial (3 meses) |
|---|---|
| Lighthouse scores | > 90 em todas as categorias |
| Tempo na página (home) | > 45s |
| Taxa de conversão (visita → formulário) | > 2% |
| Artigos de blog publicados | ≥ 5 |
| Posição Google (keywords long-tail) | Top 20 para 3+ termos |
| Uptime | 99.9% |

---

## 14. Próximo passo imediato

1. Validar este plano com o time (ajustar serviços, tom, prioridades)
2. Iniciar **Fase 0**: brand book + wireframes + setup Next.js
3. Primeira entrega visível: **Home + 1 serviço + Contato** em deploy preview

---

*Documento criado em junho/2025. Atualizar conforme decisões do time.*
