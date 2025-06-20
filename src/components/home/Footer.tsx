import { AnimatedSection } from "@/components/animated-elements";

const Footer = () => {
  return (
    <footer
      className="bg-foreground text-background dark:bg-background dark:text-foreground py-16 rounded-3xl m-6"
      style={{ fontFamily: "__Inter_d65c78, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-green mb-6 hover:scale-105 transition-transform cursor-default">
                DEVELOP.ME
              </h3>
              <h4 className="text-xl font-bold mb-4">As you can see</h4>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-green">EMAIL</h4>
              <p className="text-sm text-background/70 dark:text-foreground/70 mb-2 hover:text-brand-green transition-colors cursor-pointer">
                HELLO@DEVELOP.ME.COM
              </p>
              <p className="text-sm text-background/70 dark:text-foreground/70 hover:text-brand-green transition-colors cursor-pointer">
                MARKETING@DEVELOP.ME.COM
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-green">MENU</h4>
              <ul className="space-y-2 text-sm text-background/70 dark:text-foreground/70">
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  HOME
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  ABOUT
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  PORTFOLIO
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  CONTACT
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-green">SOCIAL</h4>
              <ul className="space-y-2 text-sm text-background/70 dark:text-foreground/70">
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  BEHANCE
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  FACEBOOK
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  INSTAGRAM
                </li>
                <li className="hover:text-brand-green transition-colors cursor-pointer">
                  DRIBBBLE
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-background/70 dark:text-foreground/70">
            <div>
              <p className="mb-2">+1 (555) 739-648-4981</p>
              <p>+1 (555) 769-485-100</p>
            </div>
            <div className="md:text-right">
              <p className="mb-4 font-semibold">DEVELOPER PORTFOLIO</p>
              <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-8">
                <span>© DEVELOP.ME 2024</span>
                <div className="flex space-x-4">
                  <span className="hover:text-brand-green transition-colors cursor-pointer">
                    PRIVACY
                  </span>
                  <span className="hover:text-brand-green transition-colors cursor-pointer">
                    TERMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;