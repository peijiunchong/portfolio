import React from 'react'
import {motion} from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {

    return (
        <motion.div 
            className='flex relative flex-col text-center md:text-left
                    max-w-[2000px] xl:px-10 max-h-screen justify-center xl:space-y-0 mx-auto items-center'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] dark:text-[#DBA39A] text-2xl'>Projects</h3>

            <div className='relative w-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#DBA39A]/50'>
                {
                    projects?.map((project, i) => (
                        <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-10
                            items-center justify-center p-20 md:p-32 ' key={i}>
                            <motion.div 
                                initial={{y:-100, opacity:0}}
                                transition={{duration:1.2}}
                                whileInView={{opacity:1, y:0}}
                                viewport={{once:true}}
                            >
                                {
                                    project.image && (
                                        <img src={urlFor(project?.image).url()} alt="" className='w-7/8 h-80 mt-5'/>
                                    )
                                }
                            </motion.div>

                            <div className='space-y-10 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl md:text-2xl font-semibold text-center text-[#665A48] dark:text-[#AAC4FF]/80'>
                                    <a href={project.linkToBuild} 
                                       target="_blank"
                                       className='underline decoration-[#9F8772]/50 dark:decoration-[#9F73AB] cursor-pointer '>
                                        Case Study {i+1} of {projects.length}: 
                                    </a>
                                        {project.title}
                                </h4>

                                <p className='md:text-lg text-lg font-semibold text-center max-md:text-left text-[#DBA39A] dark:text-[#B9E0FF]'>
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            <div className='w-full absolute bg-[#EDE4E0] dark:bg-[#BCCEF8]/10 left-0 h-[500px] skew-y-12'/>
            <div className='w-full absolute top-[30%] bg-[#EDE4E0] dark:bg-[#BCCEF8]/10 left-0 h-[500px] -skew-y-12'/>
        </motion.div>
    )
}

export default Projects