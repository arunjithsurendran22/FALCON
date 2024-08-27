import React from 'react';

function SectionThree() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-full mx-auto h-80">
        {/* Column 1 */}
        <div className="bg-gray-200 border-r border-gray-400 relative flex flex-col h-full">
          <img 
            src="/images/icon1.svg" 
            alt="Icon 1" 
            className="absolute top-10 right-10 w-14 h-14 object-cover" 
          />
          <div className="flex flex-col justify-end p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Air Freight</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-200 border-r border-gray-400 relative flex flex-col h-full">
          <img 
            src="/images/icon2.svg" 
            alt="Icon 2" 
            className="absolute top-10 right-10 w-14 h-14 object-cover" 
          />
          <div className="flex flex-col justify-end p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ocean Freight</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="bg-gray-200 border-r border-gray-400 relative flex flex-col h-full">
          <img 
            src="/images/icon3.svg" 
            alt="Icon 3" 
            className="absolute top-10 right-10 w-14 h-14 object-cover" 
          />
          <div className="flex flex-col justify-end p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Land Transport</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="bg-gray-200 relative flex flex-col h-full">
          <img 
            src="/images/icon4.svg" 
            alt="Icon 4" 
            className="absolute top-10 right-10 w-14 h-14 object-cover" 
          />
          <div className="flex flex-col justify-end p-6 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Land Transport</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
