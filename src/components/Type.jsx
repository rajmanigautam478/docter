import React from 'react'
import { specialityData } from '../assets/assets'

const Type = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='text-center max-w-2xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Find by Speciality</h1>
        <p className='text-gray-600 mt-4 text-sm md:text-base'>
          Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12'>
        {specialityData.map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center bg-white p-6 rounded-2xl cursor-pointer shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
            <img src={item.image} alt={item.speciality} className='h-20 w-20 md:h-24 md:w-24 object-contain mb-4' />
            <p className='text-sm md:text-base font-semibold text-gray-800 text-center'>{item.speciality}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Type
