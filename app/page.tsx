import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/home/cta-section";
import { TestimonialSection } from "@/components/home/testimonial-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
