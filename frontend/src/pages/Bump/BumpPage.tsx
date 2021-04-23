import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Bump from '../../components/Bump/Bump'

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
  console.log(bump)
  return (
    <>
      {isLoading && 'LOADING'}
      {!isLoading && bump && <Bump {...bump} />}
    </>
  )
}

export default BumpPage