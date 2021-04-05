import * as React from 'react'
import css from './Avatar.module.scss'
type Props = {
  src?: string
}
const Avatar = ({ src }: Props) => {
  return (
    <div
      className={css.container}
      style={{ backgroundImage: src ? `url(${src})` : 'url(/avatar.jpg)' }}
    ></div>
  )
}

export default Avatar