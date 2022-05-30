import styled, { createGlobalStyle } from 'styled-components'

export const ModalWarp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const ModalWarpper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  .kp-modal-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0,.5);
    cursor: pointer;
  }
`

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 80vw;
  height: 80vh;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
`

export const CSSTransitionGlobalStyle = createGlobalStyle`
  // 动画CSS
  .kp-modal-enter {
    opacity: 0;
  }
  .kp-modal-enter-active {
    opacity: 1;
    transition: opacity 500ms, transform 1s;
  }
  .kp-modal-exit {
    opacity: 1;
  }
  .kp-modal-exit-active {
    opacity: 0;
    transition: opacity 500ms, transform 1s;
  }
`