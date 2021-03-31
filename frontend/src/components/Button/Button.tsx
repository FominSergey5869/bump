import React from 'react'
import css from './Button.module.scss'

type ButtonType = {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit' | undefined
  onClick?: () => void
}

const Button = ({ children, disabled, type, onClick }: ButtonType) => {
  return (
    <button
      className={css.btn}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
