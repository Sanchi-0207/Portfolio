import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../Assets/girl.json"

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
   <Lottie
  options={defaultOptions}
  className="w-full max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[400px] lg:max-h-[400px]"
/>

  </div>
  
  );
};

export default LottieAnimation;