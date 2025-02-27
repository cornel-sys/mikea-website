import React from "react";
import Image from "next/image";
import PhoneLink from "./PhoneLink";

const PhoneFooter = () => {
  return (
    <>
      <div className="flex lg:hidden items-end">
        {/* Left Social Links */}
        <Image
          src="/instagram.svg"
          alt="Instagram"
          width={0}
          height={0}
          className="h-8 w-auto mr-4"
        />
        <Image
          src="/facebook.svg"
          alt="Facebook"
          width={0}
          height={0}
          className="h-8 w-auto mr-8"
        />

        {/* Center Phone Icon */}
        <div className="bg-neutral-900 p-2 rounded-full">
          <PhoneLink />
        </div>

        {/* Right Social Links */}
        <Image
          src="/messenger.svg"
          alt="Messenger"
          width={0}
          height={0}
          className="h-8 w-auto ml-8"
        />
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={0}
          height={0}
          className="h-8 w-auto ml-4"
        />
      </div>
    </>
  );
};

export default PhoneFooter;
