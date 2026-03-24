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
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <radialGradient id="faceGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FAD6A5" />
            <stop offset="100%" stopColor="#E0AC69" />
          </radialGradient>
          <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2F0D9" />
            <stop offset="100%" stopColor="#A9D18E" />
          </linearGradient>
          <linearGradient id="hatGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="100%" stopColor="#D4AC0D" />
          </linearGradient>
        </defs>

        {/* Back of Towel */}
        <path d="M50 140 C 50 120, 150 120, 150 140 L 140 180 C 140 190, 60 190, 60 180 Z" fill="#F8F9F9" />

        {/* Shirt */}
        <path d="M40 150 C 40 130, 160 130, 160 150 L 180 200 L 20 200 Z" fill="url(#shirtGradient)" />
        {/* Shirt Collar/V-neck */}
        <path d="M85 140 L 100 170 L 115 140" fill="#E0AC69" />

        {/* Front of Towel (Hanging down) */}
        <path d="M60 140 C 50 160, 60 180, 70 190 C 80 180, 85 160, 80 140 Z" fill="#FFFFFF" />
        <path d="M140 140 C 150 160, 140 180, 130 190 C 120 180, 115 160, 120 140 Z" fill="#FFFFFF" />
        {/* Towel details */}
        <path d="M65 175 L 75 175 M 125 175 L 135 175" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />

        {/* Neck */}
        <rect x="85" y="110" width="30" height="35" fill="url(#faceGradient)" />

        {/* Head */}
        <ellipse cx="100" cy="85" rx="38" ry="42" fill="url(#faceGradient)" />

        {/* Ears */}
        <path d="M62 85 C 55 80, 55 95, 62 95" fill="url(#faceGradient)" />
        <path d="M138 85 C 145 80, 145 95, 138 95" fill="url(#faceGradient)" />

        {/* Cheeks (Blush) */}
        <ellipse cx="75" cy="95" rx="8" ry="5" fill="#FF8A65" opacity="0.4" />
        <ellipse cx="125" cy="95" rx="8" ry="5" fill="#FF8A65" opacity="0.4" />

        {/* Eyes (Smiling curves) */}
        <path d="M72 80 C 78 75, 84 75, 88 80" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M112 80 C 118 75, 124 75, 128 80" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Eyebrows */}
        <path d="M70 70 C 78 65, 86 68, 90 72" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M110 72 C 114 68, 122 65, 130 70" stroke="#4E342E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M100 85 C 100 92, 105 92, 105 95" stroke="#BCAAA4" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Smile (Big, joyful open mouth) */}
        <path d="M82 105 C 82 120, 118 120, 118 105 Z" fill="#5D4037" />
        <path d="M85 105 C 85 110, 115 110, 115 105 Z" fill="#FFFFFF" /> {/* Teeth */}
        <path d="M92 112 C 96 115, 104 115, 108 112 Z" fill="#FF7043" /> {/* Tongue */}

        {/* Traditional Straw Hat (Conical shape) */}
        <path d="M20 50 L 180 50 L 100 10 Z" fill="url(#hatGradient)" />
        {/* Hat brim thickness */}
        <path d="M20 50 C 60 60, 140 60, 180 50 C 140 40, 60 40, 20 50 Z" fill="#D4AC0D" />
        {/* Hat interior (shadow) */}
        <path d="M20 50 C 60 60, 140 60, 180 50 C 140 55, 60 55, 20 50 Z" fill="#B7950B" />
        
        {/* Hat Texture (Woven lines) */}
        <path d="M100 10 L 100 55 M 80 18 L 60 52 M 120 18 L 140 52 M 60 25 L 140 25 M 40 38 L 160 38" stroke="#B7950B" strokeWidth="1.5" opacity="0.6" fill="none" />
        
        {/* Hat String (Under the chin) */}
        <path d="M65 52 C 80 110, 120 110, 135 52" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="4 2" />

      </svg>
    </div>
  );
};

export default FarmerAvatar;
