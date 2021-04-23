import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../../components/Button/Button'
import Input from '../Fields/Input/Input'

import { required } from '../Validators'

import { loginUser } from '../../../store/user/actions'
import { selectIsUserLoading } from '../../../store/user/selectors'

import css from './Auth.module.scss'

type AuthFormValues = {
  username: string
  password: string
}

const Auth = () => {
  const dispatch = useDispatch()
  const isUserLoading = useSelector(selectIsUserLoading)

  const onSubmit = async (values: AuthFormValues) => {
    dispatch(loginUser(values))
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

              <Button disabled={isUserLoading || !valid} type='submit'>
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
