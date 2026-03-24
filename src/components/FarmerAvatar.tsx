import React from 'react';

interface FarmerAvatarProps {
  className?: string;
  size?: number;
}

const FarmerAvatar: React.FC<FarmerAvatarProps> = ({ className = '', size = 80 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 150 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Body */}
        <rect x="45" y="100" width="60" height="80" rx="10" fill="#4a90e2" />

        {/* Neck */}
        <rect x="67.5" y="80" width="15" height="20" fill="#e0b694" />

        {/* Towel */}
        <path d="M65 80 L60 95 L90 95 L85 80 Z" fill="#e0e0e0" />
        <path d="M60 95 L55 105 L95 105 L90 95" fill="#d0d0d0" />

        {/* Head */}
        <circle cx="75" cy="55" r="30" fill="#e0b694" />

        {/* Eyes */}
        <circle cx="65" cy="50" r="2" fill="black" />
        <circle cx="85" cy="50" r="2" fill="black" />

        {/* Smile */}
        <path d="M65 65 C 75 75, 85 75, 95 65" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Hat */}
        <path d="M25 30 L125 30 L75 0 Z" fill="#c29d6d" />
        
        {/* Hat Texture */}
        <path d="M75 0 L75 30" stroke="#a18259" strokeWidth="1" />
        <path d="M45 30 C 55 15, 95 15, 105 30" stroke="#a18259" strokeWidth="1" fill="none" />

      </svg>
    </div>
  );
};

export default FarmerAvatar;
