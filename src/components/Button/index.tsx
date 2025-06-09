import React from 'react';

// DaisyUI size mapping
const sizeClass = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

export type ButtonProps = {
  icon?: JSX.Element;
  text?: string;
  onClick?: () => void;
  size?: keyof typeof sizeClass;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function Button({
  icon,
  text,
  onClick,
  size = 'lg',
  className = '',
  type = 'button',
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn ${sizeClass[size]} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
      {children}
    </button>
  );
}
