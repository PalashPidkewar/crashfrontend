
"use client"; 

import Image from "next/image";


export default function MarketGrowth() {
  return (
    <section className="bg-white text-gray-800 px-4 sm:px-6 lg:px-20 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* ✅ Text Content */}
        <div className="w-full lg:w-7/12">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-[#0078AE] mb-4">
            MARKET GROWTH<span className="text-orange-500">.</span>
          </h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed tracking-wide text-justify sm:px-7">
            The global crash barrier market is experiencing significant growth, driven by the rising need for road safety and infrastructure development. Valued at approximately USD 6.5 billion in 2023, the market is expected to reach USD 9.8 billion by 2030, growing at a steady CAGR of 6.1%. This surge is fueled by government initiatives worldwide to reduce road fatalities through enhanced safety infrastructure, including Metal Beam Crash Barriers.
          </p>
          <p className="mb-4 text-sm sm:text-base leading-relaxed tracking-wide text-justify sm:px-7">
            One of the primary factors driving this growth is the increasing implementation of stringent road safety regulations. With an emphasis on reducing accidents and safeguarding motorists, the demand for high-performance Metal Beam Crash Barriers, such as W-Beam and Thrie Beam, is steadily rising. These barriers, engineered to absorb impact energy and prevent crossover accidents, are becoming essential in highway and urban road projects globally.
          </p>
          <div className='hidden lg:block sm:px-7'>
            <p className="mb-4 text-sm sm:text-base leading-relaxed tracking-wide text-justify">
              The market is also witnessing advancements in materials and technology. Innovations like high-strength galvanised steel and eco-friendly manufacturing processes are setting new benchmarks for durability and sustainability.
            </p>
            <p className="text-sm sm:text-base leading-relaxed tracking-wide text-justify">
              Path India aligns perfectly with these market trends, offering a comprehensive range of Metal Beam Crash Barriers designed to meet evolving safety requirements. Leveraging state-of-the-art manufacturing facilities and high-grade raw materials sourced from TATA and SAIL, Path India delivers products that excel in quality, durability, and compliance with global standards.
            </p>
          </div>
        </div>

        {/* ✅ Image Section */}
        <div className="w-full lg:w-5/12 flex justify-center items-center hidden sm:flex -mt-6 lg:mt-0">
          <Image
            src="/HomeImg/marketgrowthimg.png"
            alt="Market Growth Chart"
            className="rounded-md shadow-md"
            width={400} // adjust width
            height={400} // adjust height
            priority
          />
        </div>

      </div>
    </section>
  );
}
