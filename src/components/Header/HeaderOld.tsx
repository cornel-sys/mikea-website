"use client";

import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract locale from the current path
  const currentLocale = pathname.startsWith("/ro") ? "ro" : "ru";
  const newLocale = currentLocale === "ru" ? "ro" : "ru";

  const switchLanguage = () => {
    // Replace the locale in the pathname
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    // Push the new URL
    router.push(newPath);
  };

  return (
    <header className="flex justify-between items-center w-full px-2 lg:px-24 bg-neutral-900/80 backdrop-blur-md outline-none border-none">
      <div className="hidden md:flex w-10"></div>
      <h1 className={`text-5xl md:text-6xl lg:text-8xl font-semibold`}>
        Mikea
      </h1>
      <Image
        src="/globe.svg"
        alt="Language Chooser"
        width={50}
        height={50}
        className="h-10 md:h-14 w-auto cursor-pointer"
        onClick={switchLanguage}
        tabIndex={0}
      />
    </header>
  );
}
