import React from "react";
import { TbBrandWalmart } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { PiSpotifyLogo } from "react-icons/pi";
import { FaSlack } from "react-icons/fa";
import { TbBrandAmazon } from "react-icons/tb";

const Section2 = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 pt-0 mx-4 md:mx-8 lg:mx-12">
      <div className="my-4">
        <h1 className="text-4xl">
          <span className="text-red-400">200+</span> Trusted Partners
        </h1>
      </div>
      <div className="text-2xl text-gray-500 mt-10 md:mt-16 flex flex-wrap gap-6 md:gap-10 justify-center">
        <div className="partner-icon">
          <div>Walmart</div>
          <div>
            <TbBrandWalmart />
          </div>
        </div>
        <div className="partner-icon">
          <div>Linked</div>
          <div>
            <FaLinkedinIn />
          </div>
        </div>
        <div className="partner-icon">
          <div>Spotify</div>
          <div>
            <PiSpotifyLogo />
          </div>
        </div>
        <div className="partner-icon">
          <div>Google</div>
          {/* Add Google icon component here */}
        </div>
        <div className="partner-icon">
          <div>Slack</div>
          <div>
            <FaSlack />
          </div>
        </div>
        <div className="partner-icon">
          <div>Amazon</div>
          <div>
            <TbBrandAmazon />
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Section2;
