import React from "react";
import { useTranslations } from "next-intl";
import { RiContactsFill } from "@remixicon/react";
import { Props } from "./ContactType";

export const NameInput = ({ value, onChange }: Props) => {
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full p-3 border border-gray-600 rounded bg-neutral-800 ps-8 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          required
        />
      </div>
    </section>
  );
};
