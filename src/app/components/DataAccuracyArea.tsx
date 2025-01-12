import React from "react";
import Image from "next/image";
import dataaccuracy1 from "../images/dataaccuracy1.png";
import dataaccuracy2 from "../images/dataaccuracy2.png";

const DataAccuracyArea: React.FC = () => {
  return (
    <div className="p-10 mb-10 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src={dataaccuracy2} alt="dataaccuracy2" width={600} />
        <h1 className="m-5 text-xl font-bold text-red-600">Before</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={dataaccuracy1} alt="dataaccuracy1" width={750} />
        <h1 className="m-5 text-xl font-bold text-blue-400">After</h1>
      </div>
    </div>
  );
};

export default DataAccuracyArea;
