"use client";
import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion'; // ✅ Imported
function Product_Wbream_Crush_Barrier() {
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

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};



  const renderContent = () => {
    switch (activeTab) {
      case 'Technical':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>
             Explore the precise W metal beam crash barrier specifications, featuring high-strength steel, rigorous standards compliance, and proven impact resistance
            </p>
            <BulletList
              items={[
                {
                  
                  desc: 'On-ground safety barrier',
                },
                {
                
                  desc: 'Conformity with Class H1W3, H1W4, H1W5.',
                },
                {
              
                  desc: '2.8mm cold-rolled thickness',
                },
                {
               
                  desc: 'Crash tested for: Bus of 13000 kgs and Car of 900 kgs',
                },
                {
             
                  desc: 'Fe360, Fe410, and Fe510 raw material grades',
                },
                 {
             
                 
                 desc: 'Indian design: Crash Tested Under EN 1317 - 2 AT Natrax',
               } ]}
            />
          </div>
        );

      case 'Key Features':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty2">
            <p>Our W beam crash barriers have been designed in adherence to road safety regulations and the latest traffic infrastructure. The advantages of our products include:</p>
            <BulletList
              items={[
                {
                  title: 'Provides Safety Against Vehicular Impact:',
                  desc: ' Engineered for optimal safety, our W Beam crash barriers are designed to absorb and redirect impact, protecting motorists and reducing accident severity on roads and highways.',
                },
                {
                  title: 'Enhanced Durability and Superior Structural Strength:',
                  desc: 'Featuring high-strength steel, our W Beam metal crash barriers offer exceptional durability and structural strength. They are built to withstand severe impacts, ensuring long-lasting performance.',
                },
                {
                  title: 'Premium-Grade Raw Materials:',
                  desc: 'Our W Beam crash barriers are crafted from premium-grade steel sourced from industry leaders. This ensures superior quality and reliability, making our barriers highly durable and effective..',
                },
                {
                  title: 'Complete Range of W Beam Metal Crash Barriers :',
                  desc: 'Discover our extensive range of W Beam metal crash barriers, designed to meet diverse safety needs on roads and highways. Each barrier is engineered for maximum impact resistance..',
                },
              
              ]}
            />
          </div>
        );

      case 'Product Advantages':
        return (
          <div className="text-sm lg:text-lg text-black space-y-2 fonty">
            <p>Manufactured in adherence to global standards, our high-precision W metal beam crash barriers offer exceptional safety and durability. As one of the leading W Beam crash barrier manufacturers in India, we ensure superior quality and performance.</p>
            <BulletList
              items={[
                {
                  title: 'Designed to Ensure Optimal Safety and Protection:',
                  desc: 'Our W metal beam crash barriers are designed with safety as a priority, effectively absorbing and redirecting impact. They provide critical protection for both motorists and infrastructure.',
                },
                {
                  title: 'Compatible with Urban and Rural Infrastructure Projects :',
                  desc: 'Versatile and adaptable, our W Beam metal crash barriers are suitable for a variety of infrastructure projects, from urban roads to rural highways, ensuring comprehensive safety solutions across diverse settings.',
                },
                {
                  title: 'Proven in Prestigious Projects Across India:',
                  desc: '',
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
    <div className="w-full px-4 py-10 sm:px-8 lg:px-20  flex flex-col">
      {/* ✅ Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-[70%] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0078AE]">
           W Beam Crash Barriers<span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-800 text-base sm:text-lg fonty">
          W metal beam crash barriers are a type of roadside safety barrier designed to prevent vehicles from veering off the road and causing accidents. Named for their distinct “W” shape, these barriers are made from high-strength steel and are typically used along highways, roadways, and other high-traffic areas. Their primary function is to absorb and dissipate the energy from a collision, effectively redirecting vehicles and minimising the risk of severe accidents. The design ensures that upon impact, the barrier deforms in a controlled manner to cushion the collision, making it a critical component in road safety infrastructure.
          </p>
          <p className="text-gray-800 text-base sm:text-lg fonty">
          W Beam crash barriers play a crucial role in enhancing road safety across various environments. They are commonly installed along highways, urban roads, and industrial sites to protect against vehicle accidents. These barriers are essential in preventing vehicles from crossing into opposing lanes, off the road, or into hazardous areas. Their effectiveness in reducing the severity of accidents and protecting both motorists and pedestrians makes them indispensable in modern infrastructure projects. Key features of W metal beam crash barriers include durability, impact resistance, and compliance with international safety standards, ensuring they meet the highest levels of performance and reliability.

          </p>
          <div className='hidden lg:block'>
          <p className="text-gray-800 text-base sm:text-lg fonty">
           Our W Beam crash barriers are made from premium raw materials sourced from industry leaders like TATA, SAIL, and Hindustan Zinc. Conforming to Indian, European, and American standards, including Euro-standard product testing, our barriers are customised to exceed client specifications. This adherence to high-quality standards ensures that our products deliver unmatched durability and performance, establishing us as a top supplier of W Beam metal crash barriers in India.

          </p>
          <p className="text-gray-800 text-base sm:text-lg fonty">
          We offer a comprehensive portfolio of W Beam crash barriers, including Single Side Single Barrier, Double Side Single Barrier, Single Side Double Barrier, and Double Side Double Barrier configurations.
          </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
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
                      src="/Production_IMG/Galvanized-Iron-Coil..jpg"
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

export default Product_Wbream_Crush_Barrier;
