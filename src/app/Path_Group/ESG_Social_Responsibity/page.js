'use client';
import Image from "next/image";
import { MdErrorOutline } from "react-icons/md";


const Esg_Social_Responsibility = () => {
  const sections = [
    {
      title: "Safe Drinking Water Initiatives",
      bullets: [
        "Distributed food ",
        "Drinking water systems have been installed in Anganwadi centers in Mhow.",
        "As well as in some other locations",
      ],
      image: "/ESG_IMG/water homee img.jpg",
      reverse: false,
    },
    {
      title: "COVID–19 Vaccination Drive For Path India ltd Employees",
      bullets: [
        "Our commitment to our employees' safety has never wavered.",
        "At Path India, we believe in positively impacting our colleagues and their families.",
        "We strive to extend our commitment with initiatives that reflect our consistent efforts towards the well-being of society at large.",
        "The large-scale vaccination campaign in collaboration with ILS Hospitals organised by us reflects our sustainable development.",
      ],
      image: "/ESG_IMG/covid-3 (2).jpg",
      reverse: true,
    },
    {
      title: "Health Awareness Campaigns",
      bullets: [
        "Conducted free health check-ups in rural regions.",
        "Raised awareness about sanitation and hygiene.",
        "Distributed first aid kits and masks during COVID times.",
        "Supported the setup of PSA oxygen generation plants in hospitals.",
        "Supplied and maintained oxygen concentrators and related infrastructure.",
        "Developed and distributed SOPs, guidelines, and training materials for better oxygen management.",
      ],
      image: "/ESG_IMG/hos main imag.png",
      reverse: false,
    },
    {
      title: "Animal Welfare",
      bullets: ["Adopted Tigers, Nav, Pehr & Sara at Indore Zoo"],
      image:"/ESG_IMG/tiger.jpg",
      reverse: true,
    },
    {
      title: "Aanganvadi",
      bullets: [
        "PATH Foundation has adopted 20 Anganwadi centres under the Chief Minister's Anganwadi Adoption Scheme.",
        "In these adopted centres, PATH has been involved in improving infrastructure, enhancing educational facilities, and making the environment better for the children.",
        "They also put effort into organizing events; for example, a Diwali celebration with underprivileged Anganwadi children in Bicholi Anganwadi, Indore, supported by Path Foundation.",
      ],
      image: "/ESG_IMG/aanganwadi.jpg",
      reverse: false,
    },
  ];

  return (
    <>
      <div className="w-full text-gray-900">
        {/* Section 1: Hero Image */}
        <section className="relative w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]">
          <Image
            src="/ESG_IMG/ESG_IMG.png"
            alt="Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* Section 2: Heading */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 md:py-8 bg-gray-100">
          <div className="flex items-center gap-2 group max-w-7xl mx-auto">
            <Image
              src="/ESG_IMG/next.png"
              alt="arrow"
              width={20}
              height={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
            <h2 className="fonty text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-800">
              Social Responsibility
            </h2>
          </div>
        </section>

        {/* Section 3: Welcome Message */}
        <section className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Welcome to <span className="font-semibold">PATH GROUP</span>
          </p>
          <p className="text-xs sm:text-sm md:text-base font-thin text-gray-600 mt-1 sm:mt-2">
            Social Responsibility
          </p>
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 border-b-2 border-gray-400 mt-2 sm:mt-3 md:mt-4 mx-auto"></div>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Section 4: Company Info */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <h3 className="fonty text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-blue-700 bg-clip-text text-transparent uppercase leading-tight">
                What Does Sustainability Mean For Us?
              </h3>

              <div className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6">
                <p className="fonty text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  At Path India Limited, sustainability goes beyond just meeting environmental standards. It's about creating lasting value for our communities,
                  our people, and the planet. As a leading engineering solutions supplier and infrastructure solutions manufacturer, we are committed to incorporating
                  sustainable practices in every aspect of our operations. From optimising resource efficiency to reducing our carbon footprint, we ensure that our
                  business processes contribute positively to the environment and society.
                </p>
                <p className="fonty text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  Sustainability for us also means being proactive in addressing social challenges and promoting inclusivity. We believe that long-term success comes
                  from not just economic growth but also from our ability to create shared value across all stakeholders. By integrating sustainability into our core
                  business strategies, we aim to build a resilient, future-proof organisation that upholds the highest standards of ethical governance, innovation, and
                  social responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Alternating Layout Sections */}
      <div className="bg-gradient-to-r from-green-500 to-blue-700 min-h-screen">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } bg-gray-100 ${index !== sections.length - 1 ? "border-b border-gray-300" : ""}`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="w-full max-w-lg lg:max-w-none relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <Image
                  src={section.image}
                  alt={`${section.title} illustration`}
                  fill
                  className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 text-gray-700 w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 fonty text-gray-800 leading-tight">
                  {section.title}
                </h2>
                <ul className="list-disc pl-4 sm:pl-5 md:pl-6 space-y-2 sm:space-y-3 md:space-y-4">
                  {section.bullets.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

 
    </>
  );
};

export default Esg_Social_Responsibility;
