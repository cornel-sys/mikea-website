import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

type HouseCardProps = {
  translation: string;
  image: string;
};

export default function HouseCard({ translation, image }: HouseCardProps) {
  const t = useTranslations(translation);
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row w-full">
        {/* Image wrapper */}
        <div className="relative w-full md:w-2/3 aspect-[950/575]">
          <Image
            src={image}
            alt="Main Page Image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            quality={100}
            loading="lazy"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between px-10 md:px-4 md:py-4 xl:py-12 xl:px-20 w-full md:w-1/3">
          <div>
            <h2 className="text-md lg:text-xl font-bold mb-2">{t("title")}</h2>
            <p className="text-gray-700 mb-4">{t("text")}</p>
            <p className="text-gray-700 mb-4">{t("subtext")}</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition-all duration-500">
            {t("button")}
          </button>
        </div>
      </section>

      <section className="flex flex-col items-start p-4 md:px-4 xl:py-12 xl:px-20 w-full md:w-11/12 lg:w-4/5">
        <div className="flex flex-col md:px-0 md:flex-row mb-4 justify-between">
          <h3 className="text-md md:text-2xl lg:text-3xl font-bold">
            {t("secondTitle")}
          </h3>
          <p className="text-gray-700 text-sm md:text-md md:w-2/3 text-justify md:text-left pl-0 md:pl-10">
            {t("secondText")}
          </p>
        </div>
        <button className="bg-white border-4 border-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-all duration-500 md:w-60">
          {t("button")}
        </button>
      </section>
    </main>
  );
}
