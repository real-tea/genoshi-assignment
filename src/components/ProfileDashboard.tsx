// src/components/DashboardPage.tsx
import React from 'react';

const DashboardPage: React.FC = () => {
  // Mock data for user profile and graphs
  const userProfile = {
    name: 'Akash Singh',
    email: 'akash.singh@example.com',
    profilePhoto: 'path/to/profile/photo.jpg',
    subscription: 'Pro Plan', // Replace with user's actual subscription
  };

  const recentGraphs = [
    { id: 1, name: 'Graph 1', date: '2023-01-01' },
    { id: 2, name: 'Graph 2', date: '2023-01-02' },
    { id: 3, name: 'Graph 3', date: '2023-01-03' },
    // Add more mock data as needed
  ];

  const favoritePapers = [
    { id: 1, title: 'Paper 1', author: 'Author 1' },
    { id: 2, title: 'Paper 2', author: 'Author 2' },
    { id: 3, title: 'Paper 3', author: 'Author 3' },
    // Add more mock data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Profile Dashboard</h2>

        {/* User Profile Section */}
        <div className="flex items-center space-x-4 mb-8">
          {/* Profile Photo */}
          <img
            src={userProfile.profilePhoto}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          {/* User Information */}
          <div>
            <h3 className="text-2xl font-bold">{userProfile.name}</h3>
            <p>{userProfile.email}</p>
            <p>Subscription: {userProfile.subscription}</p>
          </div>
        </div>

        {/* Account Summary Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Account Summary</h3>
          {/* Display account metrics, subscription details, etc. */}
        </div>

        {/* My Graphs Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">My Graphs</h3>
          {/* Display a list of recently made graphs */}
          <ul>
            {recentGraphs.map((graph) => (
              <li
                key={graph.id}
                className="border rounded p-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {graph.name} - Created on {graph.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Favorite Papers Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Favorite Papers</h3>
          {/* Display a list of favorite papers and paper collections */}
          <ul>
            {favoritePapers.map((paper) => (
              <li
                key={paper.id}
                className="border rounded p-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {paper.title} by {paper.author}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
