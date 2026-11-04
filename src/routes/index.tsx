import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BusinessSolutions } from "@/components/BusinessSolutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${COMPANY.name} — Computer Hardware, IT Services & B2B Supply in Belagavi`,
      },
      {
        name: "description",
        content:
          "Bootlytic Technologies in Belagavi, Karnataka — computer hardware sales, accessories, networking, IT support, custom PC building and B2B hardware supply for individuals, offices and businesses.",
      },
      { property: "og:title", content: "Bootlytic Technologies — Powering Your Digital World" },
      {
        property: "og:description",
        content:
          "Your trusted partner for computer hardware, IT services and business technology solutions in Belagavi, Karnataka. Boot. Diagnose. Solve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <FeaturedProducts />
        <BusinessSolutions />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
