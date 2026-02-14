import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => (
  <div className="min-h-screen bg-[#FFF5F7] flex flex-col">
    <Header />
    <main className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-black text-[#9B2B4E] mb-4">Thank you!</h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Your request has been received. Our team will contact you shortly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-[#46A2C1] text-white font-bold px-6 py-3 hover:bg-[#3488A5] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default ThankYou;
