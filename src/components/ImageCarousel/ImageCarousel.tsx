"use client";

import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/imagini/03.webp",
  "/imagini/04.webp",
  "/imagini/05.webp",
  "/imagini/06.webp",
  "/imagini/07.webp",
  "/imagini/09.webp",
  "/imagini/10.webp",
  "/imagini/11.webp",
  "/imagini/12.webp",
  "/imagini/13.webp",
];

export default function Gallery() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-20">
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`gallery-${idx}`}
              width={1920}
              height={1080}
              className="w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
