import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/home.jsx'
import AboutUs from './pages/aboutus.jsx'
import ContactUs from './components/Contactus.jsx'
import Docter from './pages/docter.jsx'
import AuthForm from './pages/AuthForm.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Appointment from './pages/Appointment.jsx'

// Admin Components
import Adminew from './admin/adminew.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AddDoctor from './admin/AddDoctor.jsx'
import AllDocter from './admin/alldocter.jsx'
import AdminAppointment from './admin/appointment.jsx'

const App = () => {
  return (
    <>
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
              <Route path="/login" element={<AuthForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/appointment/:docId" element={<Appointment />} />
            </Routes>
            <Footer />
          </>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={<Adminew />}>
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
