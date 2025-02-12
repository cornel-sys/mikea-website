import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scrollbar-hide overflow-auto h-full max-h-[100dvh] flex-col items-center select-none">
      <header className="flex justify-between items-center w-full px-2 lg:px-24 bg-neutral-900/80 backdrop-blur-md">
        <div className="hidden md:flex w-10"></div>
        <h1 className="text-6xl md:text-8xl font-extrabold">Mikea</h1>
        {/* <Image src="/MikeaLogo.svg" alt="Logo" width={50} height={50} /> */}
        <Image
          src="/globe.svg"
          alt="Language Chooser"
          width={50}
          height={50}
          className="h-10 md:h-14 w-auto"
        />
      </header>
      <section className="absolute min-h-[100dvh] h-full w-full top-0 -z-10">
        <video
          src="/presentation.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex justify-center w-full top-[40%]">
          <div className="text-2xl md:text-3xl lg:text-4xl bg-white/80 py-2 lg:py-6 px-4 lg:px-16 mx-16 text-center rounded-3xl text-black">
            Получить детали своего проекта
          </div>
        </div>
      </section>
      <footer className="absolute flex flex-col gap-2 lg:flex-row bottom-0 justify-between items-center w-full h-auto px-2 lg:py-10 lg:px-14 bg-neutral-900/80 backdrop-blur-md">
        <div className="flex items-center">
          <Image
            src="/phone.svg"
            height={0}
            width={0}
            alt="Phone Icon"
            className="h-16 w-auto transfrom rotate-x-180"
          />
          <div className="hidden lg:flex pl-4 text-3xl">+373 69000000</div>
        </div>
        <div className="flex flex-col items-center justify-center text-md lg:text-xl border-neutral-700 border p-6 rounded-xl">
          <p>Republic of Moldova</p>
          <p>mun. Chisinau</p>
          <p>Str. Mihail Sadoveanu 12</p>
        </div>
        <div className="">
          <SocialLinks />
        </div>
      </footer>
    </main>
  );
}

const SocialLinks = () => {
  return (
    <section className="flex flex-row gap-6 mb-5 lg:mb-0">
      <Image
        src="/instagram.svg"
        alt="Instragram Logo"
        width={0}
        height={0}
        className="h-10 lg:h-16 w-auto"
      />
      <Image
        src="/facebook.svg"
        alt="Facebook Logo"
        width={0}
        height={0}
        className="h-10 lg:h-16 w-auto"
      />
      <Image
        src="/messenger.svg"
        alt="Messenger Logo"
        width={0}
        height={0}
        className="h-10 lg:h-16 w-auto"
      />
      <Image
        src="/whatsapp.svg"
        alt="Whatsapp Logo"
        width={0}
        height={0}
        className="h-10 lg:h-16 w-auto"
      />
    </section>
  );
};
