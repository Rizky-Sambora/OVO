import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/ovo-logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white shadow-md  top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="OVO Logo" className="h-10 md:h-12" />
        </div>
      
        <div className="hidden md:flex space-x-8">
          <Link to={"/"} className="hover:text-purple-300 transition duration-300 text-lg font-semibold">
            Home
          </Link>
          <Link to={"/features"} className="hover:text-purple-300 transition duration-300 text-lg font-semibold">
            Features
          </Link>
          <Link to={"/about"} className="hover:text-purple-300 transition duration-300 text-lg font-semibold">
            About 
          </Link>
          <Link to={"/contact"} className="hover:text-purple-300 transition duration-300 text-lg font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
