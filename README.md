# Nova AI Solutions — Sales Page

Sales page institucional premium. Stack 2026: **Next.js 16 · React 19 · Tailwind v4 · Motion 12 · Lenis**.

## 🚀 Rodar localmente

```bash
npm install
npm run dev
```
Abre em `http://localhost:3000`.

## ⚠️ Antes de publicar — trocar 3 coisas

1. **Número do WhatsApp** → `src/lib/utils.ts`, constante `WHATSAPP_NUMBER` (formato `55` + DDD + número, ex: `5511999999999`).
2. **Números da prova social** → `src/components/sections/ROI.tsx`, array `stats`. Hoje são ilustrativos (500+/92%/3x) e há uma nota visível na seção avisando — apague a nota (`* Métricas ilustrativas...`) quando colocar os reais.
3. **URL e SEO** → `src/app/layout.tsx` (constante `SITE_URL` e textos de metadata).

## 📦 Deploy na Vercel

1. Sobe o projeto pro GitHub.
2. Em vercel.com → New Project → importa o repositório.
3. Zero config (Vercel detecta Next 16 sozinho). Deploy.
4. Adicione `NEXT_PUBLIC_SITE_URL` nas Environment Variables (opcional).

Ou via CLI:
```bash
npx vercel --prod
```

## 🗂️ Estrutura

```
src/
├── app/
│   ├── layout.tsx        Fontes (next/font), SmoothScroll, metadata SEO
│   └── page.tsx          Pilar que acopla todas as seções
├── components/
│   ├── ui/
│   │   ├── button.tsx           GoldButton + GhostButton (link WhatsApp)
│   │   ├── dialog.tsx           Dialog leve (sem Radix — zero dependência extra)
│   │   ├── FloatingWhatsApp.tsx Botão flutuante
│   │   └── Reveal.tsx           Scroll reveal + Counter reutilizáveis
│   └── sections/
│       ├── Hero.tsx      Promessa + header + partículas douradas
│       ├── Shift.tsx     Caos operacional (dor) → soberania (virada)
│       ├── Showcase.tsx  3 serviços + como funciona
│       ├── ROI.tsx       Métricas com counter animado
│       ├── Invite.tsx    CTA final consultivo
│       ├── FAQ.tsx       Acordeão de objeções
│       └── Footer.tsx
├── context/
│   └── SmoothScroll.tsx  Lenis (respeita prefers-reduced-motion)
├── lib/
│   └── utils.ts          cn(), constantes WhatsApp, EASE
└── styles/
    └── globals.css       Tailwind v4 @theme + animações + noise
```

## 🎨 Identidade
- **Cores:** verde esmeralda `#1B5E43` + dourado champanhe `#C9A24B` sobre fundo `#0A1410`.
- **Tipografia:** Cormorant Garamond (display) + Plus Jakarta Sans (body).
- **Acessibilidade:** contraste alto, foco navegável, `prefers-reduced-motion` respeitado.

## 📝 Notas técnicas
- O `dialog.tsx` é autossuficiente (não usa Radix/shadcn) pra não exigir dependência extra. Se quiser o componente shadcn oficial depois, é só rodar `npx shadcn@latest add dialog` e trocar o import.
- Animações via **Motion 12** (`motion/react`) — a antiga `framer-motion` foi descontinuada nesse nome.
