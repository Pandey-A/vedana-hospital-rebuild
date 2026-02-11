"use client";
import { FC, useState, useEffect } from "react";
import logo from "@/assets/V-Logo.webp";

// Import your images
import image1 from "@/assets/vedansha-hospital-nagpur-vedansha-2.jpg"
import image2 from "@/assets/OIP (2).jpg"
import image3 from "@/assets/vedansha-hospital-nagpur-vedansha-4.jpg"

const Hero: FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHomeActive, setIsHomeActive] = useState(false);

  // Carousel data with images and corresponding text
  const slides = [
    {
      image: image1,
      title: "Comfortable & Modern",
      subtitle: "Recovery Rooms",
      description: "Experience world-class care in our state-of-the-art facilities designed for your comfort and healing."
    },
    {
      image: image2,
      title: "Caring for Women, Mothers",
      subtitle: "and Families",
      description: "Compassionate IVF care tailored to your journey. Every step, we're with you - every day."
    },
    {
      image: image3,
      title: "Advanced IVF",
      subtitle: "Technology",
      description: "Cutting-edge equipment and expert care ensuring the highest success rates in fertility treatment."
    }
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Track whether we're on the home page (pathname '/' or hash '#home' or empty hash)
  useEffect(() => {
    const update = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      setIsHomeActive(path === '/' || hash === '#home' || hash === '');
    };
    update();
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent | React.KeyboardEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full bg-background">
        {/* Top navigation */}
        <header className="container mx-auto flex items-center justify-between py-6">
          <img src={logo} alt="Vedansha Hospital logo" className="w-12 h-auto" />
          <nav className="hidden md:flex items-center gap-8 text-foreground/70 font-extralight">
            <a
              href="/"
              className={`transition-colors hover:text-foreground ${isHomeActive ? 'bg-pink-100 text-pink-600 rounded-full px-5 py-3' : ''}`}
              aria-current={isHomeActive ? 'page' : undefined}
            >
              Home
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#why-us" className="transition-colors hover:text-foreground">Why Us</a>
            <a href="#our-team" className="transition-colors hover:text-foreground">Our Team</a>
            <a href="#gallery" className="transition-colors hover:text-foreground">Gallery</a>
            <a href="#success-stories" className="transition-colors hover:text-foreground">Success Stories</a>
            <a href="#" className="transition-colors hover:text-foreground">Blog</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact Us</a>
          </nav>
          <div className="flex items-center gap-3 font-extralight">
            <button
              className="px-5 py-2.5 rounded-full border border-foreground/20 text-foreground bg-transparent transition-colors hover:border-foreground/35"
              aria-label="Login"
            >
              Login
            </button>
            <button
              className="px-5 py-2.5 rounded-full bg-foreground text-background transition-transform hover:scale-[1.02]"
              aria-label="Sign up"
            >
              Sign up
            </button>
          </div>
        </header>

        {/* Hero card with carousel */}
        <main className="container mx-auto pb-12">
          <section className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-xl h-[600px] md:h-[700px]">
            {/* Carousel backgrounds */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="absolute w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}

            {/* Content overlay */}
              <div className="relative z-10 px-6 sm:px-10 md:px-16 py-20 md:py-48 text-center h-full flex flex-col justify-center mt-16 md:mt-48">
              {/* Animated text content */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-x-0 px-6 sm:px-10 md:px-16 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h1 className="mx-auto max-w-5xl text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <h1 className="font-[Montserrat] italic text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white drop-shadow-lg mt-2">
                    {slide.subtitle}
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/95 font-extralight drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              ))}
              
              {/* Join Waitlist Form - Static */}
              

              {/* Carousel indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Hero;