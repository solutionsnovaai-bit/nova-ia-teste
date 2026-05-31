"use client";

import { Reveal, Counter } from "@/components/ui/Reveal";

const stats = [
  { to: 500, suffix: "+", label: "atendimentos automatizados por mês" },
  { to: 92, suffix: "%", label: "de redução no tempo de resposta" },
  { to: 3, suffix: "x", label: "mais leads qualificados na agenda" },
];

export function ROI() {
  return (
    <section className="relative px-6 py-28 text-center border-t border-line bg-surface">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
            Resultados reais
          </p>
          <h2
            className="font-display font-bold mb-16"
            style={{ fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.08 }}
          >
            Os números que a operação no automático entrega.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.14}>
              <div>
                <div
                  className="font-display font-bold mb-3 text-accent"
                  style={{ fontSize: "clamp(3rem,7vw,4.5rem)", lineHeight: 1 }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p className="text-sm font-light max-w-[200px] mx-auto text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="text-xs mt-12 font-light text-muted/60">
            * Métricas ilustrativas — substituir pelos dados reais antes de
            publicar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
