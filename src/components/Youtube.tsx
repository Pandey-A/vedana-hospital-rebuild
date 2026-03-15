"use client";
import { FC, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const YouTubeSection: FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const videos = [
    { id: "KR-ly-JLTLk", title: `${t("youtube.overlay.story")} 1` },
    { id: "8kGib39-6zc", title: `${t("youtube.overlay.story")} 2` },
    { id: "TNoVzZmg2cs", title: `${t("youtube.overlay.story")} 3` },
    { id: "GeCqAViATog", title: `${t("youtube.overlay.story")} 4` },
    { id: "qXhGuOvrDDs", title: `${t("youtube.overlay.story")} 5` },
    { id: "wHaTJHyVK1Q", title: `${t("youtube.overlay.story")} 6` },
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
            {t("youtube.title")}
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#D0A2BD]">
            {t("youtube.subtitle")}
          </h3>
          <p className="text-black text-sm md:text-base  max-w-2xl">
            {t("youtube.description")}
          </p>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 p-3 bg-white/90 shadow-xl rounded-full text-[#5C214E] hover:bg-[#5C214E] hover:text-white transition-all backdrop-blur-sm border border-gray-100 hidden md:block"
            aria-label={t("youtube.scrollLeft")}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 p-3 bg-white/90 shadow-xl rounded-full text-[#5C214E] hover:bg-[#5C214E] hover:text-white transition-all backdrop-blur-sm border border-gray-100 hidden md:block"
            aria-label={t("youtube.scrollRight")}
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
                    <span className="tracking-wide">{t("youtube.overlay.story")}</span>
                    <span className="opacity-50">|</span>
                    <span>{t("youtube.overlay.baby")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Post-video CTA ── highest emotional moment on the page */}
      <div className="mt-10 md:mt-14 rounded-2xl bg-gradient-to-r from-[#5C214E] to-[#9B2B4E] px-5 py-7 text-center shadow-xl md:px-10 md:py-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#F9C8DC] md:text-sm">Real Families. Real Results.</p>
        <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white md:text-4xl">
          Could this be <span className="text-[#FFE066]">your story</span>?
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[#F9C8DC] md:text-base">
          These couples had the same fears you have right now. They took one step — a free consultation — and everything changed.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#hero"
            className="w-full rounded-xl bg-[#FFE066] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#5C214E] shadow-md transition hover:bg-[#ffd700] sm:w-auto"
          >
            Book Free Consultation Now
          </a>
          <a
            href="https://wa.me/919766913811?text=Hi, I watched the success stories and want to know more about IVF treatment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition hover:bg-[#1ebe5a] sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs text-[#F9C8DC]">
          🏥 25+ years · 750+ Five-Star Reviews · 6000+ IVF Successes
        </p>
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