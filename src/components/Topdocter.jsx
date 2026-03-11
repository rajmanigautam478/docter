import React from 'react'
import { doctors } from '../assets/assets'

const Topdocter = () => {
  return (
    <section className=' w-full py-12 bg-gray-50'>
      <div className=' max-w-7xl mx-auto px-4'>
        <div>
        <h1 className='text-center text-2xl mb-5 font-bold'>Top Doctor to Book</h1>
        <p className='text-center text-xl mb-5 font-semibold'>Simply browse through our extensive list of trusted doctors</p>
      </div>

    
       <div className='grid grid-cols-5 mb-4 gap-5' >
        {doctors.map((item, index) => (
          <div key={index} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center'>
            <img src={item.image} alt={item.name} className='w-70 bg-gray-200 object-contain'/>
            <h2 className='text-left  font-bold '>{item.name}</h2>
            <p className='text-left'> {item.speciality}</p>
            <p className='text-gray-500 text-sm mt-1'>{item.availableDays}</p>

            
            <button>Book Appointment</button> 

          </div>
        ))}
      </div>
     </div>
    
    </section>
  )
}

export default Topdocter

