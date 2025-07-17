"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [atTop, setAtTop] = useState(true);

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

  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 flex justify-between items-center w-full px-2 lg:px-24 z-30 outline-none
         transition-all duration-300
        ${atTop ? "backdrop-blur-0" : "bg-neutral-900/50 backdrop-blur-md"}`}
    >
      {/* Animated border */}
      <div
        className="absolute bottom-0 left-0 w-full md:left-[calc(50%-calc(2/3*50%)-10px)] md:w-[calc(66.666667%+20px)]"
        style={{
          height: atTop ? 3 : 0,
          background: "#ef4444", // Tailwind red-500
          transition: "height 0.3s cubic-bezier(0.4,0,0.2,1)",
          borderRadius: 2,
          opacity: atTop ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      <div className="flex justify-center items-center w-full space-x-4 md:space-x-7 lg:space-x-10 py-2 md:py-4">
        <HouseLink href="/" title="Mikea 1" />
        <HouseLink href="/" title="Mikea 3" />
        <HouseLink href="/" title="Mikea 5" />
        <HouseLink href="/" title="Mikea 7" />
      </div>
      <Image
        src="/globe.svg"
        alt="Language Chooser"
        width={40}
        height={40}
        className="h-5 md:h-10 w-auto cursor-pointer"
        onClick={switchLanguage}
        tabIndex={0}
      />
    </header>
  );
}

type HouseLinkProps = {
  href: string;
  title: string;
};

function HouseLink(props: HouseLinkProps) {
  return (
    <Link
      href={props.href}
      className="text-md md:text-lg lg:text-xl font-semibold hover:text-red-300 transition-colors duration-300 text-gray-300"
    >
      {props.title}
    </Link>
  );
}
