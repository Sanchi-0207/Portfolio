import React from 'react'

const Contact = () => {
  return (
    <div className='h-[700px] w-full  bg-[#121212] '>
        <p className='font-playfair font-bold text-8xl text-custom-white ml-24 mt-24 '>CONTACT</p>
        <div className='flex flex-row'>
        <div className='w-1/2 '>
         <div className='font-poppins font-medium text-lg ml-28 mt-24 text-[#D9D9D9]'>I have a passion for collaborating with dedicated creatives from businesses that make the world a more beautiful place. Whether you're looking to develop a stunning user interface, craft detailed 3D models, or build a responsive and engaging website, I'm here to help bring your vision to life.</div>
         <div className='font-poppins font-medium text-lg ml-28 mt-24 text-custom-green'>Let's connect and explore how we can work together to create something truly extraordinary.</div>
         </div>
         <div className='w-1/2 ml-28 mt-10'>
         
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-[#6D6D6D] dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-2/3 p-2.5 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-custom-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@portfolio.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-[#6D6D6D] dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-2/3 text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-custom-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-2/3 text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-custom-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-custom-green border-custom-black  bg-[length:200%_100%] px-6 font-medium text-[#D9D9D9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9D9D9] focus:ring-offset-2 focus:ring-offset-custom-black animate-shimmer">
          Send Message
        </button>

      </form>
  </div>
</div>
</div>        
    
  )
}

export default Contact