import React from "react";
import { useTranslations } from "next-intl";

export const InteriorOptions = () => {
  const t = useTranslations("ContactForm");
  return (
    <section className="flex flex-col gap-2">
      <label className="text-xl font-semibold">{t("interior")}</label>
      {/* first option Sunt proprietar */}
      <div className="flex flex-wrap gap-y-4 gap-x-6 md:gap-6 font-medium">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption1"
            name="interiorOption"
            value={t("interiorFirstOption")}
            className="cursor-pointer"
            required
          />
          <label htmlFor="interiorOption1" className="cursor-pointer">
            {t("interiorFirstOption")}
          </label>
        </div>
        {/* second option Nu am */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption2"
            name="interiorOption"
            value={t("interiorSecondOption")}
            className="cursor-pointer"
            required
          />
          <label htmlFor="interiorOption2" className="cursor-pointer">
            {t("interiorSecondOption")}
          </label>
        </div>
        {/* third option Nu am */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption3"
            name="interiorOption"
            value={t("interiorThirdOption")}
            className="cursor-pointer"
            required
          />
          <label htmlFor="interiorOption3" className="cursor-pointer">
            {t("interiorThirdOption")}
          </label>
        </div>
      </div>
    </section>
  );
};
