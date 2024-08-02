import React from 'react'
// import front from '../Assets/front wave.svg'
import Stack from '@mui/material/Stack';
import CircularDeterminate from './Progress.jsx';
import figma from '../Assets/figma.png'
import react from '../Assets/react.png'
import blender from '../Assets/blender.png'
import { useState,useEffect } from 'react';
// import back from '../Assets/back wave.svg'
const Skills = () => {

 
  return (
    <div className='h-[500px] bg-[#121212]'>
        <p className='font-playfair font-bold text-8xl text-custom-white ml-24 '>SKILLS</p>
        <div className='relative'>
        <Stack className='flex justify-center items-center gap-52 pt-40' direction={'row'}>
       <div className='flex flex-col justify-center items-center '>
      <CircularDeterminate targetPercentage={75} size="180px" color="#50724B" imageSrc={react} />
      <p className='font-poppins text-xl text-custom-green font-semibold items-center pt-11'>ReactJS</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <CircularDeterminate targetPercentage={85} size="180px" color="#50724B" imageSrc={blender} />
      <p className='font-poppins text-xl text-custom-green font-semibold items-center pt-11'>Blender</p></div>
      <div className='flex flex-col justify-center items-center'>
      <CircularDeterminate targetPercentage={90} size="180px" color="#50724B" imageSrc={figma} />
      <p className='font-poppins text-xl text-custom-green font-semibold items-center pt-11'>Figma</p></div>
    </Stack>
   
          
    </div>
    </div>
  )
}

export default Skills