import React, { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { UserRound, CalendarCheck, Users, ClipboardList, X, Check } from 'lucide-react';

const Dashboard = () => {
  const { aToken, adminDashData, fetchAdminDashData, cancelAppointment, updateAppointmentStatus } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      fetchAdminDashData();
    }
  }, [aToken]);

  if (!adminDashData) {
    return (
      <div className='min-h-[50vh] flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600'></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        
        <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
            <UserRound size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">{adminDashData.doctors}</p>
            <p className="text-gray-500 font-medium">Doctors</p>
          </div>
        </div>

        <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
            <CalendarCheck size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">{adminDashData.appointments}</p>
            <p className="text-gray-500 font-medium">Appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Users size={32} />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">{adminDashData.patients}</p>
            <p className="text-gray-500 font-medium">Patients</p>
          </div>
        </div>

      </div>

      {/* Latest Appointment */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-50/50 border-b border-gray-100 p-5 flex items-center gap-3">
          <ClipboardList className="text-indigo-600" size={24} />
          <h3 className="font-bold text-gray-800 text-lg">Latest Appointments</h3>
        </div>

        <div className="divide-y divide-gray-100">
          {adminDashData.latestAppointments.length === 0 ? (
            <p className="p-8 text-center text-gray-500 font-medium">No latest appointments found.</p>
          ) : (
            adminDashData.latestAppointments.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 hover:bg-gray-50 transition-colors gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl">
                    {item.date.split('-')[2]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Appt #{item._id.slice(-5).toUpperCase()}</p>
                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                      Date: <span className="text-gray-700">{item.date}</span> | Time: <span className="text-gray-700">{item.time}</span>
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  {item.status === 'Pending' ? (
                    <div className="flex justify-end sm:justify-center items-center gap-2">
                      <button onClick={() => cancelAppointment(item._id)} className="w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-red-100 group" title="Cancel Appointment">
                        <X size={18} />
                      </button>
                      <button onClick={() => updateAppointmentStatus(item._id, 'Completed')} className="w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-green-100 group" title="Accept/Complete Appointment">
                        <Check size={18} />
                      </button>
                    </div>
                  ) : (
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${
                      item.status === 'Cancelled' ? 'bg-red-50 text-red-600 border-red-200' :
                      'bg-green-50 text-green-600 border-green-200'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>

              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
