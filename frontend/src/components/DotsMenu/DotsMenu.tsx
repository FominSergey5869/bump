import React from 'react'
import Icon from '../Icon'

import { CSSTransition } from 'react-transition-group'
import OutsideClickHandler from 'react-outside-click-handler'

import css from './DotsMenu.module.scss'

type Item = {
  label: string
  action: () => any
}

type Props = {
  items?: Item[]
}
const DotsMenu = ({ items }: Props) => {
  const nodeRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className={css.container}>
        <button
          type='button'
          className={css.container__button}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name='dotsMenu' />
        </button>

        <CSSTransition
          in={isOpen}
          timeout={300}
          nodeRef={nodeRef}
          classNames={{
            enter: css['popup-enter'],
            enterActive: css['popup-enter-active'],
            exit: css['popup-exit-active'],
            exitActive: css['popup-exit-active'],
          }}
          unmountOnExit
        >
          <div ref={nodeRef} className={css.popup}>
            {items?.map((item) => (
              <button
                key={item.label}
                className={css.popup__item}
                onClick={item.action}
              >
                {item.label}
              </button>
            ))}
          </div>
        </CSSTransition>
      </div>
    </OutsideClickHandler>
  )
}

export default DotsMenu
