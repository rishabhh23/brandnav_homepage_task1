import React from "react";
import Image from "next/image";
import enrich1 from "../images/11.png";
import enrich2 from "../images/12.png";
import freshdata1 from "../images/21.png";
import freshdata2 from "../images/22.png";
import advancedsearch1 from "../images/31.png";
import advancedsearch2 from "../images/32.png";

const WhyUseArea: React.FC = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mr-10 ml-10 p-4 rounded-lg">
        <div className="md:mt-0 flex-1 flex justify-center">
          <Image src={enrich1} alt="enrich1" />
        </div>
        <div className="flex-1 space-y-4">
          <Image className="" src={enrich2} alt="enrich2" />
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Enrich any CSV
          </h2>
          <p className="text-gray-700 text-lg">
            BrandNav transforms your CSV files by adding valuable contact,
            firmographics, and technographics data. With just a few clicks, you
            can enhance your data with enriched information and unlock new
            insights and opportunities.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mr-10 ml-10 p-4 rounded-lg">
        <div className="flex-1 space-y-4">
          <Image className="" src={freshdata2} alt="enrich2" />
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Fresh data updates everyday
          </h2>
          <p className="text-gray-700 text-lg">
            BrandNav updates its data every day, providing the most recent and
            accurate information to its users. With a constant stream of new
            information, BrandNav ensures that users have access to the latest
            contact, firmographics, and technographics data for better
            decision-making. 
          </p>
        </div>
        <div className="md:mt-0 flex-1 flex justify-center">
          <Image src={freshdata1} alt="enrich1" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between mr-10 ml-10 p-4 rounded-lg">
        <div className="md:mt-0 flex-1 flex justify-center">
          <Image src={advancedsearch1} alt="enrich1" />
        </div>
        <div className="flex-1 space-y-4">
          <Image className="" src={advancedsearch2} alt="enrich2" />
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Advanced search with 25+ unique filters
          </h2>
          <p className="text-gray-700 text-lg">
            BrandNav offers over 25+ filters to help users build highly
            segmented lists for better prospecting. With BrandNav, you can
            create highly targeted lists that are tailored to your specific
            needs, streamlining your workflow and maximizing your productivity.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyUseArea;
