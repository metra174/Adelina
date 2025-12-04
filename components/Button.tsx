import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  icon?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon = false, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 hover:shadow-xl hover:-translate-y-0.5 shadow-md border border-transparent focus:ring-gold-500",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-deepBlack hover:shadow-lg focus:ring-white",
    text: "bg-transparent text-white hover:text-gold-500 px-0 py-1 underline-offset-4 hover:underline shadow-none active:scale-100"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};