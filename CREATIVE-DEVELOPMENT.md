# Creative Development — Incoquinita

> Proposta consolidada de evolução visual e experiencial do site, com foco em **intro de entrada**, **3D de marca**, motion narrativa e uso intencional do logo **?**.
>
> Complementa o [`PLANO-WEBSITE.md`](./PLANO-WEBSITE.md). Criado em junho/2025.

---

## 1. Diagnóstico — onde estamos

### O que já melhorou (implementado)

| Aspecto | Antes | Agora |
|---|---|---|
| Paleta | Slate + ciano elétrico | `#0E0E0E` / `#FAFAF8` + âmbar — alinhado a NEVERHACK/Orenda |
| Tipografia | Space Grotesk + Inter | Instrument Serif + IBM Plex Sans |
| Hero | Canvas radar / partículas / rede de nós | Fade-in editorial, alinhado à esquerda |
| Serviços | Grid de cards + ícones Lucide | Lista numerada editorial |
| CTA final | Gradiente + blur orbs | Bloco sólido com borda |
| Cards | Hover glow accent | Hover sutil em borda |

**Veredicto:** a base visual saiu do território “template AI cyber”. O site já passa no teste de credibilidade editorial.

### O que ainda falta (creative development)

| Camada | Status | Referência Awwwards |
|---|---|---|
| Intro de loading (click / Enter) | ❌ Ausente | CyberConvoy, SEQRYPTON |
| Objeto 3D de marca | ❌ Ausente | NEVERHACK, MOKN |
| Logo `?` na interface | ❌ Removido — só wordmark | SEQRYPTON (tipo → logo) |
| Page transitions | ❌ Ausente | NEVERHACK, Orenda |
| Scroll storytelling | ⚠️ Parcial (lista serviços) | NEVERHACK, CyberConvoy |
| Mask reveal | ❌ Ausente | Orenda |
| Ferramenta interativa | ❌ Ausente | Dispel (ROI calculator) |
| Framer Motion | ⚠️ Instalado, não usado | — |
| GSAP / Three.js | ❌ Não instalado | NEVERHACK, MOKN |

**Veredicto:** falta a camada **experiencial** que sites premiados no Awwwards têm — não mais polish de CSS, mas rituais de entrada, objetos de marca e motion com narrativa.

---

## 2. Correção de direção — o `?` é a marca

O `PLANO-WEBSITE.md` (§6.7) lista logo `?` como anti-pattern. **Isso deve ser corrigido.**

O ponto de interrogação **não é placeholder** — é o símbolo da Incoquinita:

- **Incógnita** → interrogação como metáfora central
- **Proposta de valor** → “iluminamos o que você não vê” = revelar o `?`
- **Diferenciação** → nenhum concorrente usa `?` como hero 3D (paralelo direto com MOKN e seu símbolo 3D)

### O que estava errado antes

`?` dentro de um quadrado genérico `bg-accent/10` parecia bootstrap não terminado.

### O que fazer agora

Tratar o `?` como **glifo de marca** — tipográfico ou 3D — com peso, material, animação e presença intencional.

### Aplicações do `?`

| Local | Tratamento |
|---|---|
| **Intro fullscreen** | Protagonista — grande, central, animado |
| **Hero desktop** | Objeto 3D ou SVG grande à direita do texto |
| **Header** | Lockup `? Incoquinita` ou só `?` compacto |
| **Favicon** | `?` âmbar sobre `#0E0E0E` |
| **OG image** | `?` + wordmark + tagline |
| **404** | `?` com glitch sutil (referência NEVERHACK) |
| **Loading states** | Pulsação mínima do `?` |

---

## 3. Site Intro — experiência de entrada

### Objetivo

Criar um **ritual de entrada** antes do conteúdo principal — padrão CyberConvoy / SEQRYPTON. O usuário **escolhe** entrar (click ou Enter), não é forçado a esperar.

### Fluxo proposto

