import React from "react";
import Lottie from "./Lottie";
import line from "../Assets/Line.svg";
import { myInfo } from "../Utilities/Information";

const AboutMe = () => {
  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row" id="about me">
    
      <div className="w-full h-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8 relative z-10">
        <Lottie />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:gap-4 justify-center items-center lg:items-start p-4 z-10">
        <div className="relative w-full">
          <p
            className="font-playfair font-bold text-4xl lg:text-8xl text-transparent"
            style={{ WebkitTextStroke: "1px #50724B" }}>
            SANCHI
          </p>
        </div>
        <div className="relative w-full">
          <p className="font-playfair font-bold text-4xl lg:text-8xl text-custom-green">
            CHAURASIA
          </p>
        </div>
        <div className="relative w-full">
          <p className="font-poppins text-base lg:text-lg text-[#D9D9D9]">
            {myInfo.description}
          </p>
        </div>
      </div>
      <div className="absolute md:-mt-0 z-0 ">
        <img src={line} className="opacity-70 "/>
      </div>
     
    </div>
  );
};

export default AboutMe;
