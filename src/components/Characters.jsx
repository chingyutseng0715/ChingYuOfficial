import React, {useState, useRef, useEffect} from 'react';
import {Star} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import Spline from '@splinetool/react-spline';

//The customCursor componenet to accept is Hovering#D as a prop
function CustomCursor({ isHovering3D }){
  const[position, setPosition] = useState({x:0, y:0})
  const cursorRef = useRef(null)

  useEffect(() =>{
    const handleMouseMove = (e) => {
      setPosition({x:e.clientX, y:e.clientY})
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  })

  return (
    <motion.div
    ref={cursorRef}
    className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
    animate={{
      x:position.x - (isHovering3D ? 12 : 15),
      y: position.y - (isHovering3D ? 12 : 15),
      scale: isHovering3D ? 1.5 : 1,
    }}
    transition={{
      type:"spring",
      stiffness: 500,
      damping:28,
      mass: 0.5,
    }}
    >
      <motion.div className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
      animate={{
        width: isHovering3D ? "24px" : "40px",
        height: isHovering3D ? "24px" : "40px",
      }}
      transition={{ duration: 0.2 }} 
      />

      {isHovering3D && (
        <motion.div
        className='absolute inset-0 rounded-full bf-transition
        border border-violet-500'
        initial ={{ scale:0.5, opacity: 0}}
        animate={{scale: 2, opacity:0.5}}
        transition = {{ duration: 3, repeat: Number.POSITIVE_INFINITY}}/>
      )}
      

    </motion.div>
  )


}

const Characters = () => {

  //track　Avatar selected
  const [selectedAvatar, setSelectedAvatar] = useState("Python");
  const [cursorInModelArea, setCursorInModelArea] = useState(false);

  const Avatar = {
    Python:{
      name:"Python",
      proficiency:99,
      experience:85,
      confidence:80,
      frequency:90,
      scene: "https://prod.spline.design/d0cX4ly0Kg8EWGQV/scene.splinecode",
    },
    React: {
      name:"React",
      proficiency:80,
      experience:80,
      confidence:75,
      frequency:90,
      scene: "https://prod.spline.design/nqUN8du9qnQxSvQG/scene.splinecode",    
    },
    CLanguage: {
      name:"C Language",
      proficiency:90,
      experience:75,
      confidence:70,
      frequency:90,
      scene: "https://prod.spline.design/SaV1NqUuwUASowGs/scene.splinecode",    
    },
    SQL: {
      name:"SQL",
      proficiency:80,
      experience:70,
      confidence:70,
      frequency:80,
      scene: "https://prod.spline.design/fTWaEqdUFfniPiaw/scene.splinecode",    
    },

  }

  const currentAvatar = Avatar[selectedAvatar];

  const handle3DAreaMouseEnter = () => {
    setCursorInModelArea(true)
  }

  const handle3DAreaMouseLeave = () => {
    setCursorInModelArea(false)
  }

  return (
    <div id='skill' className='relative w-full h-[120vh] overflow-visible scroll-mt-28 mb-[10%]'>

      
      <CustomCursor isHovering3D={cursorInModelArea}/>
      <div className='relative z-10 pt-6 text-center'>
        <h1 className='text-5xl font-bold tracking-widest md:-mb-14 mb-8 text-[#68e1f1]' style={{textShadow: "0 0 10px rgba(255, 255,255, 0.7)"}}>
            Critical Skills
        </h1>
      </div>

      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>

        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>

            {/*Background info card*/}
            <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250, 0.2)]'>
                <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>

              <div className='space-y-3 mb-16'>

                {/*Power section*/}
                <div className='flex items-center'>

                  <span className='w-24 text-gray-400'>Proficiency</span>
                  <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-cyan-500 to-white'
                    style={{width: `${currentAvatar.proficiency}%`}}>

                    </div>
                    
                  </div>
                  <span className='ml-2'>{currentAvatar.proficiency}</span>

                </div>

                {/*Stable section*/}
                <div className='flex items-center'>

                  <span className='w-24 text-gray-400'>Experience</span>
                  <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-blue-500 to-white'
                    style={{width: `${currentAvatar.experience}%`}}>

                    </div>
                  </div>
                  <span className='ml-2'>{currentAvatar.experience}</span>

                </div>

                {/*Confidence section*/}
                <div className='flex items-center'>

                  <span className='w-24 text-gray-400'>Confidence</span>
                  <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-cyan-500 to-white'
                    style={{width: `${currentAvatar.confidence}%`}}>

                    </div>
                  </div>
                  <span className='ml-2'>{currentAvatar.confidence}</span>

                </div>

                {/*Used frequency section*/}
                <div className='flex items-center'>

                  <span className='w-24 text-gray-400'>Frequency</span>
                  <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div className='h-full bg-gradient-to-r from-blue-500 to-white'
                    style={{width: `${currentAvatar.frequency}%`}}>

                    </div>
                  </div>
                  <span className='ml-2'>{currentAvatar.frequency}</span>

                </div>


              </div>

              <div className='flex gap-3'>
                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                  Proficient
                </button>

                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                  Redemption
                </button>
              </div>
            </div>

            {/*Avatar Selection card*/}
            <div className='grid grid-cols-2 gap-4'>

              {/*Python CARD*/}
              <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-10 gap-2 items-center cursor-pointer transition-all duration-300'
              onClick={() => setSelectedAvatar("Python")}>
                <div className='text-lg mb-2'>Python</div>
                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                  <img src="/images/Python_logo.png" alt="Python-IMG" />
                </div>

                {/*Star rating*/}
                <div className='flex'>
                  {[...Array(5)].map((_,i) => (<Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500'/>))}
                </div>

                {/*Highlight for selected avatar*/}
                {selectedAvatar === "Python" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                )}

              </div>


              {/*React CARD*/}
              <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-10 gap-2 items-center cursor-pointer transition-all duration-300'
              onClick={() => setSelectedAvatar('React')}>
                <div className='text-lg mb-2'>React</div>
                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                  <img src="/images/React_logo.png" alt="React-IMG" />
                </div>

                {/*Star rating*/}
                <div className='flex'>
                  {[...Array(4)].map((_,i) => (<Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500'/>))}
                </div>

                {/*Highlight for selected avatar*/}
                {selectedAvatar === "React" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                )}

              </div>

              {/*C CARD*/}
              <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-10 gap-2 items-center cursor-pointer transition-all duration-300'
              onClick={() => setSelectedAvatar('CLanguage')}>
                <div className='text-lg mb-2'>C</div>
                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                  <img src="/images/CLanguage.png" alt="C-IMG" />
                </div>

                {/*Star rating*/}
                <div className='flex'>
                  {[...Array(4)].map((_,i) => (<Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500'/>))}
                </div>

                {/*Highlight for selected avatar*/}
                {selectedAvatar === "CLanguage" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                )}

              </div>

              {/*SQL CARD*/}
              <div className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-10 gap-2 items-center cursor-pointer transition-all duration-300'
              onClick={() => setSelectedAvatar('SQL')}>
                <div className='text-lg mb-2'>SQL</div>
                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                  <img src="/images/SQL_logo.png" alt="C-IMG" />
                </div>

                {/*Star rating*/}
                <div className='flex'>
                  {[...Array(4)].map((_,i) => (<Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500'/>))}
                </div>

                {/*Highlight for selected avatar*/}
                {selectedAvatar === "SQL" && (
                  <div className='absolute inset-0 border-2 rounded-lg pointer-events-none'></div>
                )}

              </div>

              


            </div>
        </div>


        {/*right-side 3d-motion*/}
        <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden'
        onMouseEnter={handle3DAreaMouseEnter}
        onMouseLeave={handle3DAreaMouseLeave}>
            <AnimatePresence mode="wait">
            {Avatar[selectedAvatar]?.scene && (
              <motion.div
              key={selectedAvatar}
              className='absolute inset-0'
              initial={{x:"100%"}}
              animate={{x:0}}
              exit={{x:"-100%"}}
              transition={{duration: 0.5}}>
                <Spline scene={Avatar[selectedAvatar].scene} />
              </motion.div>)}
            </AnimatePresence>

        </div>


      </div>
    </div>
  )
}

export default Characters
