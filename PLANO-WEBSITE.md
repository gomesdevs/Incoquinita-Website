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
- Identidade **proprietária**, não template cyber genérico (benchmark Awwwards em §6.1)
- Paleta restrita (2–3 cores de marca) — dark **ou** light conforme posicionamento, não slate+ciano por default
- Tipografia com personalidade editorial; motion ligada ao conceito (transições, reveal, scroll storytelling)
- Acessibilidade WCAG AA, mobile impecável, estados de loading/erro cuidados
- Usabilidade > espetáculo: sites premiados pontuam forte em clareza (30% do score Awwwards)

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
   - Visual: **metáfora de marca proprietária** (ex.: máscara/reveal, camadas, luz sobre o oculto) — ver §6.1 e §6.4; **não** radar/partículas/rede genérico

2. **Serviços em destaque**
   - 3–4 ofertas principais com layout **editorial ou scroll cards** (NEVERHACK) — não grid clone de cards
   - Cada item: ícone custom **ou** tipografia forte, título, descrição de 2 linhas, link "Saiba mais"

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

> **Referência de mercado:** pesquisa Awwwards (jun/2025) em consultorias, assessment e empresas de cibersegurança — sites com SOTD, Honorable Mention ou Nominee no mesmo ramo da Incoquinita.

### 6.1 Benchmark Awwwards — cibersegurança e consultoria

#### Sites analisados

