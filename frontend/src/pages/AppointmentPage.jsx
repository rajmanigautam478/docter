import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import SlotPicker from '../components/SlotPicker';
import RelatedDoctors from '../components/RelatedDoctors';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import api from '../services/api';

const AppointmentPage = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, token } = useContext(AuthContext);
  const [docInfo, setDocInfo] = useState(null);
  
  // Date and Time slots state
  const [days, setDays] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    "08:00 am", "08:30 am", "09:00 am", "09:30 am", 
    "10:00 am", "10:30 am", "11:00 am", "11:30 am"
  ];

  useEffect(() => {
    if (doctors.length > 0) {
      const doc = doctors.find(d => d._id === docId);
      setDocInfo(doc);
    }
  }, [doctors, docId]);

  useEffect(() => {
    // Generate next 7 days
    const next7Days = [];
    const today = new Date();
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      next7Days.push({
        dayName: daysOfWeek[date.getDay()],
        dateNumber: date.getDate(),
        fullDate: date.toISOString().split('T')[0] // YYYY-MM-DD
      });
    }
    setDays(next7Days);
  }, []);

  const handleBookAppointment = async () => {
    if (!token) {
      toast.warn("Please login to book an appointment");
      navigate('/login');
      return;
    }
    if (!selectedTime) {
      toast.error("Please select a time slot");
      return;
    }

    try {
      const selectedDate = days[selectedDayIndex].fullDate;
      const { data } = await api.post('/appointment/book', {
        doctorId: docInfo._id,
        date: selectedDate,
        time: selectedTime
      });

      if (data.success) {
        toast.success("Appointment booked successfully!");
        navigate('/my-appointments');
      } else {
        toast.error(data.message || "Failed to book appointment");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  if (!docInfo || days.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Prepend correct URL to image if needed
  const doctorWithImageUrl = {
    ...docInfo,
          image: docInfo.image.startsWith('http')
            ? docInfo.image
            : `http://localhost:4000${docInfo.image.startsWith('/') ? '' : '/'}${docInfo.image}`
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <DoctorProfile doctor={doctorWithImageUrl} />
      
      <SlotPicker 
        days={days}
        timeSlots={timeSlots}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      
      <div className="flex justify-center mt-10">
        <button 
          onClick={handleBookAppointment}
          disabled={!docInfo.available}
          className="bg-blue-600 text-white font-medium text-lg px-12 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {docInfo.available ? 'Book an appointment' : 'Doctor Not Available'}
        </button>
      </div>

      <RelatedDoctors doctors={doctors} currentDocId={docInfo._id} />
    </div>
  );
};

export default AppointmentPage;
