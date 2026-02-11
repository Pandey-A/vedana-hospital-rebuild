"use client";
import { FC } from "react";
import doctor from "@/assets/vedansha_main-removebg-preview.png";

const KnowYourDoctor: FC = () => {
  return (
    <section className="w-screen overflow-hidden">
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Left Content Side - Text */}
          <div className="relative flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-12 md:py-16 lg:py-20 ">
            {/* Subtle background pattern overlay */}
            {/* <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gray-400 blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gray-300 blur-3xl"></div>
            </div> */}

            <div className="relative z-10">
              {/* Small header */}
              <h3 className="text-gray-600 text-base md:text-lg font-normal mb-2">
                Dr. Sangeeta Tajpuriya
              </h3>
              
              {/* Red underline */}
              <div className="w-14 h-[3px] bg-red-600 mb-6"></div>
              
              {/* Main heading - KNOW YOUR DOCTOR */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 leading-[1.1] mb-8 tracking-tight">
                KNOW YOUR DOCTOR
              </h1>
              
              {/* Description paragraph */}
              <p className="text-black font-light sm:text-base md:text-lg leading-relaxed max-w-xl mb-8">
                Dr. Sangeeta Tajpuriya is one of the leading gynaecologists in
                Nagpur city. Over the past few years, she has established herself as
                one of the most sought after doctors with a loyal clientele base. As a
                dedicated, efficient, and compassionate practitioner, her patients'
                well-being and comfort are of top priority to her.
              </p>

              {/* Green CTA button (visible in screenshot bottom left) */}
              {/* <button className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Right Image Side - Doctor Photo */}
          <div className="relative">
            {/* Main doctor image */}
            <div className="">
              <img
                src={doctor}
                alt="Dr. Sangeeta Tajpuriya - Leading Gynaecologist and IVF Specialist in Nagpur"
                className="w-screen h-full object-cover object-center rounded-b-xl"
              />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourDoctor;