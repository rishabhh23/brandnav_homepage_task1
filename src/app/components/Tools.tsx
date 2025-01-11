"use client";
import Image from "next/image";
import tool1 from "../images/tool1.png";
import tool2 from "../images/tool2.png";
import tool3 from "../images/tool3.png";
import tool4 from "../images/tool4.png";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";

const Tools: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20">
        {/* email verifier */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Email verifier
          </h3>
          <Image
            src={tool1}
            alt="Email Verifier Chart"
            className="w-32 mx-auto my-4"
          />
          <p className="text-3xl font-bold text-gray-800">5,689</p>
          <p className="text-sm text-gray-600">Valid</p>
          <div className="flex justify-center mt-4 space-x-4 text-sm">
            <span className="flex items-center text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              Valid
            </span>
            <span className="flex items-center text-gray-500">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
              Invalid
            </span>
            <span className="flex items-center text-gray-500">
              <span className="w-2 h-2 rounded-full bg-pink-500 mr-1"></span>
              Catch-all
            </span>
          </div>
        </div>

        {/* 14.5M+ ecom brands */}
        <div className="bg-gray-50 shadow-lg rounded-lg text-center p-6">
          <Image
            src={tool2}
            alt="Ecom Brands Icon"
            className="w-20 mx-auto my-4"
          />
          <p className="text-2xl font-bold text-gray-800">14.5M+</p>
          <p className="text-sm text-gray-600">ecom brands</p>
        </div>

        {/* 100% Deliverability */}
        <div className="bg-gray-50 shadow-lg rounded-lg text-center p-6">
          <Image
            src={tool3}
            alt="Deliverability Icon"
            className="w-20 mx-auto my-4"
          />
          <p className="text-2xl font-bold text-gray-800">100%</p>
          <p className="text-sm text-gray-600">deliverability</p>
        </div>

        {/* enricher lookup */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Enricher lookup
          </h3>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <Image
                src={profile1}
                alt="Alexandria Wayt"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-800">
                  Alexandria Wayt{" "}
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs">
                    Verified
                  </span>
                </p>
                <p className="text-sm text-gray-600">Senior product manager</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={profile2}
                alt="Michael Taylor"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-800">
                  Michael Taylor{" "}
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs">
                    Verified
                  </span>
                </p>
                <p className="text-sm text-gray-600">Sales executive</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src={profile3}
                alt="Murphy Hamilton"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-800">
                  Murphy Hamilton{" "}
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs">
                    Verified
                  </span>
                </p>
                <p className="text-sm text-gray-600">Product manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
