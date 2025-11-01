'use client';

import React from 'react';

const coreValues = [
  {
    title: "Quality Assurance",
    description: "We source raw materials from industry-leading suppliers to ensure our products meet the highest quality standards...",
  },
  {
    title: "Continuous Improvement",
    description: "Utkarsh India constantly strives to improve its quality and operational performance by fostering innovation...",
  },
  {
    title: "Transparency",
    description: "Transparency is at the core of our principles and shapes our interactions with stakeholders...",
  },
  {
    title: "Customer Centrality",
    description: "We foster a ‘customer first’ approach to making every decision and prioritising their needs...",
  },
  {
    title: "Diversity & Inclusion",
    description: "Our core strength lies in embracing diversity and fostering inclusion, which helps us facilitate innovation...",
  },
  {
    title: "Truth as Foundation",
    description: "We believe honesty is non-negotiable. Truth is the cornerstone of our business...",
  },
  {
    title: "Curiosity Fuels Excellence",
    description: "Lifelong learning is essential. Curiosity drives our journey to excellence...",
  },
  {
    title: "Urgency in Action",
    description: "We act with a sense of urgency, respecting the value of time and ensuring no opportunity is wasted.",
  },
  {
    title: "Well-being First",
    description: "Your well-being is our top priority. We foster an environment that supports holistic growth...",
  },
  {
    title: "Transparency Always",
    description: "Openness and honesty are at the heart of our work. We believe transparency builds trust...",
  },
  {
    title: "Ethical Leadership",
    description: "Our strong ethical principles define our journey, ensuring every decision reflects our commitment to doing what’s right.",
  },
  {
    title: "Clarity in Targets",
    description: "We set clear goals before taking action, ensuring precision in planning and excellence in execution.",
  },
  {
    title: "Profitable Growth",
    description: "We aim for sustainable growth and profitability, driving prosperity for all stakeholders...",
  },
  {
    title: "Speed with Quality",
    description: "We deliver with speed, never compromising on quality. Excellence and efficiency go hand in hand.",
  },
  {
    title: "Vision with Purpose",
    description: "We guide our future with clarity and purpose, staying true to our vision while inspiring innovation.",
  },
  {
    title: "Growth as DNA",
    description: "Growth isn’t an option, it’s embedded in everything we do. We constantly evolve...",
  },
  {
    title: "Building a Legacy",
    description: "We create a legacy that inspires future generations, driven by values and achievements...",
  },
  {
    title: "Challenging Comfort Zones",
    description: "By embracing discomfort and asking tough questions, we drive innovation...",
  },
  {
    title: "Faster Truth, Better Solutions",
    description: "We encourage bad news to spread faster than good news, enabling swift, honest solutions...",
  },
  {
    title: "Integrity in Innovation",
    description: "We innovate with unwavering integrity, ensuring our values remain at the core of every breakthrough.",
  },
  {
    title: "Dedicated 24x7",
    description: "We are a 365, 24x7 organisation, committed to serving you every moment, every day...",
  },
  {
    title: "Empowering the Future",
    description: "Through the Utkarsh Foundation, we support the children of our junior staff...",
  },
  {
    title: "Support Without Limits",
    description: "We are here to help you 24x7, offering unwavering support whenever you need us.",
  },
  {
    title: "Co-Creation Every Day",
    description: "We believe in the power of collaboration, co-creating new ideas and solutions...",
  },
  {
    title: "Feedback with Confidence",
    description: "We embrace feedback as a tool for growth and improvement, fostering a culture of openness...",
  },
  {
    title: "Owning Mistakes",
    description: "We value courage in acknowledging mistakes, believing that accountability is key...",
  },
];

const CoreValues = () => {
  return (
    <div className="w-full ">
      {/* Logo Header */}
      <div className="relative w-full h-[70px] flex items-center justify-center bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-md">
        <img
          src="/Logo_IMG/image.png"
          alt="Company Logo"
          className="h-[80px] object-contain mb-5"
        />
      </div>
<div className='px-4 sm:px-6 md:px-10 py-6'>
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mt-8 mb-6 text-[#0078AE] fonty">
        Our Core Values<span className="text-orange-500">.</span>
      </h2>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-4 sm:p-5 hover:shadow-md transition duration-200"
          >
            <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CoreValues;