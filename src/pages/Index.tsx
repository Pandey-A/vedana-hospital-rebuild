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
import Navbar from "@/components/Header";
import LandingInquiryModal from "@/components/LandingInquiryModal";
import TopMarquee from "@/components/TopMarquee";
import LeadCaptureOffers from "@/components/LeadCaptureOffers";
import LeadOfferBar from "@/components/LeadOfferBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LandingInquiryModal />
      <TopMarquee />
      {/* <Header /> */}
      <Navbar/>
      <FloatingCTA/>
      <Hero />
      <LeadOfferBar />
      <KnowYourDoctor/>
      {/* <Services/> */}
      <YouTubeSection/>
      <Testimonials/>
      <LeadCaptureOffers />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Index;
