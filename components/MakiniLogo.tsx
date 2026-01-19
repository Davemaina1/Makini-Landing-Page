import React from 'react';

interface MakiniLogoProps {
  className?: string;
}

const LOGO_URL = "https://i.imgur.com/hxSVKnc.png";

export const MakiniLogo: React.FC<MakiniLogoProps> = ({ className = "w-auto h-full" }) => {
  return (
    <img 
      src={LOGO_URL} 
      alt="Makini AI Logo" 
      className={className}
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
};