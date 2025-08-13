import 'boxicons/css/boxicons.min.css';
import React, { useState } from 'react';

const Header = () => {

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if(mobileMenu.classList.contains('hidden')){
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }


  return (
    <header className="py-1 px-7 flex justify-between 
      items-center sticky top-0 z-50 w-full border-b-[0.3px]
      border-[#67b9fd] bg-opacity-30 bg-[#67b9fd]">
        {/*Left section*/}
        <div className="flex lg:gap-14 gap-4 items-center">
            <img className="md:w-16 w-12"
            src="/images/CTcoding_image.png" alt="logo-img" />

            <div className="hidden md:flex gap-5 items-center">
                <button className="h-8 px-6 bg-gradient-to-r
                 from-blue-400 to-gray-400 rounded-lg 
                 font-medium text-nowrap hover:opacity-80
                 transition-all duration-300"
                 onClick={() => window.open('/images/Formal_Cover_Letter.pdf', '_blank')}>
                    Cover letter
                </button>

                <button className="h-8 px-6 bg-gradient-to-r
                 from-gray-400 to-blue-400 rounded-lg 
                 font-medium text-nowrap hover:opacity-80
                 transition-all duration-300"
                 onClick={() => window.open('/images/2A_Resume.pdf', '_blank')}>
                    My Resume
                </button>
            </div>
        </div>

        {/*Right Section Desktop*/}
        <nav className= 'hidden md:flex lg:gap-8 gap-4'>
            

            <a href="#" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-home'  ></i>  Home
            </a>

            <a href="#intro" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                < i class='bx  bx-user'  ></i> Intro
            </a>

            <a href="#skill" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-chevrons-up'  ></i>  Skills
            </a>

            <a href="#projects" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-folder'></i>  Projects
            </a>
        </nav>

        {/* Mobile menu*/}
        <button onClick={toggleMobileMenu} className='text-3xl p-2 md:hidden'>
          <i class='bx  bx-dots-vertical'  ></i> 
        </button>

        <div  id='mobileMenu' className = 'hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden'>
          <nav className='flex flex-col gap-4 items-center'>
            <a href="#" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-home'  ></i>  Home
            </a>

            <a href="#intro" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                < i class='bx  bx-user'  ></i> Intro
            </a>

            <a href="#skill" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-chevrons-up'  ></i>  Skills
            </a>

            <a href="#projects" className="relative py-1 text-lg
              hover:text-purple-300 transition-colors
              duration-300 after:content-['']
              after:absolute after:w-0 after:h-0.5
              after:bg-purple-400 after:left-0 after:bottom-0 
              after:transition-all hover:after:w-full text-nowrap">
                <i class='bx  bx-folder'></i>  Projects
            </a>
          </nav>

          <div className='flex flex-col gap-3 w-full mt-4'>
            <button className="h-8 px-6 bg-gradient-to-r
                 from-blue-400 to-gray-400 rounded-lg 
                 font-medium text-nowrap hover:opacity-80
                 transition-all duration-300"
                 onClick={() => window.open('/images/cover_letter11.pdf', '_blank')}>
                    Cover letter
            </button>

            <button className="h-8 px-6 bg-gradient-to-r
                 from-gray-400 to-blue-400 rounded-lg 
                 font-medium text-nowrap hover:opacity-80
                 transition-all duration-300"
                 onClick={() => window.open('/images/resume9.pdf', '_blank')}>
                    My Resume
            </button>
          </div>

        </div>
    </header>
  )
}

export default Header
