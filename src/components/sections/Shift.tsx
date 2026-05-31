"use client";

import { Clock, TrendingDown, Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const pains = [
  {
    icon: Clock,
    t: "Tempo refém do operacional",
    d: "Responder, agendar e prospectar manualmente consome as horas que deveriam ser estratégicas.",
  },
  {
    icon: TrendingDown,
    t: "Leads que esfriam",
    d: "O cliente que não é respondido em minutos procura o concorrente. Toda demora é receita perdida.",
  },
  {
    icon: Layers,
    t: "Crescimento que não escala",
    d: "Mais clientes viram mais trabalho manual — e a qualidade começa a rachar onde mais importa.",
  },
];

export function Shift() {
  return (
    <>
      {/* O CAOS OPERACIONAL */}
      <section className="relative px-6 py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
              O custo invisível
            </p>
            <h2
              className="font-display font-bold mb-14"
              style={{ fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.08 }}
            >
              Cada tarefa manual é uma hora
              <br className="hidden sm:block" /> que você nunca recupera.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {pains.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="h-full rounded-2xl p-7 bg-surface border border-line">
                  <p.icon
                    className="w-7 h-7 mb-5 text-accent"
                    strokeWidth={1.4}
                  />
                  <h3 className="font-display text-2xl font-semibold mb-2.5">
                    {p.t}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-muted">
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A SOBERANIA DIGITAL (a virada) */}
      <section className="relative px-6 py-28 text-center border-t border-line">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
              A virada
            </p>
            <h2
              className="font-display font-bold mb-7"
              style={{ fontSize: "clamp(2rem,5.5vw,3.6rem)", lineHeight: 1.08 }}
            >
              A Nova AI constrói a máquina
              <br className="hidden sm:block" /> que trabalha enquanto você não
              está.
            </h2>
            <p
              className="font-light leading-relaxed text-muted"
              style={{ fontSize: "clamp(1rem,2.2vw,1.25rem)" }}
            >
              Não vendemos ferramentas soltas. Desenhamos sistemas de
              inteligência sob medida que captam, atendem e produzem por você —
              com o acabamento de uma marca premium e a previsibilidade de uma
              operação de elite.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
