import React, { FC, ReactNode, useEffect } from "react";
import { StyledLayouts } from "./StyledLayouts";

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

const FileMange: FC<ButtonProps> = ({ className, children }) => {
  const handleClick = async () => {
    console.log(123)
  }

  useEffect(() => {
    console.log(123123123)
  }, [])

  return (
    <div>
      <StyledLayouts className={className} onClick={handleClick}>{ children }</StyledLayouts>
    </div>
  );
};

export default FileMange;
