import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import profilePic from "../public/profile_pic.png";
import reactLogo from "../public/react.png"
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import { format } from 'date-fns';

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-10 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[rgb(36,36,36)] p-10 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
        <motion.div 
            initial={{y:-100, opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            
        >
            <img src={urlFor(experience?.companyImage).url()} alt="" className='relative rounded-full mx-10 w-20 h-20 border-[2px] max-xl:top-10 max-lg:top-10 max-sm:top-10 max-md:top-10 border-white bg-ivory-white ' />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>JOB TITLE</h4>
            <p className='font-bold text-2xl mt-1'>Company Name</p>
            <div className='flex space-x-2 my-2'>
                {
                    experience.technologies.map((technology) => (
                        <img alt="" src={urlFor(technology?.image).url()} className="rounded-full h-10 w-20"></img>
                    ))
                }
            </div>
            <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere? "Present" : new Date(experience.dateEnded).toDateString()}</p>
            <div className=' overflow-y-auto h-80 scrollbar pr-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ul className='list-disc space-y-4 ml-5 text-lg w-4/5'>
                    {
                        experience.points.map((summaryPoint, i) => (
                            <li key={i}>{summaryPoint}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard