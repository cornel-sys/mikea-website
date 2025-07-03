import React from "react";
import Image from "next/image";

export default function MainImage() {
  return (
    <main className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Image
        src="/imagini/mainpage.webp"
        alt="Main Page Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
      <Image
        src="/imagini/mainpage.webp"
        alt="Main Page Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex top-48 justify-center">
        <h1 className="text-white text-9xl md:text-9xl lg:text-9xl font-bold">
          MIKEA
        </h1>
      </div>
    </main>
  );
}
