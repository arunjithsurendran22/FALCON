import React from "react";
import "./sectionFour.css";

function SectionFour() {
  const text = "Inland Freight";

  return (
    <div className="relative w-full h-screen">
      {/* Image */}
      <img
        src="/images/image4.jpg"
        alt="Inland Freight"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-10 p-4 text-white bg-opacity-50">
        <div className="flex items-center gap-5">
          <img
            src="/images/arrow.svg"
            alt="Arrow Icon"
            className="w-[8rem] slide-animation"
          />
          <h1 className="text-[8rem] font-bold">
            <div className="staggered-animation">
              {text.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
          </h1>
        </div>
      </div>

      {/* Form Container */}
      <div className="absolute top-1/4 right-10 p-20 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md w-full h-auto max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Request a Free Quote
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-white rounded-md bg-white text-white bg-opacity-10 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Number"
            className="w-full p-3 border border-white rounded-md bg-white text-white bg-opacity-10 focus:outline-none"
          />

          <select className="w-full p-3 border border-white rounded-md bg-white text-white bg-opacity-10 focus:outline-none">
            <option value="" disabled>
              Select a service
            </option>
            <option value="air_freight" className="bg-white text-white bg-opacity-10">
              Air Freight
            </option>
            <option value="ocean_freight" className="bg-white text-white bg-opacity-10">
              Ocean Freight
            </option>
            <option value="land_transport" className="bg-white text-white bg-opacity-10">
              Land Transport
            </option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-700 rounded-full text-white py-3"
          >
            Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default SectionFour;
