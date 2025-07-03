import React from "react";

import ImageCarousel from "../../../components/MainImage/ImageCarousel";
import PhoneFooter from "../../../components/Footer/PhoneFooter";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/HeaderOld";
import ContactFormAction from "../../../components/ContactForm/ContactFormAction";

export default function Home() {
  return (
    <main className="scrollbar-hide overflow-auto h-full flex-col items-center select-none">
      <Header />

      {/* Background Image Carousel */}
      <ImageCarousel />

      {/* Contact Form */}
      <ContactFormAction />

      <footer className="z-10 absolute flex flex-col gap-2 lg:flex-row bottom-0 justify-between items-center w-full h-auto px-2 lg:py-3 lg:px-16 bg-neutral-900">
        <PhoneFooter />
        <Footer />
      </footer>
    </main>
  );
}
