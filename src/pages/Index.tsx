import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import Gallery from "@/components/Gallery";
import TechShowcase from "@/components/TechShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ProcessSection />
      <IndustriesSection />
      <Gallery />
      <TechShowcase />
      <TestimonialsSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
