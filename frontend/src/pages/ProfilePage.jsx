import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ProfileCard from '../components/ProfileCard';

const ProfilePage = () => {
  const { user, fetchProfile, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-6 py-12 lg:py-20 bg-gray-50/30 min-h-screen'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl font-bold text-gray-900'>My Profile</h2>
        <p className='text-gray-500 mt-2'>Manage your personal and contact information.</p>
      </div>
      
      <ProfileCard user={user} fetchProfile={fetchProfile} />
    </div>
  );
};

export default ProfilePage;
