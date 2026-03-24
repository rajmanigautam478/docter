import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import api from '../services/api';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Generate some dummy available slots for UI (ideally fetched from backend)
  const timeSlots = ["09:00 AM", "10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  useEffect(() => {
    const doc = doctors.find((d) => d._id === docId);
    if (doc) {
      setDocInfo(doc);
    }
  }, [doctors, docId]);

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book appointment");
      navigate('/login');
      return;
    }
    if (!appointmentDate || !appointmentTime) {
      toast.error("Please select date and time");
      return;
    }

    try {
      const { data } = await api.post('/appointment/book', {
        doctorId: docInfo._id,
        date: appointmentDate,
        time: appointmentTime
      });

      if (data.success) {
        toast.success(data.message);
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return docInfo ? (
    <div className='max-w-7xl mx-auto px-6 py-12 lg:py-20'>
      <div className='flex flex-col lg:flex-row gap-10 bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100'>
        
        {/* Doctor Image */}
        <div className='w-full lg:w-1/3 flex justify-center items-start'>
          <div className='bg-blue-600 w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-4 border-blue-50'>
            <img 
              className='w-full h-auto object-cover' 
              src={docInfo.image.startsWith('http') ? docInfo.image : `http://localhost:4000${docInfo.image.startsWith('/') ? '' : '/'}${docInfo.image}`} 
              alt={docInfo.name} 
            />
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
            <span className='px-3 py-1 bg-gray-100 rounded-full border border-gray-200'>{docInfo.education}</span>
            <span className='text-gray-400'>•</span>
            <span className='px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100'>{docInfo.speciality}</span>
            <span className='text-gray-400'>•</span>
            <span className='px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-100 font-bold'>{docInfo.experience} Experience</span>
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

          {/* Booking Slots */}
          <div className='mb-8'>
            <h3 className='text-lg font-bold text-gray-800 mb-3'>Select Date</h3>
            <input 
              type="date" 
              className='px-4 py-2 border rounded-xl text-gray-700 focus:outline-blue-500 mb-4' 
              value={appointmentDate} 
              onChange={(e) => setAppointmentDate(e.target.value)} 
              min={new Date().toISOString().split('T')[0]}
            />
            
            <h3 className='text-lg font-bold text-gray-800 mb-3'>Select Time</h3>
            <div className='flex flex-wrap gap-3'>
              {timeSlots.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setAppointmentTime(item)}
                  className={`px-4 py-2 rounded-full border font-medium transition-all ${item === appointmentTime ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <button 
              onClick={bookAppointment}
              className='bg-blue-600 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-md hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center disabled:bg-gray-400 disabled:cursor-not-allowed'
              disabled={!docInfo.available}
            >
              {docInfo.available ? "Book Appointment Now" : "Doctor Not Available"}
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
