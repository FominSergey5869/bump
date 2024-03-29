import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Button from '../../components/Button/Button'
import Icon from '../../components/Icon'
import Modal from '../../components/Modal/Modal'

import Auth from '../../containers/Forms/Auth/Auth'
import Signup from '../../containers/Forms/Signup/Signup'

import { RootStateType } from '../../store'
import { setNotification } from '../../store/notification/actions'

import {
  selectIsAuthentification,
  selectIsUserError,
} from '../../store/user/selectors'

import css from './WelcomePage.module.scss'
const WelcomPage = () => {
  const [logIn, setLogIn] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const history = useHistory()
  const dispatch = useDispatch()
  const { isAuthentification, isNoUser } = useSelector(
    (state: RootStateType) => ({
      isAuthentification: selectIsAuthentification(state),
      isNoUser: selectIsUserError(state),
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isAuthentification) {
      history.push('/home')
    }
  }, [isAuthentification, history, dispatch])

  return (
    <>
      <Modal isOpen={logIn} onClose={() => setLogIn(false)}>
        <Auth />
      </Modal>
      <Modal isOpen={signUp} onClose={() => setSignUp(false)}>
        <Signup />
      </Modal>
      {isNoUser && (
        <div className={css.container}>
          <div className={css.container__logo}>
            <Icon name='logo' width='100%' height='100%' />
          </div>
          <div className={css.container__buttons}>
            <div>
              <Button
                wide={true}
                primary={false}
                onClick={() => setSignUp(true)}
              >
                Sign up
              </Button>
            </div>
            <div>
              <Button wide={true} onClick={() => setLogIn(true)}>
                Log in
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WelcomPage
