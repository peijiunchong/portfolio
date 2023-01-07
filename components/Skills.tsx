import React from 'react'
import {motion} from 'framer-motion';
import Skill from "./Skill"
import { Skill as SkillType }  from '../typings';

type Props = {
  skills: SkillType[]
}

function Skills({skills}:Props) {
  return (
    <motion.div 
        className='flex relative flex-col text-center md:text-left
                   max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] dark:text-[#DBA39A] text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-[#665A48] text-sm dark:text-[#AAC4FF]/80'>
            Hover over a skill for currency profieciency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
          {
            skills?.slice(0, skills.length/2).map((skill) => (
              <Skill key={skill._id} skill={skill}/>
            ))
          }

          {
            skills?.slice(skills.length/2, skills.length).map((skill) => (
              <Skill key={skill._id} skill={skill} directionLeft/>
            ))
          }
        </div>
    </motion.div>
  )
}

export default Skills