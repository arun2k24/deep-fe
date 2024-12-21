import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar bg-black h-20 relative z-50">
      
      {/* Logo Section */}
      <div className="flex items-center pl-4 relative z-10">
        <img
          src="/cart.png"
          alt="Logo"
          className="w-20 h-20 object-cover"
        />
      </div>

      {/* Desktop Menu */}
      <div className="flex-1 flex justify-end items-center pr-8 hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-white flex space-x-6 md:space-x-8 lg:space-x-10">
          <li><a href="/" className="hover:text-red-500">HOME</a></li>
          <li><a href="/menu" className="hover:text-red-500">MENU</a></li>
          <li><a href="/reservation" className="hover:text-red-500">MAKE A RESERVATION</a></li>
          <li><a href="/contact" className="hover:text-red-500">CONTACT US</a></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="absolute top-4 right-4 md:hidden z-20">
        <button className="text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-20 right-0 w-full bg-black transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="text-white flex flex-col space-y-4 p-6">
          <li><a href="/" className="hover:text-red-500">HOME</a></li>
          <li><a href="/menu" className="hover:text-red-500">MENU</a></li>
          <li><a href="/reservation" className="hover:text-red-500">MAKE A RESERVATION</a></li>
          <li><a href="/contact" className="hover:text-red-500">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
