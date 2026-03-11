import React from "react";

const AddDoctor = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Upload Doctor Picture */}
          <div className="flex items-center gap-4 md:col-span-2">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xl">👤</span>
            </div>
            <p className="text-gray-600 font-medium cursor-pointer">
              Upload doctor picture
            </p>
          </div>

          {/* Doctor Name */}
          <div>
            <label className="text-sm text-gray-600">Doctor name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Speciality */}
          <div>
            <label className="text-sm text-gray-600">Speciality</label>
            <select className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400">
              <option>General physician</option>
              <option>Cardiologist</option>
              <option>Dermatologist</option>
              <option>Neurologist</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Doctor Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Education */}
          <div>
            <label className="text-sm text-gray-600">Education</label>
            <input
              type="text"
              placeholder="Education"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Doctor Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <input
              type="text"
              placeholder="Address 1"
              className="w-full mt-1 mb-2 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm text-gray-600">Experience</label>
            <select className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400">
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* Fees */}
          <div>
            <label className="text-sm text-gray-600">Fees</label>
            <input
              type="number"
              placeholder="Your fees"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">About me</label>
            <textarea
              rows="4"
              placeholder="write about yourself"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-md hover:opacity-90">
          Add doctor
        </button>
      </div>
    </div>
  );
};

export default AddDoctor;