import React from 'react';
import { useDispatch, useSelector } from "react-redux";


import { fetchBumps } from "../store/bumps/actions";
import { fetchTopics } from '../store/topics/actions';

import { selectBumpsItems, selectIsBumpsLoading } from '../store/bumps/selectors';
import { selectTopicsItems, selectIsTopicsLoading } from '../store/topics/selectors';


function Home() {

  const dispatch = useDispatch()

  React.useEffect(
    () => {
      dispatch(fetchBumps())
      dispatch(fetchTopics())
    }, [dispatch])
  const bumps = useSelector(selectBumpsItems)
  const topics = useSelector(selectTopicsItems)
  const isBumpsLoading = useSelector(selectIsBumpsLoading)
  const isTopicsLoading = useSelector(selectIsTopicsLoading)

  return (
    <div>
      {isBumpsLoading ?
        <div>BUMPS LOADING</div>
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

      {isTopicsLoading ?
        <div>TOPICS LOADING</div>
        :
        topics.map(el => {
          return (
            <div key={el.name}>
              <div>{el.name}: {el.count}</div>
            </div>
          )
        })
      }

    </div>
  );
}

export default Home;