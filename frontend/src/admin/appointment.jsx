import React, { useContext, useEffect } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { X, Check } from 'lucide-react';

const AdminAppointment = () => {
  const { aToken, appointments, fetchAllAppointments, cancelAppointment, updateAppointmentStatus } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      fetchAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Appointments</h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-50/50 text-gray-600 text-sm uppercase tracking-wider border-b border-gray-100">
                <th className="p-4 font-bold">#</th>
                <th className="p-4 font-bold">Patient ID</th>
                <th className="p-4 font-bold">Doctor ID</th>
                <th className="p-4 font-bold">Date & Time</th>
                <th className="p-4 font-bold">Fee Status</th>
                <th className="p-4 font-bold text-center">Status / Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.length > 0 ? (
                appointments.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-500 font-medium">{index + 1}</td>
                    <td className="p-4 font-medium text-gray-800">{item.userId.slice(-6).toUpperCase()}</td>
                    <td className="p-4 font-medium text-gray-800">{item.doctorId.slice(-6).toUpperCase()}</td>
                    <td className="p-4">
                      <p className="text-gray-900 font-medium">{item.date}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </td>
                    <td className="p-4">
                      {item.payment ? (
                        <span className="px-2.5 py-1 bg-green-50 text-green-600 border border-green-200 rounded-full text-xs font-bold">Paid</span>
                      ) : (
                        <span className="px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-full text-xs font-bold">Unpaid</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {item.status === 'Pending' ? (
                        <div className="flex justify-center items-center gap-2">
                          <button onClick={() => cancelAppointment(item._id)} className="w-9 h-9 rounded-full bg-red-50 text-red-600 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-red-100" title="Cancel Appointment">
                            <X size={16} />
                          </button>
                          <button onClick={() => updateAppointmentStatus(item._id, 'Completed')} className="w-9 h-9 rounded-full bg-green-50 text-green-600 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-green-100" title="Accept/Complete Appointment">
                            <Check size={16} />
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
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500 font-medium">No appointments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointment;