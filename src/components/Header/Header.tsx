"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function Header() {
  const [atTop, setAtTop] = useState(true);

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
      className={`fixed top-0 left-0 flex justify-between items-center w-full px-2 lg:px-24 z-50 outline-none
         transition-all duration-300
        ${atTop ? "backdrop-blur-0" : "bg-neutral-900/50 backdrop-blur-md"}`}
    >
      {/* Border - full width on mobile, custom width on larger screens */}
      <div
        className={`absolute bottom-0 h-0.5 bg-red-500 transition-opacity duration-300
          left-0 w-full 
          md:left-[calc(50%-calc(2/3*50%)-10px)] md:w-[calc(66.666667%+20px)]
          ${atTop ? "opacity-100" : "opacity-0"}`}
      />

      <div className="flex justify-center items-center w-full space-x-4 md:space-x-7 lg:space-x-10 py-2 md:py-4 ">
        <HouseLink href="/" title="Mikea 1" />
        <HouseLink href="/" title="Mikea 3" />
        <HouseLink href="/" title="Mikea 5" />
        <HouseLink href="/" title="Mikea 7" />
      </div>
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
