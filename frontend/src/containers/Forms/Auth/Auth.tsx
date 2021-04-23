import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsBumpStatusLoading } from '../../../store/bumps/selectors'

import Button from '../../../components/Button/Button'
import Input from '../Fields/Input/Input'

import { required } from '../Validators'

import { setNotification } from '../../../store/notification/actions'

import { AuthAPI } from '../../../services/api/authAPI'

import css from './Auth.module.scss'

type AuthFormValues = {
  username: string
  password: string
}

const Auth = () => {
  const dispatch = useDispatch()
  const isBumpLoading = useSelector(selectIsBumpStatusLoading)

  const onSubmit = async (values: AuthFormValues) => {
    await AuthAPI.signIn(values)
      .then((res) => {
        if (res.status === 'success') {
          console.log(res)
        }
      })
      .catch((e) => {
        dispatch(
          setNotification({
            type: 'warning',
            message: 'Wrong login or password',
          })
        )
      })
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, values, submitError, valid }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className={css.field}>
                <Field
                  name='username'
                  component={Input}
                  placeholder='Username or Email'
                  validate={required}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='password'
                  type='password'
                  component={Input}
                  placeholder='Password'
                  validate={required}
                />
              </div>

              <Button disabled={isBumpLoading || !valid} type='submit'>
                Log in
              </Button>
            </form>
          </>
        )}
      />
    </>
  )
}

export default Auth
