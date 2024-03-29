import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm } from "react-hook-form"

function ContactMe() {
  const { register, handleSubmit } = useForm();
  const onSubmit = FormData => {
    console.log(FormData);
    window.location.href = `mailto:peijiunchong@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}, ${FormData.message}
    ${FormData.email}`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-rowmax-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#DBA39A] dark:text-[#DBA39A] text-2xl'>Contact me</h3>

        <div className='flex flex-col space-y-10'>

            <div className='space-y-10 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#DBA39A] dark:text-[#9F73AB] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl text-[#9F8772] dark:text-[#B9E0FF]'>012-3091970</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#DBA39A] dark:text-[#9F73AB] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl text-[#9F8772] dark:text-[#B9E0FF]'>peijiunchong@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#DBA39A] dark:text-[#9F73AB] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl text-[#9F8772] dark:text-[#B9E0FF]'>MALAYSIA</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' type="text" className='contactInput'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>

                <button 
                    type='submit' 
                    className='bg-[#DBA39A] dark:bg-[#D2DAFF] py-4 px-auto rounded-md text-[#665A48] dark:text-[#3F3B6C] font-bold text-lg'
                >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe 