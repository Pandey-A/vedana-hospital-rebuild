"use client";
import { FC } from "react";

const testimonials = [
  {
    name: "Priya & Rajesh Iyer",
    role: "Happy Parents",
    text: "After 5 years of trying elsewhere, Dr. Sangeeta's expertise changed everything. We felt heard and cared for. Today, we are finally holding our miracle baby boy.",
    image: "https://ui-avatars.com/api/?name=Priya+Iyer&background=fdf2f8&color=db2777"
  },
  {
    name: "Sunita & Amit Kasat",
    role: "New Parents",
    text: "The personalized attention at Vedansha Hospital is what makes it stand out. Dr. Sangeeta doesn't just treat you as a patient, but like family.",
    image: "https://ui-avatars.com/api/?name=Sunita+Kasat&background=f0f9ff&color=0284c7"
  },
  {
    name: "Meera & Vikram Sharma",
    role: "Blessed Parents",
    text: "We had lost all hope until we met the team here. The transparency regarding the IVF process and the constant support was truly incredible.",
    image: "https://ui-avatars.com/api/?name=Meera+Sharma&background=f5f3ff&color=7c3aed"
  },
  {
    name: "Anjali & Deepak Patil",
    role: "Grateful Family",
    text: "Dr. Tajpuriya's confidence gave us the strength to try one last time. We are now blessed with healthy twins. Forever grateful to Vedansha!",
    image: "https://ui-avatars.com/api/?name=Anjali+Patil&background=ecfdf5&color=059669"
  },{
    name: "Priya & Rajesh Iyer",
    role: "Happy Parents",
    text: "After 5 years of trying elsewhere, Dr. Sangeeta's expertise changed everything. We felt heard and cared for. Today, we are finally holding our miracle baby boy.",
    image: "https://ui-avatars.com/api/?name=Priya+Iyer&background=fdf2f8&color=db2777"
  },
  {
    name: "Meera & Vikram Sharma",
    role: "Blessed Parents",
    text: "We had lost all hope until we met the team here. The transparency regarding the IVF process and the constant support was truly incredible.",
    image: "https://ui-avatars.com/api/?name=Meera+Sharma&background=f5f3ff&color=7c3aed"
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Static Content */}
          <div className="max-w-md">
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
              Making your dreams come true
            </h2>
            <p className="text-black-500 text-lg leading-relaxed font-thin">
              Vedansha Hospital has delivered consistent success and joy for families through personalized and compassionate fertility care.
            </p>
          </div>

          {/* Right Side: Responsive Layout */}
          <div className="relative">
            {/* MOBILE: Horizontal Scroll */}
            <div className="flex md:hidden overflow-x-auto gap-4 pb-6 no-scrollbar snap-x snap-mandatory">
              {testimonials.map((item, idx) => (
                <div key={idx} className="min-w-[85vw] snap-center">
                  <TestimonialCard {...item} />
                </div>
              ))}
            </div>

            {/* DESKTOP: Staggered Masonry with faster float */}
            <div className="hidden md:flex gap-6 h-[650px] overflow-hidden">
              {/* Column 1: Faster Animation (4s) */}
               <div className="flex flex-col gap-6 w-full -mt-12 animate-float-medium">
                {[...testimonials.slice(2,4), ...testimonials.slice(0, 6)].map((item, idx) => (
                  <TestimonialCard key={idx} {...item} />
                ))}
              </div>

              {/* Column 2: Medium Animation (5.5s) */}
              <div className="flex flex-col gap-6 w-full -mt-12 animate-float-medium">
                {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((item, idx) => (
                  <TestimonialCard key={idx} {...item} />
                ))}
              </div>

              {/* Bottom Fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          25% { transform: translateY(-15px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(15px); }
          100% { transform: translateY(0); }
        }
        /* Increased speeds for a more dynamic feel */
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
        .animate-float-medium { animation: float 5.5s ease-in-out infinite; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const TestimonialCard = ({ name, role, text, image }: any) => (
  <div className="bg-[#F8F9FB] rounded-3xl p-8 border border-gray-100 flex flex-col gap-6 h-fit shadow-sm">
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
      <div>
        <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
        <p className="text-blue-500 text-[10px] font-bold uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <div className="relative">
      <span className="text-blue-300 text-4xl font-serif absolute -top-4 -left-1 opacity-40">“</span>
      <p className="text-gray-700 text-[15px] leading-relaxed relative z-10 italic">
        "{text}"
      </p>
    </div>
  </div>
);

export default TestimonialsSection;