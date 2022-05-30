import React, { FC } from "react";
import { BasisLayoutProps } from '../types/file-manage'

const BasisLayout: FC<BasisLayoutProps> = ({ title }) => {
  return (
    <div className="basis-layout">
      <div className="kp file-title">{title}</div>
      <div className="kp file-container">
        <div className="kp file-sidebar">
          <div className="kp file-group">
            <div className="kp file-group-title">图片分组</div>
            <ul className="kp file-group-content">
              <li className="kp file-group-list">
                <div className="kp file-group-item-title">全部图片</div>
                <div className="kp file-group-item">图片分组1</div>
                <div className="kp file-group-item">图片分组1</div>
                <div className="kp file-group-item">图片分组1</div>
                <div className="kp file-group-item">图片分组1</div>
                <div className="kp file-group-item">未分组</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="kp file-content">
          
        </div>
      </div>
    </div>
  )
}

export default BasisLayout