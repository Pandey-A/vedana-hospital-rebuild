import { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import babyHero from "@/assets/banner_img.png";

const DESTINATION_EMAIL = "vedanshahospitalnagpur@gmail.com";

const LandingInquiryModal: FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const currentOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = currentOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending your details...");
    setStatusType("");

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: name,
      from_email: "Not provided",
      from_phone: phone,
      service_type: selectedService || "IVF Treatment",
      ivf_interest: "Not specified",
      source: "Landing Modal",
      date: new Date().toLocaleString(),
      page_url: window.location.href,
referrer: document.referrer || "Direct",
    };

    emailjs
      .send(
        "service_9vp45rs",
        "template_8ppt4vd",
        templateParams,
        "vjx9LFYnhaXrb7FFd"
      )
      .then(() => {
        setStatus("Request sent successfully.");
        setStatusType("success");
        setIsOpen(false);
        navigate("/thank-you");
      })
      .catch((error) => {
        setStatus("Failed to send request. Please try again.");
        setStatusType("error");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-3 md:p-4">
      <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl bg-[#F3F3F3] shadow-[0_24px_64px_rgba(0,0,0,0.32)] sm:max-w-[520px] md:max-w-[820px] md:rounded-md">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
          className="absolute right-3 top-2 z-20 text-2xl leading-none text-[#222] hover:text-black md:text-[#222]"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image — stacked on mobile (aspect ratio crop), full-height on desktop */}
<div className="relative aspect-[16/9] w-full md:aspect-auto md:h-auto">            <img
              src={babyHero}
              alt="Healthy baby"
              className="absolute inset-0 h-full w-full object-cover object-top md:object-center"
            />
            {/* Subtle bottom gradient on mobile so form panel blends in */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F3F3F3] to-transparent md:hidden" />
          </div>

          <div className="bg-[#F3F3F3] p-3.5 sm:p-4 md:p-6">
            {/* Heading shown on all screen sizes */}
            <div className="inline-flex items-center bg-[#FFC81A] px-2 py-1 text-xs text-[#1E1E1E] sm:text-sm md:text-base">
              <span className="mr-2">-</span>
              Your Journey to Parenthood Starts Here!
            </div>
            <h2 className="mt-2 text-lg font-bold leading-tight text-[#0D0D13] sm:text-xl md:text-4xl">
              Book a <span className="text-[#A4A4AA] line-through">₹1000</span>{" "}
              <span className="text-[#E97195]">FREE</span> consultation today
            </h2>
            <p className="mt-1 text-sm text-[#4A4A57] sm:text-base md:text-2xl">Take the first step</p>

            <form onSubmit={handleSubmit} className="mt-3 space-y-2 sm:space-y-2.5 md:mt-4 md:space-y-4">
              <div>
                <label htmlFor="landing-name" className="mb-1 block text-sm font-bold text-[#111] sm:text-base md:text-lg">
                  Name
                </label>
                <input
                  id="landing-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-[#F1CEDA] bg-transparent px-3.5 py-2.5 text-sm text-[#2B2B33] placeholder:text-[#777] focus:outline-none focus:ring-2 focus:ring-[#E97195] sm:text-base md:px-4 md:py-3 md:text-lg"
                />
              </div>

              <div>
                <label htmlFor="landing-phone" className="mb-1 block text-sm font-bold text-[#111] sm:text-base md:text-lg">
                  Mobile Number
                </label>
                <input
                  id="landing-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  required
                  className="w-full rounded-xl border border-[#F1CEDA] bg-transparent px-3.5 py-2.5 text-sm text-[#2B2B33] placeholder:text-[#777] focus:outline-none focus:ring-2 focus:ring-[#E97195] sm:text-base md:px-4 md:py-3 md:text-lg"
                />
              </div>

              <div>
                <label htmlFor="landing-service" className="mb-1 block text-sm font-bold text-[#111] sm:text-base md:text-lg">
                  Service
                </label>
                <select
                  id="landing-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#F1CEDA] bg-transparent px-3.5 py-2.5 text-sm text-[#2B2B33] focus:outline-none focus:ring-2 focus:ring-[#E97195] sm:text-base md:px-4 md:py-3 md:text-lg"
                >
                  <option value="">Select Service</option>
                  <option value="IVF Treatment">IVF Treatment</option>
                  <option value="IUI Treatment">IUI Treatment</option>
                  <option value="ICSI Treatment">ICSI Treatment</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Gynaecologist Consultation">Gynaecologist Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#F26A8A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#E35779] sm:text-sm md:py-3 md:text-lg"
              >
                Book Your Appointment
              </button>

              {status && (
                <p
                  className={`rounded-md p-3 text-center text-sm font-semibold ${
                    statusType === "success"
                      ? "bg-green-100 text-green-700"
                      : statusType === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingInquiryModal;
