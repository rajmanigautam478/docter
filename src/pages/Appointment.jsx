import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [docId]);

  return docInfo ? (
    <div className='max-w-7xl mx-auto px-6 py-12 lg:py-20'>
      <div className='flex flex-col lg:flex-row gap-10 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100'>
        
        {/* Doctor Image */}
        <div className='w-full lg:w-1/3 flex justify-center items-start'>
          <div className='bg-blue-600 w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-4 border-blue-50'>
            <img className='w-full h-auto object-cover' src={docInfo.image} alt={docInfo.name} />
          </div>
        </div>

        {/* Doctor Details */}
        <div className='w-full lg:w-2/3 flex flex-col justify-center'>
          
          <div className='flex items-center gap-4 mb-2'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2'>
              {docInfo.name} 
              <span className='inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm' title='Verified'>
                ✓
              </span>
            </h1>
          </div>
          
          <div className='flex flex-wrap items-center gap-3 text-sm md:text-base font-medium text-gray-600 mb-8'>
            <span className='px-3 py-1 bg-gray-100 rounded-full border border-gray-200'>{docInfo.degree}</span>
            <span className='text-gray-400'>•</span>
            <span className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100'>{docInfo.speciality}</span>
            <span className='text-gray-400'>•</span>
            <span className='px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100 font-bold'>{docInfo.experience} EXP</span>
          </div>

          {/* About Doctor */}
          <div className='mb-8'>
            <h3 className='flex items-center gap-2 text-xl font-bold text-gray-900 mb-3'>
              About Doctor
            </h3>
            <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl text-justify'>
              {docInfo.about}
            </p>
          </div>

          <div className='bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 max-w-md'>
            <p className='text-gray-500 font-medium text-lg'>
              Appointment Fee
            </p>
            <p className='text-3xl font-bold text-gray-900 mt-1'>
              ${docInfo.fees}
            </p>
          </div>
          
          <div>
            <button className='bg-blue-600 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-md hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center'>
              Book Appointment Now
            </button>
          </div>
          
        </div>
      </div>
    </div>
  ) : (
    <div className='min-h-[50vh] flex items-center justify-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
    </div>
  );
};

export default Appointment;