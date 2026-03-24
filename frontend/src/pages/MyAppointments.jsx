import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import { toast } from 'react-toastify';
import { useSearchParams, useNavigate } from 'react-router-dom';

const MyAppointments = () => {
  const { token, doctors } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const { data } = await api.get('/appointment/my-appointments');
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching appointments');
    } finally {
      setLoading(false);
    }
  };

  const verifyStripePayment = async () => {
    const success = searchParams.get('success');
    const appointmentId = searchParams.get('appointmentId');
    
    if (success && appointmentId) {
      try {
        const { data } = await api.post('/appointment/verify-stripe', { success, appointmentId });
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error('Payment verification failed');
      }
      // Remove query params to prevent re-verifying on refresh
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (token) {
      verifyStripePayment().then(() => fetchAppointments());
    }
  }, [token]);

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await api.post('/appointment/cancel', { appointmentId });
      if (data.success) {
        toast.success(data.message);
        fetchAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to cancel appointment');
    }
  };

  const handlePayment = async (appointmentId) => {
    try {
      const { data } = await api.post('/appointment/payment-stripe', { appointmentId });
      if (data.success) {
        window.location.replace(data.session_url);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error initiating payment');
    }
  };

  if (loading) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-6 py-12 lg:py-20'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 border-b pb-4'>My Appointments</h2>
      
      {appointments.length === 0 ? (
        <div className='text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300'>
          <p className='text-gray-500 text-xl font-medium'>You have no appointments yet.</p>
        </div>
      ) : (
        <div className='flex flex-col gap-6'>
          {appointments.map((item, index) => {
            const docInfo = doctors.find(d => d._id === item.doctorId);
            return (
              <div key={index} className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center'>
                
                <div className='w-full md:w-48 flex justify-center bg-blue-50 rounded-xl p-2'>
                  {docInfo?.image && (
                    <img 
                      src={docInfo.image.startsWith('http') ? docInfo.image : `http://localhost:4000${docInfo.image.startsWith('/') ? '' : '/'}${docInfo.image}`} 
                      alt={docInfo.name} 
                      className='w-32 h-32 object-cover rounded-full' 
                    />
                  )}
                </div>

                <div className='flex-1 text-center md:text-left'>
                  <h3 className='text-xl font-bold text-gray-900'>{docInfo?.name || 'Doctor Not Found'}</h3>
                  <p className='text-gray-600 font-medium'>{docInfo?.speciality}</p>
                  
                  <div className='mt-4 bg-gray-50 p-3 rounded-lg inline-block text-left'>
                    <p className='text-sm text-gray-700'><span className='font-semibold'>Date & Time:</span> {item.date} | {item.time}</p>
                    <p className='text-sm text-gray-700 mt-1'><span className='font-semibold'>Status:</span> 
                      <span className={`ml-2 font-bold px-2 py-0.5 rounded-full text-xs ${item.status === 'Cancelled' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {item.status}
                      </span>
                    </p>
                  </div>
                </div>

                <div className='w-full md:w-auto flex flex-col gap-3'>
                  {item.status !== 'Cancelled' && !item.payment && (
                    <button onClick={() => handlePayment(item._id)} className='w-full sm:w-48 py-2.5 bg-blue-50 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-blue-100'>
                      Pay Online
                    </button>
                  )}
                  {item.status !== 'Cancelled' && item.payment && (
                    <button className='w-full sm:w-48 py-2.5 bg-green-50 text-green-600 rounded-full font-medium border border-green-200 cursor-default'>
                      Paid
                    </button>
                  )}
                  {item.status !== 'Cancelled' && (
                    <button onClick={() => cancelAppointment(item._id)} className='w-full sm:w-48 py-2.5 bg-white text-red-500 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors duration-300 border border-red-500'>
                      Cancel Appointment
                    </button>
                  )}
                </div>
                
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
