import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import CustomCarousel from "./CustomCarousel";


const ClinedeRev = () => {
  return (
    <div className="w-full h-full my-10">
      <div className="text-center p-10 ">
        <div className="flex text-xl text-orange-800 justify-center gap-2 my-4">
          <FaHandPointRight />
          <p>OUR TESTIMONIAL</p>
        </div>
        <h1 className="text-4xl font-bold my-4">
          What Our Clients Say About Us
        </h1>
      </div>
      <div className="flex gap-1 w-full">
       <CustomCarousel/>
      </div>
    </div>
  );
};

export default ClinedeRev;
