import produce, { Draft } from 'immer'

import { NotificationType } from './types'
import { NotificationActions, NotificationActionsTypes } from './actions'

const initialState: NotificationType = {
  isShow: false,
  data: {
    type: 'neutral',
    message: '',
  }
}

const notificationReducer = produce(
  (draft: Draft<NotificationType>, action: NotificationActionsTypes) => {
    switch (action.type) {
      case NotificationActions.SET_NOTIFICATION:
        draft.isShow = true
        draft.data = action.payload
        break
      case NotificationActions.REMOVE_NOTIFICATION:
        draft.isShow = false
        break
      default:
        break
    }
  },
  initialState
)

export default notificationReducer
