import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const NeumorphicCard: React.FC<NeumorphicCardProps> = ({ children, className = '', hover = false }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-2xl transition-all duration-300
      ${theme === 'light' 
        ? 'bg-[#CCFBF1] shadow-[4px_4px_12px_#D1C4E9,-4px_-4px_12px_#FFFFFF]' 
        : 'bg-[#1E293B] shadow-[6px_6px_14px_#0A0F1C,-6px_-6px_14px_#2D4A66]'
      }
      ${hover ? `hover:scale-105 ${theme === 'light' 
        ? 'hover:shadow-[6px_6px_18px_#D1C4E9,-6px_-6px_18px_#FFFFFF]' 
        : 'hover:shadow-[8px_8px_20px_#0A0F1C,-8px_-8px_20px_#2D4A66]'
      }` : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default NeumorphicCard;
