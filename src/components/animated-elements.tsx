import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function SkillCard({
  title,
  description,
  icon,
  delay = 0,
}: SkillCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="bg-gray-900 border-gray-800 dark:bg-gray-800 dark:border-gray-700 group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/10">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-green transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

interface ProcessCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function ProcessCard({
  title,
  description,
  delay = 0,
}: ProcessCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <Card
        className="group hover:rotate-3 text-white hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gray-900 border-gray-800 hover:bg-brand-green dark:border-gray-700 hover:text-black hover:shadow-brand-green/10"
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge
              className={"bg-white"
              }
            >
              {title}
            </Badge>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                Read More
              </span>
            </div>
          </div>
          <p
            className={`text-sm`}
          >
            {description}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

interface CompanyBadgeProps {
  name: string;
  delay?: number;
  rotate?: string;
}

export function CompanyBadge({ name, delay = 0, rotate ='rotate-0' }: CompanyBadgeProps) {
  return (
    <AnimatedSection delay={delay}>
      <Badge
        variant="outline"
        className={`px-6 py-2 ${rotate} text-sm hover:bg-brand-green/10 hover:border-brand-green/50 transition-all duration-300 hover:scale-105 cursor-default`}
      >
        {name}
      </Badge>
    </AnimatedSection>
  );
}

export function NavigationArrows() {
  return (
    <div className="flex space-x-2">
      <button
        className="w-10 h-10 border border-gray-600 dark:border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
        aria-label="Previous"
      >
        <ArrowLeft className="w-5 h-5 group-hover:text-brand-green transition-colors" />
      </button>
      <button
        className="w-10 h-10 border border-gray-600 dark:border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
        aria-label="Next"
      >
        <ArrowRight className="w-5 h-5 group-hover:text-brand-green transition-colors" />
      </button>
    </div>
  );
}
