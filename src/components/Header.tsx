import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      {/* Top bar */}
      <div className="hidden md:block bg-primary/5 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>30 Surendra Nagar, Nagpur-440015</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+919168628982" className="hover:text-primary transition-colors">
                +91-9168628982
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-2xl font-display font-bold text-primary-foreground">V</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">Vedansha</h1>
              <p className="text-xs text-muted-foreground">Hospital & Fertility Centre</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="default" className="gradient-hero border-0 shadow-soft hover:shadow-elevated transition-shadow">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}
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
