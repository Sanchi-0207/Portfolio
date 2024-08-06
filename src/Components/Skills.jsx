import React from 'react'
import Stack from '@mui/material/Stack';
import CircularDeterminate from './Progress.jsx';
import figma from '../Assets/figma.png'
import react from '../Assets/react.png'
import blender from '../Assets/blender.png'

const Skills = () => {
  return (
    <div className="h-auto " id="skills">
      <p className="font-playfair font-bold text-4xl lg:text-8xl text-custom-white ml-24 ">
        SKILLS
      </p>
      <div className="relative   hidden md:block animate-slideUp px-4 md:px-10">
        <Stack
          direction="row"
          className="flex justify-center items-center gap-44 md:gap-20 pt-20 md:pt-40">
            <div className='lg:mr-8'>
          <CircularDeterminate
            targetPercentage={75}
            size="200px" 
            color="#50724B"
            imageSrc={react}
          />
          <div className='flex justify-center items-center'>
            <p className='font-poppins text-2xl font-semibold text-[#D9D9D9] pt-5'>ReactJS</p>
          </div>
          </div>
          <div className='lg:ml-8 lg:mr-8'>
          <CircularDeterminate
            targetPercentage={85}
            size="200px" 
            color="#50724B"
            imageSrc={blender}
          />
           <div className='flex justify-center items-center'>
            <p className='font-poppins text-2xl font-semibold text-[#D9D9D9] pt-5'>Blender</p>
          </div>
          </div>
          <div className='lg:ml-8'>
          <CircularDeterminate
            targetPercentage={90}
            size="200px" // Adjust size for responsiveness
            color="#50724B"
            imageSrc={figma}
          />
           <div className='flex justify-center items-center'>
            <p className='font-poppins text-2xl font-semibold text-[#D9D9D9] pt-5'>Figma</p>
          </div>
          </div>
        </Stack>
      </div>

      <div className="relative block md:hidden animate-slideUp px-4 md:px-10">
        <Stack
          direction="row"
          className="flex justify-center items-center gap-12 md:gap-20 pt-20 md:pt-40">
            <div>
          <CircularDeterminate
            targetPercentage={75}
            size="90px" 
            color="#50724B"
            imageSrc={react}
          />
           <div className='flex justify-center items-center'>
            <p className='font-poppins text-xl font-semibold text-[#D9D9D9] pt-5'>ReactJS</p>
          </div>
          </div>
          <div>
          <CircularDeterminate
            targetPercentage={85}
            size="90px" 
            color="#50724B"
            imageSrc={blender}
          />
           <div className='flex justify-center items-center'>
            <p className='font-poppins text-xl font-semibold text-[#D9D9D9] pt-5'>Blender</p>
          </div>
          </div>
          <div>
          <CircularDeterminate
            targetPercentage={90}
            size="90px" 
            color="#50724B"
            imageSrc={figma}
          />
           <div className='flex justify-center items-center'>
            <p className='font-poppins text-xl font-semibold text-[#D9D9D9] pt-5'>Figma</p>
          </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Skills