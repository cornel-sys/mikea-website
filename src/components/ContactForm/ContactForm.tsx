"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { NameInput } from "./NameInput";
import { PhoneInput } from "./PhoneInput";
import { TerrainOptions } from "./TerrainOptions";
import { HouseOptions } from "./HouseOptions";
import { InteriorOptions } from "./InteriorOptions";

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
