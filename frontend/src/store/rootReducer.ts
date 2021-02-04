import {combineReducers} from 'redux'
import bumps from './bumps/reducer'
import topics from './topics/reducer'

const rootReducer = combineReducers ({
  bumps,
  topics
})

export default rootReducer