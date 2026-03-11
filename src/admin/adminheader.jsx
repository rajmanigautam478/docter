import React from "react";
import logo from "../assets/logo.svg";

const AdminHeader = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-8" />
        <span className="font-semibold text-gray-700">Admin Panel</span>
      </div>

      {/* Button */}
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
        Logout
      </button>

    </header>
  );
};

export default AdminHeader;