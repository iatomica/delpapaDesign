import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'bronze' | 'ghost' | 'outline-dark' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 btn-tactile whitespace-nowrap cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-xs tracking-wider uppercase px-3 py-1.5 gap-1.5 rounded-none',
    md: 'text-sm tracking-architectural uppercase px-5 py-2.5 gap-2 rounded-none',
    lg: 'text-sm md:text-base tracking-architectural uppercase px-7 py-3.5 gap-2.5 rounded-none',
  };

  const variantClasses = {
    primary: 'bg-obsidian-900 text-travertine-50 hover:bg-obsidian-800 active:bg-black shadow-sm',
    secondary: 'bg-travertine-200 text-obsidian-900 hover:bg-travertine-300 active:bg-travertine-400',
    bronze: 'bg-bronze-500 text-white hover:bg-bronze-600 active:bg-bronze-700 shadow-sm',
    ghost: 'bg-transparent text-obsidian-900 hover:bg-obsidian-900/5 active:bg-obsidian-900/10',
    'outline-dark': 'bg-transparent text-obsidian-900 border border-obsidian-900/20 hover:border-obsidian-900 hover:bg-obsidian-900/5',
    'outline-light': 'bg-transparent text-travertine-50 border border-white/25 hover:border-white hover:bg-white/10',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon ? (
        <span className="flex-shrink-0 text-lg">{icon}</span>
      ) : null}
      <span>{children}</span>
    </button>
  );
};
