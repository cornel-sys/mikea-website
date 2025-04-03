"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { RiPhoneFill, RiContactsFill } from "@remixicon/react";

type ContactFormProps = {
  onSubmit: () => void;
};

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const t = useTranslations("ContactForm");

  return (
    <main className="z-50">
      <div className="flex flex-col gap-2 justify-center items-center w-full h-auto p-4 md:py-10 md:px-16 bg-neutral-900 rounded-md text-gray-200">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {/* contact us title */}
          <h1 className="text-xl md:text-3xl font-semibold text-gray-300">
            {t("title")}
          </h1>

          {/* name input */}
          <NameInput />

          {/* email input */}
          <PhoneInput />

          {/* teren disponibil */}
          <TerrainOptions />

          {/* house m2 options */}
          <HouseOptions />

          {/* interior options */}
          <InteriorOptions />

          {/* submit button */}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {t("submitButton")}
          </button>
        </form>
      </div>
    </main>
  );
}

const NameInput = () => {
  const t = useTranslations("ContactForm");
  return (
    <section className="flex items-center gap-2">
      <div className="relative w-full">
        <div className="absolute h-full flex items-center ps-2 pointer-events-none">
          <RiContactsFill className="text-gray-500 size-4 md:size-5" />
        </div>
        <input
          type="text"
          placeholder={t("name")}
          className="w-full h-full p-3 border border-gray-600 rounded bg-neutral-800 ps-8 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          required
        />
      </div>
    </section>
  );
};

const PhoneInput = () => {
  const t = useTranslations("ContactForm");
  return (
    <section className="flex items-center gap-2">
      <div className="relative w-full">
        <div className="absolute h-full flex items-center ps-2 pointer-events-none">
          <RiPhoneFill className="text-gray-500 size-4 md:size-5" />
        </div>
        <input
          type="tel"
          placeholder={t("phone")}
          className="w-full p-2 border border-gray-600 rounded bg-neutral-800 ps-8 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          pattern="^\+?[0-9]*$"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9+]/g,
              ""
            );
          }}
          required
        />
      </div>
    </section>
  );
};

const TerrainOptions = () => {
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

const HouseOptions = () => {
  const firstOption = "60m2";
  const secondOption = "120m2";
  const thirdOption = "150m2";
  const fourthOption = "210m2";
  const fifthOption = "300m2";

  const t = useTranslations("ContactForm");
  return (
    <section className="flex flex-col gap-2">
      <label className="text-xl font-semibold">{t("house")}</label>
      <div className="flex flex-wrap gap-y-4 gap-x-6 md:gap-8 md:flex md:flex-row items-center">
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

const InteriorOptions = () => {
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
