import React from "react";
import { useTranslations } from "next-intl";
import { RiPhoneFill } from "@remixicon/react";

export const PhoneInput = () => {
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
