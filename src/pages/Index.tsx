import { useState, useEffect } from "react";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <SkillsSection />
      <ExperienceSection />
      <WorkProcessSection />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer />
      <Button
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </Button>
    </div>
  );
};

export default Index;