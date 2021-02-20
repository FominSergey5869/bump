import React from 'react'
import cn from 'classnames'
import css from './Button.module.scss'

type ButtonType = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonType) => {
  console.log(css)
  return (
    <div className={cn(css.red, { [css.kek]: true })}>
      {children}
      <span>azzaza</span>
    </div>
  )
}

export default Button
