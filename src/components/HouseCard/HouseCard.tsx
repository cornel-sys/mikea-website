import Image from "next/image";
import React from "react";

export default function HouseCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row w-full">
      <Image
        src="/imagini/01.jpg"
        alt="Main Page Image"
        height={1920}
        width={1080}
        className="w-full md:w-2/3 h-auto"
      />
      <div className="flex flex-col justify-between md:pl-20 w-full md:w-1/3">
        <h2 className="text-xl font-bold mb-2">House Name</h2>
        <p className="text-gray-700 mb-4">
          Description of the house goes here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}
