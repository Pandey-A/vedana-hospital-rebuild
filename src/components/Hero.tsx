"use client";
import { FC, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

// Assets
import bg1 from "@/assets/vedansha-hospital-nagpur-vedansha-2.jpg"; 
import babyHero from "@/assets/banner_img.png";

const Hero: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: formRef.current?.from_name.value,
      from_email: formRef.current?.from_email.value,
      from_phone: formRef.current?.from_phone.value,
      service_type: formRef.current?.service_type.value,
      date: new Date().toLocaleString(),
    };

    emailjs.send(
      "service_9vp45rs", 
      "template_8ppt4vd", 
      templateParams,
      "vjx9LFYnhaXrb7FFd"
    )
    .then(() => {
      setStatus("Success! Data sent to pandeyashutosh1911@gmail.com");
      formRef.current?.reset();
    }, (error) => {
      setStatus("Failed to send.");
      console.log("Error:", error);
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-[450px] flex items-center  font-serif">
      
      {/* 1. SINGLE STATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src={bg1} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#FDE2E4]/80" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10 h-full">
        
        {/* LEFT SIDE: TEXT & IMAGE */}
        {/* Changed items-center to items-stretch to allow image to hit bottom */}
        <div className="lg:col-span-8 flex flex-col md:flex-row items-stretch gap-6">
          <div className="text-center md:text-left space-y-6 flex-1 py-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#9B2B4E] leading-tight font-serif">
              We take dreams & turn them into families
            </h1>
            <p className="text-gray-800 text-2xl font-semibold font-serif">
              IVF center that puts you first
            </p>
            
            {/* Promo Badge */}
            <div className="inline-block border-2 border-[#9B2B4E] rounded-xl overflow-hidden shadow-lg">
                <div className="bg-[#9B2B4E] h-4 w-full"></div>
                <div className="bg-white px-4 py-2 text-[#9B2B4E] font-bold text-sm md:text-base font-serif">
                  Consultation | IVF Treatment
                </div>
            </div>
            <p className="text-gray-700 font-bold uppercase tracking-wide font-serif">
              Personalized IVF Treatment Packages
            </p>
          </div>
          
          {/* self-end pushes the image to the very bottom of the flex container */}
          <div className="hidden lg:flex flex-1 items-end justify-center">
            <img 
              src={babyHero} 
              alt="Baby" 
              className="w-80 max-w-sm drop-shadow-2xl block align-bottom mb-[-40px]" 
            />
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="lg:col-span-4 w-full py-10">
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
            <h2 className="text-[#9B2B4E] font-black text-2xl mb-6 leading-tight font-serif">
              BOOK AN APPOINTMENT
            </h2>
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <select 
                name="service_type"
                className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-[#E97195] outline-none transition-all"
                required
              >
                <option value="">Select Service</option>
                <option value="IVF Treatment">IVF Treatment</option>
                <option value="Consultation">General Consultation</option>
              </select>

              <input 
                type="text" 
                name="from_name"
                placeholder="Your Name" 
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E97195] outline-none font-serif"
                required 
              />

              <input 
                type="email" 
                name="from_email"
                placeholder="Your Email Address" 
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E97195] outline-none font-serif"
                required 
              />

              <input 
                type="tel" 
                name="from_phone"
                placeholder="Your Phone Number" 
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E97195] outline-none font-serif " 
                required 
              />

              <button 
                type="submit"
                className="w-full bg-[#46A2C1] text-white py-4 rounded-lg font-black text-lg hover:bg-[#3488A5] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                SEND REQUEST
              </button>

              {status && (
                <p className={`text-center font-bold text-sm p-2 rounded-md ${status.includes("Success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;