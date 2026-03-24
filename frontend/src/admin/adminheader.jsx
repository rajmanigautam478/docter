import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Menu, LogOut } from 'lucide-react';

const AdminHeader = ({ toggleSidebar }) => {
  const { logoutAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin-login');
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-100 z-50 relative">

      {/* Logo & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="md:hidden text-gray-500 hover:text-gray-700 p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/admin/dashboard')}>
          <img src={logo} alt="logo" className="h-8 md:h-10" />
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wider hidden sm:block">Admin</span>
        </div>
      </div>

      {/* Logout Button */}
      <button 
        onClick={handleLogout}
        className="bg-red-50 text-red-500 font-medium px-5 py-2.5 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm border border-red-100 flex items-center gap-2"
      >
        <span className="hidden sm:inline">Logout</span>
        <LogOut size={18} />
      </button>

    </header>
  );
};

export default AdminHeader;