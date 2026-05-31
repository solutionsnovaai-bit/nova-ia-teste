"use client";

import { MessageSquareText } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-accent text-bg w-[58px] h-[58px] animate-floaty transition-transform duration-300 hover:scale-110"
      style={{ boxShadow: "0 12px 36px -8px rgba(201,162,75,0.6)" }}
    >
      <MessageSquareText className="w-6 h-6" />
    </a>
  );
}
