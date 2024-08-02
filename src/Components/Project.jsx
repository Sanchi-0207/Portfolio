import React from 'react'
import AutoScroll from '../Assets/Auto Scroll.svg';

import { projects } from '../Utilities/Information'
const Project = () => (
  <div className='h-[900px] bg-[#121212]'>
    <div className='title mt-20 ml-24'>
      <p className='font-playfair text-8xl font-bold text-custom-white'>PROJECTS</p>
    </div>
    <div className='pt-10'>
    <div className='w-full h-9 bg-custom-green relative overflow-hidden '>
      <div className="flex whitespace-nowrap animate-scroll">
        <img src={AutoScroll} />
        <img src={AutoScroll} />
        <img src={AutoScroll} />
        <img src={AutoScroll} />
      </div>
    </div>
    </div>
    <div className='flex flex-row h-[599px] gap-3 pt-14 pl-10'>
      {projects.map((project) => (
       
        <div key={project.id} className='w-1/5 relative overflow-hidden group cursor-pointer rounded-lg'>
          <div className='absolute inset-0 flex justify-center items-center  '>
            <p className='text-[#D9D9D9] font-playfair text-8xl font-bold'>{project.id}</p>
          </div>
         
          <img src={project.image}alt className='w-full h-full absolute  inset-0 opacity-0  object-cover transition-all duration-300 group-hover:opacity-100 blur-sm filter brightness-50 ' />
         
          <div className="absolute bottom-[-100%]  p-4 h-full w-full flex justify-center items-center text-custom-white transition-all duration-300  group-hover:bottom-0 ">
           <div> <p className='font-poppins text-base font-semibold flex justify-center items-center mb-4 '>{project.title}</p>
           <p className='font-poppins text-sm font-extralight flex justify-center items-center '>{project.description}</p>
           <div className='flex justify-center items-center pt-4'>
            <a href={project.link}>
           <button className='px-4 py-1 rounded-lg  bg-custom-green  text-[#D9D9D9] focus:ring-2 focus:ring-custom-white hover:shadow-2xl transition duration-200'>Full Project</button></a>
           </div>
           </div>
          </div>
         
        </div>
      ))}
    </div>
  </div>
)

export default Project