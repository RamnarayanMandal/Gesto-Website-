import React from "react";
import { FaHandPointRight, FaPlay, FaLocationArrow } from "react-icons/fa";
import GetStartButton from "./GetStartButton";

const Section1 = () => {
    return (
        <div className=" w-full ">
            <div className="bg-img">
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:mt-10">
                <div className="overflow-hidden  w-full lg:w-1/2">
                    <img
                        className="lg:w-9/12 w-auto lg:ml-14 lg:mt-20 md:w-1/2"
                        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/gto-hero-4-img-1.png"
                        alt=""
                    />
                    <img
                        className="lg:pl-20 w-auto "
                        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/hero-4-img-popup.png"
                        alt=""
                    />
                </div>
                <div className="text-center lg:text-left lg:mt-6 w-full lg:w-1/2 lg:text-white md:text-gray-400 text-black">
                    <div className="flex justify-start items-center gap-5 text-red-700 lg:pt-32 lg:text-2xl">
                        <FaHandPointRight />
                        <p> WELCOME TO GESTO</p>
                    </div>
                    <div>
                        <h1 className=" text-2xl md:text-4xl lg:text-8xl font-bold   my-4">
                            A Marketing <span className="text-red-400 underline">Agency</span>{" "}
                            To Grow Your Business
                        </h1>
                    </div>
                    <div className="text-lg lg:text-xl my-4">
                        We are 100+ professional software engineers with more than 10 years
                        of experience in delivering superior products. Believe it because
                        you have seen it. Here are real numbers.
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4">
                        <GetStartButton/>
                        <button className="lg:px-6 lg:py-4 md:3 md:py-2 rounded-full border-red-600 border-2 p-2">
                            WATCH VIDEO
                        </button>
                        <div className="rounded-full border-red-600 border-2 p-4">
                            <FaPlay />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
