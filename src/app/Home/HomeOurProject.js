// app/components/HomeLayoutProjects.jsx
"use client"; // add this if you plan to use state or animations in future

const projects = [
  {
    title: "Harda to Temagav Highway",
    description:
      "Facilitating economic growth and improved access in the Bundelkhand region through reliable and efficient expressway construction.",
  },
  {
    title: "Jhansi- Orai Section Expressways",
    description:
      "Linking northern and western India, this expressway strengthens national connectivity and promotes regional economic integration.",
  },
  {
    title: "Rau- Mhow- Mandleshwar Expressways",
    description:
      "A vital project enhancing road connectivity between rau and Mandleshwar, reducing travel time and bolstering economic activities.",
  },
  {
    title: "Green National Highway(Paonta Sahib)",
    description:
      "Green National Highways Corridor Project- Upgradation to Intermediate Lane Con-figuration of Paonta Sahib- Hewna Section",
  },
  {
    title: "Borkhedi-Wadner highway",
    description:
      "Supply and Installation of MBCB on Borkhedi-Wadner Toll Road Project for National Highways Infra Projects Private Limited (NHIPPL),",
  },
  {
    title: "West Central Railways ",
    description:
      "Provision of Metal Beam Crash Barrier parallel to Track to prevent CRO & raising of speed upto 160kmph in MTJ-GGC Section of Kota Division.",
  },
  {
    title: "Solan Kaithlighat Section ",
    description:
      "National Highways Development Project (III) Four Laning of Solan Kaithlighat Section promoting trade and smoother travel across the state.",
  },
  {
    title: "Delhi–Amritsar–Katra Expressway",
    description:
      "An important expressway that connects the national capital with Punjab and Jammu & Kashmir, facilitating pilgrimage and tourism.",
  },
];

export default function Homeourproject() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0078AE]">
          OUR PROJECTS<span className="text-orange-500">.</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Through many successful projects across India, we showcase the durability and safety of our Metal Beam Crash Barriers across highways, bridges, industrial zones, and urban roads.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-green-700 font-semibold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
