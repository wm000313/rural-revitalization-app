import React from 'react';

interface FarmerAvatarProps {
  className?: string;
  size?: number;
}

const FarmerAvatar: React.FC<FarmerAvatarProps> = ({ className = '', size = 80 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Hat */}
        <path d="M25 50 C25 40, 95 40, 95 50 L85 55 C85 50, 35 50, 35 55 Z" fill="#FBBF24" />
        <path d="M60 15 C40 15, 20 45, 25 50 C25 40, 95 40, 95 50 C100 45, 80 15, 60 15 Z" fill="#FDE68A" stroke="#FBBF24" strokeWidth="2" />

        {/* Head */}
        <circle cx="60" cy="65" r="28" fill="#FFDDBB" />

        {/* Eyes */}
        <circle cx="48" cy="62" r="3" fill="#6D4C41" />
        <circle cx="72" cy="62" r="3" fill="#6D4C41" />

        {/* Smile */}
        <path d="M50 75 Q60 85, 70 75" stroke="#B95C00" strokeWidth="3" strokeLinecap="round" />

        {/* Shirt */}
        <path d="M30 90 C30 80, 90 80, 90 90 L90 110 C90 120, 30 120, 30 110 Z" fill="#4CAF50" />
        
        {/* Overalls */}
        <path d="M40 95 L40 85 C40 75, 80 75, 80 85 L80 95" fill="#388E3C" />
        <path d="M40 85 L30 110 M80 85 L90 110" stroke="#2E7D32" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default FarmerAvatar;
