"use client";
import { useState } from "react";

const ShimmerButton = ({
  title,
  customCSS,
}: {
  title: string;
  customCSS?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMovement = () => {
    setIsHovered(!isHovered);
  };

  return (
    <button
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
            border-slate-800 bg-[length:200%_100%] px-6
            font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
              isHovered
                ? "hover:bg-[linear-gradient(45deg,#040e44,45%,#120d57,55%,#160c5c)] scale-101 text-white uppercase"
                : ""
            } ${customCSS ? customCSS : ""}`}
      onMouseEnter={handleMouseMovement}
      onMouseLeave={handleMouseMovement}
    >
      {title}
    </button>
  );
};

export default ShimmerButton;
