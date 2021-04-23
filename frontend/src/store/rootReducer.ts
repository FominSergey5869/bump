import {combineReducers} from 'redux'
import user from './user/reducer'
import bump from './bump/reducer'
import bumps from './bumps/reducer'
import topics from './topics/reducer'
import notification from './notification/reducer'

const rootReducer = combineReducers ({
  user,
  bump,
  bumps,
  topics,
  notification
})

export default rootReducer