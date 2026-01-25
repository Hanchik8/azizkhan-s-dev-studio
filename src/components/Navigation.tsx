import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-mono text-lg font-semibold">
            <Terminal className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="text-foreground">azizkhan</span>
            <span className="text-primary">.dev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-xs text-primary">0{index + 1}.</span>
                <span className="transition-colors group-hover:text-primary">{item.label}</span>
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="animate-fade-in border-t border-border py-4 md:hidden"
            role="menu"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                  role="menuitem"
                >
                  <span className="text-xs text-primary">0{index + 1}.</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
