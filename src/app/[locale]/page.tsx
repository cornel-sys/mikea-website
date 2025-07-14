import Header from "@/src/components/Header/Header";
import React from "react";

import MainImage from "@/src/components/MainImage/MainImage";
import HouseCard from "@/src/components/HouseCard/HouseCard";

export default function Home() {
  return (
    <main className="flex flex-col scrollbar-hide no-select">
      <Header />
      <MainImage />
      <HouseCard translation="FirstCard" image="/imagini/02.webp" />
    </main>
  );
}