```
┌─────────────────────────────────────────────────────────┐
│  FASE 1 (0–1.2s)                                        │
│  Tela sólida #0E0E0E                                    │
│  "?" central — tipografia Instrument Serif oversized    │
│  ou objeto 3D leve                                      │
├─────────────────────────────────────────────────────────┤
│  FASE 2 (1.2–2s)                                        │
│  Feixe de luz / reveal passa sobre o "?"                │
│  Metáfora: incógnita → visibilidade                     │
├─────────────────────────────────────────────────────────┤
│  FASE 3 (2s+)                                           │
│  Aparece "Incoquinita" abaixo ou ao lado                  │
│  Texto: "Pressione Enter ou clique para continuar"      │
│  Botão secundário: "Pular" (sempre visível)             │
├─────────────────────────────────────────────────────────┤
│  INTERAÇÃO                                              │
│  Enter · Space · Click → transição para hero            │
│  Transição sugerida: mask reveal ou scale do "?"        │
│  para posição do header (FLIP animation)                │
└─────────────────────────────────────────────────────────┘
```

### Regras de UX

| Regra | Implementação |
|---|---|
| Nunca bloquear sem escape | Botão "Pular" + tecla Escape |
| `prefers-reduced-motion` | Skip automático para hero, sem overlay |
| Primeira visita da sessão | `sessionStorage.setItem('intro-seen', '1')` |
| Retorno na mesma sessão | Intro não repete |
| SEO | Conteúdo principal no DOM; overlay é camada visual por cima |
| Performance | Intro não carrega Three.js pesado — 3D leve ou SVG na intro; hero 3D carrega após dismiss |
| Escopo | Intro **só na home** (`/`) na v1; expandir para global depois se fizer sentido |

### Componente

```
components/creative/SiteIntro.tsx
```

**Props / estado:**
- `onComplete: () => void` — callback ao dismiss
- Estados: `idle` → `animating` → `awaiting-input` → `exiting` → `done`

**Montagem:** em `app/page.tsx` ou wrapper `HomeExperience` — **não** no layout global (evita intro em `/contato`, `/blog`, etc.).

---

## 4. Modelo 3D — objeto de marca

### Conceito: "Interrogatio"

Glifo `?` como objeto tridimensional — não emoji, não ícone stock.

**Visual:**
- Forma: `?` extrudado ou anel toroidal abstrato (gap = interrogação)
- Material: matte escuro (`#1A1A1A`) + edge highlight âmbar (`--accent`)
- Iluminação: spot animado tipo scan passando pelo objeto
- Comportamento desktop: rotação lenta idle; parallax sutil no scroll
- Comportamento mobile: vídeo WebM loop **ou** SVG estático (sem WebGL)

**Narrativa:** o feixe de luz que percorre o `?` materializa “Iluminamos o que você não vê”.

### Opções técnicas

| Abordagem | Prós | Contras | Recomendação |
|---|---|---|---|
| **React Three Fiber + drei** | Controle total, scroll-linked, interativo | Bundle ~150–400kb, dev time | ✅ Hero + integração com intro |
| **Spline** (embed/export) | Rápido, designer-friendly | Menos controle fino no código | MVP visual em poucos dias |
| **Vídeo WebM loop** | Performance previsível | Não interativo | ✅ Fallback mobile |
| **CSS 3D** (`transform`, `perspective`) | Zero deps | Limitado | Intro simples antes do 3D real |

### Stack recomendada

```json
{
  "@react-three/fiber": "latest",
  "@react-three/drei": "latest",
  "three": "latest",
  "gsap": "latest"
}
```

Manter `framer-motion` **ou** migrar tudo para GSAP — evitar duas libs de animação sem uso.

### Performance

```tsx
// dynamic import — sem SSR
const QuestionMark3D = dynamic(
  () => import('@/components/creative/QuestionMark3D'),
  { ssr: false, loading: () => <QuestionMarkFallback /> }
);
```

| Regra | Detalhe |
|---|---|
| Canvas só na home | Páginas internas sem WebGL |
| `dpr={[1, 1.5]}` | Limitar pixel ratio em mobile |
| Pause off-screen | `IntersectionObserver` — pausar render quando fora da viewport |
| Fallback | `QuestionMarkFallback.tsx` — SVG `?` grande para reduced-motion e WebGL indisponível |
| Lighthouse | Meta: Performance > 85 na home **com** 3D; > 90 nas demais páginas |

### Layout hero revisado

