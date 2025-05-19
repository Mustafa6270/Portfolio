import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mustafa Yıldırım | Aircraft Maintenance Technician</title>
        <meta 
          name="description" 
          content="Professional portfolio of Mustafa Yıldırım, Aircraft Maintenance Technician specializing in engine maintenance and technical documentation."
        />
        <meta property="og:title" content="Mustafa Yıldırım | Aircraft Maintenance Technician" />
        <meta 
          property="og:description" 
          content="Professional portfolio of Mustafa Yıldırım, Aircraft Maintenance Technician specializing in engine maintenance and technical documentation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mustafayildirim.com" />
      </Helmet>

      <div className="bg-white text-dark">
        <Navbar />
        <main>
          <HeroSection />
          <PortfolioSection />
          <AboutSection />
          <SkillsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
