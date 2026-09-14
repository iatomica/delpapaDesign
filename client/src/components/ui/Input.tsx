import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`bg-white/80 border ${error ? 'border-red-500 focus:border-red-600' : 'border-obsidian-900/15 focus:border-bronze-500'} px-3.5 py-2.5 text-sm text-obsidian-900 placeholder:text-obsidian-900/40 focus:outline-none transition-colors duration-150 rounded-none ${className}`}
        {...props}
      />
      {helperText && !error && (
        <span className="text-[11px] text-obsidian-900/60">{helperText}</span>
      )}
      {error && (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xs uppercase tracking-architectural text-obsidian-900/80 font-medium">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`bg-white/80 border ${error ? 'border-red-500 focus:border-red-600' : 'border-obsidian-900/15 focus:border-bronze-500'} px-3.5 py-2.5 text-sm text-obsidian-900 placeholder:text-obsidian-900/40 focus:outline-none transition-colors duration-150 rounded-none resize-y min-h-[90px] ${className}`}
        {...props}
      />
      {helperText && !error && (
        <span className="text-[11px] text-obsidian-900/60">{helperText}</span>
      )}
      {error && (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      )}
    </div>
  );
};
