import { RootStateType } from '..'
import { NotificationType } from './types'

export const selectNotification = (state: RootStateType): NotificationType => state.notification
