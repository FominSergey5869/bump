import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Bump from '../../components/Bump/Bump'
import Preloader from '../../components/Preloader/Preloader'

import { fetchBump } from '../../store/bump/actions'
import { selectBumpData, selectIsBumpLoading } from '../../store/bump/selectors'
import css from './Bump.module.scss'

type Params = {
  id: string
}

function BumpPage() {
  const { id } = useParams<Params>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBump(id))
  }, [dispatch, id])

  const isLoading = useSelector(selectIsBumpLoading)
  const bump = useSelector(selectBumpData)
  return (
    <>
      {isLoading &&  <Preloader />}
      {!isLoading && bump && <Bump {...bump} />}
    </>
  )
}

export default BumpPage
