"use client";

import React from "react";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [terrain, setTerrain] = useState("");
  const [house, setHouse] = useState("");
  const [interior, setInterior] = useState("");

  const t = useTranslations("ContactForm");
  const [buttonText, setButtonText] = useState(t("submitButton"));
  const loadingText = t("loadingButton");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      name,
      phone,
      terrain,
      house,
      interior,
    };

    try {
      setButtonText(loadingText);
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form submitted successfully"); //for debugging
        onSubmit();
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setButtonText(t("submitButton"));
  };

  return (
    <main className="z-50">
      <div className="flex flex-col gap-2 justify-center items-center w-full h-auto p-4 md:py-10 md:px-16 bg-neutral-900 rounded-md text-gray-200">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {/* contact us title */}
          <h2 className="text-xl md:text-3xl font-semibold text-gray-300">
            {t("title")}
          </h2>

          {/* name input */}
          <NameInput value={name} onChange={setName} />

          {/* email input */}
          <PhoneInput value={phone} onChange={setPhone} />

          {/* teren disponibil */}
          <TerrainOptions value={terrain} onChange={setTerrain} />

          {/* house m2 options */}
          <HouseOptions value={house} onChange={setHouse} />

          {/* interior options */}
          <InteriorOptions value={interior} onChange={setInterior} />

          {/* submit button */}
          <button type="submit" className="bg-red-600 text-white p-2 rounded">
            {buttonText}
          </button>
        </form>
      </div>
    </main>
  );
}
