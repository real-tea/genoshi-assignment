// src/components/Navbar.tsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // State to manage the visibility of the additional links
  const [showLinks, setShowLinks] = useState(false);

  // Ref to store the timeout ID for delaying the list hiding
  const timeoutRef = useRef<number | null>(null);

  // Function to delay hiding the list on mouse leave
  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowLinks(false);
    }, 300); // Adjust the delay (in milliseconds) as needed
  };

  // Function to clear the timeout on mouse enter
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowLinks(true);
  };

  return (
    <div className="text-center fixed top-0 left-0 right-0">
      <div
        className="bg-gray-700 opacity-70 w-full h-16 backdrop-blur-lg absolute top-0 left-0 right-0 bottom-0"
        style={{ zIndex: -1 }}
      ></div>

      {/* Navbar content */}
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <h1 className="text-white text-2xl font-bold">Genoshi.io</h1>
        <div className="flex space-x-4">
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-white cursor-pointer group-hover:text-gray-300"><Link to = "/">Dashboard</Link></span>
            {showLinks && (
              <div className="absolute top-full left-0 mt-2 bg-gray-800 text-white py-2 px-4 rounded shadow">
                <Link to="/account-settings" className="block hover:text-gray-300 mb-2">
                  Account Settings
                </Link>
                <Link to="/create-new-graph" className="block hover:text-gray-300 mb-2">
                  Create New Graph
                </Link>
                <Link to="/graph-details" className="block hover:text-gray-300">
                  Graph Details
                </Link>
              </div>
            )}
          </div>
          <Link to="/pricing" className="text-white hover:text-gray-300">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
