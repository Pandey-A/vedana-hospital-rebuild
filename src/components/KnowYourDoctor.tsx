"use client";
import { FC } from "react";
import doctor from "@/assets/vedansha_main-removebg-preview.png";
import { useLanguage } from "@/context/LanguageContext";

const KnowYourDoctor: FC = () => {
  const { t } = useLanguage();

  const highlightText = (text: string) => {
    const parts = text.split(/(Vedansha Hospital|IVF Treatment|IVF treatments|IVF)/gi);

    return parts.map((part, index) => {
      const normalized = part.toLowerCase();
      const shouldHighlight =
        normalized === "vedansha hospital" ||
        normalized === "ivf treatment" ||
        normalized === "ivf treatments" ||
        normalized === "ivf";

      return shouldHighlight ? (
        <span key={index} className="font-semibold text-[#5C214E]">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });
  };

  // Function for smooth scrolling
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: scroll to top of page where hero section is
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FFF5F7] py-8 md:py-12 overflow-hidden font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Side - Image Container */}
          <div className="relative w-full lg:w-[45%]">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={doctor}
                alt="Dr. Sangeeta Tajpuriya"
                className="w-full h-auto object-cover block"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-[#F4A7B9]/90 py-2 px-3 text-center">
                <h4 className="text-[#5C214E] font-bold text-base md:text-lg uppercase tracking-wide">
                  Dr. Sangeeta Tajpuriya
                </h4>
                <p className="text-[#5C214E] text-[10px] md:text-[11px] font-medium uppercase leading-tight">
                  {t("doctor.credential")} <br className="hidden md:block" /> {t("doctor.subCredential")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-[55%] mt-3 lg:-mt-24 pt-4 md:pt-10">
            <div className="border-l-[3px] border-orange-500 pl-4 mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5C214E] leading-tight">
                {t("doctor.messageTitle")}
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-sm md:text-base italic">
                {t("doctor.designationLine")}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-snug">
                {highlightText(t("doctor.bullet1"))}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-snug">
                {highlightText(t("doctor.bullet2"))}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-snug">
                {highlightText(t("doctor.bullet3"))}
              </p>
            </div>

            {/* Appointment Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={scrollToHero}
                className="bg-[#be59a7] hover:bg-[#4a1a3f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base uppercase tracking-wider"
              >
                {t("doctor.bookNow")}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KnowYourDoctor;