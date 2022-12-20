import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'


function WorkExperience() {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:1.5}}
        className='h-screen flex flex-col relative overflow-hidden text-left md:text-left md:flex-row max-w-full px-10  justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>

        <div>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>

    </motion.div>
  )
}

export default WorkExperience