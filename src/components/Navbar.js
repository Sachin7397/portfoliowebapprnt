import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link className="text-white hover:text-gray-300" to="/">Home</Link></li>
        <li><Link className="text-white hover:text-gray-300" to="/about">About</Link></li>
        <li><Link className="text-white hover:text-gray-300" to="/projects">Projects</Link></li>
        <li><Link className="text-white hover:text-gray-300" to="/skills">Skills</Link></li>
        <li><Link className="text-white hover:text-gray-300" to="/testimonials">Testimonials</Link></li>
        <li><Link className="text-white hover:text-gray-300" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
