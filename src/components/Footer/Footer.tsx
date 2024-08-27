import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f313a] text-white py-8 px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto">
      <div className="flex flex-col justify-between items-center md:items-start border-r border-gray-600 pr-8">
        <img src="/images/logo.webp" alt="Logo" className="mb-4 w-32" />
        <div className="flex space-x-4 mb-4">
          <img
            src="/images/instagrams.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
          <img src="/images/fb.svg" alt="Facebook" className="w-6 h-6" />
          <img src="/images/linkdn.svg" alt="LinkedIn" className="w-6 h-6" />
        </div>
        <p className="text-sm text-gray-400">
          All Rights Reserved © 2024 Qode Interactive
        </p>
      </div>
      <div className="space-y-4 border-r border-gray-600 pr-8">
        <div className="flex items-center gap-3">
          <img src="/images/arrow.svg" alt="Arrow" className="w-5 h-5" />
          <p className="text-lg font-semibold">Our Division</p>
        </div>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Open Positions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              FAQ Page
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Our Clients
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4 border-r border-gray-600 pr-8">
        <div className="flex items-center gap-3">
          <img src="/images/arrow.svg" alt="Arrow" className="w-5 h-5" />
          <p className="text-lg font-semibold">Company Services</p>
        </div>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Request A Freight
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              What We Do
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Abandonment Cart
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Shipments
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Pricing Flexibility
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Online Scheduling
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img src="/images/arrow.svg" alt="Arrow" className="w-5 h-5" />
          <p className="text-lg font-semibold">Contact Info</p>
        </div>
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              FAQ Page
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Get In Touch
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Global Network
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 hover:underline"
            >
              Support 24/7
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
