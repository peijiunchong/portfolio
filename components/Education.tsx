import React from 'react'
import {motion} from 'framer-motion';
import { Education } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    educations: Education[]
  }

function Education({educations}:Props) {

  return (
    <motion.div 
        className='flex relative flex-col text-center max-md:text-left
                max-w-[2000px] xl:px-10 max-h-screen justify-center xl:space-y-0 mx-auto items-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] dark:text-[#9F73AB] text-2xl'>Educations</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/50'>
                <ul className="flex justify-center ">
                    {
                        educations?.map((education, i) => (
                            <li className="w-screen flex-shrink-0 snap-center flex flex-col space-y-10
                            items-center justify-evenly p-20 max-md:p-44" key={i}>
                                <div className="mt-10 sm:pr-8 flex flex-col items-center text-center">
                                    { education.schoolImage && (
                                        <img src={urlFor(education?.schoolImage).url()} alt="" className="h-64 w-80 p-5 mt-10 max-md:h-96 max-md:w-56 bg-[#F5EBE0] "/>
                                    )}
                                    <h4 className='text-5xl font-semibold text-center py-5 text-[#665A48] dark:text-[#AAC4FF]/80'>
                                        {education.courseTitle} 
                                    </h4>
                                    <h5 className='text-2xl italic text-center pb-6 text-[#9F8772] dark:text-[#B9E0FF]'>
                                        {education.school.toUpperCase()} ( {new Date(education.dateStarted).getFullYear().toString()} - {education.isCurrentlyStudyingHere ? "Present" : new Date(education.dateEnded).getFullYear().toString()} )
                                    </h5>
                                    <div className=' overflow-y-auto h-80 scrollbar pr-5 scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/80'>
                                        <ul className='list-disc space-y-4 ml-5 text-lg'>
                                            {
                                                education.points?.map((point, i) => (
                                                    <li key={i} className="max-md:text-base text-xl text-start list-disc py-3 font-semibold text-[#DBA39A] dark:text-[#9F73AB]">{point}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
    </motion.div>
  )
}

export default Education