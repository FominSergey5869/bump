export type NotificationDataType = {
  type?: 'success' | 'warning' | 'neutral'
  message?: string
}

export type NotificationType = {
  isShow: boolean
  data: NotificationDataType
}
