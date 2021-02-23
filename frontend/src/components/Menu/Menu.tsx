import * as React from 'react'
import { Link } from 'react-router-dom'

import css from './Menu.module.scss'

type Props = {}
const Menu = (props: Props) => {
  return (
    <div className={css.container}>
      <ul className={css.menu}>
        <li>
          <Link to='/'> HOME </Link>
        </li>
        <li>
          <Link to='/'> BOOKMARKS </Link>
        </li>
        <li>
          <Link to='/'> NOTIFICATION </Link>
        </li>
        <li>
          <Link to='/'> PROFIE </Link>
        </li>
      </ul>
    </div>
  )
}
export default Menu
