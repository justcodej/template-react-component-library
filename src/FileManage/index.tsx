import React, { Component } from 'react';
import { KpFileManageProps } from './types/file-manage'
import Modal from './Modal'
import { StyledFileManage } from './styled'

interface KpFileManageState {
  isVisible: boolean;
}

class FileManage extends Component<KpFileManageProps, KpFileManageState> {
  constructor (props: KpFileManageProps | Readonly<KpFileManageProps>) {
    super(props)
    const { visible } = props
    this.state = {
      isVisible: visible
    }
  }
  
  handleClick = () => {
    const { isVisible } = this.state
    this.setState({ isVisible: !isVisible })
  }

  render () {
    const { isVisible } = this.state
    const { title, settings } = this.props
    return (
      <StyledFileManage>
        <div className='kp file-list'>
          <div className="file-list-item" onClick={this.handleClick}>
            <span>选择</span>
          </div>
        </div>
        <Modal onClose={this.handleClick} visible={isVisible} title={title} settings={settings}></Modal>
      </StyledFileManage>
    )
  }
}

export default FileManage
