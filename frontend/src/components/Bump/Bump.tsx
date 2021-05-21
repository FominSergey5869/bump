import { Link } from 'react-router-dom'
import { BumpType } from '../../store/bumps/types'
import { formatDate } from '../../utils/formatDate'
import Avatar from '../Avatar/Avatar'
import DotsMenu from '../DotsMenu/DotsMenu'

import ImageZoom from 'react-medium-image-zoom'

import css from './Bump.module.scss'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../store/user/selectors'

const Bump = ({ _id, text, images, user, createdAt }: BumpType) => {
  const currentUser = useSelector(selectUserData)
  const dotsMenuData: {
    label: string
    action: () => void
  }[] = []

  if (user._id === currentUser._id) dotsMenuData.push({ label: 'Remove bump', action: () => alert('kek') })

  return (
    <div className={css.bump}>
      <Link to={`/bump/${_id}`} className={css.link}>
        <div className={css.container}>
          <div className={css.container__avatar}>
            <Avatar />
          </div>
          <div className={css.container__main}>
            <div className={css.container__main__head}>
              <b>{user.fullname}</b> <span>{`@${user.username}`}</span>
              <span>·</span>
              <span>{formatDate(new Date(createdAt))}</span>
            </div>
            <p>{text}</p>

            <div className={css.container__main__images}>
              {images.map((url) => (
                <div
                  className={css.container__main__images__item}
                  key={url}
                  onClick={(e) => e.preventDefault()}
                >
                  <ImageZoom
                    image={{
                      src: url,
                      alt: 'bump_image',
                      className: 'img',
                    }}
                    zoomImage={{
                      src: url,
                      alt: 'bump_image',
                      className: 'img--zoomed',
                    }}
                    defaultStyles={{
                      overlay: { backgroundColor: 'rgb(0,0,0)' },
                    }}
                  />
                </div>
              ))}
            </div>
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
