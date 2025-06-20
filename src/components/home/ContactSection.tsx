import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-elements";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";

interface ContactSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const ContactSection = ({ scrollToSection }: ContactSectionProps) => {
  return (
    <section id="contact" className="relative px-6 py-20 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30 rounded-3xl -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <Badge
            variant="outline"
            className="mb-4 hover:bg-primary/10 transition-colors"
          >
            Contact
          </Badge>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ lineHeight: "57px" }}
          >
            Interested in
            <br />
            <span className="bg-foreground text-background px-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              work
            </span>{" "}
            together?
          </h2>
          <p className="text-muted-foreground mb-8">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <Button
            className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 group transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Schedule a Call
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Card className="bg-foreground text-background dark:bg-background dark:text-foreground border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6" aria-label="Contact form">
                <Input
                  placeholder="Enter your name"
                  className="bg-background/10 dark:bg-foreground/10 border-background/20 dark:border-foreground/20 text-background dark:text-foreground placeholder:text-background/50 dark:placeholder:text-foreground/50 focus:border-brand-green transition-all duration-300"
                  required
                  aria-label="Your name"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-background/10 dark:bg-foreground/10 border-background/20 dark:border-foreground/20 text-background dark:text-foreground placeholder:text-background/50 dark:placeholder:text-foreground/50 focus:border-brand-green transition-all duration-300"
                  required
                  aria-label="Your email"
                />
                <Textarea
                  placeholder="Describe your project"
                  className="bg-background/10 dark:bg-foreground/10 border-background/20 dark:border-foreground/20 text-background dark:text-foreground placeholder:text-background/50 dark:placeholder:text-foreground/50 min-h-[120px] focus:border-brand-green transition-all duration-300"
                  required
                  aria-label="Project description"
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Button
                    type="button"
                    className="bg-brand-green text-black hover:bg-brand-green/90 px-8 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-foreground text-foreground dark:hover:bg-background/20 hover:text-black dark:hover:text-foreground transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact me
                  </Button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-background/20 dark:border-foreground/20">
                <p className="text-sm text-background/70 dark:text-foreground/70 mb-4">
                  developmeanyway
                </p>
                <div className="flex space-x-4">
                  <Facebook className="w-5 h-5 text-background/70 dark:text-foreground/70 hover:text-brand-green dark:hover:text-brand-green cursor-pointer transition-all duration-300 hover:scale-110" />
                  <Instagram className="w-5 h-5 text-background/70 dark:text-foreground/70 hover:text-brand-green dark:hover:text-brand-green cursor-pointer transition-all duration-300 hover:scale-110" />
                  <Twitter className="w-5 h-5 text-background/70 dark:text-foreground/70 hover:text-brand-green dark:hover:text-brand-green cursor-pointer transition-all duration-300 hover:scale-110" />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;