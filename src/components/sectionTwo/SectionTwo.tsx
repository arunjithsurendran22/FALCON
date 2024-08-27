import React from "react";

function SectionTwo() {
  return (
    <div className="bg-white py-16 px-10 ">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-5/12 text-center md:text-left p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Fast Delivery And Secure Packages
          </h1>
          <p className="text-lg md:text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, id has nihil discere vocibus. No novum cu
            laborpro batus cum, te utamur scripta.
          </p>
          <button className="bg-orange-700 text-white py-3 px-6 rounded-full text-lg">
            View More
          </button>
        </div>
        <div className="md:w-6/12 p-6">
          <img src="/images/image3.webp" alt="Fast Delivery" className="w-full h-auto " />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
