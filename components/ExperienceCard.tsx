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
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F5EBE0] dark:bg-[#3F3B6C] pt-5 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
        <motion.div 
            initial={{y:-100, opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            
        >
            <img src={urlFor(experience?.companyImage).url()} alt="" className='relative rounded-full max-h-52 mx-10 w-36 h-36 border-[2px] max-xl:top-10 max-lg:top-10 max-sm:top-10 max-md:top-10 border-white bg-ivory-white ' />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-xl font-bold py-2 text-[#665A48] dark:text-[#AAC4FF]/80 tracking-[5px]'>{experience?.jobTitle}</h4>
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
            
            <p className='uppercase italic py-5 text-[#9F8772] dark:text-[#B9E0FF]'>{experience?.comapnyName} ({new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere? "Present" : new Date(experience.dateEnded).toDateString()})</p>
            <div className=' overflow-y-auto h-80 scrollbar pr-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/80'>
                <ul className='list-disc space-y-4 ml-5 text-lg w-4/5'>
                    {
                        experience.points?.map((summaryPoint, i) => (
                            <li key={i} className="text-[#DBA39A] dark:text-[#9F73AB] font-semibold">{summaryPoint}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard