import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import Bump from '../../components/Bump/Bump'
import Preloader from '../../components/Preloader/Preloader'
import PageHead from '../../components/PageHead/PageHead'

import { SendBump } from '../../containers/Forms/SendBump/SendBump'

import { fetchBumps } from '../../store/bumps/actions'
import {
  selectBumpsItems,
  selectIsBumpsLoading,
} from '../../store/bumps/selectors'

import { selectIsAuthentification } from '../../store/user/selectors'
import { RootStateType } from '../../store'

import css from './Home.module.scss'

const selector = (state: RootStateType) => ({
  isAuthentification: selectIsAuthentification(state),
  bumps: selectBumpsItems(state),
  isBumpsLoading: selectIsBumpsLoading(state),
})

function Home() {
  const dispatch = useDispatch()
  const { isAuthentification, bumps, isBumpsLoading } = useSelector(
    selector,
    shallowEqual
  )
  useEffect(() => {
    dispatch(fetchBumps())
  }, [dispatch])

  return (
    <>
      <PageHead title='Home' />
      {isAuthentification && (
        <div className={css.sendBump}>
          <div className={css.sendBump__avatar}>
            <Avatar />
          </div>

          <div className={css.sendBump__form}>
            <SendBump />
          </div>
        </div>
      )}

      {isBumpsLoading ? (
        <div className={css.center}>
          <Preloader />
        </div>
      ) : (
        bumps?.map((el) => {
          return <Bump key={el._id} {...el} />
        })
      )}
    </>
  )
}

export default Home
