
import React from "react";


const C_Channel_Post = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            <span className="text-[#0078AE]">Channel Post</span><span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-700 mb-4">
            The channel post serves as a vertical structural support in crash barrier systems. Its primary role is to anchor the guardrails (such as W-beam or Thrie-beam) securely to the ground. The post is driven into the soil, allowing it to absorb and transfer the impact energy from colliding vehicles, thereby preventing vehicles from veering off the road and reducing the risk of severe accidents. Its structural design ensures that the barrier system remains stable and performs reliably during high-speed impacts.
          </p>
          <p className="text-gray-700 mb-4">
            At PATH India Ltd, channel posts are manufactured using automatic welding machines to ensure high precision, uniformity, and strength. The automated process enhances production efficiency and maintains consistent quality across all units.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {/* <li>
              The welding time for a single post is approximately <strong>1.47 minutes</strong>, demonstrating the speed and efficiency of the production line.
            </li> */}
            <li>
              This automation significantly reduces human error and improves productivity, making it suitable for large-scale infrastructure projects.
            </li>
          </ul>
        </div>

        {/* Static Image Section */}
        <div className="md:w-1/2 flex justify-center lg:mt-12 lg:ml-8">
          <img
            src="/Production_IMG/channel_Post.jpeg"
            alt="Channel Post"
            className="w-4/5 max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default C_Channel_Post;
