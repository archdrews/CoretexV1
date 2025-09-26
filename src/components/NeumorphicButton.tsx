import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false 
}) => {
  const { theme } = useTheme();
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return theme === 'light'
          ? 'bg-[#4FD1C7] hover:bg-[#38B2AC] text-white'
          : 'bg-[#319795] hover:bg-[#2C7A7B] text-white';
      case 'secondary':
        return theme === 'light'
          ? 'bg-[#81E6D9] hover:bg-[#68D391] text-gray-800'
          : 'bg-[#4FD1C7] hover:bg-[#38B2AC] text-gray-900';
      case 'accent':
        return theme === 'light'
          ? 'bg-[#FFCCEA] hover:bg-[#FFB8E1] text-gray-800'
          : 'bg-[#EBAFCC] hover:bg-[#E59FC0] text-gray-900';
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-2xl font-medium transition-all duration-300 transform
        ${theme === 'light' 
          ? 'shadow-[3px_3px_8px_#F0E8D6,-3px_-3px_8px_#FFFFFF] active:shadow-[inset_2px_2px_4px_#F0E8D6,inset_-2px_-2px_4px_#FFFFFF]' 
          : 'shadow-[4px_4px_10px_#0D0D0D,-4px_-4px_10px_#2A2A2A] active:shadow-[inset_3px_3px_6px_#0D0D0D,inset_-3px_-3px_6px_#2A2A2A]'
        }
        hover:scale-105 active:scale-95
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default NeumorphicButton;