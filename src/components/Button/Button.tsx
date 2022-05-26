import React, { ReactNode, Component } from "react";
import './Button.css'

export interface ButtonProps {
  children?: ReactNode;
}

class Button extends Component<ButtonProps> {
  render () {
    return (
      <button>{ this.props.children }</button>
    )
  }
}

export default Button;