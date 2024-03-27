import React from "react";

const Button = ({
  children,
  className,
  type,
  onClick,
  disabled,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`
          border rounded-lg p-4  capitalize
          font-lato font-semibold 
          ${className}
        `}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
