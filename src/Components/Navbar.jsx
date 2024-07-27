import React, { useCallback } from "react";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const navItems = ["Projects", "About Me", "Skills", "Contact"];
 

  return (
    <div  className="relative">
      <div className="flex drop-shadow-2xl w-full justify-center items-center h-28 relative bg-[#121212]">
        <div className="flex w-7/12 text-2xl justify-between">
          {navItems.map((items, index) => (
            <div className=" font-poppins font-medium text-[#EBEBEB] transition-colors ]" key={index}>
              <p>{items}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
