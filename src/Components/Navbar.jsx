import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../public/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>
      <nav className="fixed top-0 z-10 w-full shadow-lg bg-gray-50">
        <div className="flex items-center justify-between px-8 py-4 lg:px-40">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="h-20 w-30" />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>

            <div className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-4 text-sm lg:flex-grow">
              <NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Home</NavLink>
              <NavLink to="/history" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>History</NavLink>

            
              <NavLink to="/practical" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Practical Information</NavLink>
              <NavLink to="/media" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Media</NavLink>
              <NavLink to="/events" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Events</NavLink>
              <NavLink to="/Contact" exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md'}>Contact Us</NavLink>

            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};

export default NavBar;
