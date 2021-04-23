import {combineReducers} from 'redux'
import bump from './bump/reducer'
import bumps from './bumps/reducer'
import topics from './topics/reducer'
import notification from './notification/reducer'

const rootReducer = combineReducers ({
  bump,
  bumps,
  topics,
  notification
})

export default rootReducer