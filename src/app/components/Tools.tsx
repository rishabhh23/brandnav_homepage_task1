"use client";
import Image from "next/image";
import tool1 from "../images/tool1.png";
import tool2 from "../images/tool2.png";
import tool3 from "../images/tool3.png";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";
import { FaCreditCard } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { BiDotsHorizontal } from "react-icons/bi";
import stars from "../images/4.8stars.png";

const Tools: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 md:px-20">
      {/* Top bar: No credit card + G2 rating */}
      <div className="flex flex-col items-center justify-center mb-6 text-sm text-gray-600">
        <div className="flex items-center">
          <FaCreditCard className="mr-2" style={{ color: "#8A8A8A" }} />
          <span style={{ color: "#8A8A8A" }}>No credit card required</span>
          <span className="mx-2">|</span>
          <div className="flex items-center">
            <Image className="mb-1" src={stars} alt={"Rating"} height={16} />
            <span className="ml-2" style={{ color: "#8A8A8A" }}>
              4.8/5 G2 Rating
            </span>
          </div>
        </div>
      </div>

      {/* Main row: 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full overflow-hidden">
        {/* 1. Email verifier */}
        <div className="bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] p-1 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] rounded-lg p-4 text-center">
            <h3 className="text-md font-semibold text-[#0D2052]">
              Email verifier
            </h3>
            <Image
              src={tool1}
              alt="Email Verifier Chart"
              className="mx-auto my-3"
              width={160}
              height={80}
            />
            <div className="flex justify-center mt-10 space-x-3 text-md">
              <span className="flex items-center text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                Valid
              </span>
              <span className="flex items-center text-gray-500">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span>
                Invalid
              </span>
              <span className="flex items-center text-gray-500">
                <span className="w-2 h-2 rounded-full bg-pink-500 mr-1"></span>
                Catch-all
              </span>
            </div>
          </div>
        </div>

        {/* 2. 14.5M+ ecom brands */}
        <div className="my-auto bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] p-1 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] rounded-lg p-4 text-center">
            <Image
              src={tool2}
              alt="Ecom Brands Icon"
              className="mx-auto my-3"
              width={500}
              height={500}
            />
            <p className="mt-3 text-4xl text-blue-500">14.5M+</p>
            <p className="mt-3 text-xs text-gray-600">ecom brands</p>
          </div>
        </div>

        {/* 3. 100% deliverability */}
        <div className="my-auto bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] p-1 rounded-lg overflow-hidden">
          <div className="h-full border-2 border-gray bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] rounded-lg p-4 text-center">
            <Image
              src={tool3}
              alt="Deliverability Icon"
              className="mx-auto my-3"
              width={400}
              height={240}
            />
            <p className="mt-3 text-4xl text-blue-500">100%</p>
            <p className="mt-3 text-xs text-gray-600">deliverability</p>
          </div>
        </div>

        {/* 4. Enricher lookup */}
        <div className="overflow-hidden bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] p-1 rounded-lg">
          <div className="h-full border-2 border-gray bg-gradient-to-b from-[#FCFCFC] to-[#FAF5FF] rounded-lg p-4">
            <h3 className="text-md font-semibold text-[#0D2052]">
              Enricher lookup
            </h3>
            <div className="mt-3">
              {/* profile 1 */}
              <div className="flex items-center mb-3">
                <Image
                  src={profile1}
                  alt="Profile 1"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 flex items-center w-full">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">
                      Alexandria Wayt
                    </p>
                    <p className="text-xs text-gray-600">
                      Senior product manager
                    </p>
                  </div>
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs ml-auto">
                    Verified
                  </span>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BsMailbox className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BiPhone className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 ml-auto"
                >
                  <BiDotsHorizontal className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="mt-3">
              {/* profile 2 */}
              <div className="flex items-center mb-3">
                <Image
                  src={profile2}
                  alt="Profile 2"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 flex items-center w-full">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">
                      Michael Taylor
                    </p>
                    <p className="text-xs text-gray-600">Sales Executive</p>
                  </div>
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs ml-auto">
                    Verified
                  </span>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BsMailbox className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BiPhone className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 ml-auto"
                >
                  <BiDotsHorizontal className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="mt-3">
              {/* profile 3 */}
              <div className="flex items-center mb-3">
                <Image
                  src={profile3}
                  alt="Profile 3"
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3 flex items-center w-full">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-800">
                      Murphy Hamilton
                    </p>
                    <p className="text-xs text-gray-600">
                      Senior product manager
                    </p>
                  </div>
                  <span className="bg-green-100 rounded-full p-1 text-green-500 font-medium text-xs ml-auto">
                    Verified
                  </span>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BsMailbox className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <BiPhone className="h-4 w-4 text-gray-500" />
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 ml-auto"
                >
                  <BiDotsHorizontal className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
