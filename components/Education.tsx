import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
import react from "../public/react.png"


function Education() {
  const educations = [
    {"course": "Bachelor of Computer Science", "school": "monash", "yearStart": 2019, "yearEnd": 2022, "points": ["CGPA: 3.7", "WAM (Weighted Average Marks): 82.70", "Participated in Monash Hackathon 2019"]}, 
    {"course": "Cambridge A-Levels", "school": "monash", "yearStart": 2019, "yearEnd": 2022, "points": ["CGPA: 3.7", "WAM (Weighted Average Marks): 82.70", "Participated in Monash Hackathon 2019"]}
]

  return (
    <motion.div 
            className='flex relative flex-col text-center md:text-left
                    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Educations</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ul className="flex justify-center space-y-4 ml-5 ">
                    {
                        educations.map((education, i) => (
                            <li className="w-screen flex-shrink-0 snap-center flex flex-col space-y-10
                            items-center justify-evenly p-20 md:p-44" key={i}>
                                <div className="flex items-center">
                                    
                                    {/* <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                        <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div> */}
                                    <div className="sm:flex w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div className="mt-10 sm:pr-8">
                                    <h4 className='text-5xl font-semibold text-start py-5'>
                                        <span className='underline decoration-yellow-600/50'>
                                            {education.course} 
                                        </span>
                                    </h4>
                                    <h5 className='text-2xl italic text-start pb-6'>
                                        {education.school.toUpperCase()} ({education.yearStart} - {education.yearEnd})
                                    </h5>
                                    <ul>
                                        {
                                            education.points.map((point) => (
                                                <li className="max-md:text-base text-xl list-disc py-3 font-normal text-gray-500 dark:text-gray-400">{point}</li>
                                            ))
                                        }
                                    </ul>
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