"use client";

import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

import ImageCarousel from "./components/ImageCarousel";
import PhoneFooter from "./components/PhoneFooter";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="scrollbar-hide overflow-auto h-full max-h-[100dvh] flex-col items-center select-none">
      <header className="flex justify-between items-center w-full px-2 lg:px-24 bg-neutral-900/80 backdrop-blur-md">
        <div className="hidden md:flex w-10"></div>
        <h1
          className={`text-5xl md:text-6xl lg:text-8xl font-semibold ${roboto.className}`}
        >
          Mikea
        </h1>
        <Image
          src="/globe.svg"
          alt="Language Chooser"
          width={50}
          height={50}
          className="h-10 md:h-14 w-auto"
        />
      </header>

      {/* Background Image Carousel */}
      <ImageCarousel />

      <footer className="absolute flex flex-col gap-2 lg:flex-row bottom-0 justify-between items-center w-full h-auto px-2 lg:py-3 lg:px-16 bg-neutral-900">
        <PhoneFooter />
        <Footer />
      </footer>
    </main>
  );
}
