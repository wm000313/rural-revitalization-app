import React from 'react';

interface FarmerAvatarProps {
  className?: string;
  size?: number;
}

const FarmerAvatar: React.FC<FarmerAvatarProps> = ({ className = '', size = 80 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Body/Clothes - Simple Green Shirt */}
        <path
          d="M20 90C20 75 30 65 50 65C70 65 80 75 80 90V100H20V90Z"
          fill="#16a34a"
        />
        
        {/* Neck Scarf/Towel - White */}
        <path
          d="M35 65C35 65 40 75 50 75C60 75 65 65 65 65V75C65 85 60 90 50 90C40 90 35 85 35 75V65Z"
          fill="#f8fafc"
        />
        <path
          d="M35 65L30 85M65 65L70 85"
          stroke="#e2e8f0"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Face - Warm Skin Tone */}
        <circle cx="50" cy="45" r="22" fill="#F5C595" />
        
        {/* Ears */}
        <circle cx="28" cy="45" r="4" fill="#F5C595" />
        <circle cx="72" cy="45" r="4" fill="#F5C595" />

        {/* Eyes - Joyful Dots */}
        <circle cx="42" cy="42" r="2" fill="#1a1a1a" />
        <circle cx="58" cy="42" r="2" fill="#1a1a1a" />
        
        {/* Smile - Warm and Wide */}
        <path
          d="M40 52C40 52 45 58 50 58C55 58 60 52 60 52"
          stroke="#854d0e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Rosy Cheeks */}
        <circle cx="35" cy="50" r="3" fill="#fb7185" fillOpacity="0.3" />
        <circle cx="65" cy="50" r="3" fill="#fb7185" fillOpacity="0.3" />

        {/* Straw Hat - Conical/Traditional */}
        <path
          d="M15 42C15 42 30 38 50 38C70 38 85 42 85 42L50 15L15 42Z"
          fill="#fde047"
        />
        <path
          d="M15 42C15 42 30 45 50 45C70 45 85 42 85 42"
          stroke="#ca8a04"
          strokeWidth="1.5"
          fill="#fef08a"
        />
        {/* Hat Texture Lines */}
        <path d="M50 15L30 40M50 15L45 38M50 15L55 38M50 15L70 40" stroke="#ca8a04" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </div>
  );
};

export default FarmerAvatar;