```
┌──────────────────────────────────────────────────────────┐
│  [Header oculto até intro dismiss]                       │
├────────────────────────────┬─────────────────────────────┤
│  Eyebrow / lockup ?        │                             │
│  Headline (Instrument)     │     [QuestionMark3D]        │
│  Subheadline               │     ou vídeo loop           │
│  CTAs                      │                             │
│  (max-w ~50%)              │     (50% desktop)           │
├────────────────────────────┴─────────────────────────────┤
│  Mobile: 3D/vídeo acima ou atrás do texto (opacity baixa)│
└──────────────────────────────────────────────────────────┘
```

---

## 5. Motion e interações

Priorizar **poucos momentos memoráveis** sobre micro-animações em tudo (Awwwards: Usability = 30% do score).

### Mapa de prioridades

| Interação | Prioridade | Referência | Onde |
|---|---|---|---|
| Site Intro (click/Enter) | 🔴 Alta | CyberConvoy, SEQRYPTON | Home |
| Hero 3D + luz scan | 🔴 Alta | NEVERHACK, MOKN | Home |
| Transição intro → hero/header | 🔴 Alta | Orenda (mask) | Home |
| Page transitions | 🟡 Média | NEVERHACK | Layout / App Router |
| Scroll stacking (metodologia) | 🟡 Média | NEVERHACK, CyberConvoy | Home + `/metodologia` |
| Mask reveal em seções | 🟡 Média | Orenda | `/metodologia`, `/cases` |
| Calculadora de escopo | 🟡 Média | Dispel | `/proposta` ou home |
| Camadas de segurança interativas | 🟢 Baixa | CyberConvoy | `/metodologia` |
| 404 custom com glitch | 🟢 Baixa | NEVERHACK, Dispel | `not-found.tsx` |
| Cursor custom | ⚪ Opcional | — | Descartar na v1 |

### Page transitions

**Opção A — View Transitions API (Next.js):**
- Nativo, leve, progressive enhancement
- Fade ou slide entre rotas principais

**Opção B — GSAP + barba.js ou Framer `AnimatePresence`:**
- Mais controle, mais código
- Usar se View Transitions não cobrir casos específicos

### Metodologia — scroll storytelling

Substituir timeline zig-zag estática por **stacking cards** no scroll:

- Cards empilham conforme o usuário desce
- Cada fase (Scoping → Retest) revela com pin/sticky
- Referência: NEVERHACK scroll cards, CyberConvoy layers

### Regra de ouro

**Máximo 2 momentos "wow" por visita:** intro + hero 3D. O resto do site permanece editorial e rápido.

---

## 6. Identidade visual — ajustes pendentes

### Paleta (manter — já implementada)

| Token | Light | Dark |
|---|---|---|
| `--bg-primary` | `#FAFAF8` | `#0E0E0E` |
| `--text-primary` | `#1A1A1A` | `#F5F5F0` |
| `--text-muted` | `#6B6B6B` | `#9C9C9C` |
| `--accent` | `#C4841D` | `#D4A843` |

✅ Paleta enxuta, não-ciano — alinhada ao benchmark.

### Tipografia (manter — já implementada)

- Display: **Instrument Serif**
- Corpo: **IBM Plex Sans**

**Ajuste:** remover eyebrow genérico `"Consultoria em Cibersegurança"` do hero ou substituir por lockup `? · Consultoria`.

### Logo / lockup no header

**Atual:** só wordmark `Incoquinita`.

**Proposto:**

```
?  Incoquinita
```

- `?` em Instrument Serif, tamanho ligeiramente maior, cor `--accent` ou `--text-primary`
- Hover: `?` recebe highlight âmbar
- Após intro: animação FLIP do `?` fullscreen para posição do header

### Favicon e OG

- [ ] Favicon: `?` sobre `#0E0E0E`
- [ ] `apple-touch-icon`
- [ ] OG image por página com `?` + wordmark
- [ ] Pasta `public/og/` (já prevista no plano)

---

## 7. Componentes — arquitetura de pastas

