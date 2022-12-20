import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import profilePic from "../public/profile_pic.png";
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["developer", "hello", "bye"],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-10 justify-center items-center text-center overflow-hidden pt-[200px]'>
        <BackgroundCircles />
        <Image 
          className='relative rounded-full h-32 w-32 mx-auto object-cover' 
          src={profilePic}/>
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Quality Engineer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span>{text}</span>
              <Cursor cursorColor="#F7AB0A"></Cursor>
          </h1>

          <div className='pt-20'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#projects"><button className='heroButton'>Projects</button></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Hero