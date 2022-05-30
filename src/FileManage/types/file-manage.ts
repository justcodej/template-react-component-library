import { ComponentClass, ReactNode } from 'react'
import base from './base'

interface SettingsProps {
  maskClosable?: boolean;
}

export interface ModalProps extends KpFileManageProps {
  title?: string;
  visible: boolean;
  width?: number | string;
  height?: number | string;
  onClose?: () => void;
}

export interface KpFileManageProps extends base {
  settings?: SettingsProps;
  title?: string;
  visible: boolean;
}

export interface BasisLayoutProps extends base {
  title?: string;
}

declare const KpFileManage: ComponentClass<KpFileManageProps>

export default KpFileManage