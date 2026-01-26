import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  containerClassName?: string;
}

export default function Logo({ 
  size = 20, 
  className = '', 
  containerClassName = 'w-10 h-10' 
}: LogoProps) {
  return (
    <div className={`${containerClassName} bg-[#E63946] rounded-xl flex items-center justify-center float-glow relative ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="white" strokeWidth="2.5"/>
        <path d="M10 9L15 12L10 15V9Z" fill="white"/>
      </svg>
    </div>
  );
}
