"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const tabs = ['Technical', 'Key Features', 'Product Advantages'];

function HomeLayoutCrushbarriers() {
  const [production, setProduction] = useState(0);
  const [stock, setStock] = useState(0);
  const [experience, setExperience] = useState(0);
  const [activeTab, setActiveTab] = useState('Technical');

  const tabClasses = (tab) =>
    `text-white font-semibold px-4 py-2 border-b-4 ${
      activeTab === tab
        ? 'border-blue-400 bg-blue-800'
        : 'border-transparent hover:border-blue-400'
    }`;

  // Increment logic
  useEffect(() => {
    const prodInterval = setInterval(() => {
      setProduction(prev => (prev < 144000 ? prev + 1200 : 144000));
    }, 30);

    const stockInterval = setInterval(() => {
      setStock(prev => (prev < 2500 ? prev + 50 : 2500));
    }, 30);

    const experienceInterval = setInterval(() => {
      setExperience(prev => (prev < 28 ? prev + 7 : 28));
    }, 1000);

    return () => {
      clearInterval(prodInterval);
      clearInterval(stockInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  const renderContent = () => {
    const BulletList = ({ items }) => (
      <ul className="space-y-4 mt-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-black mt-1">→</span>
            <p>
              <strong>{item.title}</strong> {item.desc}
            </p>
          </li>
        ))}
      </ul>
    );

    switch (activeTab) {
      case 'Technical':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>
              Discover the advanced technical specifications of crash barriers, including W-Beam and
              Thrie Beam, engineered for superior durability, impact resistance, and compliance with global safety standards.
            </p>

            <BulletList
              items={[
                {
                  title: 'Material Quality:',
                  desc: 'Crafted from premium-grade galvanised steel sourced from trusted suppliers like TATA and SAIL, ensuring durability, corrosion resistance, and reliability for long-term performance.',
                },
                {
                  title: 'Design Compliance:',
                  desc: 'Adheres to EN 1317 and IRC 119 standards.',
                },
                {
                  title: 'Load Bearing Capacity:',
                  desc: 'Our W-Beam and Thrie Beam barriers are engineered to withstand high-impact forces, ensuring optimal containment and redirection of vehicles upon collision.',
                },
                {
                  title: 'Precision Engineering:',
                  desc: 'Designed with advanced CNC machinery, our barriers ensure accurate dimensions, superior finishing, and compliance with specifications for seamless installations.',
                },
                {
                  title: 'Corrosion Resistance:',
                  desc: ' Featuring zinc coatings of 99.995% purity, Path Indias barriers are built to endure harsh weather conditions, offering unmatched longevity and reduced maintenance costs.',
                },
                {
                  title: 'Safety Tested:',
                  desc: ' Our crash barriers undergo rigorous crash testing at NATRAX facilities.',
                },
              ]}
            />
          </div>
        );

      case 'Key Features':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>
              Explore the key features of Utkarsh India's crash barriers, designed for superior impact resistance, durability, and compliance with global standards, making us a trusted crash barrier manufacturer in India.
            </p>

            <BulletList
              items={[
                {
                  title: 'Enhanced Safety:',
                  desc: ' Advanced designs, including W-Beam and Thrie Beam, provide superior containment, reducing accident severity and ensuring reliable road safety solutions.',
                },
                {
                  title: 'Versatile Applications:',
                  desc: 'Designed for highways, bridges, and pedestrian zones, our barriers offer adaptable solutions for diverse environments and safety requirements.',
                },
                {
                  title: 'Impact Resistance:',
                  desc: ' PATH Indias crash barriers are engineered for high impact resistance, ensuring maximum safety and protection in collision scenarios.',
                },
                {
                  title: 'Quick Installation:',
                  desc: 'Simplified designs ensure easy installation, making Path India the preferred crash barrier supplier for large-scale projects with tight deadlines.',
                },
                {
                  title: 'Eco-Friendly Design:',
                  desc: ' Constructed with sustainable processes and durable materials, our crash barriers minimise environmental impact, aligning with global sustainability standards.',
                },
                {
                  title: 'Innovative Engineering:',
                  desc: 'Incorporating precision manufacturing techniques, our barriers deliver unmatched performance, durability, and reliability for modern road safety infrastructure.',
                },
              ]}
            />
          </div>
        );

      case 'Product Advantages':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>
              Here's a roundup of the unmatched advantages of Path India's metal beam crash barriers, combining superior durability, safety compliance, and innovative engineering, making us one of the leading crash barrier manufacturers and suppliers in India.
            </p>

            <BulletList
              items={[
                {
                  title: 'Reliable Compliance:',
                  desc: ' Certified to global standards, our barriers ensure robust safety and regulatory adherence for diverse applications.',
                },
                {
                  title: 'Versatile Solutions:',
                  desc: 'From W-Beam to Thrie Beam designs, our crash barriers cater to various environments, offering adaptable and effective safety solutions.',
                },
                {
                  title: 'Unmatched Durability:',
                  desc: '  Built with premium-grade galvanised steel, our crash barriers ensure long-lasting performance, making us a trusted crash barrier manufacturer in India.',
                },
                {
                  title: 'Enhanced Road Safety:',
                  desc: 'Engineered to absorb impact effectively, our barriers reduce accident risks, providing superior safety on highways, bridges, and urban road networks.',
                },
                {
                  title: 'Efficient Delivery :',
                  desc: '  As a leading crash barrier supplier, we maintain 5,000 MT of ready stock to ensure prompt delivery for large-scale infrastructure projects.',
                },
                {
                  title: 'Cost-Effective Design:',
                  desc: 'Innovative engineering and high-quality materials reduce maintenance costs, offering long-term value for highways, industrial zones, and rural roads—while ensuring the most competitive crash barrier price.',
                },
              ]}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const stats = [
    {
      title: `${production.toLocaleString()} MT`,
      subtitle: "ANNUAL CRASH BARRIER PRODUCTION CAPACITY",
    },
    {
      title: `${stock.toLocaleString()}+ MT`,
      subtitle: "READY STOCK",
    },
    {
      title: "H2",
      subtitle: "CONTAINMENT LEVEL",
    },
    {
      title: `${experience.toLocaleString()}+ YEARS`,
      subtitle: "EXPERIENCE LEVEL",
    },
  ];

  const leftMotion = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <>
      <div className="w-full px-4 py-10 sm:px-8 lg:px-20 bg-white flex flex-col lg:flex-row gap-10">
        {/* ✅ LEFT SECTION */}
        <div className="w-full lg:w-[70%] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AE]">
            METAL BEAM CRASH BARRIER<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-800 text-sm sm:text-base">
            Metal Beam Crash Barriers are essential safety installations designed to protect motorists by minimizing the severity of accidents. These barriers absorb impact energy, prevent vehicles from crossing into oncoming traffic or veering off the road, and safeguard infrastructure.
          </p>
          <p className="text-gray-800 text-sm sm:text-base">
            W-Beam Crash Barriers, with their characteristic "W" shape, are commonly used on highways and rural roads. Metal Beam Crash Barriers provide enhanced rigidity and containment, making them ideal for high-risk zones like expressways and bridges.
          </p>
          <p className="text-gray-800 text-sm sm:text-base">
            Each type of crash barrier is engineered for specific purposes. Thrie Beam barriers are particularly effective in high-speed areas and locations with heavy vehicle traffic.
          </p>

          <div className="hidden lg:block">
            <p className="text-gray-800 text-sm sm:text-base">
              Effective Metal Beam Crash Barriers must meet stringent safety and quality standards. They are designed for durability, high impact resistance, and weather protection, ensuring long-lasting performance in diverse conditions. Features like corrosion resistance, easy installation, and low maintenance make them practical and reliable choices for safety infrastructure.
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              PATH India LTD is one of the leading crash barrier manufacturers, Gfrp rebar and Thermoplastic paint, setting benchmarks in quality, innovation, and safety. We offer an extensive range of crash-tested products, including W-Beam, Thrie Beam.
            </p>

            <p className="text-gray-800 text-sm sm:text-base">
              With decades of expertise, Path India ltd India has supplied Metal Beam Crash Barriers for numerous prestigious projects, including highways, expressways, and industrial zones across India. The company's commitment to road safety is evident in its rigorous testing processes, in-house manufacturing capabilities, and use of high-grade raw materials from trusted suppliers like (West Central Railways) Path India Ltd's Metal Beam Crash Barriers are not only a testament to engineering excellence but also a pledge to make journeys safer for all—while ensuring competitive crash barrier price options without compromising on quality.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION - Stats */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 sm:gap-5 text-black -mt-5 sm:mt-2 lg:mt-0 lg:pt-14">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm bg-white overflow-visible"
            >
              {/* Bottom-right L-shaped accent */}
              <span className="absolute bottom-0 right-0 w-[3px] h-10 bg-green-400 rounded-tl-md"></span>
              <span className="absolute bottom-0 right-0 w-10 h-[3px] bg-green-400 rounded-tl-md"></span>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-yellow-600 mt-1">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PRODUCT SPECIFICATION SECTION */}
      <div className="bg-gradient-to-r from-green-300 to-blue-300 py-10 px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-[#0078AE] mb-4 lg:pb-5">
          PRODUCT SPECIFICATION<span className="text-orange-500">.</span>
        </h2>

        {/* Tabs */}
        <div className="border-2 border-gray-300 overflow-hidden pb-3 rounded-md">
          <div className="flex flex-col sm:flex-row flex-wrap border-b-2 border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`w-full sm:flex-1 text-center fonty text-base sm:text-xl px-4 py-3 ${tabClasses(tab)}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content + Image */}
          <div className="mt-6 flex flex-col lg:flex-row gap-6 items-start px-4">
            {/* Left Content */}
            <div className="w-full lg:w-2/3">{renderContent()}</div>

            {/* Right Image */}
            <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
              <Image
                src="/HomeImg/crush barrier img.jpg"
                alt="Crash Barrier Road"
                width={300}
                height={400}
                className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLayoutCrushbarriers;