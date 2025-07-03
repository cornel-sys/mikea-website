"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";

// Image Carousel Component
const ImageCarousel = () => {
  const images = Array.from(
    { length: 19 },
    (_, i) => `/imagini/${String(i + 1).padStart(2, "0")}.jpg`
  );
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 1000); // Transition duration (should match the CSS animation)
    }, 4000); // Image change interval (including transition time)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="absolute min-h-[100dvh] w-full bottom-20 md:bottom-14 -z-10 overflow-hidden">
      {/* Background images with smooth crossfade */}
      <motion.img
        key={index}
        src={images[index]}
        alt="Presentation of House Image"
        className="absolute h-full w-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFading ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.img
        key={nextIndex}
        src={images[nextIndex]}
        alt="Presentation of House Image"
        className="absolute h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFading ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ImageCarousel;
