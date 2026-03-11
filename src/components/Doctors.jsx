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
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">

      {/* Sidebar */}
      <div className="flex flex-col gap-3 w-full md:w-56">
        <button
          onClick={() => setFilterSpeciality("")}
          className={`border rounded-lg py-2 px-3 text-left transition ${filterSpeciality === "" ? "bg-blue-100 border-blue-500 text-blue-800" : "hover:bg-gray-100"}`}
        >
          All Doctors
        </button>
        {specialties.map((item, i) => (
          <button
            key={i}
            onClick={() => setFilterSpeciality(item)}
            className={`border rounded-lg py-2 px-3 text-left transition ${filterSpeciality === item ? "bg-blue-100 border-blue-500 text-blue-800" : "hover:bg-gray-100"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="bg-blue-50 w-full"
              />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                </div>

                <p className="text-gray-900 text-lg font-medium">{doc.name}</p>
                <p className="text-gray-600 text-sm">{doc.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10 text-lg">
            No doctors available for this speciality.
          </p>
        )}
      </div>

    </div>
  );
};

export default Doctors;