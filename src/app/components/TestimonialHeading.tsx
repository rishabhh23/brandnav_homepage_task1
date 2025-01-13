import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import stars from "../images/4.8stars.png";

const TestimonialHeading: React.FC = () => {
  return (
    <section className="flex flex-col w-full pt-8">
      <div className="container mx-auto text-center">
        <h1 className="mt-10 text-4xl font-bold">
          Don't just take our word for it
        </h1>
      </div>
      <div className="p-5 font-semibold flex mx-auto items-center text-[#595B97]">
        <span className="mr-2">Excellent</span>
        <div className="flex items-center">
          {/* <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" /> */}
          <Image src={stars} alt={"Rating"} height={16} className="mb-1" />
          <span className="ml-2">4.8/5 G2 Rating</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHeading;
