"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "Os agentes de IA não soam robóticos?",
    a: "Não. Cada agente é treinado com o tom, o vocabulário e o posicionamento da sua marca. O objetivo é que o cliente sinta atendimento de alto padrão — só que instantâneo e disponível 24/7.",
  },
  {
    q: "Preciso entender de tecnologia para usar?",
    a: "Zero. Nós desenhamos, construímos e integramos tudo. Você recebe a operação rodando e acompanha os resultados — sem tocar em código ou configurações.",
  },
  {
    q: "Em quanto tempo fica no ar?",
    a: "Depende do escopo, mas a maioria das automações entra em operação em poucas semanas. No diagnóstico inicial definimos o cronograma exato e as prioridades.",
  },
  {
    q: "Funciona para o meu segmento?",
    a: "Trabalhamos com negócios premium que dependem de captação e atendimento de qualidade — de escritórios e consultorias a serviços especializados. No diagnóstico avaliamos o encaixe com honestidade.",
  },
  {
    q: "E a segurança dos dados dos meus clientes?",
    a: "Levamos isso a sério. As integrações seguem boas práticas de proteção de dados e respeitam as regras do seu setor. Detalhamos tudo antes de qualquer implementação.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl sm:text-2xl font-semibold">
          {q}
        </span>
        <Plus
          className="w-5 h-5 shrink-0 text-accent transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "none" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm sm:text-base leading-relaxed font-light text-muted">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="relative px-6 py-28 border-t border-line">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] mb-5 text-accent">
            Perguntas frequentes
          </p>
          <h2
            className="font-display font-bold mb-12"
            style={{ fontSize: "clamp(2rem,5vw,3.4rem)", lineHeight: 1.08 }}
          >
            O que você precisa saber antes de conversar.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqs.map((f, i) => (
              <Item key={i} {...f} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