```
components/
├── creative/                        # NOVO — experiências premium
│   ├── SiteIntro.tsx                # Overlay fullscreen, keyboard + click
│   ├── IntroTransition.tsx          # GSAP timeline intro → main
│   ├── QuestionMark3D.tsx           # R3F canvas (dynamic, no SSR)
│   ├── QuestionMarkFallback.tsx     # SVG estático / reduced-motion
│   └── useIntroSeen.ts              # Hook sessionStorage
├── layout/
│   ├── Header.tsx                   # Adicionar lockup ? Incoquinita
│   └── Footer.tsx                   # Manter wordmark; ? opcional
├── sections/
│   ├── Hero.tsx                     # Layout assimétrico + slot 3D
│   ├── MethodologyPreview.tsx       # Migrar para stacking cards
│   └── ...
└── ui/                              # Manter — sem mudanças estruturais
```

### Integração no App Router

```tsx
// app/page.tsx (conceitual)
export default function Home() {
  return (
    <HomeExperience>
      <Hero />
      <ServicesHighlight />
      <MethodologyPreview />
      <WhyIncoquinita />
      <SocialProof />
      <CtaFinal />
    </HomeExperience>
  );
}

// HomeExperience: gerencia estado introSeen, renderiza SiteIntro condicionalmente
```

---

## 8. Melhorias editoriais (sem 3D)

Quick wins que elevam o site antes ou em paralelo ao 3D:

| # | Mudança | Impacto |
|---|---|---|
| 1 | Lockup `? Incoquinita` no header + favicon | Identidade imediata |
| 2 | Hero assimétrico com espaço reservado para 3D | Prepara layout |
| 3 | Remover ou refinar eyebrow do hero | Menos template |
| 4 | Ativar Framer Motion **ou** remover do `package.json` | Deps limpas |
| 5 | Screenshots redigidos de entregáveis em `/metodologia` | Credibilidade real |
| 6 | Logos monocromáticos de clientes/setores (se disponíveis) | Prova social visual |
| 7 | Thumbnails no blog | Menos vazio |
| 8 | 404 custom | Detalhe premium |
| 9 | Megamenu ou submenu de serviços (futuro) | Referência Netwrix |

---

## 9. Ferramentas interativas (conversão)

Referência Dispel (ROI Calculator) — diferencial visual **e** de lead qualificado.

### Opção A — Quiz de maturidade (recomendado — já no plano §8)

- 8–10 perguntas → score + nível + recomendações
- CTA: "Quer um assessment completo?"
- Visual: progress bar custom, não form genérico

### Opção B — Calculadora de escopo de pentest

- Inputs: nº apps, IPs, cloud accounts
- Output: faixa de dias + complexidade
- Disclaimer: estimativa; proposta formal após scoping

**Recomendação:** implementar na Fase 3, após intro + 3D estabilizados.

---

## 10. Acessibilidade e performance

### Acessibilidade

| Cenário | Comportamento |
|---|---|
| `prefers-reduced-motion: reduce` | Skip intro; SVG estático no hero; sem WebGL |
| Teclado | Enter/Space dismiss intro; Escape = skip; foco visível |
| Screen reader | Intro anunciada como `role="dialog"`; botão "Pular" com label claro |
| Contraste | Manter WCAG AA com paleta atual |

### Performance budget (home com 3D)

| Métrica | Meta |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| JS total (home) | < 300kb gzip (incluindo three chunk lazy) |
| Lighthouse Performance | > 85 (home) · > 90 (demais páginas) |

### Segurança

- 3D e animações não expõem dados sensíveis
- `npm audit` no CI (já previsto no plano)
- Chunks de Three.js servidos com cache longo

---

## 11. Correções ao PLANO-WEBSITE.md

Itens a atualizar no plano principal quando conveniente:

| Seção | De | Para |
|---|---|---|
| §6.2 Objeto simbólico | "desenhado, não emoji ?" | **`?` é o logo — elevar para 3D/tipografia de marca** |
| §6.7 Anti-pattern | "Logo real, não placeholder ?" | **"? intencional como símbolo; evitar caixinha genérica accent/10"** |
| §6.6 Intro de carga | Prioridade Média | **Prioridade Alta — spec neste documento §3** |
| §6.5 Assets | "substituir ?" | **Produzir ? SVG + ? 3D + favicon** |
| §10 Fase 4 | Refatorar hero canvas | ✅ Canvas já removido — substituir por **intro + 3D** |
| §6.6 | Hero scan/partículas remover | ✅ Feito — próximo: implementar §4 |

