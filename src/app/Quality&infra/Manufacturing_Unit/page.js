"use client";
import React from "react";
import Image from "next/image";

const galleryItems = [
  { img: "/Quality_Policy_IMG/cbpm-1.jpg", title: "Arc Welding Machine" },
  { img: "/Quality_Policy_IMG/cbpm-2.jpg", title: "Auto Cut To Length Shearing Machine" },
  { img: "/Quality_Policy_IMG/cbpm-3.jpg", title: "Bench Vice" },
  { img: "/Quality_Policy_IMG/cbpm-6.jpg", title: "Decoiler Piller Table" },
];

const Manufacturing_Unit = () => {
  return (
    <div className="w-full text-gray-900">
      {/* Section 1: Banner Image */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/Quality_Policy_IMG/banners manufacuring yard.jpg"
          alt="Infrastructure"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Section 2: Heading */}
      <section className="px-4 sm:px-8 py-6 bg-gray-100">
        <div className="flex items-center gap-2 group">
          <Image
            src="/ESG_IMG/next.png"
            alt="arrow"
            width={20}
            height={20}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 fonty">
            Manufacturing Yard (CRASH BARRIERS)
            <span className="text-orange-500">.</span>
          </h2>
        </div>
      </section>

      {/* Section 3: Welcome Message */}
      <section className="px-4 py-6 text-center">
        <p className="text-md sm:text-lg text-gray-600">
          Welcome to{" "}
          <span className="font-semibold">
            PATH INDIA LTD ( CRASH BARRIERS )
          </span>
        </p>
        <p className="text-sm font-thin text-gray-600 mt-1">
          Crafting Tomorrow's Infrastructure Today
        </p>
        <div className="w-40 border-b-2 border-gray-400 mt-2 mx-auto"></div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Section 4: Image Grid */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manufacturing_Unit;
