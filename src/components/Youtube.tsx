"use client";
import { FC, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const YouTubeSection: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const videos = [
    { id: "KR-ly-JLTLk", title: "Success Story 1" },
    { id: "8kGib39-6zc", title: "Success Story 2" },
    { id: "TNoVzZmg2cs", title: "Success Story 3" },
    { id: "GeCqAViATog", title: "Success Story 4" },
    { id: "qXhGuOvrDDs", title: "Success Story 5" },
    { id: "wHaTJHyVK1Q", title: "Success Story 6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isHovered) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320; // Adjusted for gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#c44ea8] mb-2 border-b-2 border-red-500">
            Our Successful Stories
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#D0A2BD]">
            1,000+ Happy Families Created
          </h3>
          <p className="text-black text-sm md:text-base  max-w-2xl">
            Real stories of hope and happiness from our patients.
          </p>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-3 bg-white/90 shadow-xl rounded-full text-[#5C214E] hover:bg-[#5C214E] hover:text-white transition-all backdrop-blur-sm border border-gray-100 hidden md:block"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-3 bg-white/90 shadow-xl rounded-full text-[#5C214E] hover:bg-[#5C214E] hover:text-white transition-all backdrop-blur-sm border border-gray-100 hidden md:block"
            aria-label="Scroll Right"
          >
            <ChevronRight size={28} />
          </button>

          {/* Video Scroll Area */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex overflow-x-auto gap-5 md:gap-8 no-scrollbar snap-x snap-mandatory pb-8 px-2"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-center"
              >
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-500 hover:scale-[1.03]">
                  {/* YouTube Shorts Embed */}
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  ></iframe>

                  {/* Info Bar Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5C214E] to-transparent pt-12 pb-6 px-4 text-white text-xs md:text-sm font-medium flex justify-center gap-2 items-center">
                    <span className="tracking-wide">Success Story</span>
                    <span className="opacity-50">|</span>
                    <span>Healthy Baby</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for hidden scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default YouTubeSection;