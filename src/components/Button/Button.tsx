import React, { FC, ReactNode } from "react";
import './Button.css'

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  ref?: React.RefObject<string>;
}

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <div>
      <button className={className}>{ children }</button>
    </div>
  );
};

export default Button;