import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const phone = "+373 78 044088";
  return (
    <footer className="flex flex-col items-center justify-center text-sm mx-6 lg:text-base border-neutral-700 border-t px-4 py-2 mb-2 lg:mb-0 font-medium">
      <div className="pb-10 pt-4">{t("text")}</div>
      <section className="flex text-xs md:text-base justify-between md:justify-around w-full md:w-2/3 mb-4">
        <p className="">Mikea © 2025</p>
        <p className="">{t("contact")}</p>
        <a href={`tel:${phone}`} className="">
          <div className="">{phone}</div>
        </a>
      </section>
    </footer>
  );
}
