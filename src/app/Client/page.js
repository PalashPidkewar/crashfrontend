"use client";
import React from "react";
import Image from "next/image";

const clients = [
  "adani.png",
  "Aarneel Logo.jpg",
  "INFRA_ESSEL.jpg",
  "bansalgroup_bhopal_logo.jpg",
  "download.jpg",
  "esselinfa.jpg",
  "IHMCL.jpg",
  "PNC.png",
  "RIDCOR.jpg",
  "safeway concession.jpg",
  "NHAI.png",
  "MPRDC.jpg",
  "NKC.jpg",
  "WAGAD.jpg",
  "UEPL.jpg",
  "nhai invit.jpg",
  "ICi BANK.png",
  "HRBC.jpg",
  "VRC.jpg",
  "AIDPL.jpg",
  "AKVN.jpg",
  "brand-10.png",
  "nhlml.jpg",
  "IDA.jpg",
];

const Clients = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header Logo */}
      <div className="w-full h-[60px] flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow">
        <div className="relative w-[350px] h-[350px] mb-4">
          <Image
            src="/Logo_IMG/image.png"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Clients Title */}
      <div className="py-10 px-4 sm:px-8">
        <div className="text-center mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0078AE]">
            Associate Clients<span className="text-orange-500">.</span>
          </h1>
        </div>

        {/* Intro Text */}
        <section className="px-4 py-5 text-center">
          <p className="text-md sm:text-lg text-gray-600">
            Welcome to <span className="font-semibold">PATH INDIA LTD</span>
          </p>
          <p className="text-sm font-thin text-gray-600 mt-1">
            We’re proud to showcase our esteemed clientele, who have
            significantly contributed to the growth of our organization since
            its inception.
          </p>
          <div className="w-40 border-b-2 border-gray-400 mt-2 mx-auto"></div>
        </section>

        {/* Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
          {clients.map((file, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-xl w-36 h-32 flex flex-col items-center justify-center 
              hover:scale-105 transition-transform duration-300 border border-gray-300"
            >
              <div className="relative w-[60px] h-[60px] mb-2">
                <Image
                  src={`/Clients_IMG/Path Indialtd Clients/${file}`}
                  alt={file}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs font-medium text-center text-gray-600">
                {file.replace(/\.[^/.]+$/, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
