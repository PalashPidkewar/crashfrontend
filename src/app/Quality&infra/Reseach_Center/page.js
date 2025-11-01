import React from "react";

const ResearchCenter = () => {
  return (<>
  <div className="w-full h-[70px] flex justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow">
                      <img src="/Logo_IMG/image.png" alt="Company Logo" className="h-[90px] object-contain mb-5" />
                    </div>
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            <span className="text-[#0078AE]">RESEARCH CENTER </span><span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Our Research Centre is equipped with cutting-edge technology and tools,
            including the latest hardware and Auto CAD software, to meet specific
            customer requirements. Utilizing TLT Software for our Transmission Line
            Tower Division, we streamline processes from purchase to dispatch,
            significantly reducing scrap and wastage.
          </p>
          <p className="text-gray-700">
            Our quality control lab, staffed by industry experts, rigorously tests
            our products to ensure they meet the highest standards of excellence and
            reliability. This commitment to quality and innovation drives our
            continuous improvement and customer satisfaction.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Reseach_IMG/application area office.jpg"
            alt="Research Center"
            className="w-4/5 max-w-md h-auto object-cover rounded-lg shadow-lg"
            
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default ResearchCenter;
