import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="h-auto pt-16 lg:pt-24 " id="contact">
      <p className="font-playfair text-4xl flex justify-center lg:text-8xl font-bold text-custom-white md:block md:ml-24">
        CONTACT ME
      </p>
      <div className="flex flex-col justify-center items-center md:flex-row w-full gap-8 mt-16  px-4 md:px-16">
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <div className="font-poppins font-medium text-sm md:text-lg  text-[#D9D9D9] mb-6 md:w-4/5">
            I have a passion for collaborating with dedicated creatives from
            businesses that make the world a more beautiful place. Whether
            you're looking to develop a stunning user interface, craft detailed
            3D models, or build a responsive and engaging website, I'm here to
            help bring your vision to life.
          </div>
          <div className="font-poppins font-medium text-sm mt-9 md:text-lg text-custom-green md:w-4/5">
            Let's connect and explore how we can work together to create
            something truly extraordinary.
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form  action="https://getform.io/f/bxojvexa" method='Post' className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#6D6D6D]">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full md:w-4/5 p-2.5 bg-[#D9D9D9]"
                placeholder="name@portfolio.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-[#6D6D6D]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name='subject'
                className="block p-3 w-full md:w-4/5 text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-[#D9D9D9]"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name='msg'
                className="block p-2.5 w-full md:w-4/5 text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-[#D9D9D9]"
                placeholder="Leave a message..."></textarea>
            </div>
            <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-custom-black bg-[linear-gradient(110deg,#50724B,45%,#D9D9D9,55%,#50724B)] bg-[length:200%_100%] px-6 font-medium text-[#D9D9D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2 focus:ring-offset-custom-black">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="h-16 mt-4 flex flex-col bg-custom-green">
        <div className="w-full h-full flex justify-center gap-4 pt-1">
          <a href="https://www.linkedin.com/in/sanchi-chaurasia-43a492284/" target="_blank">
      <FaLinkedin className="md:h-5/6 h-4/6 w-auto "/></a>
      <a href="https://github.com/Sanchi-0207" target="_blank">
      <FaGithub className="md:h-5/6 w-auto h-4/6" /></a>
      </div>
      <div className="font-poppins text-sm md:text-base text-custom-black font-normal flex justify-center pb-1">
        <a href="mailto:chaurasiasanchi@gmail.com" className=" hover:underline">chaurasiasanchi@gmail.com</a>
      </div>
      </div>
    </div>
  );
};

export default Contact;