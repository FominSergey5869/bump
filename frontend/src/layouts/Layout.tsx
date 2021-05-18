import Menu from '../components/Menu/Menu'
import { UserMenu } from '../containers/UserMenu/UserMenu'
import css from './Layout.module.scss'
type Props = {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <div>
        <UserMenu />
      </div>
      <div className={css.layout}>
        <div className={css.menu}>
          <Menu />
        </div>
        <div className={css.wrapper}>{children}</div>
        <div className={css.trends}></div>
      </div>
    </>
  )
}

export default Layout
