"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("nav") && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav className="max-w-7xl mx-auto pl-20 pr-20 flex justify-between items-center pb-4 pt-4">
      {/* branding and navigation links */}
      <div className="flex items-center space-x-10">
        {/* Branding */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="BrandNav Logo"
            width={32}
            height={32}
            className="mt-3 mr-2 bg-gray-50"
          />
          <span className="mt-3 text-2xl">BrandNav</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 mt-3">
          <ul className="flex items-center space-x-6">
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-800 hover:text-[#0085FF] transition"
              >
                Products
                <span className="ml-1">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Blogs
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-800 hover:text-[#0085FF] transition"
              >
                Resources
                <span className="ml-1">
                  <IoIosArrowDown />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* buttons and hamburger menu */}
      <div className="flex items-center space-x-5">
        {/* buttons */}
        <div className="hidden ml-2 md:flex space-x-5">
          <button className="bg-white px-6 py-3 text-black border-2 border-blue-500 rounded-lg hover:bg-blue-100 transition">
            Login
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg border-2 hover:bg-blue-600 transition">
            Start for free
          </button>
        </div>

        {/* hamburger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mt-3 text-gray-800 hover:text-blue-500 transition"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-800 hover:text-[#0085FF] transition"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
