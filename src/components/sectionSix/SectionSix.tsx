"use client";
import React from "react";
import "./sectionSix.css";

const teamMembers = [
  {
    id: 1,
    img: "/images/img1.jpg",
    name: "Team Member 1",
    description: "Description or additional info about this team member.",
  },
  {
    id: 2,
    img: "/images/img2.jpg",
    name: "Team Member 2",
    description: "Description or additional info about this team member.",
  },
  {
    id: 3,
    img: "/images/img3.jpg",
    name: "Team Member 3",
    description: "Description or additional info about this team member.",
  },
  {
    id: 4,
    img: "/images/img4.jpg",
    name: "Team Member 4",
    description: "Description or additional info about this team member.",
  },
  {
    id: 5,
    img: "/images/img1.jpg",
    name: "Team Member 5",
    description: "Description or additional info about this team member.",
  },
  {
    id: 6,
    img: "/images/img2.jpg",
    name: "Team Member 6",
    description: "Description or additional info about this team member.",
  },
];

function SectionSix() {
  return (
    <div className="relative w-full py-10 bg-white overflow-hidden">
      <div className="text-center mb-8">
        <h1 className="text-black text-7xl">Meet Our Team</h1>
      </div>
      <div className="relative w-11/12 mx-auto">
        <div className="flex space-x-4 animate-marquee">
          {teamMembers.concat(teamMembers).map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 px-2"
              style={{ flexBasis: "25%" }}
            >
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[25rem] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-10 backdrop-blur-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h2>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionSix;
