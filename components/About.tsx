import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}
  

function About({pageInfo}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] text-2xl'>About</h3>

        <motion.div 
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{duration:1.2}}
            whileInView={{ x:0, opacity: 1 }}
            // viewport={{once:true}}
            className="flex-shrink-0 object-cover px-auto mx-auto justify-center "
        >
            { pageInfo?.profilePic && (
                <img src={urlFor(pageInfo?.profilePic).url()} alt="" className='w-80 h-80 relative rounded-full mx-10 -mt-5 max-md:h-40 max-md:w-40 border-[2px] max-md:top-20 border-[#F5EBE0] bg-[#F5EBE0] ' />
            )}
        </motion.div>

        <motion.div 
            initial={{
                x:200,
                opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{ x:0, opacity: 1 }}
            className='space-y-10 px-10 py-auto md:px-10 md:max-h-96 md:max-w-96
            overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 scrollbar-thin'
        >
            <h4 className='text-4xl text-[#665A48] font-semibold'>Here's a <span className='underline decoration-red-300'>little</span> background</h4>
            <p className='text-xl text-[#9F8772] md:text-lg'>{pageInfo?.backgroundInformation}</p>
        </motion.div>
    </div>
  )
}

export default About