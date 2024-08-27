import React from "react";
import "./sectionEight.css"; // Ensure to import your CSS file

function SectionEight() {
  return (
    <div className="bg-[#0f313a] flex">
      {/* Text Section */}
      <div className="w-1/2 pr-8">
        <div className="space-y-6">
          {[
            {
              heading: "Our Beginnings",
              year: "2007",
              description:
                "Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu lab",
            },
            {
              heading: "Achievement",
              year: "2008",
              description:
                "Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu lab",
            },
            {
              heading: "Our Ideas",
              year: "2009",
              description:
                "Lorem ipsum dolor sit amet, id has nihil discere vocibus novum cu lab",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-white pb-6 w-[40rem] mt-20 pl-32"
            >
              <h2 className="text-white text-2xl font-bold mb-2">
                {item.heading}
              </h2>
              <div className="flex items-center space-x-4 border-t-2 pt-6">
                <div className="year-container">
                  <h1
                    className="text-white text-6xl font-bold flip-animation"
                    style={{ animationDelay: `${index * 3}s` }} // Stagger the flip animations
                  >
                    {item.year}
                  </h1>
                </div>
                <img src="/images/arrow.svg" alt="Arrow" className="w-6 h-6" />
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-1/2 flex items-center">
        <img
          src="/images/ship.jpg"
          alt="Ship"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default SectionEight;
