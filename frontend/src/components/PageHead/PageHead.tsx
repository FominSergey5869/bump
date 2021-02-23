import React from 'react'
import css from './PageHead.module.scss'
type Props = {
  title?: string
}
const PageHead = ({ title }: Props) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
    </div>
  )
}

export default PageHead
