"use client";

import { motion } from "motion/react";
import { GoldButton, GhostButton } from "@/components/ui/button";
import { EASE } from "@/lib/utils";

export function Hero() {
  return (
    <>
      {/* Header institucional */}
      <header className="absolute top-0 left-0 w-full z-50 px-6 py-7">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-2xl font-bold tracking-wide"
          >
            Nova <span className="text-accent font-medium">AI</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <GhostButton>Reunião Estratégica</GhostButton>
          </motion.div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6">
        <div className="absolute pointer-events-none w-[620px] h-[620px] rounded-full bg-primary/20 blur-[150px] animate-pulse-slow" />

        {/* Partículas douradas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-accent"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: 3,
                height: 3,
                opacity: 0.25,
                animation: `drift ${10 + (i % 6) * 3}s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-9 bg-surface border border-primary/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted">
              Soberania operacional para negócios de elite
            </span>
          </motion.div>

          <h1
            className="font-display font-bold tracking-tight leading-[1.04] mb-8"
            style={{ fontSize: "clamp(2.6rem,7vw,5.2rem)" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              Escale sua operação.
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.32, ease: EASE }}
              style={{
                backgroundImage:
                  "linear-gradient(100deg,#F4F1E8,#E3C77A,#C9A24B)",
              }}
            >
              Proteja seu tempo.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.44, ease: EASE }}
            className="font-light text-muted max-w-2xl mx-auto leading-relaxed mb-12"
            style={{ fontSize: "clamp(1rem,2.2vw,1.3rem)" }}
          >
            Substitua gargalos manuais por sistemas invisíveis de inteligência.
            Captar, atender e produzir no automático — sem diluir a sofisticação
            da sua marca.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.56, ease: EASE }}
          >
            <GoldButton large>Quero automatizar meu negócio</GoldButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
