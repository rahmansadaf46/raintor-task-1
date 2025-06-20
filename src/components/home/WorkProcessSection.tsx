import { AnimatedSection, ProcessCard } from "@/components/animated-elements";

const WorkProcessSection = () => {
  return (
    <section className="bg-foreground text-background dark:bg-background dark:text-foreground py-20 rounded-3xl mx-6 lg:mx-8 mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            <span className="text-sm text-background/70 dark:text-foreground/70 tracking-wider">
              Work Process
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-16">
            My Work Process
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ProcessCard
              title="Discovery"
              description="We start every new client interaction with an in-depth discovery call where we get to know each other, understand your brand and recommend the best course of action."
              delay={100}
            />
            <ProcessCard
              title="Design"
              description="Once we have comprehensive understanding of your brand, we'll be ready to move onto design. Each page we set develop, reviewed, and given your stamp of approval."
              delay={300}
            />
          </div>

          <div className="space-y-6">
            <ProcessCard
              title="Strategy"
              description="Every web project of ours begins with a strategy. It's all about understanding your from brand ID consultation to strategy map, this is what the strategy phase of your project."
              delay={200}
            />
            <ProcessCard
              title="Build"
              description="Now that you're hoping get finished, designing the site as you're heading get finished designs for us to develop in Webflow, we ready to apply our trusted development process to your project."
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;