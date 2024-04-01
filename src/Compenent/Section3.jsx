import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import GetStartButton from "./GetStartButton";

const Section3 = () => {
    return (
        <div className="lg:flex lg:justify-between content-center items-center lg:p-10 md:p-5 justify-center md:justify-evenly font-serif lg:gap-5 block">
            <div className="w-full lg:w-1/2 lg:pl-5  px-10">
                <div className="text-red-500 text-xl my-4 flex justify-start items-center content-center pl-5">
                    <FaHandPointRight />
                    <p>ABOUT US</p>
                </div>
                <div>
                    <h1 className="text-4xl lg:text-6xl font-bold my-4">We Want To Give You The Best Service</h1>
                </div>
                <div>
                    <p className="text-lg lg:text-xl my-4">
                        We are 100+ professional software engineers with more than 10 years
                        of experience in delivering superior products. Believe it because
                        you've seen it. Here are real numbers.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-4 my-4">
                    <div className="w-full lg:w-auto">
                        <div className="lg:text-4xl text-2xl font-bold text-orange-600 text-center lg:text-left">24</div>
                        <div className="lg:text-3xl text-xl text-gray-600 text-center lg:text-left font-semibold">Year Experience</div>
                    </div>
                    <div className="w-full lg:w-auto text-black text-base lg:text-xl py-4 font-medium">
                        <div className="text-center lg:text-left">Product Engineering</div>
                        <div className="text-center lg:text-left">Digital Services</div>
                        <div className="text-center lg:text-left">IT Consultancy</div>
                        <div className="text-center lg:text-left">Digital Services</div>
                    </div>
                </div>
                <div className="flex justify-center content-start items-center">
                <GetStartButton/>
                </div>
            </div>
            <div className="w-full lg:w-1/2 my-4 ">
                <img
                    src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/gto-a4-img-1.png"
                    alt=""
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default Section3;
