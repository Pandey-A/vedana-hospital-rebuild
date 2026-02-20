"use client";
import { FC, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const reviews = [
  {
    name: "sushant shirpurkar",
    time: "3 weeks ago",
    text: "Very good hospitality and very kind staff and sisters.. most prefer hospital in Nagpur...",
    image: "https://ui-avatars.com/api/?name=Sushant+Shirpurkar&background=random",
  },
  {
    name: "Shardul Bankar",
    time: "1 month ago",
    text: "We got the best care, nurture, and love from the staff. Everyone was very polite and was always available to assis...",
    image: "https://ui-avatars.com/api/?name=Shardul+Bankar&background=random",
  },
  {
    name: "Ranjeet Mishra",
    time: "2 months ago",
    text: "Doctor and support staff is very good, I think the size of room comparing to price is small and there was no...",
    image: "https://ui-avatars.com/api/?name=Ranjeet+Mishra&background=random",
  },
  {
    name: "Priya Deshmukh",
    time: "3 months ago",
    text: "Dr. Pandey and her team are exceptional. The entire IVF journey was handled with utmost care and professionalism. Highly recommend this hospital!",
    image: "https://ui-avatars.com/api/?name=Priya+Deshmukh&background=random",
  },
  {
    name: "Amit Kumar",
    time: "4 months ago",
    text: "Outstanding facilities and a very supportive medical team. The treatment was successful and we are now blessed with a healthy baby. Forever grateful!",
    image: "https://ui-avatars.com/api/?name=Amit+Kumar&background=random",
  },
];

const GoogleReviewSection: FC = () => {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000;

  const getReviewTime = (time: string) => {
    if (language === "hi") {
      if (time === "3 weeks ago") return "3 हफ़्ते पहले";
      if (time === "1 month ago") return "1 महीने पहले";
      if (time === "2 months ago") return "2 महीने पहले";
      if (time === "3 months ago") return "3 महीने पहले";
      if (time === "4 months ago") return "4 महीने पहले";
    }

    if (language === "mr") {
      if (time === "3 weeks ago") return "3 आठवडे पूर्वी";
      if (time === "1 month ago") return "1 महिन्यापूर्वी";
      if (time === "2 months ago") return "2 महिन्यांपूर्वी";
      if (time === "3 months ago") return "3 महिन्यांपूर्वी";
      if (time === "4 months ago") return "4 महिन्यांपूर्वी";
    }

    return time;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth || 0;
      const gap = 8;
      const scrollAmount = cardWidth + gap;
      
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentIndex((prev) => Math.min(reviews.length - 1, prev + 1));
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentScroll = scrollRef.current.scrollLeft;
        
        if (currentScroll >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setCurrentIndex(0);
        } else {
          scroll("right");
        }
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full bg-white font-serif overflow-hidden">
      <div className="container mx-auto px-3 md:px-4 lg:pr-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 relative">
          
          {/* Summary Score */}
          <div className="flex flex-col items-center justify-center min-w-[130px] md:min-w-[180px] text-center pt-2">
            <h2 className="text-xl md:text-2xl font-black text-black tracking-tight mb-1">{t("testimonials.excellent")}</h2>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="md:w-6 md:h-6" fill="#F6BB42" color="#F6BB42" />
              ))}
            </div>
            <p className="text-gray-900 font-bold text-[11px] md:text-xs mb-2 md:mb-3 leading-tight">
              {t("testimonials.basedOn")} <span className="underline">130 {t("testimonials.reviews")}</span>
            </p>
            <div className="flex items-center justify-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-5 md:h-6"
              />
            </div>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative min-w-0 flex-1 w-full group">
            <button 
              onClick={() => scroll("left")}
              className="hidden lg:block absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-300 p-1.5 md:p-2 rounded-full shadow-md hover:bg-gray-50 transition-all"
            >
              <ChevronLeft size={16} className="text-black md:w-5 md:h-5" />
            </button>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 md:gap-3 no-scrollbar snap-x snap-mandatory pb-1 md:pb-2 scroll-smooth"
            >
              {reviews.map((item, idx) => (
                <div key={idx} className="min-w-[280px] max-w-[280px] snap-start flex-shrink-0">
                  <ReviewCard {...item} time={getReviewTime(item.time)} readMoreLabel={t("testimonials.readMore")} />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll("right")}
              className="hidden lg:block absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-300 p-1.5 md:p-2 rounded-full shadow-md hover:bg-gray-50 transition-all"
            >
              <ChevronRight size={16} className="text-black md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Footer Verified Badge */}
        <div className="flex justify-center lg:justify-end mt-3 md:mt-4">
          {/* Negative margin only on desktop to match your original design */}
          <div className="bg-[#3A6B52] text-white px-2.5 py-1 lg:-mx-56 rounded-md flex items-center gap-1.5 text-xs font-semibold shadow-sm">
            <span>{t("testimonials.verified")}</span>
            <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center text-[9px]">i</div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const ReviewCard = ({ name, time, text, image, readMoreLabel }: any) => (
  <div className="bg-[#F3F4F6] rounded-lg p-5 w-full h-full min-h-[200px] flex flex-col border border-transparent hover:border-gray-200 transition-all shadow-sm hover:shadow-md">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2.5">
        <img src={image} alt={name} className="w-9 h-9 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
          <p className="text-gray-500 text-[11px]">{time}</p>
        </div>
      </div>
      <img 
        src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
        alt="G" 
        className="w-5 h-5"
      />
    </div>
    
    <div className="flex gap-0.5 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#F6BB42" color="#F6BB42" />
      ))}
      <div className="ml-1.5 flex items-center">
        <CheckCircle2 size={12} className="fill-blue-500 text-white" />
      </div>
    </div>

    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
      {text}
    </p>
    
    <button className="text-gray-500 text-xs font-bold mt-auto pt-3 text-left hover:text-gray-800">
      {readMoreLabel}
    </button>
  </div>
);

export default GoogleReviewSection;