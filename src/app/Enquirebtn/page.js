"use client";

import React from "react";
import { useRouter } from "next/navigation";

const EnquireButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Contactus");
  };

  return (
    <div
      className="fixed right-0 top-1/4 z-50"
      style={{ transform: "translateY(-50%)" }}
    >
      <button
        onClick={handleClick}
        aria-label="Enquire Now"
        className={`
          relative
          bg-white text-[#0078AE] font-semibold
          py-1.5 px-4
          text-xs sm:text-sm
          hover:bg-[#0078AE] hover:text-white
          transition-all duration-300
          transform -rotate-90 origin-bottom-right
          shadow-[0_4px_10px_rgba(0,0,0,0.2)]
        `}
      >
        Enquire Now

        {/* Right Tail */}
        <span
          className="absolute -right-2 top-1/2 -translate-y-1/2 
          w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px]
          border-t-transparent border-b-transparent border-l-white
          transition-all duration-300
        "
        />

        {/* Left Tail */}
        <span
          className="absolute -left-2 top-1/2 -translate-y-1/2 
          w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px]
          border-t-transparent border-b-transparent border-r-white
          transition-all duration-300
        "
        />
      </button>
    </div>
  );
};

export default EnquireButton;
