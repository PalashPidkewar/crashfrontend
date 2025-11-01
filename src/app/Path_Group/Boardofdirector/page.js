"use client";
import React from "react";
import Image from "next/image";
import TermsLeadership from "../TermsLeadership/page";
function Board_OF_Director() {
  const boardMembers = [
    {
      name: "Mr. Nitin Agrawal",
      title: "CEO, Visionary Leader, MD",
      image: "/Boardof director&LeadershipIMG/NITIN-Sir.jpg",
    },
    {
      name: "Mr. Nipun Agrawal",
      title: "Director",
      image: "/Boardof director&LeadershipIMG/NIPUN-SIR-1.jpg",
    },
    {
      name: "Mr. Saksham Agrawal",
      title: "Director",
      image: "/Boardof director&LeadershipIMG/SHAKSHAM-Sir.jpg",
    },
  ];

  return (<>
     <div className="relative w-full h-[70px] flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
  <Image
    src="/Logo_IMG/image.png"
    alt="Company Logo"
    width={350}
    height={350}
    className="object-contain"
  />
</div>


 
    <section className="py-16 bg-white lg:px-24">
        
      {/* Enhanced typography for main title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-center text-gray-800 tracking-tight">
        Meet Our <span className="text-orange-600">Directors</span>
      </h2>
      {/* Subtitle with slightly reduced font size and lighter color */}
      <h4 className="text-center text-md md:text-lg font-medium mb-4 text-gray-500">
        (PEIPL) Leadership Board
      </h4>
      {/* Thicker, more prominent separator line */}
      <div className="w-16 h-1 bg-orange-600 mx-auto mb-12 rounded-full"></div>

      {/* Grid container: Added a small gap for visual separation and a max-width for better centering on large screens */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4 sm:px-6">
        {boardMembers.map((member, idx) => (
          // Member Card Styling: Removed border, added a subtle shadow, smooth rounded corners, and cleaner hover effect
          <div
            key={idx}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
          >
            {/* Image Container: Increased size, added a subtle border/ring for emphasis */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-5">
              <Image
                src={member.image}
                alt={member.name}
                fill
                // Added a ring effect and kept the circular shape
                className="object-cover rounded-full ring-4 ring-orange-500 ring-offset-2"
                // Removed the hover scale effect from here, as we applied a transform to the whole card
              />
            </div>
            
            <div className="text-lg sm:text-xl font-bold mt-2 text-gray-800">
              {member.name}
            </div>
            {/* Title Styling: Used a distinct color and lighter font-weight */}
            <div className="text-sm text-orange-600 font-medium mb-1">
              {member.title}
            </div>
          </div>
        ))}
      </div>
    </section>
    <TermsLeadership/>
    </>
  );
}

export default Board_OF_Director;