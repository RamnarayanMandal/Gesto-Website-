import React from "react";
import ViewBtn from "./ViewBtn";
import { FaHandPointRight } from "react-icons/fa";
import { Progress } from "@material-tailwind/react";
import { IoCall } from "react-icons/io5";

const Section4 = () => {
  return (
    <div className="lg:flex lg:justify-between content-center items-center gap-5  mt-20 md:flex-block flex-block  md:justify-center ">
      <div className="lg:w-1/2 lg:px-2 flex justify-between w-full px-10">
        <div className="w-1/2 ml-10">
          <div>
            <img
              className="rounded"
              src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/c4-img-1.jpg"
              alt=""
            />
          </div>
          <div className="mt-10">
            <img
              src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/c4-img-3.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="rounded"
            src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/c4-img-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full px-10">
        <div className="flex justify-start content-center items-center text-xl gap-2 my-4 text-orange-600">
          <FaHandPointRight />
          <p>WITH SEO OPTIMIZATION</p>
        </div>
        <div>
          <h1 className="lg:text-6xl font-serif lg:font-bold my-4">
            Marketing And Creative Solutions Seo
          </h1>
        </div>
        <div>
          <p className="text-xl my-4 ">
            We are 100+ professional software engineers with more than 10 yea of
            experience in delivering superior products .
          </p>
        </div>
        <div className="flex w-11/12 flex-col gap-4 mb-10 mt-5">
          <div>
            <div className="flex justify-between my-2">
              <p className="text-xl font-medium ">Finance Consulting</p>
              <p className="text-pink-400 text-xl font-medium">80%</p>
            </div>
            <Progress value={80} color="pink" />
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p className="text-xl font-medium ">Clients Satisfied</p>
              <p className="text-pink-400 text-xl font-medium">98%</p>
            </div>
            <Progress value={98} color="pink" />
          </div>
          <div>
            <div className="flex justify-between my-2">
              <p className="text-xl font-medium ">Marketing & Branding</p>
              <p className="text-pink-400 text-xl font-medium">70%</p>
            </div>
            <Progress value={70} color="pink" />
          </div>
        </div>
        <div className="lg:flex lg:justify-around md:flex-block block justify-center" >
          <div className="flex justify-center content-center items-center">
            <ViewBtn />
          </div>
          <div className="lg:flex gap-2 justify-center content-start items-center md:flex flex-block">
            <div className="text-3xl border-soild border-4 border-gray-300 rounded-full p-2 bg-orange-600 h-14 w-14 "><IoCall /></div>
            <div>
              <p className="text-sm font-exrathin text-orange-800 mb-1">Call Us Anytime</p>
              <h1 className="text-2xl font-semibold ">021568569875</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
