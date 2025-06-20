import { Badge } from "@/components/ui/badge";
import { AnimatedSection, CompanyBadge } from "@/components/animated-elements";

const ExperienceSection = () => {
  return (
    <section id="about" className="relative px-6 py-20 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30 rounded-3xl -z-10" />

      <AnimatedSection className="text-center mb-12">
        <Badge
          variant="outline"
          className="mb-4 hover:bg-primary/10 transition-colors"
        >
          About
        </Badge>
        <h2
          className="text-4xl lg:text-5xl font-bold"
          style={{ lineHeight: "62px" }}
        >
          I've been{" "}
          <span className="bg-foreground text-background px-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Developing
          </span>
          <br />
          Websites since{" "}
          <span className="bg-foreground text-background px-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            2013
          </span>
        </h2>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
          We start every new client interaction with an in-depth discovery
          call where we get to know each other and recommend the best course
          of action.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={200} className="text-center mb-8">
        <p className="text-sm font-medium mb-4 tracking-wider text-muted-foreground">
          PREVIOUSLY
          <br />
          WORKED ON
        </p>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {[
          { name: "shopwards.", rotate: "rotate-0" },
          { name: "facebook", rotate: "-rotate-6" },
          { name: "design squad", rotate: "rotate-3" },
          { name: "CSS WINNER", rotate: "-rotate-3" },
          { name: "fouresome", rotate: "rotate-6" },
          { name: "AUTODESK", rotate: "rotate-0" },
        ].map((company, index) => (
          <CompanyBadge
            key={company.name}
            name={company.name}
            rotate={company.rotate}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;