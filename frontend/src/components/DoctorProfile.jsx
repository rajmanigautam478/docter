import React from 'react';

const DoctorProfile = ({ doctor }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 mb-10">
      {/* image */}
      <div className="w-full md:w-72 flex-shrink-0 bg-blue-600 rounded-2xl overflow-hidden shadow-inner flex items-end justify-center">
        <img src={doctor.image} alt={doctor.name} className="w-full h-auto object-cover object-bottom" />
      </div>
      {/* details */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          {doctor.name} 
          <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs" title="Verified">
            ✓
          </span>
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-gray-600 mt-3 mb-6 text-sm md:text-base font-medium">
          <span>{doctor.education || doctor.degree} - {doctor.speciality}</span>
          <span className="px-3 py-1 border border-gray-200 rounded-full text-xs bg-gray-50">{doctor.experience} Experience</span>
        </div>
        
        <div>
          <h3 className="text-gray-900 font-bold flex items-center gap-2 mb-3 text-base">
            About <span className="text-gray-400">ℹ️</span>
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-2xl text-justify">
            {doctor.about}
          </p>
        </div>
        
        <p className="text-gray-600 font-medium text-lg">
          Appointment fee: <span className="text-gray-900 font-bold text-2xl">${doctor.fees}</span>
        </p>
      </div>
    </div>
  );
};
export default DoctorProfile;
