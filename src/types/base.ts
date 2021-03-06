import { ReactNode, CSSProperties } from 'react'

export interface KpComponent {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export default KpComponent