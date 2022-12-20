import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import profilePic from "../public/profile_pic.png";

function ExperienceCard() {
  return (
    <article>
        <motion.div 
            initial={{y:-100, opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            className=""
            
        >
            <Image src={profilePic} alt="" className='relative rounded-full mx-10 -mt-5 w-20 h-20 border-[2px] max-md:top-20 border-white bg-ivory-white ' />
        </motion.div>
    </article>
  )
}

export default ExperienceCard