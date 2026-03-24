import React, { useState, useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { loginAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const success = await loginAdmin(email, password);
    if (success) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className='min-h-[100vh] flex items-center justify-center px-6 py-12 bg-gray-50'>
      <div className='w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden'>
        
        {/* Header Section */}
        <div className='bg-indigo-600 px-8 py-10 text-center text-white'>
          <h2 className='text-3xl font-bold mb-2 tracking-tight'>Admin Login</h2>
          <p className='text-indigo-100 text-sm'>
            Please log in to access the admin panel.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmitHandler} className='p-8 space-y-6'>

          <div className='space-y-2'>
            <label className='text-sm font-semibold text-gray-700'>Email Address</label>
            <input 
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300' 
              type="email" 
              placeholder='admin@example.com'
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              required 
            />
          </div>
          
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-gray-700'>Password</label>
            <input 
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300' 
              type="password" 
              placeholder='••••••••'
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              required 
            />
          </div>
          
          <button className='w-full py-3.5 mt-4 bg-indigo-600 text-white rounded-xl font-bold shadow-md hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'>
            Login
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
