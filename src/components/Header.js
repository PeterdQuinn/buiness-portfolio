import { useEffect, useState } from 'react';
import layout from '../components//Layout';
const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Peter Quinn</div>
        <div className="flex space-x-4">
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#services" className="hover:text-blue-500 transition-colors duration-300">Services</a>
          <a href="#past-clients" className="hover:text-blue-500 transition-colors duration-300">Clients</a>
        </div>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
