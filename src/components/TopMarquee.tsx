import { FC, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

const TopMarquee: FC = () => {
  const { t } = useLanguage();

  const marqueeItems = useMemo(
    () => [
      `25+ Years Experience`,
      `${t("header.hospitalName")}, ${t("header.location")}`,
      t("hero.badge"),
      t("doctor.subCredential"),
      t("youtube.title"),
      `${t("header.address.line1")}, ${t("header.address.line2")}`,
      t("contact.specialties"),
    ],
    [t]
  );

  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative z-30 w-full overflow-hidden border-b border-[#EEC7D3] bg-gradient-to-r from-[#FBE8EE] via-[#FFF7F9] to-[#EAF7FC]">
      <div className="marquee-track flex w-max items-center py-2.5 text-[13px] font-semibold text-[#5C2D3A] md:text-sm">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="mx-6 whitespace-nowrap">
            <span className="mr-2 text-[#9B2B4E]">•</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TopMarquee;
