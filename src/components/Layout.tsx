import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../contexts/ThemeContext';

const Layout: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-[#E8DDFF] text-gray-800' 
        : 'bg-[#0F0F23] text-[#22D3EE]'
    }`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;