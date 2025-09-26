import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon, Zap, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { 
      path: '/dashboard', 
      label: 'Dashboard',
      dropdown: [
        { path: '/dashboard', label: 'Personal Dashboard' },
        { path: '/team', label: 'Team Hub' },
        { path: '/member', label: 'Member View' },
        { path: '/admin', label: 'Admin Panel' }
      ]
    },
    { path: '/calendar', label: 'Calendar' },
    { path: '/prioritize', label: 'Prioritize' },
    { path: '/focus', label: 'Focus' },
    { 
      path: '/analytics', 
      label: 'Analytics',
      dropdown: [
        { path: '/analytics', label: 'Personal Analytics' },
        { path: '/team-analytics', label: 'Team Analytics' }
      ]
    },
    { path: '/voice', label: 'Voice Assistant' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-[#FFF6E3]/95 backdrop-blur-sm border-b border-[#BFECFF]/30' 
        : 'bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#80CFE8]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-2xl ${
              theme === 'light'
                ? 'bg-[#BFECFF] shadow-lg shadow-[#BFECFF]/20'
                : 'bg-[#80CFE8] shadow-lg shadow-[#80CFE8]/20'
            }`}>
              <Zap className="h-6 w-6 text-gray-800" />
            </div>
            <span className="text-xl font-bold">Coretex</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ path, label, dropdown }) => (
              <div key={path} className="relative">
                {dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowProductMenu(label)}
                    onMouseLeave={() => setShowProductMenu('')}
                  >
                    <button
                      className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 flex items-center ${
                        dropdown.some(item => isActive(item.path))
                          ? theme === 'light'
                            ? 'bg-[#BFECFF] text-gray-900 shadow-md'
                            : 'bg-[#80CFE8] text-gray-900 shadow-md'
                          : theme === 'light'
                            ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                            : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
                      }`}
                    >
                      {label} <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {showProductMenu === label && (
                      <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl shadow-lg ${
                        theme === 'light' 
                          ? 'bg-[#FFF6E3] border border-[#BFECFF]/30' 
                          : 'bg-[#1A1A1A] border border-[#80CFE8]/20'
                      }`}>
                        {dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-2 text-sm rounded-2xl transition-colors ${
                              isActive(item.path)
                                ? theme === 'light'
                                  ? 'bg-[#BFECFF] text-gray-900'
                                  : 'bg-[#80CFE8] text-gray-900'
                                : theme === 'light'
                                  ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                                  : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={path}
                    className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                      isActive(path)
                        ? theme === 'light'
                          ? 'bg-[#BFECFF] text-gray-900 shadow-md'
                          : 'bg-[#80CFE8] text-gray-900 shadow-md'
                        : theme === 'light'
                          ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                          : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
                    }`}
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Settings & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Link
              to="/settings"
              className={`p-2 rounded-2xl transition-all duration-200 ${
                isActive('/settings')
                  ? theme === 'light'
                    ? 'bg-[#BFECFF] text-gray-900'
                    : 'bg-[#80CFE8] text-gray-900'
                  : theme === 'light'
                    ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                    : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
              }`}
            >
              <span className="text-sm">Settings</span>
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-2xl transition-all duration-200 ${
                theme === 'light'
                  ? 'bg-[#CDC1FF] hover:bg-[#CDC1FF]/80 shadow-md'
                  : 'bg-[#A99BEF] hover:bg-[#A99BEF]/80 shadow-md'
              }`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map(({ path, label, dropdown }) => (
                <div key={path}>
                  {dropdown ? (
                    <div>
                      <div className="px-3 py-2 text-base font-medium opacity-70">{label}</div>
                      {dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-6 py-2 rounded-2xl text-sm transition-colors ${
                            isActive(item.path)
                              ? theme === 'light'
                                ? 'bg-[#BFECFF] text-gray-900'
                                : 'bg-[#80CFE8] text-gray-900'
                              : theme === 'light'
                                ? 'text-gray-700 hover:bg-[#BFECFF]/50'
                                : 'text-[#F5F5F5] hover:bg-[#80CFE8]/30'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-2xl text-base font-medium transition-colors ${
                        isActive(path)
                          ? theme === 'light'
                            ? 'bg-[#BFECFF] text-gray-900'
                            : 'bg-[#80CFE8] text-gray-900'
                          : theme === 'light'
                            ? 'text-gray-700 hover:bg-[#BFECFF]/50'
                            : 'text-[#F5F5F5] hover:bg-[#80CFE8]/30'
                      }`}
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;