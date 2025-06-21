
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">UPES CSI Hackathon</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/event-details" className="hover:text-yellow-300">Event Details</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
