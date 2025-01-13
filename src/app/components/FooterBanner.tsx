import React from "react";
import { FaCreditCard } from "react-icons/fa";
import stars from "../images/4.8stars.png";
import Image from "next/image";
import footerbannerbg from "../images/footerbannerbg.png";

const FooterBanner: React.FC = () => {
  return (
    <div className="relative max-w-5xl mx-auto text-white h-96 py-20 px-6 rounded-lg mt-10 mb-10 overflow-hidden">
      {/* background Image */}
      <div className="absolute inset-0">
        <Image
          src={footerbannerbg}
          alt="Footer Background"
          layout="fill"
          className="opacity-100"
        />
      </div>

      {/* content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to see BrandNav in action?
        </h2>
        <p className="text-lg mb-6">Try BrandNav for free today!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition">
          Grab free leads
        </button>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <p className="text-sm flex items-center">
            <span className="mr-2 mb-1">
              <FaCreditCard />
            </span>
            No credit card required
          </p>
          <div className="flex items-center space-x-2">
            <Image className="mb-1" src={stars} alt="stars" />
            <p className="text-sm">4.8/5 G2 Ratings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
