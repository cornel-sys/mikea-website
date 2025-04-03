import React from "react";

import ImageCarousel from "../components/ImageCarousel";
import PhoneFooter from "../components/PhoneFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <main className="scrollbar-hide overflow-auto h-full max-h-[100dvh] flex-col items-center select-none">
      <Header />

      {/* Background Image Carousel */}
      <ImageCarousel messages={t("welcome")} />

      <footer className="absolute flex flex-col gap-2 lg:flex-row bottom-0 justify-between items-center w-full h-auto px-2 lg:py-3 lg:px-16 bg-neutral-900">
        <PhoneFooter />
        <Footer />
      </footer>
    </main>
  );
}
