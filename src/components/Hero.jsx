import React, { useState } from 'react';
import Contact from './Contact'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <main className='relative w-full h-screen overflow-hidden flex justify-center mb-[10%]'> 
        <video src="public\videos\CT_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-[95%] object-cover absolute top-0 first-letter:left-0 -z-10'
        ></video>

        <div className='absolute bottom-[15%] flex flex-col items-center gap-5 '>
            <img
            src="public\images\CYTsengText.png"
            alt="illu-text"
            className="md:w-[30rem] w-[20rem]"/>

            <h1 className= 'md:text-2xl text-1xl font-bold'>
            Portfolio: Skill Showcase
            </h1>

            <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]'></div>

            <button 
            onClick={openModal}
            className="h-10 px-16 bg-gradient-to-r
                 from-gray-600 to-gray-400 rounded-lg 
                 font-medium text-nowrap hover:opacity-80
                 transition-all duration-300">
                    Connect Now
            </button>

            <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
                <img 
                className='md:h-16 h-12'
                src="public\images\CT_logo.png" alt="Illu-logo" /> CHING-YU TSENG
            </div>

            <p className='max-w-[80%] text-center text-[#babaff]'>
                Notice: This website will be updated whenever I learn something new, create a new project or get more advanced in certain skills
            </p>

            


        </div>

        <div className='absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden'>
                <div className='flex flex-col items-center'>
                    <div className = 'w-8 h-12 border-2 border-[#67b9fd] rounded-full flex justify-center pt-1'>
                        <div className='w-1 h-3 bg-[#67b9fd] rounded-full animate-pulse'></div>
                    </div>
                    <p className='text-[#67b9fd] mt-2'>Scroll Down</p>
                </div>
        </div>

        
    </main>
    <Contact isOpen={isModalOpen} onClose={closeModal} />

    </>
  )
}

export default Hero
