import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import AdminHeader from './adminheader.jsx';

const Adminew = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-full p-4 hidden md:block">
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/admin/dashboard" 
                className={({isActive}) => `block px-4 py-2 rounded ${isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/add-doctor" 
                className={({isActive}) => `block px-4 py-2 rounded ${isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Add Doctor
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/all-doctors" 
                className={({isActive}) => `block px-4 py-2 rounded ${isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/appointments" 
                className={({isActive}) => `block px-4 py-2 rounded ${isActive ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Appointments
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Adminew;