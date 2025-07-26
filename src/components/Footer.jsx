import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { footer } from 'framer-motion/client'


const Footer = () => {
  return (
    <footer className='flex items-center justify-between lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t-[0.3px] border-[#babaff]'>
        <img className='h-10' src="/images/CYTsengText.png" alt="illu-text" />

        <img className='h-16'src="/images/CT_logo.png" alt="illu" />

        <div className='flex gap-6'>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="https://github.com/chingyutseng0715"><Github className="w-8 h-8 text-white hover:text-violet-500" /></a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="https://www.linkedin.com/in/eugene-tseng-086561346/"><Linkedin className="w-8 h-8 text-white hover:text-violet-500" /></a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="https://x.com/Kspree_Kisara"><Twitter className="w-8 h-8 text-white hover:text-violet-500" /></a>
            <a className='md:text-3xl text-2xl hover:text-violet-600 duration-300' href="mailto:eugenetseng0715@gmail.com"><Mail className="w-8 h-8 text-white hover:text-violet-500" /></a>
            

        </div>

    </footer>
  )
}

export default Footer
