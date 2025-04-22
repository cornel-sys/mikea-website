import React from "react";
import { useTranslations } from "next-intl";

export const HouseOptions = () => {
  const firstOption = "60m2";
  const secondOption = "120m2";
  const thirdOption = "150m2";
  const fourthOption = "210m2";
  const fifthOption = "300m2";

  const t = useTranslations("ContactForm");
  return (
    <section className="flex flex-col gap-2">
      <label className="text-xl font-semibold">{t("house")}</label>
      <div className="flex flex-wrap gap-x-4 md:gap-8 md:flex md:flex-row items-center">
        {/* first option m2 */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="houseOption1"
            name="radioOption"
            value={firstOption}
            className="cursor-pointer"
            required
          />
          <label htmlFor="houseOption1" className="cursor-pointer">
            {firstOption}
          </label>
        </div>
        {/* second option m2 */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="houseOption2"
            name="radioOption"
            value={secondOption}
            className="cursor-pointer"
            required
          />
          <label htmlFor="houseOption2" className="cursor-pointer">
            {secondOption}
          </label>
        </div>
        {/* third option m2 */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="houseOption3"
            name="radioOption"
            value={thirdOption}
            className="cursor-pointer"
            required
          />
          <label htmlFor="houseOption3" className="cursor-pointer">
            {thirdOption}
          </label>
        </div>
        {/* fourth option m2 */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="houseOption4"
            name="radioOption"
            value={fourthOption}
            className="cursor-pointer"
            required
          />
          <label htmlFor="houseOption4" className="cursor-pointer">
            {fourthOption}
          </label>
        </div>
        {/* fifth option m2 */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="houseOption5"
            name="radioOption"
            value={fifthOption}
            className="cursor-pointer"
            required
          />
          <label htmlFor="houseOption5" className="cursor-pointer">
            {fifthOption}
          </label>
        </div>
      </div>
    </section>
  );
};
