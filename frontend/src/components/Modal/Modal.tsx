import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Icon from '../Icon'

import Portal from '../Portal/Portal'

import css from './Modal.module.scss'

type Props = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const nodeRef = React.useRef(null)
  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        nodeRef={nodeRef}
        classNames={{
          enter: css['modal-enter'],
          enterActive: css['modal-enter-active'],
          exit: css['modal-exit-active'],
          exitActive: css['modal-exit-active'],
        }}
        unmountOnExit
      >
        <Portal>
          <div className={css.modalOverlay} ref={nodeRef}>
            <div className={css.modalWindow}>
              <button className={css.close} onClick={() => onClose()}>
                <Icon name='close' />
              </button>
              <div>{children}</div>
            </div>
          </div>
        </Portal>
      </CSSTransition>
    </>
  )
}

export default Modal
