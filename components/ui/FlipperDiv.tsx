import React from "react";
import Image from "next/image";
import csslogo from "@/public/techstack/css.svg";

const FlipperDiv: React.FC = () => {
  return (
    <div className="relative w-40 h-40 cursor-pointer group">
      {/* Container for the logo and text */}
      <div className="relative w-full h-full flex items-center justify-center bg-green-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-700">
        {/* Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:top-1/3 group-hover:scale-75 transition-all duration-700">
          <Image
            src={csslogo.src}
            alt="OpenAI Logo"
            className="object-contain h-24 w-24"
            height={96}
            width={96}
          />
        </div>

        {/* Text (Hidden initially, appears on hover) */}
        <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-opacity duration-700">
          <span className="block text-sm font-semibold text-white">
            Powered By
          </span>
          <span className="block text-lg font-bold text-white mt-1">
            GPT-Omni
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlipperDiv;
