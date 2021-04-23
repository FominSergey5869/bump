import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Button from '../../components/Button/Button'
import Icon from '../../components/Icon'
import Modal from '../../components/Modal/Modal'

import Auth from '../../containers/Forms/Auth/Auth'

import { selectIsAuthentification } from '../../store/user/selectors'

import css from './WelcomPage.module.scss'
const WelcomPage = () => {
  const [signUp, setSignUp] = useState(false)

  const isAuthentification = useSelector(selectIsAuthentification)
  return (
    <>
      {isAuthentification && <Redirect to='/home' />}
      <Modal isOpen={signUp} onClose={() => setSignUp(false)}>
        <Auth />
      </Modal>
      <div className={css.container}>
        <div className={css.container__logo}>
          <Icon name='logo' width='100%' height='100%' />
        </div>
        <div className={css.container__buttons}>
          <div>
            <Button wide={true} primary={false}>
              Sign up
            </Button>
          </div>
          <div>
            <Button wide={true} onClick={() => setSignUp(true)}>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomPage
