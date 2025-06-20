import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-elements";
import { Facebook, Instagram, Phone } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-transparent to-primary/30"
    >
      <div className="relative w-full max-w-[1246px] mx-auto px-6 py-20">
        <AnimatedSection className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Facebook className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
              <Phone className="w-5 h-5 text-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>
            <div className="w-px h-16 bg-foreground/20" />
            <div className="transform -rotate-90 text-sm font-medium tracking-wider text-foreground/70 whitespace-nowrap">
              @williamaney
            </div>
          </div>
        </AnimatedSection>

        <div
          className="lg:pl-24 max-w-[1041px] flex flex-col justify-center items-center"
          style={{
            fontFamily: "Noto Sans Inscriptional Parthian, sans-serif",
          }}
        >
          <AnimatedSection>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground"
              style={{ lineHeight: "100px" }}
            >
              Trusted{" "}
              <span
                className="bg-black text-white px-3 py-3 rounded-lg inline-block hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                style={{ lineHeight: "72px" }}
              >
                Partner
              </span>{" "}
              for
              <br />
              Your Website{" "}
              <span
                className="bg-black text-white rounded-lg inline-block hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                style={{ padding: "10px 12px" }}
              >
                Develop.
              </span>
            </h1>

            <div className="max-w-xl mb-12">
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-2">
                Building the worlds best marketing websites for over a decade.
              </p>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed">
                Your trusted partner for strategy, design, and dev.
              </p>
            </div>

            <Button
              className="bg-white text-black hover:bg-gray-100 border-2 border-black rounded-full px-8 py-4 text-lg font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Schedule a Call
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;