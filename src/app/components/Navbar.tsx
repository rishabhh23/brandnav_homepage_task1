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
    <nav className="max-w-5xl mx-auto flex justify-between items-center pr-10 pl-10">
      {/* branding */}
      <div className="flex items-center">
        <Image
          src={logo}
          alt="BrandNav Logo"
          width={32}
          height={32}
          className="mt-4 mr-2 bg-gray-50"
        />
        <span className="mt-4 text-2xl mr-10">BrandNav</span>
      </div>

      {/* hamburger menu */}
      <div className="md:hidden">
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
        } absolute mt-5 top-16 left-0 w-full bg-white md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:w-auto p-4`}
      >
        <li className="relative group px-4 py-2 md:px-0 md:py-0">
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
        <li className="px-4 py-2 md:px-0 md:py-0">
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 font-medium transition"
          >
            Pricing
          </a>
        </li>
        <li className="px-4 py-2 md:px-0 md:py-0">
          <a href="#" className="text-gray-800 hover:text-blue-500 transition">
            Blogs
          </a>
        </li>
        <li className="relative group px-4 py-2 md:px-0 md:py-0">
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
        <div className="flex flex-row items-center mx-auto">
          <button className="ml-10 bg-white px-4 py-2 text-black border-2 border-blue-500 rounded-lg hover:bg-blue-100 transition w-full md:w-auto">
            Login
          </button>
          <button className="ml-5 bg-blue-500 text-white px-4 py-2 rounded-lg border-2 hover:bg-blue-600 transition w-full md:w-auto mt-2 md:mt-0">
            Start for free
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
