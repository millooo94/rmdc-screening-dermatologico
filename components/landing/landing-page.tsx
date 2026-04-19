import { BrandHeader } from "@/components/landing/brand-header";
import { HeroSection } from "@/components/landing/hero-section";
import { AwarenessSection } from "@/components/landing/awareness-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { OfferSection } from "@/components/landing/offer-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { StickyCta } from "@/components/landing/sticky-cta";

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <BrandHeader />
      <HeroSection />
      <AwarenessSection />
      <BenefitsSection />
      <OfferSection />
      <FinalCtaSection />
      <StickyCta />
    </main>
  );
}
