import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../context/AdminContext';

const AllDocter = () => {
  const { aToken, doctors, fetchAllDoctors } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      fetchAllDoctors();
    }
  }, [aToken]);

  return (
    <div className='w-full'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>All Doctors List</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {doctors.map((item, index) => (
          <div key={index} className='bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group'>
            
            <div className='bg-indigo-50/50 p-4 h-48 flex items-center justify-center relative'>
              <img 
                src={item.image.startsWith('http') ? item.image : `http://localhost:4000${item.image.startsWith('/') ? '' : '/'}${item.image}`} 
                alt={item.name} 
                className='h-full object-contain group-hover:scale-105 transition-transform duration-500' 
              />
              <div className='absolute top-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm border border-gray-100'>
                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${item.available ? 'text-green-600' : 'text-red-600'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </span>
              </div>
            </div>

            <div className='p-5 flex flex-col flex-grow'>
              <h3 className='text-gray-900 font-bold text-lg truncate'>{item.name}</h3>
              <p className='text-gray-500 text-sm font-medium mb-3'>{item.speciality}</p>
              
              <div className='mt-auto flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100'>
                <div>
                  <p className='text-xs text-gray-400 font-semibold uppercase tracking-wider'>Experience</p>
                  <p className='text-gray-800 font-bold'>{item.experience}</p>
                </div>
                <div className='text-right'>
                  <p className='text-xs text-gray-400 font-semibold uppercase tracking-wider'>Fees</p>
                  <p className='text-indigo-600 font-bold'>${item.fees}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
        {doctors.length === 0 && (
          <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg font-medium">No doctors found in the database.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllDocter;
