import React from "react";
import Image from "next/image";
import using1 from "../images/using1.png";
import using2 from "../images/using2.png";
import using3 from "../images/using3.png";
import using4 from "../images/using4.png";
import using5 from "../images/using5.png";
import using6 from "../images/using6.png";

const UsingBrandNavArea: React.FC = () => {
  const sections = [
    {
      title: "Sales & Marketing Teams",
      description:
        "Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.",
      icon: <Image src={using1} alt="sales" />,
    },
    {
      title: "Software & IT Companies",
      description:
        "IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.",
      icon: <Image src={using2} alt="software" />,
    },
    {
      title: "Service Providers",
      description:
        "Service providers are using BrandNav to locate accurate email addresses, build a list of contacts, and improve the efficiency of their sales process.",
      icon: <Image src={using3} alt="service" />,
    },
    {
      title: "Recruiters",
      description:
        "Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.",
      icon: <Image src={using4} alt="recruiters" />,
    },
    {
      title: "Backlinks Outreach",
      description:
        "SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes.",
      icon: <Image src={using5} alt="seo" />,
    },
    {
      title: "Investors",
      description:
        "Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.",
      icon: <Image src={using6} alt="investors" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-lg p-6 text-center flex flex-col items-center"
            >
              <div className="text-4xl rounded-full m-4" aria-hidden="true">
                {section.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsingBrandNavArea;
