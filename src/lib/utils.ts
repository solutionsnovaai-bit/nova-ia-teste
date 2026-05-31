import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Configuração central ──────────────────────────────
// ⚠️ Troque pelo número real antes de publicar (formato: 55 + DDD + número).
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

export const WHATSAPP_MESSAGE =
  "Olá! Quero automatizar meu negócio com a Nova AI Solutions. Pode me passar uma análise estratégica?";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const EASE = [0.16, 1, 0.3, 1] as const;
