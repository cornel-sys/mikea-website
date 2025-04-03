import React from "react";
import Image from "next/image";

const SocialLinks = () => {
  return (
    <section className="flex flex-row gap-6 mb-0">
      {["instagram", "facebook", "messenger", "whatsapp"].map((name) => (
        <Image
          key={name}
          src={`/${name}.svg`}
          alt={`${name} Logo`}
          width={0}
          height={0}
          className="h-6 lg:h-10 w-auto"
        />
      ))}
    </section>
  );
};

export default SocialLinks;
