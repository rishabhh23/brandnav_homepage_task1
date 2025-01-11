"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="ml-10 mr-10 flex justify-between items-center py-4 px-4 sm:ml-20 sm:mr-20">
      {/* branding */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="BrandNav Logo"
          width={32}
          height={32}
          className="mr-2 bg-gray-50"
        />
        <span className="text-2xl">BrandNav</span>
      </div>

      {/* hamburger menu */}
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 hover:text-blue-500 transition"
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* pages */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white sm:bg-transparent sm:static sm:flex sm:items-center sm:space-x-6 sm:w-auto`}
      >
        <li className="relative group px-4 py-2 sm:px-0 sm:py-0">
          <a
            href="#"
            className="flex items-center text-gray-800 hover:text-blue-500 transition"
          >
            Products
            <span className="ml-1">
              <IoIosArrowDown />
            </span>
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0 sm:py-0">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition"
          >
            Pricing
          </a>
        </li>
        <li className="px-4 py-2 sm:px-0 sm:py-0">
          <a href="#" className="text-gray-800 hover:text-blue-500 transition">
            Blogs
          </a>
        </li>
        <li className="relative group px-4 py-2 sm:px-0 sm:py-0">
          <a
            href="#"
            className="flex items-center text-gray-800 hover:text-blue-500 transition"
          >
            Resources
            <span className="ml-1">
              <IoIosArrowDown />
            </span>
          </a>
        </li>
      </ul>

      {/* buttons */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-auto left-0 w-full bg-white sm:bg-transparent sm:static sm:flex sm:items-center sm:space-x-4 sm:w-auto`}
      >
        <button className="bg-white px-4 py-2 text-black border-2 border-blue-500 rounded-lg hover:bg-blue-100 transition w-full sm:w-auto">
          Login
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border-2 hover:bg-blue-600 transition w-full sm:w-auto mt-2 sm:mt-0">
          Start for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
