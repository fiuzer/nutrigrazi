# Nutrigrazi Landing Page

Landing page premium para nutricionista com foco em emagrecimento, GLP-1 e hábitos sustentáveis, desenvolvida com:

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Rodando localmente

```bash
npm install
npm run dev
```

Build de producao:

```bash
npm run lint
npm run build
npm start
```

## Estrutura principal

```text
src/
  app/
    api/leads/route.ts         # endpoint pronto para integrar CRM/automacao
    globals.css                # design system (paleta, tipografia, utilitarios)
    layout.tsx                 # metadata SEO principal
    opengraph-image.tsx        # imagem OG dinamica
    page.tsx                   # entrada da landing
    robots.ts                  # robots
    sitemap.ts                 # sitemap
    twitter-image.tsx          # imagem Twitter dinamica
  components/landing/
    contact-form.tsx           # formulario com validacao e UX
    landing-page.tsx           # composicao completa da landing
    section-title.tsx          # titulo de secao reutilizavel
  lib/
    landing-content.ts         # textos, cards, FAQ e dados da pagina
public/
  images/
```

## Edicoes rapidas

1. Copy e conteudo:
- Edite `src/lib/landing-content.ts`.

2. Nome, CRN, contato e redes:
- Edite o rodape em `src/components/landing/landing-page.tsx`.

3. SEO:
- Edite metadata em `src/app/layout.tsx`.
- Ajuste dominio/canonical, OG e Twitter.

4. JSON-LD:
- Edite `serviceSchema` e `faqSchema` em `src/components/landing/landing-page.tsx`.

5. Integracao de leads:
- Conecte `src/app/api/leads/route.ts` ao seu CRM, webhook, e-mail ou automacao.

## Direcao visual aplicada

- Estetica editorial premium com grids assimetricos
- Narrativa em secoes com composicao nao institucional
- Paleta suave (off-white, nude, verde e sage)
- Tipografia: `Cormorant Garamond` (titulos) + `Manrope` (texto)

## Observacoes

- O formulario ja faz validacao basica no front e validacao no backend.
- O endpoint atual retorna sucesso e esta pronto para integracao real.
- A pagina foi validada com `npm run lint` e `npm run build`.
