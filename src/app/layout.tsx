import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/context/SmoothScroll";
import "@/styles/globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://novaai.com.br"; // ← troque pela URL real

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nova AI Solutions · Inteligência sob medida para negócios de elite",
  description:
    "Substitua gargalos manuais por sistemas invisíveis de inteligência. Agentes de WhatsApp com IA, conteúdo de alto padrão e geração de prospects — captar, atender e produzir no automático.",
  keywords: [
    "automação com IA",
    "agente de WhatsApp",
    "inteligência artificial para empresas",
    "captação de clientes",
    "Nova AI Solutions",
  ],
  openGraph: {
    title: "Nova AI Solutions · Escale sua operação. Proteja seu tempo.",
    description:
      "Sistemas de inteligência sob medida que captam, atendem e produzem por você — com acabamento de marca premium.",
    url: SITE_URL,
    siteName: "Nova AI Solutions",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova AI Solutions",
    description:
      "Escale sua operação. Proteja seu tempo. Inteligência sob medida para negócios de elite.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
