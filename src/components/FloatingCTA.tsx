import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-row items-center gap-3 md:bottom-6 md:right-6">
      <motion.a
        href="#lead-offers"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.04 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 20 }}
        className="rounded-full bg-[#9B2B4E] px-3 py-2 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_10px_25px_-5px_rgba(155,43,78,0.5)] ring-2 ring-white/80 md:px-4 md:text-xs"
        aria-label="Get free IVF guide"
      >
        Free IVF Guide
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919766913811?text=Hello, I would like to book an appointment"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_28px_-5px_rgba(37,211,102,0.6)] transition-all ring-2 ring-white/70 relative group md:h-16 md:w-16"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Pulse Animation Layer */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
        
        {/* Official WhatsApp SVG Path */}
        <svg 
          viewBox="0 0 24 24" 
          className="h-6 w-6 fill-current md:h-7 md:w-7" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:9168628982"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        className="h-14 w-14 rounded-full bg-[#E97195] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(233,113,149,0.45)] hover:shadow-[0_14px_28px_-5px_rgba(233,113,149,0.6)] transition-all ring-2 ring-white/70 md:h-16 md:w-16"
        aria-label="Call us"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;