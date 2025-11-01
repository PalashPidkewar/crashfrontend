
import React from "react";

const Application_Area = () => {

const projects = [
  {
    state: "Mizoram",
    project: "Installation of Modified Thrie Beam Crash Barriers on various stretches of National Highways in the state of Mizoram",
    Client:"Ministry of Road Transport & Highways",
},
  {
    state: "Uttar Pradesh",
    project: "Operation and Maintenance of Allahabad Bypass (Including Ganga Bridge Package ABP-I) from Km. 158.000 to Km 242.708 of NH-2 on OMT basis in the state of Uttar Pradesh (OMT Package No.- 32).",
    Client:"National Highway Authority of India.",
},
  {
    state: "Madhya Pradesh",
    project: "Development of Rau- Mhow- Mandleshwar Road on the State Highway- 01, on B.O.T Basis.",
   Client:"	Madhya Pradesh Road Development Corporation, M.P.",
  },
  {
    state: "Uttar Pradesh",
    Client:"M/s PNC Infratech Limited",
   
    project: "BHARATMALA PARIYOJANA Rehabilitation & Upgradation from 2 Lane to 4 Lane oh NH stretch under Bharatmala Pariyojana for Unnao- Lalganj section of NH- 232 A on Hybrid Annuity Mode in the state of Uttar Pradesh & Design Chainage Km 0.000 to 70.000.",
  },
  {
   
    state: "Uttar Pradesh",
     Client:"Prakash Asphaltings & Toll Highways (India) Ltd. [Own Project].",
    project: "Operation and Maintenance of Jhansi- Orai Section of NH- 25 (New NH-27) from Km 90-300 to Km 225.713 (Length 135.413 Km) in the state of Uttar Pradesh on OMT Basis.",
    
  },
  {
    state: "Uttarakhand",
     Client:"Ministry of Road Transport & Highways",
    project: "	Installation of Modified Thrie Beam Crash Barrier on various stretches of National Highways in the state of Mizoram",
  },
  {
    state: "Gujrat",
     Client:"Roads & Buidings Department, Gujarat",
    project:
      "Output and Performance based Road Contract (OPRC) for Improvement, Rehabilitation, Resurfacing Works and Network Performance of Roads – Dhandhuka-Dholera, Dhandhuka-Paliyad, Limbdi- Dhandhuka.",
  },
  {
    state:
      "Madhya Pradesh",
       Client:"M/s BRN Infra-structure Pvt Ltd | M/s R G Buildwell Engi-neers Limited | M/s Rudnav Infra Private Limited | M/s Dhatarwal Construction Company Pvt Ltd. | M/s Shivalik Buildtech Private Limited- under Ministry of Road Transport & Highways (MORTH).",
    project: "Green National Highways Corridor Project- Rehabilitation & Upgradation to Intermediate Lane Con-figuration of Paonta Sahib- Hewna Section (Km 0.000 to Km 25.000) on NH- 707 in the state of Himachal Pradesh under Green National Highway Corridor Project (GNHCP) Package 01 to 05",
  },
  {
    state: "Maharashtra",
     Client:"NATIONAL HIGHWAYS INFRA PROJECTS PRIVATE LIMITED",
    project: "Supply and Installation of MBCB on Borkhedi-Wadner Toll Road Project for National Highways Infra Projects Private Limited (NHIPPL),",
  },
  {
    state: "Madhya Pradesh",
     Client:"National Highways Authority of India",
    project:
      "Four Laning of Harda to Temagav Section from (Design Ch. 0+000/Existing Ch. 141+750) (Design 30+000/Existing Ch. 180+500) section of NH-47 (Old NH-59 A) (Design Length 30.00 Km) under Bharat Mala Pariyojana Phase-1 (Economic Coridor) in the state of Madhya Pradesh on Hybrid Annuity Mode.",
  },
    {
    state: "Uttar Pradesh & Rajasthan",
     Client:"West Central Railways",
    project:
      "	Provision of Metal Beam Crash Barrier parallel to Track to prevent CRO & raising of speed upto 160kmph in MTJ-GGC Section of Kota Division.",
  },
    {
    state: "Himachal Pradesh",
     Client:"M/s Airef Engineers (P) Ltd.",
    project:
      "National Highways Development Project (III) Four Laning of Solan Kaithlighat Section of NH-22 (now NH-5) from Km 106+139 to Km 129+050 under NHDP Phase- III on EPC Mode in the State of Himachal Pradesh",
  }
];

  return (
    <>
      {/* Hero Section - Fully Responsive */}
      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* Text Section - Responsive */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
                <span className="text-[#0078AE]">Application Area <span className="text-orange-500">.</span></span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed">
                <p className="text-gray-700">
                  Ensuring safety for traffic movement on highways and road systems is a challenging task. With accidents increasing at an alarming rate each day, road safety becomes inevitable. Empowering roads with proper road safety crash barriers help minimise the extent of risk and damage to vehicles and passengers by absorbing the impact energy during accidents. This is where Path India Limited plays a major role.
                </p>
                
                <p className="text-gray-700">
                  As one of the established road safety products manufacturers in India, we offer complete solutions ranging from single and double-sided W Beam and Thrie Beam crash barriers to essential components like anchorage systems, post spacers, and fasteners, ensuring comprehensive safety infrastructure.
                </p>
                
                <p className="text-gray-700">
                  As one of the established road safety products manufacturers in India, we offer complete solutions ranging from single and double-sided W Beam and Thrie Beam crash barriers to essential components like anchorage systems, post spacers, and fasteners, ensuring comprehensive safety infrastructure.
                </p>
              </div>
            </div>

            {/* Image Section - Responsive */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-full">
                <img
                  src="/Quality_Policy_IMG/manufactureplant.png"
                  alt="Research Center"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-68 lg:mt-22 xl:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Mobile First Design */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-6 sm:mb-8 md:mb-10 text-center lg:text-left">
            PORTFOLIO
          </h2>

          {/* Mobile Card Layout (Small screens) */}
          <div className="block lg:hidden space-y-4 sm:space-y-6">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 border-l-4 border-blue-400"
              >
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {item.state}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2 sm:mb-3">
                  Client:
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {item.Client}
                </p>
                
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">
                  Project:
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.project}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout (Large screens) */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-400 text-white text-left">
                  <th className="py-4 px-6 text-sm font-semibold">State</th>
                  <th className="py-4 px-6 text-sm font-semibold">Client</th>
                  <th className="py-4 px-6 text-sm font-semibold">Project Name</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 align-top text-sm text-gray-800 font-medium">
                      {item.state}
                    </td>
                    <td className="py-4 px-6 align-top text-sm text-gray-700 max-w-xs">
                      <div className="line-clamp-3">
                        {item.Client}
                      </div>
                    </td>
                    <td className="py-4 px-6 align-top text-sm text-gray-800 max-w-lg">
                      <div className="line-clamp-4">
                        {item.project}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet Horizontal Scroll Table (Medium screens) */}
          <div className="hidden md:block lg:hidden overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-400 text-white text-left">
                  <th className="py-3 px-4 text-sm font-semibold whitespace-nowrap">State</th>
                  <th className="py-3 px-4 text-sm font-semibold min-w-[200px]">Client</th>
                  <th className="py-3 px-4 text-sm font-semibold min-w-[300px]">Project Name</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-4 align-top text-sm text-gray-800 font-medium whitespace-nowrap">
                      {item.state}
                    </td>
                    <td className="py-3 px-4 align-top text-sm text-gray-700">
                      {item.Client}
                    </td>
                    <td className="py-3 px-4 align-top text-sm text-gray-800">
                      {item.project}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application_Area;