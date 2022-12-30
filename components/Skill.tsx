import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import reactLogo from "../public/react.png";
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Skill({directionLeft, skill}: Props) {
  return (
    <motion.div
        className='group relative flex cursor-pointer'
        initial={{
            x: directionLeft? -200 : 200,
            opacity:0
        }}
        transition={{ duration: 1 }}
        whileInView={{opacity:1, x:0}}
    >
        <img 
            alt=""
            src={urlFor(skill?.image).url()} 
            className="rounded-full border border-gray=500 object-cover w-24 h-24 xl:w-32 xl:h-32 
                       filter group-hover:grayscale transition duration-300"
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
                      group-hover:bg-white h-24 w-24 md:2-28 md:h=-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>

        
    </motion.div>
  )
}

export default Skill