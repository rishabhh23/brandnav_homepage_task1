"use client";

import { FaCreditCard } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const CTA: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* button */}
      <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition">
        Start for free
      </button>

      {/* subtext */}
      <div className="flex items-center mt-4 text-gray-600 text-sm">
        <FaCreditCard className="mr-2" style={{ color: "#8A8A8A" }} />
        <span style={{ color: "#8A8A8A" }}>No credit card required</span>
        <span className="mx-2">|</span>
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <span className="ml-2" style={{ color: "#8A8A8A" }}>
            4.8/5 G2 Rating
          </span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
