import { Phone } from "lucide-react";
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
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform ring-1 ring-white/20"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6" fill="currentColor" aria-hidden>
          <path d="M16.001 3C9.383 3 4 8.383 4 15c0 2.637.837 5.08 2.268 7.092L4 29l6.106-2.468A11.94 11.94 0 0016 27c6.617 0 12-5.383 12-12S22.618 3 16.001 3zm6.73 17.042c-.233.65-1.38 1.243-1.996 1.33-.534.078-1.177.11-2.114-.097-2.273-.487-3.97-1.853-6.351-4.235-2.381-2.381-3.749-4.077-4.235-6.35-.207-.939-.175-1.58-.097-2.114.087-.617.68-1.763 1.33-1.996.623-.224 1.16-.317 1.776-.317.53 0 .876.012 1.26.017.36.004.735.01 1.3-.112.478-.111.78-.143 1.085-.026.284.111.973.36 1.11.393.13.025.236.038.383.038.155 0 .325-.013.54-.025.36-.02.853-.048 1.325.028.534.086 1.264.349 1.825.87.56.523.9 1.155 1.05 1.71.145.53.165 1.033.098 1.392-.052.252-.198.6-.37.956-.264.537-.55 1.116-.56 1.2-.023.163.09.33.246.37.242.06.55.172.916.372.53.29 1.507.824 1.773 1.264.25.415.25.91.178 1.09z" />
        </svg>
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
