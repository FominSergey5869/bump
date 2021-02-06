import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import { BumpsType } from './bumps/types';
import { TopicsType } from './topics/types';
import { BumpType } from './bump/types';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type RootStateType = {
  bump: BumpType,
  bumps: BumpsType,
  topics: TopicsType,
}

export default store