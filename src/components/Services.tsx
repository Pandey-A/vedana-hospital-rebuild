"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ChevronDown } from "lucide-react";

// Service Image Imports
import img1 from "@/assets/services/PAINLESS-CHILDBIRTH.png";
import img2 from "@/assets/services/INTRAUTERINE_INSEMINATION.png";
import img3 from "@/assets/services/Hysteroscopy-1.jpeg";
import img4 from "@/assets/services/PATHOLOGY.png";
import img5 from "@/assets/services/IN-VITRO-FERTILISATION.png";
import img6 from "@/assets/services/ICSI-3.jpeg";
import img7 from "@/assets/services/LAPAROSCOPY.png";
import img8 from "@/assets/services/SONOGRAPHY.jpeg";

const services = [
  { image: img1, title: "PAINLESS CHILDBIRTH" },
  { image: img2, title: "IUI TREATMENT" },
  { image: img3, title: "HYSTEROSCOPY" },
  { image: img4, title: "PATHOLOGY" },
  { image: img5, title: "IVF" },
  { image: img6, title: "ICSI" },
  { image: img7, title: "LAPAROSCOPY" },
  { image: img8, title: "SONOGRAPHY" },
];

const ContactFormMinimal: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "" });
    }, 3000);
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-16 md:py-24 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side - Contact Form (Based on Image) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-500 italic">We are here to help you start your journey.</p>
            </div>

            {isSubmitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center bg-white rounded-3xl shadow-sm border">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-gray-900">Request Sent!</h4>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-[20px] text-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>

                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                  required
                />

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                  required
                />

                {/* Phone Input */}
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm transition-all"
                  required
                />

                {/* Submit Button (Image Style) */}
                <button
                  type="submit"
                  className="w-full py-5 bg-[#66A2C0] text-white font-bold text-xl rounded-[20px] shadow-lg hover:bg-[#558ba5] transition-transform active:scale-95 uppercase tracking-wider"
                >
                  Send Request
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[#66A2C0] hover:border-[#66A2C0] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Services Grid Boxes */}
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
                Our <span className="text-[#C2185B]">Specialties</span>
              </h3>
              <div className="w-16 h-1 bg-[#C2185B] mt-2 mx-auto lg:mx-0"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-[10px] font-bold text-gray-700 leading-tight uppercase px-1 pb-2">
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormMinimal;