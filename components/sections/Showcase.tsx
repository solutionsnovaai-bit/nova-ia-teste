"use client";

import {
  MessageSquareText,
  PenLine,
  Target,
  Search,
  Settings2,
  Layers,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    icon: MessageSquareText,
    title: "Agentes de WhatsApp com IA",
    desc: "Atendentes inteligentes que respondem em segundos, qualificam e nutrem leads 24/7 — com o tom da sua marca, nunca robótico.",
  },
  {
    icon: PenLine,
    title: "Conteúdo & Edição",
    desc: "Produção visual e editorial de alto padrão, da identidade ao post diário, no ritmo que a presença digital de elite exige.",
  },
  {
    icon: Target,
    title: "Listas de Prospects",
    desc: "Geração e enriquecimento de listas qualificadas — o cliente certo, no canal certo, pronto para a abordagem.",
  },
];

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Mapeamos onde seu tempo vaza e onde a IA gera o maior retorno." },
  { icon: Settings2, title: "Arquitetura", desc: "Desenhamos os sistemas sob medida — agentes, fluxos e automações." },
  { icon: Layers, title: "Implementação", desc: "Construímos e integramos tudo, sem você tocar em uma linha de código." },
  { icon: Rocket, title: "Operação", desc: "Sua máquina roda no automático. Você cuida do que só você faz." },
];

export function Showcase() {
  return (
    <>
      {/* OS 3 PILARES */}
      <section className="relative px-6 py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
              O que entregamos
            </p>
            <h2
              className="font-display font-bold mb-14"
              style={{ fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.08 }}
            >
              Três pilares. Uma operação inteira no automático.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="group h-full rounded-2xl p-8 bg-surface border border-line transition-colors duration-300 hover:border-accent/50">
                  <div className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-xl mb-6 bg-primary/25 border border-primary">
                    <s.icon
                      className="w-6 h-6 text-accent-soft"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="relative px-6 py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
              O processo
            </p>
            <h2
              className="font-display font-bold mb-14"
              style={{ fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.08 }}
            >
              Do diagnóstico à operação rodando sozinha.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative rounded-2xl p-7 h-full bg-surface border border-line">
                  <span className="font-display absolute top-5 right-6 text-5xl font-bold text-accent/15">
                    0{i + 1}
                  </span>
                  <s.icon
                    className="w-7 h-7 mb-5 text-accent"
                    strokeWidth={1.4}
                  />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
