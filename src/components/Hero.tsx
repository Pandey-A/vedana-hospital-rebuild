import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vedansha Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
              IVF & Maternity Hospital
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Where Dreams of{" "}
            <span className="text-primary-glow">Parenthood</span>{" "}
            Become Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed"
          >
            Advanced fertility treatments and compassionate maternity care under one roof. 
            Our pioneering work has helped thousands of families realize their dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="gradient-hero border-0 shadow-elevated hover:scale-105 transition-transform text-lg px-8 py-6"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
            >
              <Phone className="mr-2 w-5 h-5" />
              +91-9168628982
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">5000+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Happy Families</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">95%</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
