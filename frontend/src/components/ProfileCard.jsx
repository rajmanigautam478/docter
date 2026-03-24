import React, { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import api from '../services/api';

const ProfileCard = ({ user, fetchProfile }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: 'Not Selected',
    dob: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        address: user.address || '',
        gender: user.gender || 'Not Selected',
        dob: user.dob || ''
      });
      // Handle backend image url resolution
      if (user.image) {
        setPreviewImage(user.image.startsWith('http') ? user.image : `http://localhost:4000${user.image.startsWith('/') ? '' : '/'}${user.image}`);
      } else {
        setPreviewImage(null);
      }
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('phone', formData.phone);
      data.append('address', formData.address);
      data.append('gender', formData.gender);
      data.append('dob', formData.dob);
      if (imageFile) {
        data.append('image', imageFile);
      }

      // Backend route expected is /user/update-profile based on existing backend controllers
      const response = await api.post('/user/update-profile', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setIsEdit(false);
        fetchProfile(); // Refresh context
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating profile');
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100">
      
      {/* Top Section - Avatar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 relative">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100 bg-gray-50 flex items-center justify-center shadow-inner">
            {previewImage ? (
              <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl text-gray-300 font-bold">{formData.name ? formData.name[0].toUpperCase() : 'U'}</span>
            )}
          </div>
          {isEdit && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="text-white text-sm font-medium">Change</span>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
          )}
        </div>
        
        <div className="flex-1 text-center sm:text-left pt-2">
          {isEdit ? (
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="text-3xl font-bold text-gray-900 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full bg-transparent pb-1 mb-2"
            />
          ) : (
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{formData.name || 'Your Name'}</h1>
          )}
          <hr className="border-gray-200 mt-4 mb-2" />
        </div>
      </div>

      {/* Section 1: Contact Information */}
      <div className="mb-8">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-5">Contact Information</p>
        <div className="space-y-4">
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center">
            <span className="text-gray-500 font-medium">Email id:</span>
            <span className="text-blue-500 font-medium break-all">{user.email}</span>
          </div>
          
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center">
            <span className="text-gray-500 font-medium">Phone:</span>
            {isEdit ? (
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-3 py-1.5 focus:outline-blue-500 w-full max-w-xs"
              />
            ) : (
              <span className="text-blue-500 font-medium cursor-pointer hover:underline">{formData.phone || 'Not Added'}</span>
            )}
          </div>

          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-start">
            <span className="text-gray-500 font-medium mt-1">Address:</span>
            {isEdit ? (
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                rows="2"
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-3 py-2 focus:outline-blue-500 w-full resize-none"
              />
            ) : (
              <span className="text-gray-800 leading-relaxed whitespace-pre-line">{formData.address || 'Not Added'}</span>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Basic Information */}
      <div className="mb-10">
        <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-5">Basic Information</p>
        <div className="space-y-4">
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center">
            <span className="text-gray-500 font-medium">Gender:</span>
            {isEdit ? (
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-3 py-1.5 focus:outline-blue-500 w-full max-w-xs"
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span className="text-gray-800 font-medium">{formData.gender}</span>
            )}
          </div>
          
          <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center">
            <span className="text-gray-500 font-medium">Birthday:</span>
            {isEdit ? (
              <input 
                type="date" 
                name="dob" 
                value={formData.dob} 
                onChange={handleChange} 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-lg px-3 py-1.5 focus:outline-blue-500 w-full max-w-xs"
              />
            ) : (
              <span className="text-gray-800 font-medium">{formData.dob || 'Not Added'}</span>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-start pt-4">
        {isEdit ? (
          <button 
            onClick={handleSave}
            className="px-10 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Save Information
          </button>
        ) : (
          <button 
            onClick={() => setIsEdit(true)}
            className="px-10 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>

    </div>
  );
};

export default ProfileCard;
