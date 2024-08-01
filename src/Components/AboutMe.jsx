import React from 'react'
import Lottie from './Lottie'
import line from '../Assets/Line.svg'
import { myInfo } from '../Utilities/Information'
const AboutMe = () => {
  return (
    <div className='h-screen relative w-full flex bg-[#121212]'>
      <img src={line} className='absolute -ml-6 -mt-20 h-[500] opacity-75 -rotate-3 mr-44'/>
      <div className=' image-section w-1/2  flex justify-center items-center'>
         <div>
           <Lottie/> 
         </div>
      </div>
      <div className=' detail w-1/2 flex flex-col justify-center items-center pr-32 gap-6'>
     
        <div className=' flex items-end w-full'> 
        <p className='font-playfair font-bold text-8xl text-transparent text ml-auto'
        style={{ WebkitTextStroke: '1px #50724B' }}>SANCHI</p>
        </div>
        <div className='flex items-end w-full'>
        <p className='font-playfair font-bold text-8xl text-custom-green ml-auto'>CHAURASIA</p>
        </div>
        
        <div className='flex items-end w-full'>
        <p className='font-poppins text-[#D9D9D9] font-medium text-base ml'>{
          myInfo.description
          }</p>
          </div>
      </div>
    </div>
    

  )
}

export default AboutMe