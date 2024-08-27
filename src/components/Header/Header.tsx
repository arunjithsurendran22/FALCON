import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full text-white py-4 shadow-lg z-10 border-b-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/images/logo.webp" alt="Logo" className="text-white h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-28">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Profile/Action Buttons */}
        <div>
          {/* Menu Button */}
          <button className="text-white">
            <CiMenuFries size={40} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
