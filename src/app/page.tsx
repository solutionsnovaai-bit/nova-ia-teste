import { Hero } from "@/components/sections/Hero";
import { Shift } from "@/components/sections/Shift";
import { Showcase } from "@/components/sections/Showcase";
import { ROI } from "@/components/sections/ROI";
import { FAQ } from "@/components/sections/FAQ";
import { Invite } from "@/components/sections/Invite";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg">
      <div className="noise-overlay" />
      <Hero />
      <Shift />
      <Showcase />
      <ROI />
      <FAQ />
      <Invite />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
