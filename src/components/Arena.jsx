import React from 'react'
import 'boxicons/css/boxicons.min.css'

const Arena = () => {
  return (
    //container
    <div id="projects" className='md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-30 scroll-mt-28'>
      <div className='relative z-10 pt-6 text-center md:mb-20 mb-16'>
        <h1 className='text-5xl font-bold tracking-widestmb-28 text-[#68e1f1]'
        style={{textShadow:'0 0 10px rgba(255,255,255,0.7), 0 0 20px 20px rgba(167,139,250,0.5)'}}>
            Projects / Badges / Certificates
        </h1>
      </div>

    {/*Main container with the gird arena element*/}
    <div className='lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
        
        {/*left column*/}
        <div className='md:col-span-1 space-y-4 md:space-y-6'>
            {/*Card1 Top Left */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
                <div className='aboslute h-full w-full'>
                    <img src="/images/firstEverWebsite.png" alt="firstWebsite_img" />
                    <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap'
                    onClick={() => window.location.href = 'https://github.com/chingyutseng0715/CS246_RAIINET/tree/readme/update'}>
                        <i class='bx  bx-link'  ></i> 106/100 OOP project
                    </button>

                </div>
            </div>

            {/*Card2 bottom Left */}
            <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105'>
                <img className='h-full w-full' src="/images/conferenceEvent.png" alt="firstWebsite_img" />
            </div>


        </div>



        {/*right column*/}

        <div className='md:col-span-2 space-y-4 md:space-y-6'>

            {/*top right row with gird 3 small cards*/}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                {/*first card*/}
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <img className='h-full w-full' src="/images/reactBadge.png" alt="firstWebsite_img" />
                </div>

                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <img className='h-full w-full' src="/images/SQL_badge.png" alt="sql_img" />
                </div>

                <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                    <img className='h-full w-full' src="/images/AzureAI.png" alt="AzureAI_img" />
                    {/*<h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-5 font-extrabold text-2xl text-black'>Azure</h1>*/}
                </div>


            </div>

            <div className='relative overflow-hiddend rounded-3xl aspect-[16/9] border border-white md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]'>
                <img src="/images/e-plant_shopping.png" alt="" />
                <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap'
                onClick={() => window.location.href = 'https://chingyutseng0715.github.io/e-plantShopping/'}>
                    <i class='bx  bx-link'  ></i> Visit Now
                </button>

            </div>


        </div>

    </div>





    </div>
  )
}

export default Arena
