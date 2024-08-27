import React from "react";

function SectionSeven() {
  return (
    <div className="flex w-full  bg-white p-32">
      {/* Image Section */}
      <div className="w-1/2 h-full overflow-hidden">
        <img
          src="https://images.designtrends.com/wp-content/uploads/2015/12/04065454/World-map-vectors23.jpg"
          alt="World Map"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-1/2 h-full p-8 flex  justify-center text-black">
        <div className="w-[28rem]">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="mb-4">
            Get In Touch Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ullam, velit rutrum dictum lobortis turpis.
          </p>
          <p className="mb-4 text-lg font-semibold">Support Center</p>
          <h1 className="text-5xl font-bold mt-10">+767 575 765</h1>
          <div className="flex justify-between mt-20" >
            <div >
              <p className="font-bold">Our Location</p>
              <p>198 West 21th Street, New York NY City 1010</p>
            </div>
            <div>
              <p className="font-bold">Write to Us</p>
              <p>+767 575 765 60 freightexpress@mail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
