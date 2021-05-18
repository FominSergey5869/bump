import React, { useCallback, useEffect, useRef } from 'react'

import { CSSTransition } from 'react-transition-group'
import Portal from '../Portal/Portal'

import { useDispatch, useSelector } from 'react-redux'
import { selectNotification } from '../../store/notification/selectors'

import css from './Notification.module.scss'
import { removeNotification } from '../../store/notification/actions'

const Notification = () => {
  const nodeRef = useRef(null)
  const timer = useRef<null | ReturnType<typeof setTimeout>>()
  const dispatch = useDispatch()
  const { isShow, data } = useSelector(selectNotification)

  useEffect(() => {
    if (isShow) {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
    }
  }, [dispatch, isShow, data])

  const onClose = useCallback(() => {
    dispatch(removeNotification())
  }, [dispatch])

  return (
    <>
      <CSSTransition
        in={isShow}
        timeout={300}
        nodeRef={nodeRef}
        classNames={{
          enter: css['notification-enter'],
          enterActive: css['notification-enter-active'],
          exit: css['notification-exit-active'],
          exitActive: css['notification-exit-active'],
        }}
        unmountOnExit
      >
        <Portal id='notification-root-portal'>
          <div className={css.container} ref={nodeRef} onClick={onClose}>
            {data?.message}
          </div>
        </Portal>
      </CSSTransition>
    </>
  )
}

export default Notification
