import React from "react";
import Image from "next/image";

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Sparkle({ className = "", size = 20 }: SparkleProps) {
  return (
    <span className={`inline-flex items-center justify-center select-none ${className}`}>
      <Image
        src="/media/images/brand/sparkle.png"
        alt="✦"
        width={size}
        height={size}
        className="object-contain"
      />
    </span>
  );
}

export function SparkleStar({ className = "text-[#b49775] inline-block", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C12.5 7 17 11.5 24 12C17 12.5 12.5 17 12 24C11.5 17 7 12.5 0 12C7 11.5 11.5 7 12 0Z" />
    </svg>
  );
}
