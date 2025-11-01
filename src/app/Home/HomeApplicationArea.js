"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const areas = [
  {
    title: "Highways Road Safety",
    description:
      "Metal Beam crash barriers enhance safety on high-speed roads by reducing accidents and providing reliable vehicle protection.",
    image: "/ApplicationArea_IMG/highway road safty crush barriers.jpg",
  },
  {
    title: "Railway Crossings",
    description:
      "Protecting intersections between roads and railway tracks, minimising the risk of collisions between vehicles and trains.",
    image: "/ApplicationArea_IMG/railwayside crush barriers.jpg",
  },
  {
    title: "Highways and Expressways",
    description:
      "Ensuring safety on high-speed road networks, reducing the severity of accidents and protecting drivers and passengers from collisions.",
    image: "/ApplicationArea_IMG/road side crush barriers img.png",
  },
  {
    title: "Bridges and Urban road networks",
    description:
      "Protecting urban roads and bridges by safeguarding commuters and infrastructure from potential hazards.",
    image: "/ApplicationArea_IMG/urban side rural area crush barriers.jpg",
  },
  {
    title: "Industrial Zones",
    description:
      "Enhancing safety in industrial areas by preventing vehicle collisions, protecting workers and equipment from potential hazards.",
    image: "/ApplicationArea_IMG/industialzonecrush barriers.png",
  },
];

export default function ApplicationAreas() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlip = (index) => {
    setActiveCardIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#0078AE] mb-4">
          APPLICATION AREAS<span className="text-orange-500">.</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Check out the diverse application areas of Path India's Metal Beam
          Crash Barriers...
        </p>

        {windowWidth < 1024 ? (
          <div className="flex flex-col items-center gap-4">
            {/* First Row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 w-full px-2">
              {areas.slice(0, 2).map((area, index) => (
                <Card
                  key={index}
                  area={area}
                  index={index}
                  isFlipped={activeCardIndex === index}
                  onFlip={handleFlip}
                  isMobile={true}
                />
              ))}
            </div>
            
            {/* Second Row - 1 card full width */}
            <div className="w-full px-2">
              <Card
                area={areas[2]}
                index={2}
                isFlipped={activeCardIndex === 2}
                onFlip={handleFlip}
                isMobile={true}
              />
            </div>
            
            {/* Third Row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 w-full px-2">
              {areas.slice(3, 5).map((area, idx) => {
                const index = idx + 3;
                return (
                  <Card
                    key={index}
                    area={area}
                    index={index}
                    isFlipped={activeCardIndex === index}
                    onFlip={handleFlip}
                    isMobile={true}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-6">
              {areas.slice(0, 3).map((area, index) => (
                <Card key={index} area={area} isMobile={false} />
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {areas.slice(3, 5).map((area, index) => (
                <div key={index} className="w-1/3">
                  <Card area={area} isMobile={false} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Card Component
const Card = ({ area, isMobile = false, isFlipped = false, onFlip, index }) => {
  return (
    <div
      className={`relative w-full h-49 sm:h-56 md:h-64 rounded overflow-hidden transition-transform duration-500 ${
        !isMobile ? "group" : ""
      }`}
      style={{ perspective: isMobile ? "1000px" : "none" }}
    >
      <div
        className={`w-full h-full transition-transform duration-500 ${
          isMobile && isFlipped ? "transform rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30" />

          {/* Desktop Title & Read More */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center justify-between">
            <h3 className="font-semibold text-sm sm:text-lg">{area.title}</h3>
            {!isMobile && (
              <button className="hidden sm:block text-black px-3 py-1 rounded hover:bg-gray-200 transition">
                {/* optional Read More */}
              </button>
            )}
          </div>

          {/* Desktop Description on Hover */}
          {!isMobile && (
            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black bg-opacity-80">
              <h3 className="font-semibold text-sm sm:text-lg text-yellow-400">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm">{area.description}</p>
            </div>
          )}

          {/* Mobile Top-right Read More Button */}
          {isMobile && typeof index !== "undefined" && (
            <button
              onClick={() => onFlip(index)}
              className="absolute top-2 right-2 z-20 bg-transparent p-0 shadow-none rounded-none"
            >
              <Image
                src="/ApplicationArea_IMG/add-button.png"
                alt="Read more"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>

        {/* Back Side (Mobile Only) */}
        {isMobile && (
          <div
            className="absolute inset-0 bg-black bg-opacity-90 text-white p-4 rotate-y-180"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <h3 className="font-semibold text-sm sm:text-lg mb-2 text-yellow-400">
              {area.title}
            </h3>
            <p className="text-xs sm:text-sm">{area.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};