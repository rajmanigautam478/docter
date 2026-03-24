import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ doctors, currentDocId }) => {
  const navigate = useNavigate();
  // Filter out current and just take first 5
  const related = doctors.filter(d => d._id !== currentDocId).slice(0, 5);

  if (related.length === 0) return null;

  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Doctors</h2>
      <p className="text-gray-500 text-sm md:text-base mb-12">Simply browse through our extensive list of trusted doctors.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {related.map((item, index) => (
          <div 
            key={index} 
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              window.scrollTo(0,0);
            }} 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer text-left flex flex-col"
          >
            <div className="bg-blue-50/50 p-4 h-56 flex items-center justify-center">
              <img 
                src={item.image.startsWith('http') ? item.image : `http://localhost:4000${item.image.startsWith('/') ? '' : '/'}${item.image}`} 
                alt={item.name} 
                className="h-full object-contain" 
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full animate-pulse ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-xs font-bold uppercase tracking-wide ${item.available ? 'text-green-600' : 'text-red-600'}`}>
                  {item.available ? 'Available' : 'Not Available'}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg truncate mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm font-medium">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => { navigate('/doctors'); window.scrollTo(0,0); }}
        className="mt-12 px-10 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        View All
      </button>
    </div>
  );
};

export default RelatedDoctors;
