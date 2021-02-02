import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBumps } from "../store/bumps/actionCreators";
import { selectBumpsItems, selectIsBumpsLoading } from '../store/bumps/selectors';

function Home() {

  const dispatch = useDispatch()

  React.useEffect(
    () => {
      dispatch(fetchBumps())
    }, [dispatch])
  const bumps = useSelector(selectBumpsItems)
  const isLoading = useSelector(selectIsBumpsLoading)

  return (
    <div>
      {isLoading ?
        <div>LOADING</div>
        :
        bumps.map(el => {
          return (
            <div key={el._id}>
              <b>{`Имя: ${el.user.fullname}`}</b>
              <img src={el.user.avatarUrl} alt='avatar' />
              <br></br>
              {
                el.text
              }
              <br></br>
              <br></br>
              <br></br>
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;