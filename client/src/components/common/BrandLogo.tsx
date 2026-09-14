import React from 'react';

interface BrandLogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ light = false, size = 'md' }) => {
  const sizeConfig = {
    sm: { text: 'text-base', sub: 'text-[9px]', icon: 20 },
    md: { text: 'text-xl', sub: 'text-[10px]', icon: 26 },
    lg: { text: 'text-3xl', sub: 'text-xs', icon: 36 },
  };

  const textColor = light ? 'text-travertine-50' : 'text-obsidian-900';
  const subColor = light ? 'text-travertine-300/70' : 'text-obsidian-900/60';
  const accentColor = light ? '#C7BBA8' : '#846F4E';

  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      {/* Monogram geometric symbol */}
      <svg
        width={sizeConfig[size].icon}
        height={sizeConfig[size].icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
      >
        <rect width="40" height="40" fill={light ? '#262422' : '#161514'} />
        <path d="M10 30V10H22C27.5 10 30 14 30 20C30 26 27.5 30 22 30H10Z" stroke={accentColor} strokeWidth="2.5" />
        <line x1="18" y1="10" x2="18" y2="30" stroke={accentColor} strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-serif tracking-tight font-normal ${sizeConfig[size].text} ${textColor}`}>
          STEFANIA DEL PAPA
        </span>
        <span className={`tracking-widest uppercase font-medium mt-1 ${sizeConfig[size].sub} ${subColor}`}>
          Sense Studio • Interior Architecture
        </span>
      </div>
    </div>
  );
};
