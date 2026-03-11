import React, { useState } from "react";
import { doctors } from "../assets/assets";

const specialties = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist"
];

const Doctors = () => {
  const [filterSpeciality, setFilterSpeciality] = useState("");

  const filteredDoctors = filterSpeciality 
    ? doctors.filter(doc => doc.speciality === filterSpeciality)
    : doctors;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 bg-gray-50/30 min-h-screen">

      {/* Sidebar Filters */}
      <div className="flex flex-col gap-3 w-full md:w-64 flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-24">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Browse Specialities</h3>
        <button
          onClick={() => setFilterSpeciality("")}
          className={`border rounded-xl py-3 px-4 text-left font-medium transition-all duration-300 ${filterSpeciality === "" ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm" : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"}`}
        >
          All Doctors
        </button>
        {specialties.map((item, i) => (
          <button
            key={i}
            onClick={() => setFilterSpeciality(item)}
            className={`border rounded-xl py-3 px-4 text-left font-medium transition-all duration-300 ${filterSpeciality === item ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm" : "border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="bg-blue-50/50 p-4 flex justify-center h-48">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-600 text-xs font-bold uppercase tracking-wide">Available</span>
                  </div>

                  <h3 className="text-gray-900 text-lg font-bold truncate">{doc.name}</h3>
                  <p className="text-gray-500 text-sm font-medium mb-4">{doc.speciality}</p>
                  
                  <button className="mt-auto w-full py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
              <span className="text-4xl mb-4">🩺</span>
              <p className="text-gray-500 text-xl font-medium">No doctors found for this speciality.</p>
              <button onClick={() => setFilterSpeciality("")} className="mt-4 text-blue-600 font-semibold hover:underline">
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Doctors;