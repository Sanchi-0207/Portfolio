import React from "react";
import Lottie from "./Lottie";
import line from "../Assets/Line.svg";
import { myInfo } from "../Utilities/Information";

const AboutMe = () => {
  return (
    <div className="  h-auto" id="about">
      <div className="flex flex-col lg:flex-row">
      <div className="flex-wrap w-full lg:w-1/2 ">
        <div className="h-full w-full flex justify-center items-center p-4 lg:p-8 relative z-10 ">
          <Lottie />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col md:gap-4 gap-3 justify-center items-center lg:items-start p-4 z-10">
      <div className="w-auto lg:w-full flex lg:flex-col flex-row md:gap-4 gap-3 justify-center items-center lg:items-start z-10">
        <div className="relative w-full">
          <p
            className="font-playfair font-bold text-3xl md:text-4xl lg:text-8xl text-transparent"
            style={{ WebkitTextStroke: "1px #50724B" }}
          >
            SANCHI
          </p>
        </div>
        <div className="relative w-full">
          <p className="font-playfair font-bold text-3xl md:text-4xl lg:text-8xl text-custom-green">
            CHAURASIA
          </p>
        </div>
        </div>
        <div className="relative w-full">
          <p className="font-poppins text-sm md:text-lg text-justify lg:text-start text-[#D9D9D9]">
            {myInfo.description}
          </p>
        </div>
      </div>
      
      <div className="absolute z-0 h-full lg:mt-0 mt-10 w-full">
        <img src={line} className="opacity-70" alt="My Skills" />
      </div>
    </div>
    </div>
  );
};

export default AboutMe;