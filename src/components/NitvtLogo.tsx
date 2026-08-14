import React, { useState } from 'react';
import surendraAirOriginalLogo from '../assets/images/surendra_air_logo_original.png';

interface NitvtLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  showText?: boolean;
  textColor?: string;
  variant?: 'circle' | 'rounded' | 'badge' | 'flat';
}

export const NitvtLogo: React.FC<NitvtLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  textColor = 'text-white',
  variant = 'rounded',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    xs: 'w-8 h-8 text-xs',
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-xl',
    '2xl': 'w-32 h-32 text-2xl',
    custom: '',
  };

  const shapeClass =
    variant === 'circle'
      ? 'rounded-full aspect-square'
      : variant === 'badge'
      ? 'rounded-2xl shadow-lg ring-2 ring-red-500/40'
      : variant === 'flat'
      ? 'rounded-lg'
      : 'rounded-xl shadow-md ring-1.5 ring-red-500/30';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className={`relative ${sizeClasses[size]} shrink-0 ${shapeClass} overflow-hidden bg-white p-0.5 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center`}
      >
        {!imgError ? (
          <img
            src={surendraAirOriginalLogo}
            alt="सुरेन्द्र ऐर (Surendra Air) Official Emblem"
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dynamic Black Circular Arch */}
            <path
              d="M50 8 C75 8 94 28 94 53 C94 65 88 78 78 86 C86 75 88 62 86 50 C83 30 68 16 50 14 C35 14 24 22 17 33 C23 20 35 8 50 8 Z"
              fill="#000000"
            />
            {/* Upper secondary swirl */}
            <path
              d="M58 16 C78 18 90 35 88 56 C82 40 70 28 54 22 Z"
              fill="#000000"
            />
            
            {/* Tools standing in hand */}
            {/* Cutter */}
            <rect x="25" y="42" width="10" height="28" rx="2" transform="rotate(-25 25 42)" fill="#000000" />
            {/* Center Pliers */}
            <path d="M46 26 L54 26 L56 46 L59 70 L51 70 L49 54 L44 54 L41 70 L34 70 L37 46 Z" fill="#000000" />
            <circle cx="50" cy="42" r="3" fill="#ffffff" />
            {/* Wrench on Right */}
            <rect x="62" y="38" width="8" height="30" rx="1.5" transform="rotate(28 62 38)" fill="#000000" />

            {/* Stylized Red Hand cradle */}
            <path
              d="M15 76 C25 65 38 64 54 66 C65 67 72 64 73 60 C73 59 66 68 52 69 C38 70 28 73 18 88 C14 94 20 95 30 94 C46 92 68 82 72 62 C70 78 50 86 34 88 C22 90 14 84 15 76 Z"
              fill="#dc2626"
            />
            <path
              d="M15 76 L25 96 L14 96 Z"
              fill="#dc2626"
            />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-black text-base tracking-tight ${textColor}`}>Surendra Air</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 border border-red-800/60">
              Estd. 2064
            </span>
          </div>
          <span className="text-[11px] text-slate-300 font-medium line-clamp-1">
            Nepal Institute of Technical & Vocational Training (NITVT) Pvt. Ltd.
          </span>
          <span className="text-[9px] text-amber-400 font-semibold">ललितपुर, नेपाल</span>
        </div>
      )}
    </div>
  );
};

