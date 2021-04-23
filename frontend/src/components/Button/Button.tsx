import React from 'react'

import css from './Button.module.scss'
import cn from 'classnames'

type ButtonType = {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
  wide?: boolean
  primary?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  disabled,
  type,
  wide,
  primary = true,
  onClick,
}: ButtonType) => {
  return (
    <button
      className={cn(
        css.btn,
        { [css.wide]: wide },
        { [css.secondary]: !primary }
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
