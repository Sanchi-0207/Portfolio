import React from 'react'
import AutoScroll from '../Assets/Auto Scroll.svg';
import { projects } from '../Utilities/Information'
const Project = () => (
  <div className="h-auto" id="projects">
      <p className="font-playfair text-4xl lg:text-8xl font-bold text-custom-white md:block md:ml-24 flex justify-center">
        PROJECTS
      </p>
    <div className="pt-10">
      <div className="w-full md:h-9 bg-custom-green relative overflow-hidden h-4 ">
        <div className="flex whitespace-nowrap animate-scroll">
          <img src={AutoScroll} className='h-4 md:h-9'alt='AutoScroll'/>
          <img src={AutoScroll} className='h-4 md:h-9'alt='AutoScroll'/>
          <img src={AutoScroll} className='h-4 md:h-9'alt='AutoScroll'/>
          <img src={AutoScroll} className='h-4 md:h-9'alt='AutoScroll'/>
        </div>
      </div>
    </div>
    <div className=" flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-3 p-10 pt-14 pl-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full md:w-1/5 relative overflow-hidden group cursor-pointer rounded-lg">
          <div className="h-[30rem] inset-0 flex justify-center items-center  ">
            <p className="text-[#D9D9D9] font-playfair text-6xl lg:text-8xl font-bold">
              {project.id}
            </p>
          </div>

          <img
            src={project.image}
            alt='Project Image'
            className="w-full h-full absolute  inset-0 opacity-0  object-cover transition-all duration-300 group-hover:opacity-100 blur-sm filter brightness-50 "
          />
          <div className="flex justify-center absolute top-[-100%] transition-all duration-300 rounded-lg group-hover:bottom-[0]  "></div>
          <div className="absolute bottom-[-100%]  p-4 h-full w-full flex justify-center items-center text-custom-white transition-all duration-300  group-hover:bottom-0 ">
            <div>
              {" "}
              <p className="font-poppins text-base font-semibold flex justify-center items-center mb-4 ">
                {project.title}
              </p>
              <p className="font-poppins text-sm  font-extralight flex justify-center items-center ">
                {project.description}
              </p>
              <div className='flex justify-center items-center '>
              <a href={project.link}>
              <button className="text-lg md:text-base mt-7 inline-flex h-8 md:w-5/6  animate-shimmer items-center justify-center rounded-md border md:h-12 border-custom-black bg-[linear-gradient(110deg,#50724B,45%,#D9D9D9,55%,#50724B)] bg-[length:200%_100%] px-6 font-medium text-[#D9D9D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2 focus:ring-offset-custom-black">
                Full Project
              </button></a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project