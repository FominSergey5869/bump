import React from 'react';
import { useDispatch, useSelector } from "react-redux";


import { fetchBumps } from "../store/bumps/actions";
import { fetchTopics } from '../store/topics/actions';

import { selectBumpsItems, selectIsBumpsLoading } from '../store/bumps/selectors';
import { selectTopicsItems, selectIsTopicsLoading } from '../store/topics/selectors';
import { fetchBump } from '../store/bump/actions';
import { selectBumpData, selectIsBumpLoading } from '../store/bump/selectors';


function Home() {

  const dispatch = useDispatch()

  React.useEffect(
    () => {
      dispatch(fetchBumps())
      dispatch(fetchTopics())
      dispatch(fetchBump('60183d66ee6f5960bd6b97ed'))
    }, [dispatch])
  const bump = useSelector(selectBumpData)
  const bumps = useSelector(selectBumpsItems)
  const topics = useSelector(selectTopicsItems)
  const isBumpLoading = useSelector(selectIsBumpLoading)
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
      <img src={bump?.user.avatarUrl} alt=''/>
      <div>{bump?.user.username}</div>
      <div>{bump?.text}</div>


    </div>
  );
}

export default Home;