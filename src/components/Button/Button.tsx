import React, { FC, ReactNode } from "react";
import './Button.css'

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button>{children}</button>
  )
}

export default Button;