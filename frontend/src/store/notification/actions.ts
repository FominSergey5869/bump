import { NotificationDataType } from "./types";

export enum NotificationActions {
  SET_NOTIFICATION = 'notification/SET_NOTIFICATION',
  REMOVE_NOTIFICATION = 'notification/REMOVE_NOTIFICATION'
}

export type SetNotificationType = {
  type: NotificationActions.SET_NOTIFICATION,
  payload: NotificationDataType
}

export const setNotification = (payload: NotificationDataType): SetNotificationType => ({
  type: NotificationActions.SET_NOTIFICATION,
  payload
})

export type RemoveNotificationType = {
  type: NotificationActions.REMOVE_NOTIFICATION,
}

export const removeNotification = (): RemoveNotificationType => ({
  type: NotificationActions.REMOVE_NOTIFICATION,
})


export type NotificationActionsTypes = SetNotificationType | RemoveNotificationType