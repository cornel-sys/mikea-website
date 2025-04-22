import React from "react";
import { useTranslations } from "use-intl";

export const TerrainOptions = () => {
  const t = useTranslations("ContactForm");
  return (
    <section className="flex flex-col gap-2">
      <label className="text-xl font-semibold">{t("terrain")}</label>
      {/* first option Sunt proprietar */}
      <div className="md:flex gap-6 font-medium">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="terrainOption1"
            name="terrainOption"
            value={t("terrainFirstOption")}
            className="cursor-pointer"
            required
          />
          <label htmlFor="terrainOption1" className="cursor-pointer">
            {t("terrainFirstOption")}
          </label>
        </div>
        {/* second option Nu am */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="terrainOption2"
            name="terrainOption"
            value={t("terrainSecondOption")}
            className="cursor-pointer"
            required
          />
          <label htmlFor="terrainOption2" className="cursor-pointer">
            {t("terrainSecondOption")}
          </label>
        </div>
      </div>
    </section>
  );
};