---

## 12. Roadmap de implementação

### Tier 1 — Assinatura imediata (1–2 semanas)

- [ ] `SiteIntro.tsx` — click/Enter, skip, Escape, reduced-motion, sessionStorage
- [ ] `QuestionMarkFallback.tsx` — SVG `?` para intro e fallback
- [ ] Lockup `? Incoquinita` no Header + Footer
- [ ] Favicon + apple-touch-icon com `?`
- [ ] Transição intro → hero (CSS ou GSAP leve)
- [ ] Hero layout assimétrico (espaço reservado para 3D)
- [ ] `HomeExperience` wrapper em `app/page.tsx`

### Tier 2 — Profundidade visual (2–3 semanas)

- [ ] Instalar R3F + drei + three + gsap
- [ ] `QuestionMark3D.tsx` — objeto `?` + luz scan
- [ ] Integrar 3D no hero (desktop) + vídeo/SVG fallback (mobile)
- [ ] FLIP animation: `?` intro → posição header
- [ ] Page transitions (View Transitions API)
- [ ] Remover `framer-motion` se GSAP cobrir tudo — ou usar Framer só em intro

### Tier 3 — Diferenciação (2–3 semanas)

- [ ] Metodologia stacking cards (scroll storytelling)
- [ ] Mask reveal em `/metodologia` e `/cases`
- [ ] Calculadora de escopo ou quiz de maturidade
- [ ] OG images custom com `?`
- [ ] 404 custom
- [ ] Camadas de segurança interativas (opcional)

### Tier 4 — Polish (1 semana)

- [ ] Performance audit home com 3D
- [ ] Testes a11y (intro, teclado, screen reader, reduced-motion)
- [ ] Cross-browser WebGL (Safari iOS fallback)
- [ ] Lighthouse 85+ home, 90+ demais

---

## 13. Checklist pré-launch (creative)

- [ ] Intro funciona com Enter, click, Escape e "Pular"
- [ ] Intro respeita `prefers-reduced-motion`
- [ ] Intro não repete na mesma sessão
- [ ] `?` visível no header, favicon e OG
- [ ] 3D carrega lazy; fallback funciona sem WebGL
- [ ] Mobile não trava em WebGL pesado
- [ ] Máximo 2 momentos "wow" — resto editorial
- [ ] Page transitions não quebram back/forward do browser
- [ ] Nenhuma dep morta no `package.json`
- [ ] Screenshot do site **não** parece template ao lado de NEVERHACK/Orenda

---

## 14. Referências Awwwards (links)

| Site | Prêmio | O que copiar |
|---|---|---|
| [NEVERHACK](https://www.awwwards.com/sites/neverhack) | SOTD Jun/2025 | Hero 3D, page transitions, scroll cards |
| [Orenda Security](https://www.awwwards.com/sites/orenda-security) | SOTD Fev/2018 | Mask transition, minimal, assessment peer |
| [CyberConvoy](https://www.awwwards.com/sites/cyberconvoy) | Honorable Mention | Intro loading, camadas, stats carousel |
| [MOKN](https://www.awwwards.com/sites/mokn) | Nominee Dez/2025 | Símbolo 3D proprietário, storytelling |
| [SEQRYPTON](https://www.awwwards.com/sites/seqrypton) | Nominee Nov/2025 | Tipografia → logo no load |
| [Dispel](https://www.awwwards.com/sites/dispel) | Nominee Set/2025 | Calculadora ROI, ilustração custom, 404 |

---

## 15. Próximo passo imediato

1. Validar este documento com o time — especialmente conceito 3D do `?` e duração da intro
2. Implementar **Tier 1** (intro + lockup + favicon) — impacto alto, risco baixo, sem WebGL
3. Prototipar `QuestionMark3D` em Spline ou R3F em paralelo
4. Atualizar `PLANO-WEBSITE.md` §6 com correções da §11 deste documento

---

*Documento de creative development — Incoquinita. Junho/2025.*
