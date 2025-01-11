"use client";
import React from "react";
import Image from "next/image";
import people from "../images/people.png";

const DarkBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full items-center justify-center bg-gradient-to-b from-[#2b076e] to-[#000236] p-6">
      <div className="bg-white rounded-lg shadow-md max-w-sm w-full p-6">
        <div className="flex justify-center mb-4">
          <span className="text-4xl">🎁</span>
        </div>
        <h2 className="text-2xl font-semibold text-center">Free</h2>
        <p className="text-5xl font-bold text-center mt-2">$0</p>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded">
          Grab free leads
        </button>
        <p className="text-center text-sm text-gray-500 mt-3">
          No credit card required | ⭐ 4.8/5 G2 Ratings
        </p>
        <ul className="mt-6 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            All BrandNav features included
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            200 Screener credits per month
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            25 Enricher credits per month
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Pinpoint ideal prospects
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Chat support with real humans
          </li>
        </ul>
        <div className="mt-6 flex flex-col items-center">
          <div className="flex -space-x-3">
            <Image src={people} alt="people" width={400} />
          </div>
          <div className="text-xs text-gray-500 ml-2">
            These people are already using BrandNav. When will YOU?
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <p className="m-2 text-white text-5xl font-semibold">
            Not convinced yet?
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <p className="m-2 text-white text-5xl font-semibold">
            Take it for a <span className="text-blue-600">FREE</span> spin
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <p className="m-2 text-white text-5xl font-semibold">
            before committing
          </p>
        </div>
      </div>
    </div>
  );
};
export default DarkBanner;
