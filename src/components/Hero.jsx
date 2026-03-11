import React from 'react'
import headerimg  from '../assets/header_img.png'
import groupprofile from '../assets/group_profiles.png'
import arrowicon from '../assets/arrow_icon.svg'

const Hero = () => {
  return (
    <div className='px-4 mt-6 max-w-7xl mx-auto'>
      <section className='w-full rounded-3xl bg-blue-600 overflow-hidden shadow-xl'>
        <div className='flex flex-col md:flex-row justify-between items-center px-10 md:px-16 py-12 md:py-0 gap-10'>

            <div className="flex-1 space-y-8 md:py-20 lg:py-28">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                  Book Appointment <br className='hidden md:block' /> With Trusted Doctors
                </h1>
               <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 text-white/90'>
                 <img src={groupprofile} alt="Profiles" className='h-12 w-auto' /> 
                 <p className='text-sm md:text-base text-center sm:text-left'>
                   Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> 
                   schedule your appointment hassle-free.
                 </p>
               </div>
               <div className='flex justify-center sm:justify-start'>
                 <button className='flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-gray-800 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300'>
                   Book Appointment <img src={arrowicon} alt="Arrow" className='w-4' />
                 </button>
               </div>
            </div>
            
            <div className="flex-1 flex justify-end items-end relative h-full">
                <img src={headerimg} alt="Header" className='w-full max-w-md lg:max-w-lg object-contain mt-8 md:mt-0 drop-shadow-2xl' /> 
            </div>
            
        </div>
      </section>  
    </div>
  )
}

export default Hero
