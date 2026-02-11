"use client";
import { FC, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import contact from "@/assets/OIP (3).webp";
const ContactFormMinimal: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side - Decorative Image */}
          <div className="relative hidden lg:block">
            
            <img src={contact} alt="Contact us illustration" className=" h-full px-12" />
            {/* Desk and chair illustration area */}
            
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4">
                Contact us
              </h2>
              {/* <p className="text-gray-500 text-base">
                Contact us for better help
              </p> */}
            </div>

            {/* Contact Info */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Address</p>
                <p className="text-gray-900 text-sm">
                  Plot No. 30, West High Court Road
                  <br />
                  Surendra Nagar, Nagpur-440015
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href="mailto:vedanshahospitalnagpur@gmail.com" className="text-gray-900 text-sm hover:text-gray-600">
                  vedanshahospitalnagpur@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <a href="tel:+919168628982" className="text-gray-900 text-sm hover:text-gray-600">
                  +91-916-862-8982
                </a>
              </div>
            </div> */}

            {/* Form */}
            <div>
              {/* <h3 className="text-2xl md:text-3xl font-serif font-normal text-gray-900 mb-8">
                Get a quote
              </h3> */}

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-600">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-500 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors text-base"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors text-base"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Enter Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors resize-none text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-pink-400 hover:text-white transition-all duration-300 text-base rounded-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-serif font-normal text-gray-900 mb-4">
                Follow us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/vedanshahospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/vedanshahospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/vedanshahospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-pink-600 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/vedansha-hospital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMinimal;