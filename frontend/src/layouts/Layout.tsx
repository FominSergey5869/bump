import * as React from 'react'
import Menu from '../components/Menu/Menu'
import css from './Layout.module.scss'
type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <div className={css.layout}>
      <div className={css.menu}>
        <Menu />
      </div>
      <div className={css.wrapper}>{children}</div>
      <div className={css.trends}></div>
    </div>
  )
}

export default Layout
