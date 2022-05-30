import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';
import Basislayout from '../BasisLayout';
import { ModalProps } from '../types/file-manage'
import { ModalWarp, ModalWarpper, ModalContainer, CSSTransitionGlobalStyle } from './styled'

const Modal: FC<ModalProps> = ({ visible, title, width, height, settings, onClose }) => {

  return (
    ReactDOM.createPortal(
      <ModalWarp>
        <CSSTransitionGlobalStyle />
        <CSSTransition
          in={visible}
          timeout={500}
          unmountOnExit
          classNames='kp-modal'
        >
          <ModalWarpper style={{ width, height }}>
            <div className="kp-modal-mask" onClick={onClose}></div>
            <ModalContainer>
              <Basislayout title={title}></Basislayout>
            </ModalContainer>
          </ModalWarpper>
        </CSSTransition>
      </ModalWarp>,
      document.body
    )
  )
}

export default Modal