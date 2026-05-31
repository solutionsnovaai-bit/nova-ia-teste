"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/button";

export function Invite() {
  return (
    <section className="relative px-6 py-32 text-center overflow-hidden border-t border-line">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[560px] h-[560px] rounded-full bg-primary/20 blur-[150px]" />
      <div className="max-w-3xl mx-auto relative z-10">
        <Reveal>
          <h2
            className="font-display font-bold mb-7"
            style={{ fontSize: "clamp(2.2rem,6vw,4rem)", lineHeight: 1.05 }}
          >
            Sua operação merece
            <br /> rodar sozinha.
          </h2>
          <p
            className="font-light leading-relaxed mb-11 max-w-xl mx-auto text-muted"
            style={{ fontSize: "clamp(1rem,2.2vw,1.2rem)" }}
          >
            Uma conversa de 20 minutos é o suficiente para mapear onde a IA
            libera seu tempo e multiplica seus resultados.
          </p>
          <GoldButton large>Quero automatizar meu negócio</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}
