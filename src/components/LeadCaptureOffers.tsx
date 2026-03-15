import { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const DESTINATION_EMAIL = "vedanshahospitalnagpur@gmail.com";

const offers = [
  {
    title: "Free IVF Starter Guide",
    description: "Understand IVF steps, timeline, and expected costs in simple language.",
    badge: "Popular",
  },
  {
    title: "Fertility Diet & Lifestyle Tips",
    description: "Daily food and habit suggestions that support better fertility outcomes.",
    badge: "Useful",
  },
  {
    title: "Treatment Readiness Checklist",
    description: "Know which tests and reports you should keep ready before consultation.",
    badge: "Quick Win",
  },
];

const LeadCaptureOffers: FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(offers[0].title);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending your request...");
    setStatusType("");

    const templateParams = {
      to_email: DESTINATION_EMAIL,
      from_name: name,
      from_email: email || "Not provided",
      from_phone: phone,
      service_type: selectedOffer,
      source: "Lead Magnet Section",
      date: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_9vp45rs",
        "template_8ppt4vd",
        templateParams,
        "vjx9LFYnhaXrb7FFd"
      )
      .then(() => {
        setStatus("Great! Our team will share this with you shortly.");
        setStatusType("success");
        setName("");
        setPhone("");
        setEmail("");
        setSelectedOffer(offers[0].title);
      })
      .catch((error) => {
        setStatus("Failed to submit. Please try again.");
        setStatusType("error");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section id="lead-offers" className="w-full scroll-mt-28 bg-gradient-to-b from-[#FFF7FA] via-[#FFFDFE] to-[#F2FAFD] py-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-6 text-center md:mb-7">
          <p className="inline-block rounded-full bg-[#FDE8EF] px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#9B2B4E]">
            Growth Offers
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#21212A] md:text-4xl">Helpful IVF Resources for New Parents</h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#5B5C66] md:text-base">
            Offer valuable resources and collect qualified leads. Visitors select what they need, and your team follows up.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-2xl border border-[#F1D7E1] bg-white p-4 shadow-[0_10px_35px_-20px_rgba(155,43,78,0.45)] md:p-5"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-base font-extrabold text-[#2A2A32] md:text-xl">{offer.title}</h3>
                  <span className="rounded-full bg-[#EAF7FC] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2E7791]">
                    {offer.badge}
                  </span>
                </div>
                <p className="text-xs text-[#555762] md:text-base">{offer.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#F1D7E1] bg-white p-4 shadow-[0_16px_40px_-20px_rgba(70,162,193,0.45)] md:p-6">
              <h3 className="text-lg font-black text-[#1D1E25] md:text-2xl">Get This Free on WhatsApp/Email</h3>
              <p className="mt-1 text-xs text-[#60626D] md:text-sm">Share details and our team will send your selected guide.</p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-[#ECD0DB] px-4 py-3 text-sm text-[#2D2E38] placeholder:text-[#999BA5] focus:outline-none focus:ring-2 focus:ring-[#E97195]"
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  required
                  className="w-full rounded-xl border border-[#ECD0DB] px-4 py-3 text-sm text-[#2D2E38] placeholder:text-[#999BA5] focus:outline-none focus:ring-2 focus:ring-[#E97195]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email (optional)"
                  className="w-full rounded-xl border border-[#ECD0DB] px-4 py-3 text-sm text-[#2D2E38] placeholder:text-[#999BA5] focus:outline-none focus:ring-2 focus:ring-[#E97195]"
                />

                <select
                  value={selectedOffer}
                  onChange={(e) => setSelectedOffer(e.target.value)}
                  className="w-full rounded-xl border border-[#ECD0DB] bg-white px-4 py-3 text-sm text-[#2D2E38] focus:outline-none focus:ring-2 focus:ring-[#E97195]"
                >
                  {offers.map((offer) => (
                    <option key={offer.title} value={offer.title}>
                      {offer.title}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#46A2C1] px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#3488A5]"
                >
                  Send Me The Resource
                </button>

                {status && (
                  <p
                    className={`rounded-md p-2.5 text-center text-xs font-semibold ${
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
    </section>
  );
};

export default LeadCaptureOffers;
