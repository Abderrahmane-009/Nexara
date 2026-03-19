import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyNexaraSection } from "@/components/sections/WhyNexaraSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "NEXARA — Agence Digitale 360° & IA | Algérie",
  description:
    "Votre partenaire premium pour la transformation digitale en Algérie. Sites web, chatbots IA, e-commerce et automatisation avec des standards internationaux.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyNexaraSection />
      <ProcessSection />
      <PortfolioPreviewSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaSection />
    </>
  );
}
