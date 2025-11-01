"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";





const Homes = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-fit sm:min-h-[90vh] flex flex-col justify-start items-start px-4 sm:px-8 lg:px-20 pt-8 sm:pt-12 lg:pt-8 pb-10">
                <Image
                    src="/HomeImg/crush barrier img.jpg"
                    alt="Crush Barrier"
                    fill
                    className="object-cover z-0"
                    priority
                />

                {/* Light overlay */}
                <div className="absolute inset-0 bg-white/80 z-0" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-500 via-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
                        INDIA’S TOP <br />
                        INFRASTRUCTURE COMPANY – <br />
                        BUILDING THE NATION WITH PRIDE.
                    </h1>

                    <p className="mt-6 fonty text-lg sm:text-2xl md:text-xl lg:text-2xl text-gray-900 max-w-3xl font-light">
                        As the best infrastructure company in India and the most trusted partner for advanced Infrastructure.
                    </p>
                    <p className="mt-1 fonty text-lg sm:text-2xl md:text-xl lg:text-2xl text-gray-900 max-w-3xl font-light">
                        Projects across sectors and geographies, we are on a continuous journey to forge stronger foundations for our country.
                    </p>

                    <p className="mt-10 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                        # Backbone of India’s Infrastructure <br />
                        <span className="text-yellow-600 block mt-4 text-2xl sm:text-3xl lg:text-4xl">
                            We are PATH GROUP (PEIPL)
                        </span>
                    </p>
                </div>

                {/* Rotating Circular Logo Section (hidden on mobile) */}
                <div className="hidden sm:flex absolute bottom-12 right-4 sm:right-10 lg:right-20 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 items-center justify-center z-10">
                    {/* Outer Circle */}
                    <div className="absolute w-full h-full rounded-full border-2 border-gray-300"></div>

                    {/* SVG Circle Text with Link */}
                    <Link href="/Home/About_Your_Product_Read_More" className="absolute w-full h-full">
                        <svg className="w-full h-full animate-spin-slow text-gray-600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                                />
                            </defs>

                            <text fontSize="12" letterSpacing="2" fill="currentColor">
                                <textPath href="#circlePath" startOffset="0%">
                                    - Read More - - About Our Product - - Read More -
                                </textPath>
                            </text>

                            <circle cx="100" cy="100" r="60" stroke="#ccc" strokeWidth="2" fill="none" />

                            <text
                                x="100"
                                y="100"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="28"
                                fill="#007BFF"
                                className="cursor-pointer hover:fill-blue-700"
                            >
                                ←
                            </text>
                        </svg>
                    </Link>
                </div>
            </div>


        </>
    );
};

export default Homes;
