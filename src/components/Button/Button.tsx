import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  cyanite?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, cyanite }) => {
  return (
    <button className={cyanite ? "button button-cyanite" : "button"}>
      {children}
    </button>
  );
};
