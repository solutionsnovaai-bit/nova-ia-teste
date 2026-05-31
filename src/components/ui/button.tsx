"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, cn } from "@/lib/utils";

interface GoldButtonProps {
  children: ReactNode;
  large?: boolean;
  href?: string;
  className?: string;
}

export function GoldButton({
  children,
  large = false,
  href = WHATSAPP_URL,
  className,
}: GoldButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-full overflow-hidden bg-accent text-bg font-semibold uppercase tracking-wider transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
        large ? "px-9 py-[18px] text-[15px]" : "px-7 py-[15px] text-[13px]",
        className
      )}
      style={{ boxShadow: "0 10px 40px -10px rgba(201,162,75,0.4)" }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight
        className={cn(
          "relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          large ? "w-5 h-5" : "w-4 h-4"
        )}
      />
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)",
        }}
      />
    </a>
  );
}

export function GhostButton({
  children,
  href = WHATSAPP_URL,
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent border border-accent/30 px-5 py-2.5 rounded-full transition-colors duration-300 hover:border-accent"
    >
      {children}
      <ArrowUpRight className="w-3.5 h-3.5" />
    </a>
  );
}
