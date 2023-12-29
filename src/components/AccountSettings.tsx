// src/components/AccountSettings.tsx
import React from 'react';

const AccountSettings: React.FC = () => {
  // Simulated data and functions
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePhoto: 'url_to_profile_photo.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  const handleUpdateProfile = () => {
    // Handle update profile logic
    console.log('Update profile');
  };

  const handleChangePassword = () => {
    // Handle change password logic
    console.log('Change password');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Account Settings</h2>

        {/* Update user profile details */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">User Profile Details</h3>
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={userData.name}
                className="w-full p-2 border-b border-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={userData.email}
                className="w-full p-2 border-b border-white focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Additional form elements for updating profile */}
            {/* Add your form fields here */}
            <button
              type="submit"
              onClick={handleUpdateProfile}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Change password */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Change Password</h3>
          <form onSubmit={(e) => { e.preventDefault(); }}>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-white text-sm font-bold mb-2">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="w-full p-2 border-b border-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-white text-sm font-bold mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full p-2 border-b border-white focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Additional form elements for changing password */}
            {/* Add your form fields here */}
            <button
              type="submit"
              onClick={handleChangePassword}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
