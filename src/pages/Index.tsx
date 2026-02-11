import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import KnowYourDoctor from "@/components/KnowYourDoctor";
import YouTubeSection from "@/components/Youtube";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <KnowYourDoctor/>
      <Services />
      {/* <WhyUs /> */}
      <Testimonials />
      <YouTubeSection/>
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
