import { ComponentClass } from 'react'
import base from './base'

interface SettingsProps {
  title?: string;
}

export interface KpFileManageProps extends base {
  visible?: boolean;
  settings?: SettingsProps;
}

export interface BasisLayoutProps extends base {
  
}

declare const KpFileManage: ComponentClass<KpFileManageProps>

export default KpFileManage