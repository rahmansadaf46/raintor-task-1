import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({
  isScrolled,
  isMobileMenuOpen,
  toggleMobileMenu,
  scrollToSection,
}: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div
          className="text-xl font-bold hover:text-primary transition-colors cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          DEVELOP.ME
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-primary"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-primary"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={() => scrollToSection("portfolio")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-primary"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-primary"
          >
            Contact
          </a>
          <ThemeToggle />
          <Button
            variant="outline"
            className="border-2 border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Start Project
          </Button>
        </nav>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Button
              variant="outline"
              className="w-fit"
              onClick={() => scrollToSection("contact")}
            >
              Start Project
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;