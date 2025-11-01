'use client';
import Image from "next/image";
const VissionandMission = () => {
  return (
    <>
      <div className="w-full text-gray-900">
        {/* Section 1: Banner Image */}
        <section className="w-full h-[30vh] sm:h-[40vh] relative">
          <Image
            src="/ESG_IMG/handshake.jpg"
            alt="Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Section 2: Page Heading */}
        <section className="px-4 sm:px-8 py-6 bg-gray-100">
          <div className="flex items-center gap-2 group">
            <Image
              src="/ESG_IMG/next.png"
              alt="arrow"
              width={20}
              height={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 fonty">
              Vission & Mission
            </h2>
          </div>
        </section>

        {/* Section 3: Welcome Message */}
        <section className="px-4 py-6 text-center">
          <p className="text-md sm:text-lg text-gray-600">
            Welcome to <span className="font-semibold">PATH INDIA LTD</span>
          </p>
          <p className="text-sm font-thin text-gray-600 mt-1">
            Building Tomorrow with A Purpose
          </p>
          <div className="w-40 border-b-2 border-gray-400 mt-2 mx-auto"></div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Section 4: Vision, Values & Mission */}
        <section className="px-4 md:px-8 lg:px-16 py-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl text-blue-800 font-semibold fonty mb-3">
                Vision<span className="text-orange-500 text-3xl align-middle">.</span>
              </h3>
              <p className="text-black text-sm leading-relaxed">
                To be amongst the most admired and most trusted infrastructure companies in the country, delivering qualitative, reliable and quality “creations & services” to all customers at competitive costs, with highest standards of infrastructure creations, setting new benchmarks in standards of corporate performance and governance through the pursuit of operational and financial excellence, responsible citizenship and profitable growth, thereby creating superior value for all the stakeholders and contribute significantly in growth of this sector.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-b from-green-100 to-green-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl text-green-800 font-semibold fonty mb-3">
                Values<span className="text-orange-500 text-3xl align-middle">.</span>
              </h3>
              <div className="text-black text-sm leading-relaxed space-y-2">
                <p>
                  At <strong>PATH INDIA LTD</strong>, our values are the cornerstone of every road we build and every safety barrier we manufacture. They guide our operations, define our work culture, and reflect our commitment to nation-building.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Trust:</strong> We believe in building relationships as strong as our infrastructure — reliable, long-term, and built on integrity.</li>
                  <li><strong>Passion:</strong> We are passionate about creating infrastructure that makes transportation safer and more efficient across the nation.</li>
                  <li><strong>Quality:</strong> Our products and projects meet the highest quality standards, with a strong focus on durability, safety, and innovation.</li>
                  <li><strong>Safety:</strong> Every crash barrier and highway solution we design is built with a commitment to saving lives and preventing accidents.</li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-b from-orange-100 to-orange-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl text-orange-700 font-semibold fonty mb-3">
                Mission<span className="text-orange-500 text-3xl align-middle">.</span>
              </h3>
              <ul className="list-disc list-inside text-black text-sm leading-relaxed space-y-2">
                <li>To create world-class assets and infrastructure for consistent growth and global competitiveness.</li>
                <li>To earn the trust of all stakeholders, making the company a respected household name.</li>
                <li>To achieve high growth with productivity, trust, and transparency.</li>
                <li>To be a tech-driven, efficient, and financially sound organization.</li>
                <li>To promote a work culture that fosters growth, creativity, and strong values.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VissionandMission;
