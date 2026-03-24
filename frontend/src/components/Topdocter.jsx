import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Topdocter = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AuthContext);

  return (
    <section className='w-full py-20 bg-gray-50/50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Top Doctors to Book</h1>
          <p className='text-gray-600 text-sm md:text-base'>Simply browse through our extensive list of trusted doctors.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-10'>
          {doctors.slice(0, 10).map((item, index) => (
            <div key={index} onClick={() => navigate(`/appointment/${item._id}`)} className='bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer'>
              <div className='bg-blue-50 flex justify-center items-center h-56 pt-4'>
                <img src={item.image.startsWith('http') ? item.image : `http://localhost:4000${item.image.startsWith('/') ? '' : '/'}${item.image}`} alt={item.name} className='w-full h-full object-contain'/>
              </div>
              <div className='p-5 flex flex-col flex-grow'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className={`${item.available ? 'text-green-500' : 'text-red-500'} text-xs font-semibold uppercase tracking-wider`}>
                    {item.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <h2 className='text-lg font-bold text-gray-900 truncate'>{item.name}</h2>
                <p className='text-gray-600 text-sm mb-1'>{item.speciality}</p>
                <p className='text-gray-400 text-xs mt-auto mb-4'>{item.experience} Experience</p>
                
                <button className='w-full py-2.5 mt-auto border border-blue-100 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300'>
                  Book Appointment
                </button> 
              </div>
            </div>
          ))}
        </div>
        
        <div className='flex justify-center'>
          <button onClick={() => navigate('/doctors')} className='bg-white border border-gray-300 text-gray-700 px-10 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors'>
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  )
}

export default Topdocter
