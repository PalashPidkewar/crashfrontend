"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import missing icons


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

const Quality_Policy = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleToggle = (index) => {
        setActiveAccordion((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <div className="w-full text-gray-900">
                {/* Section 1: Image */}
                <section className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src="/Quality_Policy_IMG/crushbarriers.jpg"
                        alt="Infrastructure related to Quality Policy"
                        className="w-full h-full object-cover"
                    />
                    {/* Darker Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </section>

                {/* Section 2: Left-Aligned Heading */}
                <section className="px-4 sm:px-8 py-6 bg-gray-100">
                    <div className="flex items-center gap-2 group">
                        <img
                            src="/ESG_IMG/next.png"
                            alt="Next"
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        />
                        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800">
                            Quality & Infrastructure
                        </h2>
                    </div>
                </section>

                {/* Section 3: Welcome Message */}
                <section className="px-4 py-6 text-center">
                    <p className="text-md sm:text-lg text-gray-600">
                        Welcome to <span className="font-semibold">PATH INDIA LTD</span>
                    </p>
                    <p className="text-sm font-thin text-gray-600 mt-1">Road Safety</p>
                    <div className="w-40 border-b-2 border-gray-400 mt-2 mx-auto"></div>
                </section>

                <hr className="border-t border-gray-200" />

                {/* Section 4: Company Info */}
                <section className="px-8 sm:px-8 md:px-16 py-8 space-y-6">
                    <p className="mt-2 text-black">
                        At Path India, quality is not just a benchmark; it is the foundation of everything we do. Our unwavering
                        commitment to excellence drives us to deliver products and solutions that consistently exceed industry standards.
                        We believe in maintaining the highest levels of precision, durability, and reliability, ensuring customer
                        satisfaction at every step.
                    </p>

                    <p className="mt-6 text-black">
                        Our state-of-the-art manufacturing facilities are equipped with advanced technology and tools, enabling seamless
                        production processes and enhanced efficiency. From raw material sourcing to final delivery, each stage undergoes
                        stringent quality control checks to ensure flawless execution. This meticulous approach reflects our dedication to
                        delivering superior products that stand the test of time.
                    </p>

                    <p className="mt-6 text-black">
                        With a robust infrastructure and a team of skilled professionals, we are positioned to handle projects of diverse
                        scales and complexities. Path India continues to lead the way in setting new standards in quality, innovation, and
                        customer trust.
                    </p>
                </section>
            </div>

            {/* CSR Section */}
            <div className="bg-white py-12 px-6 md:px-16 border-t border-gray-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
                    {/* Left Section (35%) */}
                    <div className="md:w-[35%]">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-gray-400  text-left mb-4 pr-8">
                            Quality Policies<span className="text-orange-500">.</span>
                        </h1>
                        <h2 className="fonty text-gray-500 lg:mt-12 pr-5">Without proper quality policies, it is impossible to give our clients exactly what they want. We have robust quality policies in place that help Utkarsh to constantly evolve and grow. However, we keep a track on our success to measure how far we have come in this journey. Delivering quality exactly as promised makes us Path India Limited!</h2>
                    </div>

                    {/* Right Section (65%) */}
                    <div className="md:w-[65%] space-y-6 text-gray-500">
                        <Accordion
                            title="ISO Certified Excellence"
                            content="We are ISO 9001:2015 certified, ensuring top-notch quality across all our manufacturing and operational processes. ISO certification is another flagship addition among the many we undertake for quality assurance!."
                            isOpen={activeAccordion === 0}
                            onToggle={() => handleToggle(0)}
                        />
                        <Accordion
                            title="Massive Manufacturing Facility"
                            content="30+ years of manufacturing and supplying experience gives us the edge for establishing an enormous and indestructible manufacturing unit.

Manufacturing utilities also consist of tons of dealers and retail touchpoints, thus expanding our presence across the country. We also take much pride in weaving a beautiful tapestry of esteemed clients and partners as we strongly believe in the power of interconnectedness!"
                            isOpen={activeAccordion === 1}
                            onToggle={() => handleToggle(1)}
                        />
                        <Accordion
                            title="State-of-The-Art Machinery"
                            content='Advanced infrastructure and cutting-edge machinery to ensure precision engineering and adherence to stringent quality standards. Every product is quality tested which lays the foundation of our manufacturing operations. Our current plants in various parts of the country are fully equipped with the latest technology that helps us keep serving better.'
                            isOpen={activeAccordion === 2}
                            onToggle={() => handleToggle(2)}
                        />
                      
                        <Accordion
                            title="Comprehensive Solutions"
                            content='As a provider of end-to-end solutions, we handle everything from design to fabrication under one roof to meet diverse infrastructure manufacturing needs. Renowned as a leading global manufacturer and supplier, we also offer comprehensive solutions that enhance our reliability and strengthen trust among consumers.'
                            isOpen={activeAccordion === 3}
                            onToggle={() => handleToggle(3)}
                        />
                        <Accordion
                            title="In-house Design Excellence"
                            content='Our in-house design team ensures innovative solutions tailored to client-specific requirements. From talented designers to epic product quality analysts, we have the most competent in place that help us deliver excellent results to our clients.'
                            isOpen={activeAccordion === 4}
                            onToggle={() => handleToggle(4)}
                        />
                        <Accordion
                            title="Research and Development"
                            content='Our dedicated R&D team drives innovation and ensures our products stay ahead of industry standards. At Utkarsh, our aim is to constantly experiment with products and improve the old ones in stock so that we stay ahead of the competition.

We take much pride in our expert hands that keep researching for better additions and develop something new.'
                            isOpen={activeAccordion === 5}
                            onToggle={() => handleToggle(5)}
                        />
                        <Accordion
                            title="Manufacturing Norms"
                            content='We adhere to strict norms and certifications such as  MORTH. ensuring quality and compliance in every aspect of our products.'
                            isOpen={activeAccordion === 6}
                            onToggle={() => handleToggle(6)}
                        />
                       
                          <Accordion
                            title=" World Class Production Unit"
                            content='Equipped with fabrication, testing, quality checks, galvanising, painting, logistics, and installation facilities, our production unit exemplifies innovation and quality, ensuring the highest standards are met for every pre-engineered steel building.'
                            isOpen={activeAccordion === 7}
                            onToggle={() => handleToggle(7)}
                        />
                      
                          <Accordion
                            title=" Vendor Management Expertise"
                            content='Our vendor management ensures committed support and reliable supply chain operations for every project.'
                            isOpen={activeAccordion === 7}
                            onToggle={() => handleToggle(7)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quality_Policy;
