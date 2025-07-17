import Header from "@/src/components/Header/Header";
import React from "react";

import MainImage from "@/src/components/MainImage/MainImage";
import HouseCard from "@/src/components/HouseCard/HouseCard";
import Gallery from "@/src/components/ImageCarousel/ImageCarousel";
import Footer from "@/src/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col scrollbar-hide no-select">
      <Header />
      <MainImage />
      <HouseCard translation="FirstCard" image="/imagini/02.webp" />
      <Gallery />
      <HouseCard translation="SecondCard" image="/imagini/18.webp" />
      <Footer />
    </main>
  );
}
