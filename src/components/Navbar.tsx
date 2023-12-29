// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
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
          <Link to="/" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/pricing" className="text-white hover:text-gray-300">
            Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
