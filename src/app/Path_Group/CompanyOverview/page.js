'use client';

import { useState } from 'react';
import Image from 'next/image';

import { FaPlus, FaMinus } from 'react-icons/fa';

// Accordion Component
function Accordion({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b pb-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold pb-2"
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] mt-3' : 'max-h-0'
          }`}
      >
        <p className="text-gray-600 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

export default function CompanyOverview() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      {/* Header with Logo */}
     <div className="relative w-full h-[70px] flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
  <Image
    src="/Logo_IMG/image.png"
    alt="Company Logo"
    width={350}
    height={350}
    className="object-contain"
  />
</div>


      {/* Overview Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-gray-700">
            <h2 className="text-4xl font-bold border-l-4 text-[#0078AE] pl-4 mb-4">
              <span className="text-5xl text-[#0078AE]">C</span>ompany <span className="text-blue-500">Overview</span>
            </h2>
            <p>
              <strong>Prakash Asphalting’s & Toll Highways (India) Limited</strong> is a leading construction company
              that boasts of an incredible track record within the transportation and infrastructural sector in Central India.
            </p>
            <p>
              Founded in July 1996, PATH has become one of the most trusted construction companies, focusing primarily
              on road and bridge construction.
            </p>
            <p>
              From traditional EPC contracts to modern Public Private Partnership models like BOT, DBFOT, OMT, and HAM — PATH is engaged in all aspects of infrastructure development.
            </p>
            <p>
              The company’s strength lies in design, planning, construction, operations, and maintenance, driven by values like integrity, quality, and accountability.
            </p>
            <p>
              PATH is recognized for delivering projects with unmatched skill, quality assurance, timely execution, and client satisfaction.
            </p>
            <p>
              PATH’s diverse skillset encompasses the design, planning, development, construction, IT, operation, and maintenance of its infrastructure projects. PATH is a company that believes in approaching each of its projects with the same level of passion, integrity, accountability, and quality.
            </p>
            <p>
              Today, PATH’s success is attributed to the ability to provide an unmatched combination of skills, experience, quality assurance, timely deliverance, and customer satisfaction on each and every one of our projects.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out border-gray-300 border-5">
              <Image
                src="/CompanyOverview_Images/path-ab-img-CfEamnrT.jpg"
                alt="Company Project"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSR Section */}
      <div className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Section (35%) */}
          <div className="md:w-[35%]">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-400 text-left mb-4 pr-8">
              CSR POLICY<span className="text-orange-500">.</span>
            </h1>
          </div>

          {/* Right Section (65%) */}
          <div className="md:w-[65%] space-y-6 text-gray-400">
            <Accordion
              title="Corporate Social Responsibility Philosophy"
              content="A society witnesses growth with all the members understanding their social responsibility and contributing towards the same. We have worked on reducing our carbon footprint, and we are constantly exploring ways to negate or minimise the damage done to the environment during our construction activities."
              isOpen={activeAccordion === 0}
              onToggle={() => handleToggle(0)}
            />
            <Accordion
              title="CSR Committee and its Roles"
              content="We have a dedicated committee that overlooks all the CSR projects and their smooth execution. The Committee will report to the Company's Board of Directors."
              isOpen={activeAccordion === 1}
              onToggle={() => handleToggle(1)}
            />
            <Accordion
              title="Committee Members"
              content={`Mr. Nitin Agrawal , Managing Director (Chairman)\nMr. Nipun Agrawal , Director (Member)\nMs. Saksham Agrawal ,  Director (Member)`}
              isOpen={activeAccordion === 2}
              onToggle={() => handleToggle(2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
