"use client";
import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion'; // ✅ Imported

function Product_Thried_Crush_Barrier() {
  const [production, setProduction] = useState(0);
  const [stock, setStock] = useState(0);
  const [experience, setexperience] = useState(0);
  const [activeTab, setActiveTab] = useState('Technical');

  const tabs = ['Technical', 'Key Features', 'Product Advantages'];

  useEffect(() => {
    const prodInterval = setInterval(() => {
      setProduction(prev => (prev < 144000 ? prev + 1200 : 144000));
    }, 30);

    const stockInterval = setInterval(() => {
      setStock(prev => (prev < 2500 ? prev + 50 : 2500));
    }, 30);

    const experienceInterval = setInterval(() => {
      setexperience(prev => (prev < 28 ? prev + 7 : 28));
    }, 1000);

    return () => {
      clearInterval(prodInterval);
      clearInterval(stockInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  const tabClasses = (tab) =>
    `text-white font-semibold px-4 py-2 border-b-4 ${activeTab === tab
      ? 'border-blue-400 bg-blue-800'
      : 'border-transparent hover:border-blue-400'
    }`;
  // ✅ Move BulletList outside renderContent
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
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

  const renderContent = () => {
    switch (activeTab) {
      case 'Technical':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>
             With a commitment to delivering unmatched quality and customer satisfaction, With a strong focus on quality and customer satisfaction, we offer a range of thrie beam crash barriers that go beyond global standards. Take a closer look at the detailed technical specs of each of our thrie metal beam barriers—explore more below:
            </p>
            <BulletList
              items={[
                {
                  
                  desc: 'Indian design: Crash Tested Under EN 1317 - 2 AT Natrax (2 Mtr Centre to Centre',
                },
                {
                
                  desc: 'On-ground safety barrier, conforming to Class H2W3, H2W4, H2W5.',
                },
                {
              
                  desc: 'Single Side Single Barrier, Single Side Double Barrier, Double Side Single Barrier, Double Side Double Barrier',
                },
                {
               
                  desc: 'Crash tested for: Bus of 13000 kgs and Car of 900 kgs',
                },
                {
             
                  desc: 'Fe360, Fe410, and Fe510 raw material grades',
                },
              
              ]}
            />
          </div>
        );

      case 'Key Features':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>Explore the key features of Utkarsh India’s crash barriers...</p>
            <BulletList
              items={[
                {
                  title: 'Specially Designed for Enhanced Road Safety and Reliability:',
                  desc: 'Our Thrie Beam Crash Barriers are specially designed to enhance road safety and reliability. The three-beam configuration, as seen in our thrie beam guardrail systems, is optimised to effectively absorb and dissipate collision energy—minimising the risk of severe injuries and vehicle damage. This thoughtful design ensures dependable protection while contributing significantly to overall road safety.',
                },
                {
                  title: 'Made with Meticulously Selected Materials',
                  desc: ' Hindustan Zinc. This careful selection process ensures that our barriers meet rigorous standards for performance and durability, providing reliable safety solutions for diverse road applications.',
                },
                {
                  title: 'Top-Notch Durability and Structural Integrity :',
                  desc: 'Built for longevity, our Thrie Beam Barrier offers top-notch durability and structural integrity. Designed to withstand severe impacts and harsh environmental conditions, these barriers are constructed to maintain their strength and effectiveness over time. Their robust design ensures that they continue to provide superior protection and safety, regardless of the intensity of collisions.',
                },
                {
                  title: 'Precision Crafted for Maximum Effectiveness:',
                  desc: ' Our Thrie Beam Metal Crash Barriers are precision-crafted to deliver unmatched effectiveness in road safety. Each barrier is engineered with meticulous attention to detail, ensuring optimal performance in absorbing and redirecting collision forces. This precision craftsmanship guarantees that our barriers provide reliable protection for both vehicles and occupants, even in high-speed environments.',
                },
              
              ]}
            />
          </div>
        );

      case 'Product Advantages':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>Our Thrie metal beam crash barriers have been designed in adherence to road safety regulations and the latest traffic infrastructure. The advantages of our products include:</p>
            <BulletList
              items={[
                {
                  title: 'Powerful Protection and Compliance with Safety Protocols :',
                  desc: 'Our Thrie Beam Metal Crash Barriers are designed to provide exceptional protection during high-speed collisions. Engineered with three robust horizontal beams, these barriers effectively absorb and redirect impact forces, significantly enhancing road safety. They are meticulously crafted to comply with stringent safety protocols, ensuring optimal performance and reliability in safeguarding vehicles and occupants',
                },
                {
                  title: 'Promotes Road Safety; Minimises Accident Risks :',
                  desc: 'By incorporating our Thrie Beam Crash Barriers into your infrastructure, you enhance overall road safety and reduce accident risks. The advanced design of our thrie beam guardrail is specifically developed to minimise the severity of collisions, providing a crucial safeguard against potential accidents. Their strategic installation helps in creating safer roadways and protecting all road users..',
                },
                {
                  title: 'Prompt PAN India Delivery:',
                  desc: 'We are committed to delivering our Thrie Beam Crash Barriers across India with unmatched efficiency. With a substantial inventory of over 5,000 MT, we offer prompt delivery to meet the needs of projects throughout the country. Our streamlined logistics ensure that you receive your barriers quickly and reliably, facilitating timely implementation.',
                },
             
              ]}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (<>
     <div className="w-full px-4 sm:px-6 lg:px-20 py-10 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[70%] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AE]">
           Thrie Beam Crash Barriers<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-800 text-base sm:text-lg fonty">
           The Thrie Beam Metal Crash Barrier is a fundamental safety feature engineered for highways and roadways to protect vehicles and occupants during collisions. This barrier is designed with three robust horizontal beams, providing exceptional impact resistance and making it highly effective in high-speed environments. Its innovative design helps to absorb and redistribute collision forces, thus reducing the severity of accidents and enhancing overall road safety.
          </p>
          <p className="text-gray-800 text-base sm:text-lg fonty">
            As a leading Thrie Beam Crash Barrier manufacturing company, We specialize in making high-strength, precision-engineered Thrie Metal Beam Crash Barriers. Each barrier is customised to meet the specific needs of our valued clients, ensuring that every project benefits from our products' superior safety, reliability, and quality. 
          </p>
          <div className='hidden lg:block'>
          <p className="text-gray-800 text-base sm:text-lg fonty">
            This strategic approach ensures that our Thrie Metal Beam Crash Barrier products comply with all relevant Indian, American, European, and international standards, guaranteeing their performance and durability in diverse applications and environments. When assessing the Thrie Beam Crash Barrier Rate, it is essential to consider various factors, including the barrier’s specifications, installation requirements, and geographic location, as these elements can affect pricing.

          </p>
          
          <p className="text-gray-800 text-base sm:text-lg fonty">
           Our crash-tested Type B Thrie Beam Crash Barriers, including the thrie beam guardrail, are manufactured in state-of-the-art facilities that strictly follow MoRTH clause 810/IRC standards. We maintain a ready stock of over 5,000 MT to facilitate faster delivery and utilise advanced manufacturing techniques along with Special High Grade Zinc (99.995%) to ensure the highest quality. 
          </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        {/* ✅ RIGHT SECTION - Animated Stats */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6 text-black lg:mt-10 -pt-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm bg-white"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-yellow-600 mt-1">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
      </div>

      
    </div>
    {/* PRODUCT SPECIFICATION TABS */}
      <div className="bg-gradient-to-r from-green-300 to-blue-300 py-10 px-4 sm:px-6 lg:px-35">
         <h2 className="text-[#0078AE] text-3xl sm:text-4xl font-bold mb-6 border-l-4 pl-4">
           PRODUCT SPECIFICATION<span className="text-orange-500">.</span>
         </h2>
      
      

        {/* Tabs */}
        <div className="border-2 border-white overflow-hidden pb-4 rounded-md">
          <div className="flex flex-wrap border-b-2 border-white">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`flex-1 text-center text-base sm:text-xl fonty ${tabClasses(tab)}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content + Image */}
          <div className="mt-6 flex flex-col lg:flex-row gap-6 items-start px-4">
            {/* Content */}
            <div className="w-full lg:w-1/2">{renderContent()}</div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="/Production_IMG/thriw bramimg.jpg"
                alt="Crash Barrier Road"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          </div>
        
        </div>
    </>
  );
}

export default Product_Thried_Crush_Barrier;



