import axios from 'axios'
import { TopicType } from '../../store/topics/types'

export const TopicsAPI = {
  fetchTopics(): Promise<TopicType[]> {
    return axios.get('/topics').then(({ data }) => data)
  }
}