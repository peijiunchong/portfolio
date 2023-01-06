import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { PageInfo, Social } from '../typings';

type Props = {
    socials: Social[];
    resumeURL: String;
}

function Header({socials, resumeURL}:Props) {

  return (
    <header className='sticky top-0 mx-auto flex items-start justify-between max-w-7xl p-5 z-20 xl:items-center'>
        <motion.div 
            initial={{x:-500, opacity:0, scale:0.5}} 
            animate={{x:0, opacity:1, scale: 1}} 
            transition={{duration:1}}
            className='flex flex-row items-center'
        >  
            {
                socials?.map((social) => (
                    <SocialIcon key={social._id} url={social.url} fgColor='#665A48' bgColor='transparent'/>
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
            className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
            <SocialIcon className='cursor-pointer' network='email' fgColor='#665A48' bgColor='transparent'/>
            <Link href="#contact">
                <p className='uppercase hidden md:inline-flex text-sm text-[#665A48]'>Get In Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header