import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919168628982?text=Hello, I would like to book an appointment"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919168628982"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="w-14 h-14 rounded-full gradient-hero text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-pulse-soft"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
