import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/home.jsx'
import AboutUs from './pages/aboutus.jsx'
import ContactUs from './components/Contactus.jsx'
import Docter from './pages/docter.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import AppointmentPage from './pages/AppointmentPage.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminProtectedRoute from './components/AdminProtectedRoute.jsx'

// Admin Components
import AdminLogin from './admin/AdminLogin.jsx'
import Adminew from './admin/adminew.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AddDoctor from './admin/AddDoctor.jsx'
import AllDocter from './admin/alldocter.jsx'
import AdminAppointment from './admin/appointment.jsx'

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* User / Public Routes */}
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Docter />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/appointment/:docId" element={<AppointmentPage />} />
              <Route 
                path="/my-appointments" 
                element={
                  <ProtectedRoute>
                    <MyAppointments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            <Footer />
          </>
        } />

        {/* Admin Login Route */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<AdminProtectedRoute><Adminew /></AdminProtectedRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="all-doctors" element={<AllDocter />} />
          <Route path="appointments" element={<AdminAppointment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App