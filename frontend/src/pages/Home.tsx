import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBumps } from '../store/bumps/actions'

import { selectBumpsItems, selectIsBumpsLoading } from '../store/bumps/selectors'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBumps())
  }, [dispatch])
  const bumps = useSelector(selectBumpsItems)
  const isBumpsLoading = useSelector(selectIsBumpsLoading)

  return (
    <div>
      {isBumpsLoading ? (
        <div>BUMPS LOADING</div>
      ) : (
        bumps &&
        bumps.map((el) => {
          return (
            <div key={el._id}>
              <b>{`Имя: ${el.user.fullname}`}</b>
              <img src={el.user.avatarUrl} alt='avatar' />
              <br></br>
              {el.text}
              <br></br>
              <br></br>
              <br></br>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Home
