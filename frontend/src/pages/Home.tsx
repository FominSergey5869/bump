import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../components/Button/Button'
import Modal from '../components/Modal/Modal'
import PageHead from '../components/PageHead/PageHead'

import { fetchBumps } from '../store/bumps/actions'

import {
  selectBumpsItems,
  selectIsBumpsLoading,
} from '../store/bumps/selectors'

function Home() {
  const dispatch = useDispatch()

  const [modal, setModal] = React.useState(false)
  useEffect(() => {
    dispatch(fetchBumps())
  }, [dispatch])
  const bumps = useSelector(selectBumpsItems)
  const isBumpsLoading = useSelector(selectIsBumpsLoading)

  return (
    <>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        modal window
      </Modal>
      <div>
        <PageHead title='Home' />
        <Button onClick={() => setModal(true)}>Send</Button>
        {isBumpsLoading ? (
          <div>BUMPS LOADING</div>
        ) : (
          bumps &&
          bumps.map((el) => {
            return (
              <div key={el._id}>
                <b>{`Имя: ${el.user.fullname}`}</b>
                <img src={el.user.avatarUrl} alt='avatar' />
                {el.text}
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

export default Home
