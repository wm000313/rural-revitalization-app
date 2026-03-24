import React from 'react';

interface FarmerAvatarProps {
  className?: string;
  size?: number;
}

const FarmerAvatar: React.FC<FarmerAvatarProps> = ({ className = '', size = 80 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="hatGradient" cx="50%" cy="20%" r="70%" fx="50%" fy="20%">
            <stop offset="0%" stopColor="#FBE3A3" />
            <stop offset="100%" stopColor="#E6A95C" />
          </radialGradient>
          <linearGradient id="shirtGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#6B7280" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>
           <linearGradient id="towelGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="100%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>

        {/* Shirt */}
        <path d="M70 145 C 60 165, 140 165, 130 145 L 150 190 C 150 200, 50 200, 50 190 Z" fill="url(#shirtGradient)" />

        {/* Neck */}
        <path d="M90 135 C 85 145, 115 145, 110 135 Z" fill="#E4B991" />

        {/* Towel */}
        <path d="M80 140 C 70 150, 60 160, 75 165 C 90 155, 110 155, 125 165 C 140 160, 130 150, 120 140 C 110 148, 90 148, 80 140 Z" fill="url(#towelGradient)" />

        {/* Head */}
        <path d="M100 60 C 70 60, 60 90, 70 115 C 75 135, 125 135, 130 115 C 140 90, 130 60, 100 60 Z" fill="#F2C39B" />
        
        {/* Ears */}
        <path d="M68 100 C 62 95, 62 110, 68 110" fill="#E4B991" stroke="#D7A885" strokeWidth="1"/>
        <path d="M132 100 C 138 95, 138 110, 132 110" fill="#E4B991" stroke="#D7A885" strokeWidth="1"/>

        {/* Hair */}
        <path d="M75 75 C 70 65, 85 60, 100 60 C 115 60, 130 65, 125 75" fill="#333" />

        {/* Hat */}
        <path d="M100 10 C 40 10, 20 70, 70 80 C 70 75, 130 75, 130 80 C 180 70, 160 10, 100 10 Z" fill="url(#hatGradient)" stroke="#D7A885" strokeWidth="2" />
        <path d="M100 10 L 100 30 M 70 80 L 40 70 M 130 80 L 160 70" stroke="#D7A885" strokeWidth="1.5" opacity="0.7" />
        <circle cx="100" cy="10" r="5" fill="#D7A885" />

        {/* Eyes */}
        <path d="M80 95 C 85 90, 95 90, 100 95" stroke="#4A3731" strokeWidth="3" strokeLinecap="round" />
        <path d="M120 95 C 115 90, 105 90, 100 95" stroke="#4A3731" strokeWidth="3" strokeLinecap="round" />

        {/* Smile */}
        <path d="M85 115 C 90 125, 110 125, 115 115" stroke="#A5522A" strokeWidth="3" strokeLinecap="round" />
        <path d="M87 116 C 92 124, 108 124, 113 116" fill="#fff" />

      </svg>
    </div>
  );
};

export default FarmerAvatar;
