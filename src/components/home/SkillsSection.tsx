import { AnimatedSection, SkillCard, NavigationArrows } from "@/components/animated-elements";

const SkillsSection = () => {
  return (
    <section
      id="portfolio"
      className="bg-foreground text-background dark:bg-background dark:text-foreground py-20 rounded-3xl mx-6 lg:mx-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <AnimatedSection>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-sm text-background/70 dark:text-foreground/70 tracking-wider">
                Why Choose me
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              My Extensive
              <br />
              List of Skills
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200} className="hidden lg:block">
            <p className="text-background/70 dark:text-foreground/70 mb-4 max-w-md">
              Building the worlds best marketing. Your trusted partner for
              strategy, design, and dev.
            </p>
            <NavigationArrows />
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard
            title="HTML & CSS"
            description="Dive deep into interactive JavaScript development with advanced concepts, UI frameworks, responsive design, and cutting-edge tools and modern browsers."
            icon={
              <div className="w-6 h-6 bg-brand-green rounded-full animate-pulse" />
            }
            delay={100}
          />
          <SkillCard
            title="Javascript"
            description="Dive deep into advanced JavaScript development with advanced concepts, UI frameworks, responsive design, and cutting-edge tools and modern browsers."
            icon={
              <div className="w-6 h-6 bg-brand-green rounded-full animate-pulse" />
            }
            delay={200}
          />
          <SkillCard
            title="Webflow"
            description="Dive deep into advanced design-first development with advanced concepts, UI frameworks, responsive design, and cutting-edge tools and modern browsers."
            icon={
              <div className="w-6 h-6 bg-brand-green rounded-full animate-pulse" />
            }
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;