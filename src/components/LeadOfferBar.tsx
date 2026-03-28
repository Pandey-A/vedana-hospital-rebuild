import { FC } from "react";

const LeadOfferBar: FC = () => {
  return (
    <section className="w-full bg-[#FFF4F8] py-4 md:py-5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-2xl border border-[#F3D4E0] bg-[#FFF9FC] px-4 py-4 shadow-[0_12px_30px_-22px_rgba(155,43,78,0.65)] md:flex-row md:items-center md:justify-between md:px-6">
        <div className="min-w-0">
          <p className="text-lg font-extrabold text-[#6D2A4A] md:text-[30px] md:leading-tight">
            Join Hundreds of Families who trusted Vedansha Hospital.
          </p>
          <p className="mt-1 text-xs font-semibold text-[#5A5D69] md:text-base">
            Rated 4.9 / 5 on Google • Internationally trained specialists • Free first consultation
          </p>
        </div>

        <div className="flex shrink-0 gap-2 md:gap-3">
          <a
            href="#contact-form"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#9B2B4E] px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#862643] md:w-auto"
          >
            Book Free Consultation
          </a>
          <a
            href="tel:+919186289892"
            className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#9B2B4E] bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#9B2B4E] transition hover:bg-[#FDE8EF] md:w-auto"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadOfferBar;
