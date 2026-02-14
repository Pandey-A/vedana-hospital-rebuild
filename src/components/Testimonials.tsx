"use client";
import { FC, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000;

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
    // Reverted -mx-20 for desktop (lg), but removed for mobile to prevent cutoff
    <section className="w-full bg-white lg:-mx-20 font-serif overflow-hidden lg:overflow-visible">
      <div className="container mx-auto px-4 lg:pr-12 max-w-6xl">
        {/* Changed to flex-col for mobile, flex-row for desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-6 relative">
          
          {/* Summary Score */}
          <div className="flex flex-col items-center justify-center min-w-[180px] text-center">
            <h2 className="text-2xl font-black text-black tracking-tight mb-1">EXCELLENT</h2>
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#F6BB42" color="#F6BB42" />
              ))}
            </div>
            <p className="text-gray-900 font-bold text-xs mb-3">
              Based on <span className="underline">130 reviews</span>
            </p>
            <div className="flex items-center justify-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-6"
              />
            </div>
          </div>

          {/* Carousel Wrapper */}
          <div className="relative flex-1 w-full group">
            {/* Nav buttons hidden on mobile for better touch experience */}
            <button 
              onClick={() => scroll("left")}
              className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-50 transition-all"
            >
              <ChevronLeft size={20} className="text-black" />
            </button>
            
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-2 no-scrollbar snap-x snap-mandatory pb-2 scroll-smooth"
            >
              {reviews.map((item, idx) => (
                // card: 85% width on mobile, 280px on desktop
                <div key={idx} className="min-w-[85%] lg:min-w-[280px] lg:max-w-[280px] snap-center lg:snap-start flex-shrink-0">
                  <ReviewCard {...item} />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll("right")}
              className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-50 transition-all"
            >
              <ChevronRight size={20} className="text-black" />
            </button>
          </div>
        </div>

        {/* Footer Verified Badge */}
        <div className="flex justify-center lg:justify-end mt-4">
          {/* Negative margin only on desktop to match your original design */}
          <div className="bg-[#3A6B52] text-white px-2.5 py-1 lg:-mx-56 rounded-md flex items-center gap-1.5 text-xs font-semibold shadow-sm">
            <span>Verified by Trustindex</span>
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

const ReviewCard = ({ name, time, text, image }: any) => (
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
        <CheckCircle2 size={12} className="text-blue-500 fill-blue-500 text-white" />
      </div>
    </div>

    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
      {text}
    </p>
    
    <button className="text-gray-500 text-xs font-bold mt-auto pt-3 text-left hover:text-gray-800">
      Read more
    </button>
  </div>
);

export default GoogleReviewSection;