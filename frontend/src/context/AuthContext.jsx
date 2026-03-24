import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      fetchUserProfile();
    } else {
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  }, [token]);

  const fetchDoctors = async () => {
    try {
      const { data } = await api.get('/doctor/list');
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const { data } = await api.get('/user/profile');
      if (data.success) {
        setUser(data.userData);
      } else {
        setToken(''); // Invalid token
      }
    } catch (error) {
      console.error(error);
      setToken('');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/user/login', { email, password });
      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        await fetchUserProfile();
        toast.success('Logged in successfully');
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post('/user/register', { name, email, password });
      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        await fetchUserProfile();
        toast.success('Registered successfully');
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      return false;
    }
  };

  const logout = () => {
    setToken('');
    toast.info('Logged out');
  };

  return (
    <AuthContext.Provider value={{ token, user, doctors, login, register, logout, loading, fetchDoctors, fetchProfile: fetchUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};