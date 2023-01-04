import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings';
import { urlFor } from '../sanity';

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
            <img src={urlFor(experience?.companyImage).url()} alt="" className='relative rounded-full max-h-52 mx-10 w-36 h-36 border-[2px] max-xl:top-10 max-lg:top-10 max-sm:top-10 max-md:top-10 border-white bg-ivory-white ' />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-bold py-2'>{experience?.jobTitle}</h4>
            <div className='flex space-x-2 my-2'>
                {
                    experience.technologies?.map((technology, i) => {
                        return (
                            <div key={i}>
                                { technology.image && (
                                    <img alt="" src={urlFor(technology?.image).url()} className="rounded-full h-10 w-10"></img>
                                )}
                            </div>
                        )
                    })
                }
            </div>
            
            <p className='uppercase italic py-5 text-gray-300'>{experience?.comapny} ({new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere? "Present" : new Date(experience.dateEnded).toDateString()})</p>
            <div className=' overflow-y-auto h-80 scrollbar pr-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ul className='list-disc space-y-4 ml-5 text-lg w-4/5'>
                    {
                        experience.points?.map((summaryPoint, i) => (
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