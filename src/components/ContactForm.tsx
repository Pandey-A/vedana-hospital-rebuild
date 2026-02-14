"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

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

const DESTINATION_EMAIL = "vedanshahospitalnagpur@gmail.com";

const ContactFormMinimal: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: formData.name,
      from_email: formData.email || "Not provided",
      from_phone: formData.phone,
      service_type: formData.service,
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_9vp45rs",
        "template_8ppt4vd",
        templateParams,
        "vjx9LFYnhaXrb7FFd"
      )
      .then(() => {
        setStatus("Request sent successfully.");
        setIsSubmitted(true);
        navigate("/thank-you");
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", service: "" });
          setStatus("");
        }, 3000);
      })
      .catch((error) => {
        setStatus("Failed to send.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="w-full bg-[#FDFDFD] py-12 md:py-20 font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Compact Contact Form (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-1">Contact Us</h2>
              <p className="text-gray-400 text-sm italic">Request a consultation today</p>
            </div>

            {isSubmitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 text-center bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900">Request Sent!</h4>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-50 shadow-sm transition-all text-sm"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="IVF Treatment">IVF Treatment</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Gynaecologist">Gynaecologist</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-50 shadow-sm text-sm"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email Address (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-50 shadow-sm text-sm"
                />

                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-[18px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-50 shadow-sm text-sm"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-[#66A2C0] text-white font-bold text-lg rounded-[18px] shadow-md hover:bg-[#558ba5] transition-all active:scale-[0.98] uppercase tracking-wide"
                >
                  Send Request
                </button>

                {status && (
                  <p className={`text-center font-bold text-sm p-2 rounded-md ${status.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {status}
                  </p>
                )}
              </form>
            )}

            {/* Compact Social Icons */}

          </div>

          {/* Right Side - Larger Services Grid (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
                Our <span className="text-[#C2185B]">Specialties</span>
              </h3>
              <div className="flex-1 h-[1px] bg-black"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-3 rounded-2xl shadow-md border border-gray-50 flex flex-col items-center text-center group transition-shadow hover:shadow-xl"
                >
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-[11px] font-extrabold text-gray-700 leading-tight uppercase px-1 pb-1">
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