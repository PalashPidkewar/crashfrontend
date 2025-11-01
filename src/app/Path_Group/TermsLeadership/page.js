"use client";
import React, { useState } from "react";
import Image from "next/image";


function TermsLeadership() {
  const [leadershipPage, setLeadershipPage] = useState(0);
  const cardsPerPage = 4;

  const leadershipMembers = [
    { name: "Mr. Nikunj Parmar", title: "Sr. GM", image: "/Boardof director&LeadershipIMG/Nikunj-Parmar.jpg" },
    { name: "Mr. J.P Mishra", title: "CGM & HR Admin", image: "/Boardof director&LeadershipIMG/jp-mishra.jpg" },
    { name: "Mr. Anurag Surana", title: "Sr. GM (Mechanical)", image: "/Boardof director&LeadershipIMG/Anurag-Surana.jpg" },
    { name: "Mr. Rajesh Jhamnani", title: "Sr. GM", image: "/Boardof director&LeadershipIMG/rajeshji.jpg" },
    { name: "Mr. Manish Sharma", title: "GM (Toll Operations)", image: "/Boardof director&LeadershipIMG/manish.jpg" },
    { name: "Sanjay Kumar Borse", title: "General Manager", image: "/Boardof director&LeadershipIMG/Sanjay-Borse.jpg" },
    { name: "Mr. Anuj Goyal", title: "Director", image: "/Boardof director&LeadershipIMG/Anuj-Goyal.jpg" },
    { name: "Mr. Hemesh Garg", title: "CS", image: "/Boardof director&LeadershipIMG/Hemesh-Garg.jpg" },
    { name: "Navneet Sharma", title: "Chief Project Manager", image: "/Boardof director&LeadershipIMG/navneet.jpg" },
    { name: "Sultan Ahmad", title: "Director", image: "/Boardof director&LeadershipIMG/sultan-2.jpg" },
    { name: "Ashraf Hussian Qureshi", title: "Director", image: "/Boardof director&LeadershipIMG/ashraf.jpg" },
    { name: "Narayan Swaroop Barua", title: "Chief Project Manager", image: "/Boardof director&LeadershipIMG/narayan-ji.jpg" },
  ];

  const maxPage = Math.ceil(leadershipMembers.length / cardsPerPage);
  const handlePrev = () => setLeadershipPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setLeadershipPage((prev) => Math.min(prev + 1, maxPage - 1));

  const displayedLeadership = leadershipMembers.slice(
    leadershipPage * cardsPerPage,
    (leadershipPage + 1) * cardsPerPage
  );

  return (
    <>
      {/* Logo Header */}
  

     

      {/* Leadership Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-4 md:px-8 lg:px-16 py-12 sm:py-16 font-sans relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 md:w-40 md:h-40 border border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-full"></div>
        </div>

        <section className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-800 relative">
                Leadership Team
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              </h2>
            </div>
            <h4 className="text-md sm:text-lg md:text-xl font-semibold mb-3 text-gray-600 tracking-wide">
              (PEIPL)
            </h4>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-sm"></div>
          </div>

          {/* Slider Controls + Grid */}
          <div className="relative px-2 sm:px-6 md:px-12 lg:px-16">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              disabled={leadershipPage === 0}
              className="absolute -left-3 sm:left-0 top-1/2 transform -translate-y-1/2 z-20 
                         w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-xl rounded-full border border-gray-200
                         hover:shadow-2xl hover:scale-110 transition-all duration-300 
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
                         flex items-center justify-center text-gray-600 hover:text-orange-500"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Leadership Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {displayedLeadership.map((member, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl 
                           border border-gray-100 hover:border-gray-200
                           transform hover:-translate-y-2 transition-all duration-500
                           overflow-hidden relative"
                >
                  <div className="relative p-5 flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full 
                                    transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full border-4 border-white shadow-md
                                   transform group-hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full border-2 border-orange-300 
                                      scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 
                                   group-hover:text-orange-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-transparent mx-auto 
                                    group-hover:from-orange-300 transition-colors duration-300"></div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium 
                                  group-hover:text-gray-600 transition-colors duration-300">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              disabled={leadershipPage >= maxPage - 1}
              className="absolute -right-3 sm:right-0 top-1/2 transform -translate-y-1/2 z-20 
                         w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-xl rounded-full border border-gray-200
                         hover:shadow-2xl hover:scale-110 transition-all duration-300 
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
                         flex items-center justify-center text-gray-600 hover:text-orange-500"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxPage }).map((_, index) => (
              <button
                key={index}
                onClick={() => setLeadershipPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === leadershipPage
                    ? "bg-orange-500 shadow-lg scale-110"
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default TermsLeadership;
