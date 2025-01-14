import React from "react";
import Image from "next/image";
import companies from "../images/companies.png";

const SocialProof: React.FC = () => {
  return (
    <section className="w-full py-10 my-10">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 text-lg text-[#666666]">
          Modern companies are using{" "}
          <span className="font-semibold">BrandNav</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 text-[#666666] mb-10">
          <Image src={companies} alt="companies" width={720} height={32} />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
