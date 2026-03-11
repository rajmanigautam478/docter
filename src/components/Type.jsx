import React from 'react'
import { specialityData } from '../assets/assets'

const Type = () => {
  return (
    <>
      <section className='max-w-7xl mx-auto px-4  mt-30'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Find by Speciality</h1>
          <p className='text-gray-600 mt-2'>
            Simply browse through our extensive list of trusted doctors and schedule your appointment.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10'>
          {specialityData.map((item, index) => (
            <div key={index} className='flex flex-col items-center rounded-lg hover:shadow-lg transition-shadow duration-300'>
              <img src={item.image} alt={item.speciality} className='h-24 w-24' />
              <p className='mt-4 font-semibold'>{item.speciality}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Type