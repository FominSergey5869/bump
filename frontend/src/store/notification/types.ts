export type NotificationDataType = {
  type?: 'success' | 'warning' | 'neutral'
  message?: string
} | undefined

export type NotificationType = {
  isShow: boolean
  data: NotificationDataType
}
