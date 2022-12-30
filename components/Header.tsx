import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';

type Props = {
    socials: Social[];
}

function Header({socials}:Props) {
  return (
    <header className='sticky top-0 mx-auto flex items-start justify-between max-w-7xl p-5 z-20 xl:items-center'>
        <motion.div 
            initial={{x:-500, opacity:0, scale:0.5}} 
            animate={{x:0, opacity:1, scale: 1}} 
            transition={{duration:1}}
            className='flex flex-row items-center'
        >  
            {
                socials.map((social) => (
                    <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent'/>
                ))
            }
        </motion.div>

        <motion.div 
            initial={{x:500, opacity:0, scale:0.5}} 
            animate={{x:0, opacity:1, scale: 1}} 
            transition={{duration:1}}
            className='flex flex-row items-center text-gray-300 cursor-pointer'
        >
            <Link href="#contact">
                <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            </Link>
            <Link href="#contact">
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </Link>
        </motion.div>
    </header>
  )
}

export default Header