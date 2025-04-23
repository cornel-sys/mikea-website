import React from "react";
import { useTranslations } from "next-intl";
import { Props } from "./ContactType";

export const InteriorOptions = ({ value, onChange }: Props) => {
  const t = useTranslations("ContactForm");
  return (
    <section className="flex flex-col gap-2">
      <label className="text-xl font-semibold">{t("interior")}</label>
      {/* first option  */}
      <div className="flex flex-wrap gap-x-6 md:gap-6 font-medium">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption1"
            name="interiorOption"
            value={t("interiorFirstOption")}
            checked={value === t("interiorFirstOption")}
            onChange={() => onChange(t("interiorFirstOption"))}
            className="cursor-pointer"
            required
          />
          <label htmlFor="interiorOption1" className="cursor-pointer">
            {t("interiorFirstOption")}
          </label>
        </div>
        {/* second option */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption2"
            name="interiorOption"
            value={t("interiorSecondOption")}
            checked={value === t("interiorSecondOption")}
            onChange={() => onChange(t("interiorSecondOption"))}
            className="cursor-pointer"
            required
          />
          <label htmlFor="interiorOption2" className="cursor-pointer">
            {t("interiorSecondOption")}
          </label>
        </div>
        {/* third option */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="interiorOption3"
            name="interiorOption"
            value={t("interiorThirdOption")}
            checked={value === t("interiorThirdOption")}
            onChange={() => onChange(t("interiorThirdOption"))}
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
