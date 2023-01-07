import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from 'next-themes';

type Props = {
    socials: Social[];
    resumeURL: String;
}

function Header({socials, resumeURL}:Props) {

    const {theme, setTheme} = useTheme();

  return (
    <header className='sticky top-0 mx-auto flex items-start justify-between max-w-7xl p-5 z-40 xl:items-center text-xl'>
        <motion.div 
            initial={{x:-500, opacity:0, scale:0.5}} 
            animate={{x:0, opacity:1, scale: 1}} 
            transition={{duration:1}}
            className='flex flex-row items-center'
        >  
            {
                socials?.map((social) => (
                    <SocialIcon key={social._id} url={social.url} fgColor='#C7BCA1' bgColor='transparent'/>
                ))
            }
            {
                <Link href={`${resumeURL}?dl=ChongPeiJiun_Resume.pdf`}><button className='heroButton'>Resume</button></Link>
            }
        </motion.div>

        <motion.div 
            initial={{x:500, opacity:0, scale:0.5}} 
            animate={{x:0, opacity:1, scale: 1}} 
            transition={{duration:1}}
            className='flex flex-row items-center text-[#665A48] cursor-pointer'
        >
            <BsFillMoonStarsFill onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='iconButton'/> 
            {/* {
                theme === 'dark' 
                    ? <BsFillSunFill onClick={() => setTheme('light')} className='iconButton'/> 
                    : <BsFillMoonStarsFill onClick={() => setTheme('dark')} className='iconButton'/>
            } */}

            <SocialIcon className='cursor-pointer' network='email' fgColor='#C7BCA1' bgColor='transparent'/>
            <Link href="#contact">
                <p className='uppercase hidden md:inline-flex text-sm text-[#C7BCA1]'>Get In Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header