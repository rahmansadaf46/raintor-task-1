import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

interface MobileNavigationProps {
  onNavigate: (sectionId: string) => void;
}

export function MobileNavigation({ onNavigate }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 animate-in fade-in-0 duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            id="mobile-navigation"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l border-border shadow-lg animate-in slide-in-from-right-full duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 id="mobile-menu-title" className="text-lg font-semibold">
                  Navigation
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6" role="navigation">
                <ul className="space-y-4" role="list">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className="w-full text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        role="menuitem"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button
                    className="w-full"
                    onClick={() => handleNavigate("contact")}
                  >
                    Start Project
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
