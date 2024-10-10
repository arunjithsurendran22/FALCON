import React from "react";

function SectionFive() {
  const solutions = [
    { number: "01", title: "Long Distance Moves" },
    { number: "02", title: "Local Moves" },
    { number: "03", title: "Office Relocations" },
    { number: "04", title: "Specialized Moving" },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 md:px-8 lg:px-44 bg-[#0f313a]">
      {/* Heading and Button Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left">
          Solutions That Make Changes
        </h1>
        <button className="px-4 py-2 md:px-6 md:py-3 bg-orange-600 text-white shadow-md rounded-full text-sm md:text-base">
          View More
        </button>
      </div>

      {/* Columns Section */}
      <div className="space-y-6">
        {solutions.map((solution, index) => (
          <div key={index} className={`p-4 md:p-6 border-t ${index === solutions.length - 1 ? 'border-b' : ''} border-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center`}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-700 mb-2 rotate-x text-center sm:text-left">{solution.number}</h2>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 text-center sm:text-left">
              {solution.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base text-center sm:text-left">
              Lorem ipsum dolor sit amet, id has nihil discere periculis. No novum cu labor probatus
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionFive;