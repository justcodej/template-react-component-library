import React, { FC } from "react";
import BasisLayout from './basis-layout'
import { Button } from 'antd'
import { KpFileManageProps } from '../../types/file-manage'

const KpFileManage: FC<KpFileManageProps> = ({ className, children }) => {
  return (
    <div>
      <Button type='primary'>按钮1</Button>
      <BasisLayout className={className}>{ children }</BasisLayout>
    </div>
  );
};

export default KpFileManage;
