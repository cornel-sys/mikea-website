import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default function HouseCard() {
  const t = useTranslations("MainPage");
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row w-full">
      <Image
        src="/imagini/01.jpg"
        alt="Main Page Image"
        height={575}
        width={950}
        className="w-full md:w-2/3 h-auto"
      />
      <div className="flex flex-col justify-between px-10 md:px-4 md:py-4 xl:py-12 xl:px-20 w-full md:w-1/3">
        <div>
          <h2 className="text-md lg:text-xl font-bold mb-2">
            {t("firstCardTitle")}
          </h2>
          <p className="text-gray-700 mb-4">{t("firstCardText")}</p>
          <p className="text-gray-700 mb-4">{t("firstCardSubtext")}</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
          {t("mainButton")}
        </button>
      </div>
    </div>
  );
}
