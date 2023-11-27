import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Portfolio</div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a>
          <a href="#past-clients" className="hover:text-blue-500 transition-colors duration-300">Clients</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
