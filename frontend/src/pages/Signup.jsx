import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const success = await register(name, email, password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className='min-h-[85vh] flex items-center justify-center px-6 py-12 bg-gray-50/50'>
      <div className='w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden'>
        
        {/* Header Section */}
        <div className='bg-blue-600 px-8 py-10 text-center text-white'>
          <h2 className='text-3xl font-bold mb-2 tracking-tight'>Create Account</h2>
          <p className='text-blue-100 text-sm'>
            Please sign up to book your appointment.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmitHandler} className='p-8 space-y-6'>
          
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-gray-700'>Full Name</label>
            <input 
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
              type="text" 
              placeholder='John Doe'
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              required 
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-semibold text-gray-700'>Email Address</label>
            <input 
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
              type="email" 
              placeholder='john@example.com'
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              required 
            />
          </div>
          
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-gray-700'>Password</label>
            <input 
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
              type="password" 
              placeholder='••••••••'
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              required 
            />
          </div>
          
          <button className='w-full py-3.5 mt-4 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300'>
            Create Account
          </button>

          <div className='pt-6 text-center border-t border-gray-100'>
            <p className='text-sm text-gray-600'>
              Already have an account?{' '}
              <Link to="/login" className='text-blue-600 font-semibold hover:underline transition-all duration-300'>
                Login here
              </Link>
            </p>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;