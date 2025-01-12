import React from "react";
import screener1 from "../images/screener1.png";
import screener2 from "../images/screener2.png";
import screener3 from "../images/screener3.png";
import screener4 from "../images/screener4.png";
import screener5 from "../images/screener5.png";
import screener6 from "../images/screener6.png";
import screener7 from "../images/screener7.png";
import enricher1 from "../images/enricher1.png";
import enricher2 from "../images/enricher2.png";
import enricher3 from "../images/enricher3.png";
import enricher4 from "../images/enricher4.png";
import Image from "next/image";

const PinpointArea: React.FC = () => {
  return (
    <div className="py-16 px-8">
      {/* screener attributes */}
      <div className="text-[#2F327D] text-center">
        <h2 className="text-2xl font-bold mb-6">Screener attributes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <Image src={screener1} alt="financials" />
            <p className="font-medium text-[#2F327D]">Financials</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={screener2} alt="financials" />
            <p className="font-medium text-[#2F327D]">Company Name & Website</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={screener3} alt="financials" />
            <p className="font-medium text-[#2F327D]">Company location</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={screener4} alt="financials" />
            <p className="font-medium text-[#2F327D]">Country code</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <Image src={screener5} alt="financials" />
            <p className="font-medium text-[#2F327D]">Employee count</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={screener6} alt="financials" />
            <p className="font-medium text-[#2F327D]">Industry</p>
          </div>
          <div className="flex flex-col items-center col-span-2 sm:col-span-1">
            <Image src={screener7} alt="financials" />
            <p className="font-medium text-[#2F327D]">and 20+ more</p>
          </div>
        </div>
      </div>

      {/* enricher attributes */}
      <div className="text-[#2F327D] text-center mt-16">
        <h2 className="text-2xl font-bold mb-6">Enricher attributes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <Image src={enricher1} alt="financials" />
            <p className="font-medium text-[#2F327D]">Phone</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={enricher2} alt="financials" />
            <p className="font-medium text-[#2F327D]">Email</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={enricher3} alt="financials" />
            <p className="font-medium text-[#2F327D]">Job title</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={enricher4} alt="financials" />
            <p className="font-medium text-[#2F327D]">LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinpointArea;
