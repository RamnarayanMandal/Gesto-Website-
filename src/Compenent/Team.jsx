import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ViewAllTeam from "./ViewAllTeam";

const Team = () => {
    return (
        <div>
            <div className="my-20">
                <marquee
                    behavior=""
                    direction=""
                    className="h-40  py-4 background1 text-8xl font-bold flex justify-center content-center items-center text-white"
                >
                    GESTO CREATIVE DIGITAL AGENCY
                </marquee>
                <div className="background2">
                    <div className="flex justify-around w-full pt-20 h-full flex-wrap">
                        <div className="lg:w-1/3  h-full w-full relative">
                            <div className=" bg-img1 "></div>
                            <div className="relative z-20 justify-center flex items-center content-center pt-14 hover:pt-5">
                                <img
                                    src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/t4-img-1.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-white relative z-20  text-center">
                                <h1 className="text-2xl font-semibold">RACHANA SHETH</h1>
                                <p className="text-red-400 text-sm">FULL STOCK DEVELOPER</p>
                            </div>
                            {/* <div className="text-white relative z-20 flex justify-center content-center items-center my-4">
                                <ul className="flex gap-2 text-2xl">
                                    <li>
                                    <FaFacebook />
                                    </li>
                                    <li>
                                    <AiOutlineInstagram />
                                    </li>
                                    <li>
                                    <FaLinkedin />
                                    </li>
                                    <li>
                                    <FaYoutube />
                                    </li>
                                </ul>
                                </div> */}
                        </div>
                        <div className="lg:w-1/3 w-full relative md:heddin hidden lg:block">
                            <div className=" bg-img1 "></div>
                            <div className="relative z-20 justify-center flex items-center content-center pt-14 hover:pt-5">
                                <img
                                    src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/t4-img-2.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-white relative z-20  text-center">
                                <h1 className="text-2xl font-semibold">RACHANA SHETH</h1>
                                <p className="text-red-400 text-sm">FULL STOCK DEVELOPER</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full relative md:heddin hidden lg:block">
                            <div className=" bg-img1 "></div>
                            <div className="relative z-20 justify-center flex items-center content-center pt-14 hover:pt-5">
                                <img
                                    src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/t4-img-3.png"
                                    alt=""
                                />
                            </div>
                            <div className="text-white relative z-20  text-center">
                                <h1 className="text-2xl font-semibold">RACHANA SHETH</h1>
                                <p className="text-red-400 text-sm">FULL STOCK DEVELOPER</p>
                            </div>
                        </div>
                        <div className="flex justify-center text-white content-center items-center w-full pb-10 background3 ">
                        <ViewAllTeam />
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Team;
