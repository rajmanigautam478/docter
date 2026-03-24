import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import AdminHeader from './adminheader.jsx';
import { LayoutDashboard, CalendarDays, UserPlus, Users } from 'lucide-react';

const Adminew = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <AdminHeader toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`fixed md:sticky top-0 left-0 h-full w-64 bg-white border-r border-gray-100 shadow-sm z-40 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="p-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6 ml-2">Main Menu</h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/admin/dashboard" 
                  onClick={() => setIsSidebarOpen(false)}
                  className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/appointments" 
                  onClick={() => setIsSidebarOpen(false)}
                  className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <CalendarDays size={20} />
                  Appointments
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/add-doctor" 
                  onClick={() => setIsSidebarOpen(false)}
                  className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <UserPlus size={20} />
                  Add Doctor
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/admin/all-doctors" 
                  onClick={() => setIsSidebarOpen(false)}
                  className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Users size={20} />
                  Doctors List
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full overflow-hidden p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Adminew;