import BlogSection from "@/components/sections/BlogSection";
import ClientTrustStrip from "@/components/sections/ClientTrustStrip";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Hero from "@/components/sections/Hero";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsSection from "@/components/sections/StatsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <main className={`${inter.className} bg-white text-slate-950`}>
      <Hero />
      <ClientTrustStrip />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <IndustriesSection />
      <TechStackSection />
      <BlogSection />
      <FinalCTASection />
    </main>
  );
}
