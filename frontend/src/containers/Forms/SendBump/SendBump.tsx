import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAddBump,
  setAddBumpLoadingStatus,
} from '../../../store/bumps/actions'
import { selectIsBumpStatusLoading } from '../../../store/bumps/selectors'

import Button from '../../../components/Button/Button'
import TextAreaInput from '../Fields/TextAreaInput/TextAreaInput'
import MultipleImg from '../Fields/MultipleImg/MultipleImg'

import { composeValidators, maxBumpLength, required } from '../Validators'

import { LoadingStatus } from '../../../store/types'

import { uploadImage } from '../../../utils/uploadImage'

import css from './SendBump.module.scss'

type FileObj = {
  url: string
  file: File
}

type Values = {
  bumptext: string
  images: FileObj[]
}

export const SendBump = () => {
  const dispatch = useDispatch()
  const isBumpLoading = useSelector(selectIsBumpStatusLoading)

  const onSubmit = async (values: Values) => {
    let urls = []

    if (values.images) {
      dispatch(setAddBumpLoadingStatus(LoadingStatus.LOADING))
      for (let i = 0; i < values.images.length; i++) {
        const file = values.images[i].file
        const { url } = await uploadImage(file)
        urls.push(url)
      }
    }

    dispatch(fetchAddBump({ text: values.bumptext, images: urls }))
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

              <div className={css.field}>
                <Field name='images' component={MultipleImg} />
              </div>

              <div className={css.interface}>
                <div className={css.interface__left}></div>
                <div className={css.interface__right}>
                  <span className={css.interface__right__length}>
                    {`${values.bumptext ? values.bumptext.length : 0} / 160`}
                  </span>
                  <Button
                    disabled={isBumpLoading || !valid}
                    type='submit'
                    loading={isBumpLoading ? true : false}
                  >
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
