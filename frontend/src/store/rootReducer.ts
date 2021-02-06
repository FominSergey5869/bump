import {combineReducers} from 'redux'
import bump from './bump/reducer'
import bumps from './bumps/reducer'
import topics from './topics/reducer'

const rootReducer = combineReducers ({
  bump,
  bumps,
  topics
})

export default rootReducer