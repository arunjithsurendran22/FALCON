import React from "react";


function SectionFive() {
  return (
    <div className="py-20 px-44 bg-[#0f313a]">
      {/* Heading and Button Row */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Solutions That Make Changes
        </h1>
        <button className="px-6 py-3 bg-orange-600 text-white shadow-md rounded-full">
          View More
        </button>
      </div>

      {/* Columns Section */}
      <div className="space-y-6">
        {/* Number and Content Rows */}
        <div className="p-6 border-t border-gray-300 grid grid-cols-3 items-center">
          <h1 className="text-7xl font-bold text-orange-700 mb-2 rotate-x">01</h1>
          <h1 className="text-xl font-semibold text-white mb-2">
            Long Distance Moves
          </h1>
          <p className="text-gray-400">
            *Lorem ipsum dolor sit amet, id has nihil discere periculis. No novum
            cu labor probatus
          </p>
        </div>

        <div className="p-6 border-t border-gray-300 grid grid-cols-3 items-center">
          <h1 className="text-7xl font-bold text-orange-700 mb-2 rotate-x">02</h1>
          <h1 className="text-xl font-semibold text-white mb-2">
            Local Moves
          </h1>
          <p className="text-gray-400">
            *Lorem ipsum dolor sit amet, id has nihil discere periculis. No novum
            cu labor probatus
          </p>
        </div>

        <div className="p-6 border-t border-gray-300 grid grid-cols-3 items-center">
          <h1 className="text-7xl font-bold text-orange-700 mb-2 rotate-x">03</h1>
          <h1 className="text-xl font-semibold text-white mb-2">
            Office Relocations
          </h1>
          <p className="text-gray-400">
            *Lorem ipsum dolor sit amet, id has nihil discere periculis. No novum
            cu labor probatus
          </p>
        </div>

        <div className="p-6 border-t border-b border-gray-300 grid grid-cols-3 items-center">
          <h1 className="text-7xl font-bold text-orange-700 mb-2 rotate-x">04</h1>
          <h1 className="text-xl font-semibold text-white mb-2">
            Office Relocations
          </h1>
          <p className="text-gray-400">
            *Lorem ipsum dolor sit amet, id has nihil discere periculis. No novum
            cu labor probatus
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
