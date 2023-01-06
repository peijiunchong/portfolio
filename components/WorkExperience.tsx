import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:1.5}}
        className='h-screen flex flex-col relative overflow-hidden text-left md:text-left md:flex-row max-w-full px-10  justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] text-2xl'>Experiences</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/50'>
          {
            experiences?.map((experience) => (
              <ExperienceCard 
                key={experience._id}
                experience={experience}
              />
            ))
          }
        </div>

    </motion.div>
  )
}

export default WorkExperience