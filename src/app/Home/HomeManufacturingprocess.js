"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Accordion Component
function Accordion({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b pb-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-semibold pb-2"
        onClick={onToggle}
      >
        <span>{title}</span>
        {isOpen ? (
          <FaMinus className="text-gray-400" />
        ) : (
          <FaPlus className="text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

function HomeManufacturingProcess() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleToggle = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <div className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          {/* Left Section (35%) */}
          <div className="md:w-[35%]">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0078AE] text-left mb-4 pr-8">
              MANUFACTURING PROCESS
              <span className="text-orange-500">.</span>
            </h1>
          </div>

          {/* Right Section (65%) */}
          <div className="md:w-[65%] space-y-6 text-gray-400">
            <Accordion
              title="1. Review Technical Documents"
              content="Our process begins by meticulously reviewing technical documents to ensure adherence to thrie beam crash barrier specifications and client requirements."
              isOpen={activeAccordion === 0}
              onToggle={() => handleToggle(0)}
            />
            <Accordion
              title="2. Raw Material Inspection"
              content="We conduct thorough inspections of raw materials, ensuring they meet the necessary standards for durability and performance."
              isOpen={activeAccordion === 1}
              onToggle={() => handleToggle(1)}
            />
            <Accordion
              title="3. Raw Material Testing (Mechanical & Chemical Test)"
              content="Raw materials undergo several mechanical and chemical tests to verify their properties, ensuring high-quality production and reliability."
              isOpen={activeAccordion === 2}
              onToggle={() => handleToggle(2)}
            />
            <Accordion
              title="4. Galvanising"
              content={`Pickling HR coils are immersed in a caustic soda solution to remove any impurities and scale from the surface.\n , Rinsing in Water House The coils are then rinsed thoroughly in a water house to remove residual caustic soda solution.\nPickling in Acid Tank Next, the coils undergo pickling in an acid tank to further clean and prepare the surface for galvanisation.\nRinsing in Water Tank Coils are rinsed again in a water tank to neutralise any remaining acid.\nPre-fluxing This involves applying a flux solution to the surface of the coils, which helps in the adhesion of the zinc coating.\nDrying in Hot Chamber The coils are dried in a hot chamber to remove any moisture before galvanisation.\nHot Dip Galvanisation in Zinc Bath The dried coils are immersed in a zinc bath at high temperatures, ensuring uniform surface coating of zinc.\nCooling in Quenching Tank of White Water The galvanised coils are then cooled in a quenching tank filled with white water to solidify the zinc coating.\nCooling in Quenching Tank The coils undergo further cooling in a quenching tank filled with DI-chromate water to enhance corrosion resistance and improve surface finish.`}
              isOpen={activeAccordion === 3}
              onToggle={() => handleToggle(3)}
            />
            <Accordion
              title="5. Packing"
              content="This stage involves packing the goods securely, labelling them correctly, and ensuring all required documentation (such as invoices and shipping labels) is completed. The goal is to ensure the items are protected during transit and all necessary information is provided for smooth delivery."
              isOpen={activeAccordion === 4}
              onToggle={() => handleToggle(4)}
            />
            <Accordion
              title="6. Despatch"
              content="Once packed, the goods are transferred to a shipping carrier or logistics provider. This phase includes managing logistics, tracking the shipment, and ensuring timely delivery to the destination, as well as handling any potential issues that may arise during transportation."
              isOpen={activeAccordion === 5}
              onToggle={() => handleToggle(5)}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
    </div>
  );
}

export default HomeManufacturingProcess;
