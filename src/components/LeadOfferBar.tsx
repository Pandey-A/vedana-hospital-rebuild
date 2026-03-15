import { FC } from "react";

const LeadOfferBar: FC = () => {
  return (
    <section className="w-full bg-[#FFF4F8] py-4 md:py-5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 rounded-2xl border border-[#F3D4E0] bg-white px-4 py-4 shadow-[0_12px_30px_-22px_rgba(155,43,78,0.65)] md:flex-row md:items-center md:justify-between md:px-6">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9B2B4E] md:text-sm">Free IVF Resources</p>
          <p className="mt-1 text-sm font-semibold text-[#30323B] md:text-base">
            Get IVF starter guide, fertility tips, and treatment checklist from our experts.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] md:text-xs">
            <span className="rounded-full bg-[#FDE8EF] px-2.5 py-1 font-bold text-[#9B2B4E]">IVF Guide</span>
            <span className="rounded-full bg-[#EAF7FC] px-2.5 py-1 font-bold text-[#2C748D]">Diet Tips</span>
            <span className="rounded-full bg-[#FFF3D8] px-2.5 py-1 font-bold text-[#8A6918]">Checklist</span>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <a
            href="#lead-offers"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#46A2C1] px-4 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#3488A5] md:w-auto"
          >
            Get Free Resource
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadOfferBar;
