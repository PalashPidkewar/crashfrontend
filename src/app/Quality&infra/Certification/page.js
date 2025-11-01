"use client";
import React from "react";
import Image from "next/image";

const CertificatesSection = () => {
  const certificates = ["/Quality_Policy_IMG/certificate.webp"];

  return (
    <>
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

      {/* Certificates Section */}
      <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
            <span className="text-green-500">OUR </span>CERTIFICATES
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Path India, our certificates are a testament to our unwavering
            commitment to maintaining the top-quality standards of our products
            at every stage of the operations.
          </p>
        </div>

        {/* Under Update Notice */}
        <h1 className="font-bold text-center text-red-500 mb-8">
          UNDER UPDATE !!
        </h1>

        {/* Centered Certificate Image */}
        <div className="flex justify-center items-center">
          {certificates.map((img, index) => (
            <div
              key={index}
              className="relative w-[220px] h-[280px] border border-gray-200 shadow-md rounded-md bg-white overflow-hidden flex items-center justify-center"
            >
              <div className="relative w-[85%] h-[85%]">
                <Image
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CertificatesSection;
