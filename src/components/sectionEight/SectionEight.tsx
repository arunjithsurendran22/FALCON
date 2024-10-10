import React from "react";
import "./sectionEight.css";

function SectionEight() {
  const timelineData = [
    {
      heading: "Our Beginnings",
      year: "2007",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      heading: "Achievement",
      year: "2008",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      heading: "Our Ideas",
      year: "2009",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      heading: "Expansion",
      year: "2010",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="bg-[#0f313a] flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-4 lg:pr-8">
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="border-white pb-6 w-full md:w-[40rem] mt-10 lg:mt-20 px-4 lg:pl-32"
            >
              <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                {item.heading}
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 border-t-2 pt-6">
                <div className="year-container">
                  <h1
                    className="text-white text-4xl md:text-6xl font-bold flip-animation"
                    style={{ animationDelay: `${index * 3}s` }}
                  >
                    {item.year}
                  </h1>
                </div>
                <img src="/images/arrow.svg" alt="Arrow" className="w-6 h-6 hidden sm:block" />
                <p className="text-white text-sm md:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="/images/ship.jpg"
          alt="Ship"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default SectionEight;