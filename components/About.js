import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import profilePic from "../public/profile_pic.png";

function About() {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

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
            <Image src={profilePic} alt="" className='relative rounded-full mx-10 -mt-5 max-md:h-40 max-md:w-40 border-[2px] max-md:top-20 border-white bg-ivory-white ' />
        </motion.div>

        <motion.div 
            initial={{
                x:200,
                opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{ x:0, opacity: 1 }}
            className='space-y-10 px-10 py-auto md:px-10 max-md:max-h-screen'
        >
            <h4 className='text-4xl font-semibold'>Here's a <span className='underline decoration-red-300'>little</span> background</h4>
            <p className='text-xl'>I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), 
            and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. 
            I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were
            tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering 
            dreamily back into a See's Candy any time soon.</p>
        </motion.div>
    </div>
  )
}

export default About