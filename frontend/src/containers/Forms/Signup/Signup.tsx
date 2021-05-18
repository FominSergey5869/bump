import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../../components/Button/Button'
import Input from '../Fields/Input/Input'

import { required } from '../Validators'

import { signupUser } from '../../../store/user/actions'
import { selectIsUserLoading } from '../../../store/user/selectors'

import { SignupData } from '../../../services/api/authAPI'

import css from './Signup.module.scss'

const Signup = () => {
  const dispatch = useDispatch()
  const isUserLoading = useSelector(selectIsUserLoading)

  const onSubmit = async (values: SignupData) => {
    dispatch(signupUser(values))
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          email: 'test@test.test',
          username: 'test',
          fullname: 'fullname',
          password: 'qwe123',
          password2: 'qwe123',
        }}
        render={({ handleSubmit, form, values, submitError, valid }) => (
          <>
            <form onSubmit={handleSubmit}>
              <div className={css.field}>
                <Field
                  name='email'
                  component={Input}
                  placeholder='Email'
                  validate={required}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='username'
                  component={Input}
                  placeholder='Username'
                  validate={required}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='fullname'
                  component={Input}
                  placeholder='Full name'
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
              <div className={css.field}>
                <Field
                  name='password2'
                  type='password'
                  component={Input}
                  placeholder='Confirm password'
                  validate={required}
                />
              </div>

              <Button disabled={isUserLoading || !valid} type='submit'>
                Sign up
              </Button>
            </form>
          </>
        )}
      />
    </>
  )
}

export default Signup
