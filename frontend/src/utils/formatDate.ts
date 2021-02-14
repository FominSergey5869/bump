import formatDistance from 'date-fns/formatDistance'
import enLang from 'date-fns/locale/en-US'

export const formatDate = (date: Date): string => {
  return formatDistance(date, new Date(), { locale: enLang })
}
