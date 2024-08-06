import React from 'react'
import AutoScroll from '../Assets/Auto Scroll.svg';
import coke from '../Assets/coke.png'
import { myInfo, projects } from '../Utilities/Information'
const Project = () => (
  <div className="h-auto " id="projects">
    <div className="title mt-20 ml-24 ">
      <p className="font-playfair text-4xl lg:text-8xl font-bold text-custom-white">
        PROJECTS
      </p>
    </div>
    <div className="pt-10">
      <div className="w-full lg:h-9 bg-custom-green relative overflow-hidden md:h-4 ">
        <div className="flex whitespace-nowrap animate-scroll">
          <img src={AutoScroll} />
          <img src={AutoScroll} />
          <img src={AutoScroll} />
          <img src={AutoScroll} />
        </div>
      </div>
    </div>
    <div className=" flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-3 p-10 pt-14 pl-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full md:w-1/5 relative overflow-hidden group cursor-pointer rounded-lg">
          <div className="h-[30rem] inset-0 flex justify-center items-center  ">
            <p className="text-[#D9D9D9] font-playfair text-8xl font-bold">
              {project.id}
            </p>
          </div>

          <img
            src={project.image}
            alt
            className="w-full h-full absolute  inset-0 opacity-0  object-cover transition-all duration-300 group-hover:opacity-100 blur-sm filter brightness-50 "
          />
          <div className="flex justify-center absolute top-[-100%] transition-all duration-300 rounded-lg group-hover:bottom-[0]  "></div>
          <div className="absolute bottom-[-100%]  p-4 h-full w-full flex justify-center items-center text-custom-white transition-all duration-300  group-hover:bottom-0 ">
            <div>
              {" "}
              <p className="font-poppins text-base font-semibold flex justify-center items-center mb-4 ">
                {project.title}
              </p>
              <p className="font-poppins text-sm font-extralight flex justify-center items-center ">
                {project.description}
              </p>
              <div className='flex justify-center items-center '>
              <a href={project.link}>
              <button className="text-2xl md:text-base mt-7 inline-flex h-12 md:w-5/6  animate-shimmer items-center justify-center rounded-md border border-custom-black bg-[linear-gradient(110deg,#50724B,45%,#D9D9D9,55%,#50724B)] bg-[length:200%_100%] px-6 font-medium text-[#D9D9D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2 focus:ring-offset-custom-black">
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