import React, { useState } from 'react';

const AuthForm = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log({ state, name, email, password });
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center px-4'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg bg-white'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input 
              className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-blue-500' 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              required 
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-blue-500' 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required 
          />
        </div>
        
        <div className='w-full'>
          <p>Password</p>
          <input 
            className='border border-zinc-300 rounded w-full p-2 mt-1 focus:outline-blue-500' 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            required 
          />
        </div>
        
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base hover:bg-blue-600 transition-all'>
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-blue-500 underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>Click here</span></p>
        }
      </form>
    </div>
  );
};

export default AuthForm;