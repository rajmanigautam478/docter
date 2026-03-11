import React from 'react'
import appointmentimg from '../assets/appointment_img.png'

const Newslatter = () => {
  return (
   <section className='w-full py-16 px-6 sm:px-10'>
     <div className='max-w-7xl mx-auto bg-blue-600 rounded-3xl flex flex-col md:flex-row justify-between items-center shadow-lg overflow-hidden'>

       <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 text-center md:text-left">
         <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8'>
           Book Appointment <br />
           With 100+ Trusted Doctors
         </h1>
         <button className='py-3.5 px-10 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300'>
           Create Account
         </button>
       </div>

       <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end relative h-full pt-10 md:pt-0">
         <img src={appointmentimg} alt="Appointment" className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl translate-y-4" />
       </div>

     </div>
   </section>
  )
}

export default Newslatter
