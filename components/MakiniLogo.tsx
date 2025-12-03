import React from 'react';

export const MakiniLogo: React.FC<{ className?: string }> = ({ className = "w-auto h-full" }) => {
  return (
    <svg 
      viewBox="0 0 200 240" 
      className={`${className} transition-transform duration-500 ease-out hover:scale-105 origin-center`}
      fill="none" 
      xmlns="http://www.w3.org/2001/svg"
      aria-label="Makini AI Logo"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="origami-gradient" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7BA4D0" />
          <stop offset="100%" stopColor="#2E5E99" />
        </linearGradient>
        <filter id="shadow-filter" x="-20%" y="-20%" width="140%" height="140%">
           <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0D2440" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* 
        3D Origami 'M' Construction 
        ViewBox: 0 0 200 240
        Icon Grid: ~45 to 155 width, ~40 to 160 height
      */}

      <g filter="url(#shadow-filter)">
        {/* Left Vertical Pillar (Shadow/Back) */}
        <path 
          d="M45 40 L75 40 L75 160 L45 160 Z" 
          fill="#0D2440" 
        />

        {/* Right Vertical Pillar (Shadow/Back) */}
        <path 
          d="M125 40 L155 40 L155 160 L125 160 Z" 
          fill="#0D2440" 
        />

        {/* The 'V' Ribbon (Body/Front) 
            Connects the two pillars with a gradient folded look
        */}
        <path 
          d="M45 40 L75 40 L100 110 L125 40 L155 40 L100 160 Z" 
          fill="url(#origami-gradient)" 
        />
        
        {/* Subtle Highlight on the fold creases (Top edges of the V) */}
        <path d="M45 40 L75 40" stroke="#7BA4D0" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M125 40 L155 40" stroke="#7BA4D0" strokeWidth="1" strokeOpacity="0.5" />
      </g>

      {/* Brand Text */}
      <text 
        x="100" 
        y="215" 
        textAnchor="middle" 
        fontFamily="Manrope, sans-serif" 
        fontWeight="800" 
        fontSize="26" 
        fill="#0D2440" 
        letterSpacing="0.12em"
      >
        MAKINI <tspan fill="#2E5E99">AI</tspan>
      </text>
    </svg>
  );
};