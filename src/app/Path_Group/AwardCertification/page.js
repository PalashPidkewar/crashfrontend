"use client";
import React from "react";
import Image from "next/image";
const AwardCertification = () => {
  const certificates = [
    "/Quality_Policy_IMG/certifiaction.jpg",
    "/Quality_Policy_IMG/certificate.webp",
    "/Quality_Policy_IMG/certificate.webp",
    "/Quality_Policy_IMG/majhi mumbai.jpg",
  ];

  return (<>
          {/* Top Logo Bar */}
          <div className="w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
            <div className="relative w-[440px] h-[440px]">
              <Image
                src="/Logo_IMG/image.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
    <section className="relative bg-white py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
          <span className="text-[#0078AE]">
            OUR AWARD & CERTIFICATES<span className="text-orange-500">.</span>
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
        {certificates.map((img, index) => (
          <div
            key={index}
            className="w-full max-w-[220px] h-[280px] border border-gray-200 shadow-md rounded-md overflow-hidden bg-white flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Certificate ${index + 1}`}
              className="object-contain h-full w-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default AwardCertification;
