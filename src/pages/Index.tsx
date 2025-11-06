import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import Gallery from "@/components/Gallery";
import TechShowcase from "@/components/TechShowcase";
import TeamSection from "@/components/TeamSection";
import VideoShowcase from "@/components/VideoShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
const Index = () => {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <Gallery />
        <TechShowcase />
        <TeamSection />
        <VideoShowcase />
        <TestimonialsSection />
        <ContactInfo />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
};

export default Index;
