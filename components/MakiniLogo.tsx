import React from 'react';

export const MakiniLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2001/svg"
      aria-label="Makini AI Logo"
    >
      <defs>
        <linearGradient id="makini-grad-right" x1="50" y1="20" x2="80" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2E5E99" />
          <stop offset="100%" stopColor="#7BA4D0" />
        </linearGradient>
        <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0D2440" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Left Structure - Navy */}
      <path 
        d="M15 15 H35 L50 60 L35 60 L28 40 L28 85 H15 V15Z" 
        fill="#0D2440" 
      />
      
      {/* Right Structure - Royal Gradient */}
      <path 
        d="M85 15 H65 L50 60 L65 60 L72 40 L72 85 H85 V15Z" 
        fill="url(#makini-grad-right)" 
      />
      
      {/* Center Diamond Overlay for crisp intersection */}
      <path
        d="M50 60 L35 60 L50 15 L65 60 Z"
        fill="none"
      />
    </svg>
  );
};