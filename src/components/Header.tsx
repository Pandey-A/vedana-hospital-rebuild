import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/V-Logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Vedansha Hospital logo"
              className="w-12 h-auto"
            />
            <span className="hidden sm:inline font-semibold text-lg text-foreground">Vedansha</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-foreground/80 hover:text-foreground font-medium transition-colors uppercase tracking-wide text-sm ${isActive ? "bg-pink-50 text-pink-600 rounded-full px-3 py-1" : ""}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button className="bg-white text-primary rounded-full px-5 py-2 shadow-md hover:shadow-lg border-0">
                Book Appointment
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-foreground/80 hover:text-primary font-medium py-2 transition-colors ${isActive ? "bg-pink-50 text-pink-600 rounded-full px-3" : ""}`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button variant="default" className="gradient-hero border-0 mt-2">
                Book Appointment
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