| Site | Prêmio Awwwards | Perfil | O que fazem visualmente |
|---|---|---|---|
| [NEVERHACK](https://www.awwwards.com/sites/neverhack) | **SOTD** (Jun/2025) · 7.38 | Consultoria cyber enterprise | Paleta **2 cores** (#0E0E0E + #FFF); hero **3D/WebGL**; menu por use case; scroll cards; **page transitions**; glitch como interação de marca; timeline; mapa de escritórios |
| [Orenda Security](https://www.awwwards.com/sites/orenda-security) | **SOTD** (Fev/2018) · 7.27 | **Assessment / pentest** (peer direto) | Paleta **3 cores** (#000, #9C9C9C, #FFF); **mask transition** como assinatura; imagens grandes; parallax; minimal/clean; GSAP + React (Locomotive) |
| [CyberConvoy](https://www.awwwards.com/sites/cyberconvoy) | Honorable Mention (Fev/2024) | Cyber solutions | Roxo escuro (#090617 + #67649F), **não ciano**; intro de loading; stats carousel; **camadas de segurança** interativas; parallax blur; slider horizontal |
| [Fidus Information Security](https://www.awwwards.com/sites/fidus-information-security) | Nominee (Set/2020) | **Consultoria de segurança** | UI corporativa limpa; foco em credibilidade B2B, não efeitos hacker |
| [MOKN](https://www.awwwards.com/sites/mokn) | Nominee (Dez/2025) | Startup cyber | **Símbolo 3D proprietário** (isca/metáfora); storytelling do founder; site “business card”; GSAP |
| [Dispel](https://www.awwwards.com/sites/dispel) | Nominee (Set/2025) | Cyber OT/infra | Animação de landing; **calculadora ROI** interativa; **ilustração custom**; 404 custom; clean + Framer |
| [Netwrix](https://www.awwwards.com/sites/netwrix) | Nominee (Dez/2025) | Cyber enterprise (rebrand) | **Megamenu**; microinterações consistentes; hero + scroll animado; **resource center com filtros**; voz de marca unificada |
| [SEQRYPTON](https://www.awwwards.com/sites/seqrypton) | Nominee (Nov/2025) | Cyber / crypto | Tipografia animada → logo; stacking cards; vídeo sticky no scroll; page load experience |
| [Advenica](https://www.awwwards.com/sites/advenica-com) | Nominee (Nov/2025) | High-assurance cyber | Confiança via **conteúdo claro + UX intuitiva**; moderno sem theatrics |

#### Padrões recorrentes nos premiados (aplicar)

1. **Paleta enxuta (2–3 cores)** — NEVERHACK usa só preto e branco; Orenda usa cinza + preto + branco. Accent colorido é exceção, não regra.
2. **Metáfora visual proprietária** — MOKN (isca 3D), Orenda (mask reveal), CyberConvoy (camadas). Não ícone de cadeado/rede genérica.
3. **Motion com narrativa** — scroll cards, stacking reveals, transições de página, intro de carga. Animação **explica** o serviço ou reforça a marca.
4. **Ferramentas interativas** — Dispel (ROI calculator), CyberConvoy (layers). Convertem e demonstram expertise melhor que cards estáticos.
5. **Tipografia como identidade** — títulos grandes, animação tipográfica, marquees (SEQRYPTON, NEVERHACK). Fonte **não** pode ser o combo Space Grotesk + Inter default.
6. **Prova visual real** — mapas, stats carousel, vídeo, fotografia/ilustração custom. Depoimentos **com** contexto visual (logo, setor, foto blur).
7. **Navegação profunda** — megamenu ou menu por use case (NEVERHACK, Netwrix) para muitos serviços sem grid repetitivo.
8. **Usabilidade pesada no score** — Awwwards: Design 40%, **Usability 30%**, Creativity 20%, Content 10%. Clareza e IA de informação importam tanto quanto efeito visual.

#### O que os premiados evitam (e o protótipo atual repete)

| Clichê genérico | O que sites Awwwards fazem em vez disso |
|---|---|
| Slate + ciano elétrico (#22d3ee) | Paleta monocromática ou accent único não-ciano (roxo, coral, off-white) |
| Canvas radar / partículas / rede de nós | 3D/metáfora de marca, vídeo, ilustração, mask reveal |
| Ícones Lucide em caixinha `accent/10` | Ícones custom, ilustração, ou tipografia forte sem ícone |
| Cards idênticos em grid 3×N | Scroll storytelling, cards empilhados, slider horizontal |
| Gradientes + blur orbs no CTA | Bordas tipográficas, contraste forte, ou bloco sólido de marca |
| Logo placeholder “?” | Wordmark ou símbolo desenhado (mesmo provisório, mas intencional) |
| Seções alternadas bg/bg-secondary | Ritmo editorial: full-bleed image, blocos assimétricos, whitespace generoso |
| Dark mode “porque é cyber” | Dark **ou** light escolhido pelo posicionamento; consultorias de assessment premiadas usam ambos |

#### Referências mais próximas da Incoquinita

Por perfil (consultoria de assessment/pentest, PME/mid-market):

1. **Orenda Security** — serviços de assessment; visual minimal; interação signature (mask)
2. **Fidus Information Security** — consultoria pura; UI corporativa
3. **NEVERHACK** — escala aspiracional; navegação por use case; motion premium
4. **MOKN** — startup cyber; metáfora visual única + storytelling

---

### 6.2 Conceito (revisado)

**Incógnita → Visibilidade → Segurança**

Metáforas visuais **proprietárias** a explorar na Fase 0 (escolher **uma** e executar com rigor):

| Direção | Referência Awwwards | Aplicação Incoquinita |
|---|---|---|
| **Reveal / máscara** | Orenda (mask transition) | Incógnita sendo “iluminada” — áreas ocultas reveladas no scroll ou hover |
| **Camadas** | CyberConvoy (security layers) | Superfícies de ataque em camadas empilhadas, interativas |
| **Luz sobre o escuro** | NEVERHACK (3D hero) | Objeto 3D ou ilustração com feixe de luz — **não** radar 2D canvas |
| **Objeto simbólico** | MOKN (3D bait) | **`?` é a marca** — interrogação como glifo de marca em 3D/tipografia, protagonista do intro e do hero. Não é placeholder, é símbolo de "iluminar o que você não vê" |

**Evitar:** mapas de rede genéricos, scan/radar canvas, partículas conectadas, matrix green, terminal falso, cadeados stock.

---

### 6.3 Paleta (revisar na Fase 0 — benchmark-driven)

Premiados usam **2–3 cores**. Proposta: definir paleta no brand book **antes** de implementar tokens.

#### Opção A — Monocromática + accent quente (inspirada NEVERHACK / Orenda)

| Token | Uso | Direção |
|---|---|---|
| `--bg-primary` | Fundo | `#0E0E0E` ou off-black |
| `--bg-secondary` | Cards, seções | `#1A1A1A` ou cinza neutro |
| `--text-primary` | Títulos, corpo | `#FFFFFF` ou `#F5F5F0` (off-white) |
| `--text-muted` | Subtítulos | `#9C9C9C` (Orenda) ou equivalente |
| `--accent` | CTAs, highlights | **Uma** cor de marca — coral, âmbar, violeta profundo — **não** ciano Tailwind |

#### Opção B — Claro e confiável (tendência 2025–2026 para GRC/assessment)

| Token | Uso | Direção |
|---|---|---|
| `--bg-primary` | Fundo | `#FAFAF8` ou branco quente |
| `--text-primary` | Corpo | `#1A1A1A` |
| `--accent` | CTAs | Cor saturada única (ex.: violeta, terracota) |

#### Tokens funcionais (independente da opção)

| Token | Uso |
|---|---|
| `--success` / `--warning` / `--danger` | Apenas métricas, severidade CVSS, estados de form — **não** decoração |

> **Nota:** o protótipo atual (`#0a0e17` + `#22d3ee`) coincide com o template “AI cyber” identificado na auditoria visual. Substituir na Fase 0.

---

### 6.4 Tipografia (revisada)

Evitar o trio **Space Grotesk + Inter + JetBrains Mono** — é o default de output generativo.

| Uso | Direção (escolher par exclusivo na Fase 0) | Referência |
|---|---|---|
| Display / títulos | Fonte com carácter: **Instrument Serif**, **Fraunces**, **Söhne**/Helvetica Now, **Neue Montreal**, **PP Neue Corp** | NEVERHACK, SEQRYPTON usam tipografia como hero |
| Corpo | Alta legibilidade: **IBM Plex Sans**, **Geist**, **Source Sans 3**, **Suisse Int'l** | Orenda, Fidus — corporativo limpo |
| Código / técnico | Apenas em snippets reais (relatórios, CVE) — **não** como eyebrow decorativo no hero |

Tratamentos tipográficos dos premiados a considerar:
- Títulos **oversized** com tracking negativo
- Animação de condensação/expansão no load (SEQRYPTON)
- Marquee de credenciais/frameworks (NEVERHACK) — com moderação

---

### 6.5 Componentes visuais (revisados)

| Elemento | Antes (protótipo) | Direção Awwwards |
|---|---|---|
| Ícones | Lucide em caixa `accent/10` | Ícones **custom** por serviço **ou** zero ícones — tipografia + cor basta |
| Cards | Grid 3 colunas idênticos | Scroll cards, stacking, ou lista editorial assimétrica |
| Ilustração | Abstrata genérica | Ilustração **commissioned** ou 3D de metáfora de marca (MOKN, Dispel) |
| Prova social | Badges de setor + blockquote | Logos monocromáticos, stats carousel (CyberConvoy), vídeo depoimento |
| CTAs | Gradiente + blur orbs | Bloco sólido de alto contraste ou borda tipográfica |
| Navegação | Links horizontais flat | Megamenu por serviço **ou** menu por use case (NEVERHACK) |
| Footer | Grid 4 colunas padrão | Mapa, stats, ou bloco editorial — diferenciar |

Assets obrigatórios (Fase 0):
- Logo/wordmark final (substituir “?”)
- Favicon + OG images por página
- 1 ilustração ou render 3D hero
- Screenshots redigidos de entregáveis reais (relatório, debrief)

---

### 6.6 Motion e interação (revisados)

Priorizar **poucas interações memoráveis** sobre micro-animações em tudo.

| Interação | Prioridade | Referência |
|---|---|---|
| **Intro de entrada** (click/Enter, fullscreen `?` → FLIP para header) | **Alta** | CyberConvoy, SEQRYPTON |
| **Objeto 3D de marca** (`?` extrudado, scan animado) | **Alta** | NEVERHACK, MOKN |
| **Page transitions** (View Transitions API ou CSS) | Alta | NEVERHACK, Orenda |
| **Reveal no scroll** (máscara, clip-path, opacity) | Alta | Orenda, SEQRYPTON |
| **Scroll storytelling** (cards empilhados, sticky) | Média | NEVERHACK, CyberConvoy |
| **Calculadora / quiz interativo** | Alta (conversão) | Dispel (ROI), §8 Opção A/B |
| Canvas radar / partículas | **Remover** | Clichê — substituir por metáfora §6.2 |

**Spec detalhada:** ver [`PLANO-ACAO-CREATIVE.md`](./PLANO-ACAO-CREATIVE.md) e [`CREATIVE-DEVELOPMENT.md`](./CREATIVE-DEVELOPMENT.md).

Stack motion sugerida:
- **GSAP + ScrollTrigger** ou **Framer Motion** — usar onde há narrativa; não instalar e deixar ocioso
- Respeitar `prefers-reduced-motion` (já no protótipo)

---

### 6.7 Anti-patterns — checklist visual pré-implementação

Antes de mergear qualquer componente visual, validar:

- [ ] Paleta tem ≤ 3 cores de marca (+ tokens funcionais)?
- [ ] Hero usa metáfora proprietária, não canvas genérico?
- [ ] **`?` é marca intencional** (intro, 3D hero, header lockup) — não caixinha `bg-accent/10` genérica
- [ ] Fonte display **não** é Space Grotesk/Inter combo default?
- [ ] Ícones são custom ou ausentes — não grid Lucide repetido?
- [ ] Motion tem propósito narrativo (≤ 3 momentos memoráveis por página)?
- [ ] Existe pelo menos 1 asset visual real (foto, ilustração, screenshot)?
- [ ] CTA não usa gradient + blur orbs?
- [ ] Passaria no teste “screenshot ao lado de NEVERHACK/Orenda — parece do mesmo template?”

---

## 7. Stack técnica recomendada

### Core
| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework | **Next.js 15** (App Router) | SSG/SSR, SEO, API routes, ecossistema maduro |
| Estilo | **Tailwind CSS 4** | Design system rápido, consistência |
| Linguagem | **TypeScript** | Type safety, manutenibilidade |
| Conteúdo | **MDX** (blog/recursos) | Markdown + componentes React |
| Motion | **GSAP + ScrollTrigger** ou **Framer Motion** | Narrativa de scroll e page transitions (benchmark NEVERHACK/Orenda) — usar ou não instalar |
| Formulários | **React Hook Form + Zod** | Validação robusta |
| Ícones | **Custom SVG** por serviço; Lucide só em UI utilitária (menu, form) | Evitar grid de ícones genéricos (anti-pattern §6.7) |

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
- **Referência Awwwards:** [Dispel](https://www.awwwards.com/sites/dispel) (ROI Calculator) — ferramenta interativa como diferencial visual e de conversão

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
- [ ] **Benchmark review:** validar direção visual com §6.1–6.7 (Orenda, NEVERHACK, MOKN como north star)
- [ ] Definir brand book: logo final, paleta **2–3 cores**, tipografia exclusiva, tom de voz
- [ ] Escolher **uma** metáfora visual (§6.2) e produzir 1 asset hero (ilustração, 3D ou fotografia)
- [ ] Wireframes de todas as páginas (Figma ou similar) — layout editorial, não grid de cards clone
- [ ] Design system: tokens, componentes base, anti-patterns §6.7
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
- [ ] Motion refinada: page transitions + 1 interação signature (mask reveal ou scroll storytelling — §6.6)
- [ ] **Refatorar hero:** remover canvas radar/partículas; implementar metáfora §6.2
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
- [ ] Dark e/ou light mode funcionais (escolha intencional de §6.3, não default genérico)
- [ ] Favicon, OG images, apple-touch-icon
- [ ] Consistência visual em todas as páginas
- [ ] Anti-patterns §6.7 validados (sem slate+ciano, sem canvas genérico, sem logo “?”)
- [ ] ≥ 1 asset visual proprietário (ilustração, 3D, foto ou screenshot de entregável)

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
| Ícones de serviços (PNG) | Substituir por ícones **custom SVG** ou eliminar ícones (§6.5) |
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
2. Revisar §6.1–6.7 e escolher direção visual (Orenda vs MOKN vs NEVERHACK como referência principal)
3. Iniciar **Fase 0**: brand book + metáfora hero + wireframes + setup Next.js
4. Primeira entrega visível: **Home + 1 serviço + Contato** em deploy preview — já sem anti-patterns §6.7

---

*Documento criado em junho/2025. Atualizado em junho/2025 com benchmark Awwwards (§6.1). Revisar conforme decisões do time.*
