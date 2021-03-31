import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '../../components/Avatar/Avatar'
import { SendBump } from '../../components/Forms/SendBump/SendBump'
import PageHead from '../../components/PageHead/PageHead'
import { fetchBumps } from '../../store/bumps/actions'
import {
  selectBumpsItems,
  selectIsBumpsLoading,
} from '../../store/bumps/selectors'

import css from './Home.module.scss'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBumps())
  }, [dispatch])
  const bumps = useSelector(selectBumpsItems)
  const isBumpsLoading = useSelector(selectIsBumpsLoading)

  return (
    <>
      <PageHead title='Home' />
      <div className={css.sendBump}>
        <div className={css.sendBump__avatar}>
          <Avatar />
        </div>
        <div className={css.sendBump__form}>
          <SendBump />
        </div>
      </div>

      {isBumpsLoading ? (
        <div>BUMPS LOADING</div>
      ) : (
        bumps &&
        bumps.map((el) => {
          return (
            <div key={el._id}>
              <b>{`Имя: ${el.user.fullname}`}</b>
              <img src={el.user.avatarUrl} alt='avatar' />
              {el.text}
            </div>
          )
        })
      )}
    </>
  )
}

export default Home