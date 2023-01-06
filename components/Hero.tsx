import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, my name's ${pageInfo?.name}`,
          'Not a coffee person :D',
          'Likes being alone =)'
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-10 justify-center items-center text-center overflow-hidden pt-[200px]'>
        <BackgroundCircles />
        { pageInfo?.profilePic && (
          <img 
          className='relative rounded-full h-32 w-32 mx-auto object-cover' 
          src={urlFor(pageInfo?.profilePic).url()}
          alt=""/>
        )}
        <div className='z-20'>
          <h2 className='text-base uppercase text-[#665A48] pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-[#665A48]'>
              <span>{text}</span>
              <Cursor cursorColor="#F08080"></Cursor>
          </h1>

          <div className='pt-20'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#education"><button className='heroButton'>Education</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#projects"><button className='heroButton'>Projects</button></Link>
          </div>
        </div>
        
    </div>
  )
}

export default Hero