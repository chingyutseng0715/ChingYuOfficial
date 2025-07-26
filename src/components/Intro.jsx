import React from 'react';

const Intro = () => {
  return (
    <div id="intro" className='relative w-full md:h-screen h-[110vh] overflow-visible scroll-mt-40 px-9 py-15 md:px-12 lg:px-20 text-center'>
      <h1
        className='text-6xl font-bold tracking-widest mb-20 text-[#68e1f1]'
        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}
      >
       Introduction
      </h1>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24'>
           
        {/* Selfie Section */}
        <div className='w-full h-full md:w-1/3 flex justify-center'>
          <img
            src='/images/selfie.jpeg' 
            alt='selfie-img'
            className='w-40 sm:w-48 md:w-64 lg:w-72 h-auto rounded-2xl object-cover shadow-lg border-4 border-[#68e1f1]'
            
          />
        </div>

        {/* Intro Text Section */}
        <div className='w-full md:w-2/3 text-left space-y-4'>
          <h2 className='text-2xl md:text-3xl font-semibold text-white'>
            Hello, I'm Ching Yu Tseng(Eugene) !
          </h2>
          <p className='text-md md:text-lg text-gray-300 leading-relaxed break-words'>
            I'm a 2nd year Math student currently studying in University of Waterloo. <br /> 
            Interesting in declaring Data Science, C&O(Combination & Optimization) or ITM (Information Techonology Management) as my major next term. <br />
            However, I don't want to limit my growth to academics alone. <br />
            I'm eager to seek for opportunities to step into software engineer, data scientist or machine learning industry. <br />
            That said, I passionately attend serveral courses, online courses and lectures to expand my skillset, skill range. <br />
            Whether it's building intelligent applications, solving optimization problems or implement real-word examples to code all excites me. <br />
            I'm currently finding coop, internship for my 2nd year, it will be a pleasure and a great opportunity to work with you!!!




          </p>
          <p className='text-md md:text-lg text-gray-400'>
            Beyond coding, I also love playing piano, basketball, traveling, gaming, and solving real-world problems with technology, with skills that I freshly learned. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

