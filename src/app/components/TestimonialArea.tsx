import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import sai from "../images/sairaj.png";
import sairaj from "../images/wahed.png";

const TestimonialArea: React.FC = () => {
  const testimonials = [
    {
      name: "Sai",
      role: "CEO, Sentry Ecom",
      rating: 5,
      title: "Super helpful tool for lead generation!",
      feedback:
        "BrandNav has been extremely useful in helping us find high-quality leads for our agency. It's the best tool I've used so far for scrapping leads. Would definitely recommend BrandNav to businesses looking for a lead gen tool.",
      image: sai,
    },
    {
      name: "Sairaj Matkar",
      role: "Founder, AceXmedia",
      rating: 5,
      title: "Highly recommended if you're looking to get leads!",
      feedback:
        "Best tool I've used so far for scrapping leads. Helps me scrape my target audience data with ease. Low effort, amazing response rates. Saves a lot of time and manual work.",
      image: sairaj,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="ml-5 mr-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                  <AiFillStar className="text-yellow-500" />
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                {testimonial.title}
              </h4>
              <p className="text-sm text-[#808080]">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
