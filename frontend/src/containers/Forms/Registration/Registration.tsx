import React from 'react'
import { Form, Field } from 'react-final-form'
import { useSelector } from 'react-redux'
import { selectIsBumpStatusLoading } from '../../../store/bumps/selectors'

import Button from '../../../components/Button/Button'
import Input from '../Fields/Input/Input'

import { composeValidators, maxBumpLength, required } from '../Validators'

import css from './Registration.module.scss'
type Values = {
  bumptext: string
}

const Registration  = () => {
  const isBumpLoading = useSelector(selectIsBumpStatusLoading)

  const onSubmit = async (values: Values) => {
    console.log(values)
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
                  name='fullname'
                  component={Input}
                  placeholder='Full name'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='username'
                  component={Input}
                  placeholder='Login'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='email'
                  type='email'
                  component={Input}
                  placeholder='E-mail'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='password'
                  type='password'
                  component={Input}
                  placeholder='Password'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>
              <div className={css.field}>
                <Field
                  name='password2'
                  type='password'
                  component={Input}
                  placeholder='Confirm password'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>

              <Button disabled={isBumpLoading || !valid} type='submit'>
                Sign up
              </Button>
            </form>
          </>
        )}
      />
    </>
  )
}

export default Registration
