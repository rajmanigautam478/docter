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
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='flex flex-col sm:flex-row gap-8'>
        {/* Doctor Image */}
        <div>
          <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>

        {/* Doctor Details */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* About Doctor */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About</p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>
              {docInfo.about}
            </p>
          </div>

          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-900'>${docInfo.fees}</span>
          </p>
          
          <button className='bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6 hover:scale-105 transition-all'>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Appointment;
