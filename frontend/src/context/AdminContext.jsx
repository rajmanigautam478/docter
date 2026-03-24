import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');
  const [adminDashData, setAdminDashData] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (aToken) {
      localStorage.setItem('aToken', aToken);
    } else {
      localStorage.removeItem('aToken');
    }
  }, [aToken]);

  const loginAdmin = async (email, password) => {
    try {
      const { data } = await api.post('/admin/login', { email, password });
      if (data.success) {
        setAToken(data.token);
        localStorage.setItem('aToken', data.token);
        toast.success('Admin logged in successfully');
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

  const logoutAdmin = () => {
    setAToken('');
    localStorage.removeItem('aToken');
    setAdminDashData(null);
    toast.info('Admin logged out');
  };

  const fetchAdminDashData = async () => {
    try {
      const { data } = await api.get('/admin/dashboard', { headers: { atoken: aToken } });
      if (data.success) {
        setAdminDashData(data.dashData);
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching dashboard data');
    }
  };

  const fetchAllAppointments = async () => {
    try {
      const { data } = await api.get('/admin/appointments', { headers: { atoken: aToken } });
      if (data.success) {
        setAppointments(data.appointments);
      }
    } catch (error) {
      toast.error('Error fetching appointments');
    }
  };

  const fetchAllDoctors = async () => {
    try {
      const { data } = await api.get('/admin/all-doctors', { headers: { atoken: aToken } });
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      toast.error('Error fetching doctors');
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await api.post('/admin/cancel-appointment', { appointmentId }, { headers: { atoken: aToken } });
      if (data.success) {
        toast.success(data.message);
        fetchAllAppointments();
        fetchAdminDashData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to cancel appointment');
    }
  };

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      const { data } = await api.post('/admin/update-appointment-status', { appointmentId, status }, { headers: { atoken: aToken } });
      if (data.success) {
        toast.success(data.message);
        fetchAllAppointments();
        fetchAdminDashData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update appointment');
    }
  };

  return (
    <AdminContext.Provider value={{
      aToken, setAToken, loginAdmin, logoutAdmin,
      adminDashData, fetchAdminDashData,
      appointments, fetchAllAppointments,
      doctors, fetchAllDoctors,
      cancelAppointment, updateAppointmentStatus
    }}>
      {children}
    </AdminContext.Provider>
  );
};
