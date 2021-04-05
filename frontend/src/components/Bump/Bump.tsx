import { Link } from 'react-router-dom'
import { BumpType } from '../../store/bumps/types'
import { formatDate } from '../../utils/formatDate'
import Avatar from '../Avatar/Avatar'
import DotsMenu from '../DotsMenu/DotsMenu'
import css from './Bump.module.scss'

const Bump = ({ _id, text, user, createdAt }: BumpType) => {
  return (
    <div className={css.bump}>
      <Link to={`/bump/${_id}`} className={css.link}>
        <div className={css.container}>
          <div className={css.container__avatar}>
            <Avatar />
          </div>
          <div className={css.container__main}>
            <div className={css.container__main__head}>
              <div className={css.container__main__head__left}>
                <b>{user.fullname}</b> <span>{`@${user.username}`}</span>
                <span>·</span>
                <span>{formatDate(new Date(createdAt))}</span>
              </div>
            </div>
            <p>{text}</p>
          </div>
        </div>
      </Link>
      <div className={css.bump__menu}>
        <DotsMenu />
      </div>
    </div>
  )
}

export default Bump
