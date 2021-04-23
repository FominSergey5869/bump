import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddBump } from '../../../store/bumps/actions'
import { selectIsBumpStatusLoading } from '../../../store/bumps/selectors'

import Button from '../../../components/Button/Button'
import Icon from '../../../components/Icon'
import TextAreaInput from '../Fields/TextAreaInput/TextAreaInput'

import { composeValidators, maxBumpLength, required } from '../Validators'

import css from './SendBump.module.scss'
type Values = {
  bumptext: string
}

export const SendBump = () => {
  const dispatch = useDispatch()
  const isBumpLoading = useSelector(selectIsBumpStatusLoading)
  const onSubmit = async (values: Values) => {
    dispatch(fetchAddBump(values.bumptext))
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, values, submitError, valid }) => (
          <>
            <form
              onSubmit={async (event) => {
                await handleSubmit(event)
                form.reset()
              }}
            >
              <div className={css.field}>
                <Field
                  name='bumptext'
                  component={TextAreaInput}
                  placeholder='What happened? ...'
                  validate={composeValidators(required, maxBumpLength)}
                />
              </div>

              <div className={css.interface}>
                <div className={css.interface__left}>
                  <button className={css.interface__left__button}>
                    <Icon name='emoji' width='25' height='25' />
                  </button>
                  <button className={css.interface__left__button}>
                    <Icon name='image' width='25' height='25' />
                  </button>
                  <button className={css.interface__left__button}>
                    <Icon name='file' width='25' height='25' />
                  </button>
                </div>
                <div className={css.interface__right}>
                  <span className={css.interface__right__length}>
                    {`${values.bumptext ? values.bumptext.length : 0} / 160`}
                  </span>
                  <Button disabled={isBumpLoading || !valid} type='submit'>
                    Bump
                  </Button>
                </div>
              </div>
              {submitError && <div className='error'>{submitError}</div>}
            </form>
          </>
        )}
      />
    </>
  )
}
