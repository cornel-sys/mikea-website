import Header from "@/src/components/Header/Header";
import React from "react";

import { Montserrat } from "next/font/google";
import MainImage from "@/src/components/MainImage/MainImage";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Header />
      <MainImage />
    </main>
  );
}
