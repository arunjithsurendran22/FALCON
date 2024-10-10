import React from "react";

function SectionTwo() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-5/12 text-center lg:text-left p-4 sm:p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
            Fast Delivery And Secure Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet, id has nihil discere vocibus. No novum cu
            laborpro batus cum, te utamur scripta.
          </p>
          <button className="bg-orange-700 hover:bg-orange-600 transition-colors duration-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg">
            View More
          </button>
        </div>
        <div className="w-full lg:w-6/12 mt-8 lg:mt-0 p-4 sm:p-6">
          <img 
            src="/images/image3.webp" 
            alt="Fast Delivery" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;