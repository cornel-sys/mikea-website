"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm/ContactForm";

export default function MainImage() {
  const t = useTranslations("MainImage");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden z-10">
      <Image
        src="/imagini/mainpage.webp"
        alt="Main Page Image"
        fill
        className="object-cover"
        priority
      />

      {/* Text & Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="transform -translate-y-8 md:-translate-y-12 lg:-translate-y-16">
          <h1 className="text-white text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-center drop-shadow-2xl">
            MIKEA
          </h1>
        </div>
        <div className="text-gray-300">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="focus:outline-none text-white bg-red-600 hover:bg-red-500 font-semibold rounded-lg text-xs md:text-sm lg:text-lg px-5 py-2.5 me-2 mb-2"
          >
            {t("button")}
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute left-1/2 top-[45%] md:top-1/2 w-4/5 xl:w-auto bg-zinc-800 p-2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-50 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ContactForm onSubmit={() => setIsOpen(false)} />
        </div>
      </div>
    </main>
  );
}
