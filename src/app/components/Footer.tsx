import React from "react";
import SocialLinks from "./SocialLinks";
import PhoneLink from "./PhoneLink";

const Footer = () => {
  const street = "str. Mitropolit Dosoftei 89";
  return (
    <>
      <div className="hidden lg:flex items-center">
        <PhoneLink />
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:text-base border-neutral-700 border px-4 py-2 rounded-xl font-medium">
        <p className="lg:hidden">{street}</p>
        <p className="lg:hidden">Republic of Moldova, mun. Chisinau</p>
        <p className="hidden lg:flex">Republic of Moldova</p>
        <p className="hidden lg:flex">mun. Chisinau</p>
        <p className="hidden lg:flex">{street}</p>
      </div>
      <div className="hidden lg:flex">
        <SocialLinks />
      </div>
    </>
  );
};

export default Footer;
