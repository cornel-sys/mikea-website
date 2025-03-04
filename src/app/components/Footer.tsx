import React from "react";
import SocialLinks from "./SocialLinks";
import PhoneLink from "./PhoneLink";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:flex items-center">
        <PhoneLink />
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:text-xl border-neutral-700 border px-4 py-2 mb-2 rounded-xl">
        <p className="lg:hidden">Str. Mihail Sadoveanu 12</p>
        <p className="lg:hidden">Republic of Moldova, mun. Chisinau</p>
        <p className="hidden lg:flex">Republic of Moldova</p>
        <p className="hidden lg:flex">mun. Chisinau</p>
        <p className="hidden lg:flex">Str. Mihail Sadoveanu 12</p>
      </div>
      <div className="hidden lg:flex">
        <SocialLinks />
      </div>
    </>
  );
};

export default Footer;
