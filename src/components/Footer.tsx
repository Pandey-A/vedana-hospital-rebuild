"use client";
import { FC } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import vedanshaLogo from "@/assets/Logo-New.png";
import { useLanguage } from "@/context/LanguageContext";

const Footer: FC = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { key: "header.nav.home", href: "#home" },
    { key: "header.nav.services", href: "#services" },
    { key: "header.nav.whyUs", href: "#why-us" },
    { key: "header.nav.successStories", href: "#testimonials" },
    { key: "header.nav.contactUs", href: "#contact" },
  ];

  const services = [
    "IVF Treatment",
    "ICSI",
    "Laparoscopy",
    "Painless Delivery",
    "IUI Treatment",
    "Hysteroscopy",
  ];

  return (
    <footer className="bg-[#1E4B7A] text-white">
      {/* Solid Pink Top Accent Line */}
      <div className="h-1.5 bg-[#C2185B] w-full" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center">
                <img 
                  src={vedanshaLogo} 
                  alt="Vedansha Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase">Vedansha</h3>
                <p className="text-[10px] tracking-[0.2em] text-blue-200 uppercase font-semibold">
                    {t("footer.brandSub")}
                </p>
              </div>
            </div>
            
            <p className="text-blue-50 text-sm leading-relaxed max-w-sm">
                {t("footer.about")}
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#C2185B] flex items-center justify-center transition-transform hover:-translate-y-1 shadow-md"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-[#C2185B] transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
              {t("footer.ourServices")}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-[#C2185B] transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
              {t("footer.contactUs")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C2185B] flex-shrink-0 mt-1" />
                <span className="text-blue-50 text-sm">
                  Plot No. 30, West High Court Road, Surendra Nagar, Nagpur-440015
                </span>
              </div>
              
              <a href="tel:9168628982" className="flex items-center gap-3 group">
                <Phone size={18} className="text-[#C2185B]" />
                <span className="text-blue-50 text-sm group-hover:text-white transition-colors">9168628982</span>
              </a>
              
              <a href="mailto:vedanshahospitalnagpur@gmail.com" className="flex items-center gap-3 group">
                <Mail size={18} className="text-[#C2185B]" />
                <span className="text-blue-50 text-sm group-hover:text-white transition-colors truncate">
                  vedanshahospitalnagpur@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Bottom Bar */}
      <div className="bg-[#153455] py-4 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-300 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Vedansha Hospital. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;