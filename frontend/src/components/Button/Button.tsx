import React from 'react'
import css from './Button.module.scss'

type ButtonType = {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonType) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
