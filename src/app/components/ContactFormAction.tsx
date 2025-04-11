"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function ContactFormAction() {
  const t = useTranslations("Homepage");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="z-50">
      {/* Centered text */}
      <div
        className={`absolute flex justify-center w-full top-[45%] transition-opacity duration-500 ease-in-out ${
          !isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="text-xl md:text-3xl lg:text-4xl bg-white/80 py-2 lg:py-6 px-4 lg:px-16 mx-16 text-center rounded-3xl text-black cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {t("welcome")}
        </div>
      </div>

      <div
        id="layout"
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          id="contact-form-window"
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
