import React from 'react';
import { doctors } from '../assets/assets.js';

const AllDocter = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">All Doctors</h2>
      
      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors.map((doc, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Doctor Image */}
            <img 
              className="bg-indigo-50 w-full h-48 object-cover" 
              src={doc.image} 
              alt={doc.name} 
            />
            
            {/* Doctor Info */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium truncate">{doc.name}</p>
              <p className="text-gray-600 text-sm">{doc.speciality}</p>
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                  {doc.experience}
                </span>
                <span className="font-medium text-gray-700">
                  ${doc.fees}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDocter;